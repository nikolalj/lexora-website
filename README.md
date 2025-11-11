# Lexora - AI Legal Assistant Website

Lexora is an AI-powered legal research assistant that provides multilingual, cross-jurisdictional search and analysis of administrative law across Montenegro, Serbia, and Croatia.

## About Lexora

**Lexora** enables legal professionals, judges, researchers, and citizens to search through 1M+ administrative court decisions and regulations using natural language queries in multiple languages (English, Montenegrin, Serbian, Croatian).

### Key Features

- **Multilingual Search**: Query in any of 4 languages
- **Cross-Jurisdictional Analysis**: Compare cases across Montenegro, Serbia, and Croatia
- **Statistical Querying**: Analyze success rates, trends, and patterns
- **AI-Powered Summarization**: Multi-level case summaries with citation traceability
- **High Performance**: Target <6 second response time, >85% accuracy, <10% hallucination rate

### Technology

Built using state-of-the-art RAG (Retrieval-Augmented Generation) technology, Lexora is developed by **Codeus**, a software development agency with 8+ years of experience.

## Technical Stack

This website is built with:

- **Framework**: [Nuxt 3](https://nuxt.com)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com)
- **Deployment**: Cloudflare Pages/Workers
- **Localization**: i18n with edge-based geo-detection
- **Languages**: TypeScript, Vue 3

## Setup

Install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## Localization

The website supports two locales:

- **English (en)** - Default, for international audience (USD)
- **Regional (me)** - For Western Balkans: Montenegro, Serbia, Bosnia, Croatia (EUR, Serbian language)

Geo-detection happens at the Cloudflare Workers edge for optimal performance (~1ms latency).

See [context/localization.md](./context/localization.md) for detailed documentation.

## Project Structure

```
├── app/
│   ├── components/     # Vue components
│   ├── locales/        # i18n translation files (en.json, me.json)
│   ├── pages/          # Nuxt pages/routes
│   └── config/         # Configuration files
├── context/            # Project documentation
│   ├── lexora.md      # Lexora product information
│   └── localization.md # Localization documentation
├── server/             # Server middleware and plugins
└── nuxt.config.ts      # Nuxt configuration
```

## Key Documentation

- **[context/lexora.md](./context/lexora.md)** - Comprehensive Lexora product information
- **[context/localization.md](./context/localization.md)** - Localization system documentation

## About Codeus

Lexora is developed by **Codeus d.o.o.**, a Montenegro-based software development agency founded in 2016.

- **Location**: Moskovska 153, 81000 Podgorica, Montenegro
- **Website**: https://lexora.me
- **Team**: 30+ employees
- **Experience**: 8+ years building innovative solutions

## Contact

- **Email**: contact@lexora.me
- **Phone**: +382 67 607 670
- **Address**: Moskovska 153, 81000 Podgorica, Montenegro

## License

Copyright © 2016-2025 Codeus d.o.o. All rights reserved.

---

For more information, visit [lexora.me](https://lexora.me) or check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).
