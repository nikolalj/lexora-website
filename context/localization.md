# Lexora Website Localization Guide

## Overview

The Lexora website automatically detects visitors' location and shows them region-specific content with local prices, currency, and language. This is achieved through a Cloudflare Workers edge wrapper that handles locale detection and redirects before requests reach the Nuxt application, ensuring optimal performance and minimal latency.

The system supports two locales:
- **International (English)**: English language, USD currency - Default for worldwide visitors
- **MNE and Region**: Serbian language, EUR currency - For Balkan region (Montenegro, Serbia, Bosnia, Croatia)

## Architecture

### Current Implementation (Edge Wrapper + Cloudflare Workers)

The localization system uses a two-layer architecture:

1. **Edge Wrapper** (`server-wrapper.ts`): Runs on Cloudflare Workers at the edge
   - Handles all locale detection and redirect logic
   - Processes requests before they reach Nuxt
   - Sets internal headers for downstream consumption
   - Zero latency overhead for geolocation

2. **Nuxt Application**: Receives pre-processed requests with locale context
   - Server middleware reads locale headers
   - Plugins inject locale into payload
   - Components display localized content

The system leverages Cloudflare's global edge network for instant country detection via the `request.cf.country` property.

### Core Principles

1. **Edge-First Processing** - Detection and redirects happen at Cloudflare edge before Nuxt
2. **Silent Redirects** - No "we redirected you" notifications
3. **Respect User Choice** - Manual selections are permanent via `explicit` flag
4. **Single Source of Truth** - Edge wrapper handles all redirect logic

## How It Works

```
Edge Wrapper (server-wrapper.ts on Cloudflare Workers)
├─ Detects country from request.cf.country
├─ Maps country to locale via COUNTRY_TO_LOCALE_MAP
├─ Checks cookie for manual selection (explicit flag)
├─ Determines redirect need
├─ Redirects if needed (302) with cookie
└─ Sets internal headers:
    ├─ X-Detected-Locale (geolocation result)
    └─ X-Current-Locale (URL-based locale)
    ↓
Server Middleware (02.locale-context.ts)
├─ Reads X-Detected-Locale header
├─ Reads X-Current-Locale header
└─ Sets event.context for downstream use
    ↓
Server Plugin (locale-payload.server.ts)
└─ Copies detectedLocale to nuxtApp.payload
    ↓
Server Plugin (site-config.ts)
└─ Uses X-Current-Locale to load locale-specific company data
    ↓
Application (Vue)
├─ Reads from nuxtApp.payload.detectedLocale
├─ Shows locale suggestion banner
└─ Displays localized content
```

## Supported Locales

| Locale | URL | Currency | Language | Flag Icon | Name |
|--------|-----|----------|----------|-----------|------|
| International (default) 🌍 | lexora.me | USD ($) | English | i-lucide:globe | International |
| MNE and Region 🇲🇪 | lexora.me/me | EUR (€) | Serbian | i-circle-flags:me | MNE and region |

### Country Mapping

```javascript
// Balkan region → Montenegro locale
'ME' → 'me'  // Montenegro
'RS' → 'me'  // Serbia
'BA' → 'me'  // Bosnia and Herzegovina
'HR' → 'me'  // Croatia

// All other countries → English locale (default)
'US', 'GB', 'DE', 'FR', ... → 'en'  // Rest of the world
```

## URL Structure

Using `prefix_except_default` strategy:

- **International** (default): `lexora.me`, `lexora.me/pricing`
- **MNE and Region**: `lexora.me/me`, `lexora.me/me/pricing`

### Automatic Locale Redirect

**All content pages** are automatically redirected based on visitor location. Visitors from Balkan countries (ME, RS, BA, HR) are redirected to `/me` prefix, all others stay on default (no prefix).

The system uses **exclusion patterns** rather than an inclusion list - everything is redirected EXCEPT:

- `/api/*` - API routes
- `/_*` - Build assets and internal routes
- Static files with extensions (`.css`, `.js`, `.xml`, `.txt`, `.json`, images, fonts, etc.)
- Paths that already have a locale prefix (`/me/*`)
- Non-GET/HEAD requests (POST, PUT, DELETE, etc.)

## Cookie System

```json
{
  "locale": "me",        // Current locale: 'en' or 'me'
  "explicit": false      // true = manual selection, false = auto-detected
}
```

- **Name**: `user-locale`
- **Duration**: 1 year
- **Size**: ~30 bytes

### Cookie Behavior

- `explicit: false` - Always uses fresh detection
- `explicit: true` - Respects manual choice regardless of location

## Implementation Files

### Edge Wrapper (Primary Logic)
**`server-wrapper.ts`** - Main locale detection and redirect handler
- Runs on Cloudflare Workers at the edge
- Detects country via `request.cf.country`
- Maps country to locale using `COUNTRY_TO_LOCALE_MAP`
- Checks cookie for explicit choice
- Redirects to locale URLs (302 redirect) with cookie
- Sets internal headers for Nuxt:
  - `X-Detected-Locale`: Geolocation result
  - `X-Current-Locale`: Current URL locale
- Bypasses redirects for:
  - Non-GET/HEAD requests
  - API routes (`/api/*`)
  - Static files (`.xml`, `.txt`, `.json`, etc.)
  - Paths with existing locale prefix

### Server Middleware
**`server/middleware/02.locale-context.ts`** - Context setter
- Reads headers set by edge wrapper
- Sets `event.context.detectedLocale`
- Sets `event.context.currentLocale`
- Provides fallback to DEFAULT_LOCALE

### Plugins

**`app/plugins/locale-payload.server.ts`** - Payload injection
```typescript
if (event?.context?.detectedLocale) {
  nuxtApp.payload.detectedLocale = event.context.detectedLocale
}
```

**`server/plugins/site-config.ts`** - Dynamic locale data
```typescript
const currentLocaleHeader = event.node.req.headers['x-current-locale']
const locale = (currentLocaleHeader || DEFAULT_LOCALE.code)
// Loads locale-specific company data for SEO/schema
```

### Configuration
**`app/config/locale.config.mjs`** - Central configuration (ES module for edge compatibility)
- `DEFAULT_LOCALE`: { code: 'en', ... }
- `VALID_LOCALES`: ['en', 'me']
- `LOCALE_STRATEGY`: 'prefix_except_default'
- `COUNTRY_TO_LOCALE_MAP`: Country to locale mappings (Balkan countries → 'me', all others → 'en')
- Shared between edge wrapper and Nuxt application

### Types
**`app/types/locale.d.ts`** - TypeScript definitions
- `ValidLocale`: 'en' | 'me'
- `LocaleCookie`: { locale, explicit }
- `LocaleConfig`: Extended locale object

### Components

#### CountrySelector.vue
Located in header, provides manual country switching:

**Features:**
- Flag icon button showing current locale
- Pulsing dot indicator when detected ≠ current
- Dropdown with all locales
- "Recommended" badge for detected locale
- Checkmark for current selection
- Sets `explicit: true` on selection

**Behavior:**
- Reads `detectedLocale` from `nuxtApp.payload`
- Sorts recommended locale to top
- Updates cookie and navigates on selection
- Shows globe icon as fallback

#### LocaleSuggestionBanner.vue
Shows when detected locale doesn't match current:

**Display Logic:**
```javascript
shouldShow =
  suggestedLocale exists &&
  !cookie.explicit &&
  !recently dismissed
```

**Features:**
- Slide-in animation from top
- Three buttons: X (dismiss), Stay Here, Switch
- Auto-hides on scroll (>100px)
- Session storage dismissal (4 hours)

**Actions:**
- **X button**: Temporary dismissal (session)
- **Stay Here**: Sets `explicit: true` for current
- **Switch**: Sets `explicit: true` for suggested

## User Journeys

### New Visitor from Montenegro

```
1. Visits lexora.me
2. CF detects country: ME
3. Redirects to lexora.me/me
4. Cookie: {locale: "me", explicit: false}
5. Sees EUR prices, Serbian language, flag shows 🇲🇪
```

### New Visitor from USA

```
1. Visits lexora.me
2. CF detects country: US
3. No redirect (US → en, which is default)
4. Cookie: {locale: "en", explicit: false}
5. Sees USD prices, English language, globe icon 🌍
```

### Manual Locale Switch

```
1. Clicks locale selector in header
2. Sees dropdown with checkmark on current
3. Chooses "MNE and region"
4. Cookie: {locale: "me", explicit: true}
5. Redirected to lexora.me/me
6. Always sees MNE regional version
7. No more suggestions
```

### Traveling User (Non-Explicit)

```
1. Serbian user visits from United States
2. Fresh detection: US → en
3. No redirect (en is default)
4. Flag shows 🌍, with pulsing dot (detected 'en' but user is from region)
5. Returns to Serbia → redirects to lexora.me/me
```

### Cross-Locale Browsing

```
1. US user directly visits lexora.me/me/pricing
2. Detection runs, finds US → en
3. Flag shows 🇲🇪 with pulsing dot
4. Banner appears after page load
5. Can switch (explicit), stay (explicit), or dismiss (4h)
```

### Banner Dismissal Logic

```
Dismiss (X) clicked:
├─ Saves to sessionStorage:
│   - timestamp
│   - current locale
│   - suggested locale
├─ Hidden for 4 hours
└─ Only for this exact suggestion

Stay/Switch clicked:
├─ Sets explicit: true
├─ Updates locale
└─ Never shows banner again
```

## Performance

| Operation | Time | Method |
|-----------|------|--------|
| Country detection | 0ms | Edge function with cf-ipcountry |
| Locale mapping | <1ms | In-memory map |
| Cookie parse | <1ms | Edge function |
| Redirect decision | <1ms | Edge logic |
| Total overhead | ~1ms | All at edge |

## Edge Wrapper Algorithm

### Simplified Flow
```
START (server-wrapper.ts)
├─ Detect country from request.cf.country
├─ Map to locale or use DEFAULT_LOCALE
│
├─ Check if should skip redirect:
│   ├─ Non-GET/HEAD requests → skip
│   ├─ shouldSkipPath() checks:
│   │   ├─ /api/* → skip
│   │   ├─ /_* → skip
│   │   ├─ Static files (.xml, .txt, .json) → skip
│   │   └─ Files with extensions → skip
│   └─ Has locale prefix (/me/, /rs/, etc) → skip
│
├─ If not skipping redirect:
│   ├─ Parse cookie (only when needed)
│   ├─ Determine target locale:
│   │   ├─ If cookie.explicit && valid → use cookie.locale
│   │   └─ Else → use detected locale
│   │
│   └─ If target != DEFAULT_LOCALE:
│       ├─ Build redirect URL with locale prefix
│       ├─ Preserve query parameters
│       ├─ Set/update cookie if needed
│       └─ Return 302 redirect
│
└─ No redirect needed:
    ├─ Set X-Detected-Locale header
    ├─ Set X-Current-Locale header
    └─ Pass modified request to Nuxt
```

### Detailed Redirect Logic
```
                    ┌─────────────┐
                    │ User visits │
                    │ lexora.me/* │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   Detect    │  ← Via request.cf.country
                    │   country   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ Read cookie │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │Determine    │
                    │target locale│
                    └──────┬──────┘
                           │
                ┌──────────┴──────────┐
                │                     │
        cookie?.│                     │ !cookie?.explicit
        explicit│                     │ or no cookie
                │                     │
         ┌──────▼──────┐       ┌──────▼──────┐
         │Use cookie   │       │Use detected │
         │locale       │       │locale       │
         └──────┬──────┘       └──────┬──────┘
                │                     │
                └──────┬──────────────┘
                       │
                ┌──────▼───────┐
                │Target locale │
                │= DEFAULT?    │
                │(en)          │
                └──────┬───────┘
                       │
        ┌──────────────┼──────────────┐
        │                             │
     Yes│                          No │
        │                             │
 ┌──────▼──────┐              ┌──────▼──────┐
 │NO REDIRECT  │              │REDIRECT to  │
 │Stay on      │              │/locale/path │
 │lexora.me    │              └───────┬─────┘
 └──────┬──────┘                      │
        │                             │
        ├─────────────┬───────────────┘
        │             │
        │      ┌──────▼──────┐
        │      │Update cookie│
        │      │if needed    │
        │      └──────┬──────┘
        │             │
        └─────────────┤
                      │
               ┌──────▼──────┐
               │Set header:  │
               │Set headers: │
               │X-Detected-  │     ← Geolocation result
               │X-Current-   │     ← URL-based locale
               └──────┬──────┘
                      │
               ┌──────▼──────┐
               │   Return    │
               │   response  │
               └─────────────┘
```

**Key Implementation Details**:
1. Detection happens at edge via `request.cf.country`
2. Cookie with `explicit: true` overrides geolocation
3. DEFAULT_LOCALE (en) uses root path without prefix
4. Balkan countries (ME, RS, BA, HR) are redirected to `/me` prefix
5. All other countries stay on default (no redirect)
6. Internal headers (X-Detected-Locale, X-Current-Locale) pass context to Nuxt
7. Headers are internal only - not exposed in client responses
8. Cookie parsing only happens when redirect logic needs it (performance)

## Deployment

### Current: Cloudflare Workers + Pages

The application uses a two-tier deployment:

1. **Edge Wrapper** (`server-wrapper.ts`):
   - Deployed as Cloudflare Worker via `wrangler.jsonc`
   - Handles all requests at the edge
   - Access to `request.cf` object for geolocation
   - Minimal latency overhead (~1ms)

2. **Nuxt Application**:
   - Built with `nitro` preset: `cloudflare-module` (or `cloudflare_module`)
   - Deployed to Cloudflare Pages/Workers
   - Receives pre-processed requests from edge wrapper
   - Edge wrapper imports Nuxt server entry: `.output/server/index.mjs`

### Key Requirements

- **Cloudflare-specific**: Relies on `request.cf.country` for geolocation
- **Edge wrapper**: Must intercept requests before Nuxt
- **Cookie access**: Platform must support reading/writing cookies
- **Header passing**: Internal headers must flow from edge to Nuxt

## Testing

```bash
# Test geolocation redirect from Balkan region (e.g., Serbia)
curl -I https://lexora.me
# Shows: location: https://lexora.me/me

# Test with explicit cookie preference for regional version
curl -I -H 'Cookie: user-locale={"locale":"me","explicit":true}' https://lexora.me
# Shows: location: https://lexora.me/me

# Test from non-Balkan country (no redirect expected)
curl -I https://lexora.me
# Shows: HTTP/2 200 (stays on default en)

# Test that locale paths don't redirect
curl -I https://lexora.me/me/
# Shows: HTTP/2 200

# Test API bypass
curl -I https://lexora.me/api/ping
# Shows: HTTP/2 404 (no redirect)

# Test static file bypass
curl -I https://lexora.me/robots.txt
# Shows: HTTP/2 200 (no redirect)

# Local testing with country simulation
curl -I http://localhost:8787/  # Uses wrangler --cf country=RS (Serbia)
# Should redirect to /me

# Note: Internal headers (X-Detected-Locale, X-Current-Locale)
# are NOT visible in external responses - they're internal only
```

## Translation Files

Located in `app/locales/`:
- `en.json` - English (International)
- `me.json` - Serbian (MNE and region)

All translation files are synchronized with identical structure containing:
- `ui`: UI strings (buttons, labels, navigation)
- `seo`: SEO meta tags and descriptions
- `pages`: Page-specific content
- `data.company`: Company information for Schema.org (Codeus details - the company behind Lexora)
- `forms`: Form fields and validation messages
- `errors`: Error messages

## Troubleshooting

### Detection Not Working

**Symptom**: Balkan users see English version instead of regional
**Check**: Edge wrapper logs for `request.cf.country`
**Fix**: Verify Cloudflare proxy is enabled and domain is orange-clouded

### Wrong Country Detected

**Cause**: VPN/proxy shows different location
**Solution**: User can manually switch via selector (permanent)

### Banner Not Showing

**Check**:
1. Cookie for `explicit: true`
2. SessionStorage for dismissal
3. Detected locale vs current

**Solution**: Clear cookies/storage or wait 4 hours

### Pulsing Dot Not Showing

**Check**: `nuxtApp.payload.detectedLocale`
**Cause**: Detection matches current locale
**Expected**: Working correctly

### Country Selector Not Working

**Check**: Browser console for errors
**Common**: Cookie not setting properly
**Fix**: Check cookie domain/path settings

## Best Practices

### Do's ✅
- Always detect locale at edge wrapper
- Respect explicit user choices permanently
- Use silent redirects
- Keep edge logic simple and fast
- Pass locale context via internal headers
- Test with VPNs from different countries
- Parse cookies only when needed (performance)
- Validate cookie locale values before using them
- Use `.mjs` extension for config files shared with edge

### Don'ts ❌
- Don't duplicate redirect logic in Nuxt
- Don't show redirect notifications
- Don't ignore explicit choices
- Don't redirect API or static files
- Don't expose internal headers to clients
- Don't forget to validate cookie locales
- Don't hardcode locale-specific values outside config files

## Configuration Reference

### nuxt.config.ts
```typescript
import { DEFAULT_LOCALE, LOCALE_STRATEGY, LOCALES } from './app/config/locale.config.mjs'

export default defineNuxtConfig({
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    defaultLocale: DEFAULT_LOCALE.code,
    langDir: '../app/locales',
    detectBrowserLanguage: false,  // We use IP detection at edge
    skipSettingLocaleOnNavigate: false,
    customRoutes: 'config',
    trailingSlash: false,
    strategy: LOCALE_STRATEGY,
    locales: LOCALES,  // Imported from shared config
    vueI18n: './i18n.config.ts'
  }
})
```

**Note**: Configuration is imported from `app/config/locale.config.mjs` to ensure consistency between edge wrapper and Nuxt application.

## Summary

The localization system provides:

1. **Edge-first** detection via Cloudflare Workers (~1ms overhead)
2. **Silent** redirects without notifications
3. **Manual** control via country selector with permanent preference
4. **Smart banner** with session-based dismissal (4-hour memory)
5. **Visual indicators** (pulsing dot for mismatch)
6. **Cloudflare-optimized** architecture using `request.cf`
7. **Clean separation** - edge handles redirects, Nuxt handles content
8. **Type-safe** implementation with TypeScript
9. **Performance optimized** - cookie parsing only when needed
10. **Internal headers** for secure context passing
11. **SEO integration** - locale-specific company data for Schema.org
12. **Synchronized translations** - all locales maintain identical structure

### Platform Requirements

**Critical Dependencies**:
- Cloudflare Workers (for edge wrapper)
- `request.cf.country` property (Cloudflare-specific geolocation)
- Cloudflare Pages or Workers deployment
- D1 database for Nuxt Content (optional, for blog)

**Non-portable Features**:
- Edge wrapper relies on Cloudflare's request object
- Geolocation via `request.cf.country` (not available on other platforms)
- Deployment configuration in `wrangler.jsonc`

Result: Users see content for their location automatically with ~1ms latency, have full control to switch if desired, and experience optimal performance through edge-first architecture. System is production-ready but tightly coupled to Cloudflare infrastructure.

## Lexora-Specific Implementation

### Locale Strategy Summary

**Two-Locale System**:
1. **en (default)**: English, USD, worldwide audience
   - Locale code: `en`
   - URL: `lexora.me`
   - No redirect needed for most countries
   - Serves as the international version
   - Primary for global legal tech market and international researchers

2. **me (MNE and Region)**: Serbian, EUR, Balkan region
   - Locale code: `me`
   - URL: `lexora.me/me`
   - Automatically shown to visitors from: Montenegro, Serbia, Bosnia, Croatia
   - Optimized for regional market with local currency and language
   - Primary for local legal professionals, judges, and citizens in the Western Balkans
