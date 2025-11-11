# Claude Code Instructions for Lexora Website

## Project Context
You are building a website for **Lexora**, an AI-powered legal research assistant. Lexora provides multilingual, cross-jurisdictional search and analysis of administrative law across Montenegro, Serbia, and Croatia. This website is the primary channel for converting visitors (judges, lawyers, researchers, and citizens) into paying subscribers.

**Lexora is developed by Codeus** (the parent company), a Software Development agency based in Montenegro.

Read all files in context directory for detailed information about Lexora and this project, especially:
- `/context/lexora.md` - Complete Lexora product information
- `/context/localization.md` - Localization implementation details

## Target Audience
Unlike a typical B2B SaaS product, Lexora serves multiple distinct user segments:

1. **Judges** - Need quick access to similar cases across jurisdictions to inform their rulings
2. **Lawyers & Attorneys** - Need precedent analysis and success rate statistics to build cases
3. **Researchers & Law Professors** - Need comprehensive database access for comparative legal studies
4. **Citizens** - Need plain-language explanations of laws and precedents

Every decision should optimize for clarity, trustworthiness, and ease of access for these professional users.

## Product Focus
This is a **legal AI research tool**, not a general software development service. All content, messaging, and features should focus on:

- **Legal research** capabilities (not web/mobile development)
- **Administrative law** expertise (specific legal domain)
- **Cross-jurisdictional analysis** (Montenegro, Serbia, Croatia)
- **RAG technology** and AI accuracy (not general AI services)
- **Professional legal use cases** (not consumer tech)

## Key Differentiators
When working on content or features, emphasize:

1. **First in the Western Balkans** - Multilingual, cross-jurisdictional legal AI
2. **Complete coverage** - 1M+ administrative court decisions, 100% corpus coverage
3. **Superior performance** - Target >85% accuracy, <10% hallucination rate, <6s response time
4. **Unique features** - Statistical querying not available in competing products
5. **Regional expertise** - Deep understanding of Balkan legal systems

## Conversion Priorities

### Primary Conversions
1. **Free Trial Signup** - 14 days, 10 searches/day (no credit card)
2. **Professional Plan** - €99/month for unlimited searches
3. **Enterprise Contact** - For law firms, courts, institutions
4. **Demo Booking** - Personalized product demonstrations

### Secondary Conversions
- Email newsletter signup
- Blog content engagement
- Partner inquiries
- Academic collaborations

## Website Messaging Guidelines

### Do:
- Use precise, professional legal terminology
- Emphasize accuracy, reliability, and compliance
- Include specific performance metrics (when validated)
- Show real use cases from target user groups
- Highlight cross-jurisdictional capabilities
- Mention peer institutions and legal tech competition
- Include legal disclaimers where appropriate

### Don't:
- Oversimplify complex legal concepts
- Make unsubstantiated accuracy claims
- Use generic SaaS/tech marketing language
- Show B2C consumer product messaging
- Reference POS, retail, hospitality contexts (legacy from previous project)
- Ignore the importance of data confidentiality in legal research

## Legal and Compliance

### Required Disclaimers
- "Lexora is a research tool and does not constitute legal advice"
- "Results should be verified by qualified legal professionals"
- "No attorney-client relationship is created through use of Lexora"

### Data Protection
- Emphasize GDPR compliance
- Highlight query confidentiality
- Clarify anonymized analytics usage
- Stress secure data handling

## Technical Implementation Notes

### Localization
The website supports two locales:
- **English (en)** - For international market, global legal tech audience
- **Regional (me)** - For Western Balkans (Montenegro, Serbia, Bosnia, Croatia) in Serbian

Geo-detection happens at Cloudflare Workers edge. See `/context/localization.md` for details.

### Page Structure
Key pages for Lexora:
- **Home** - Value proposition, statistics, testimonials, CTA
- **Features** - Multilingual search, cross-jurisdictional analysis, statistical querying, summarization
- **Pricing** - Free Trial, Professional (€99/mo), Enterprise (custom)
- **For Judges / Lawyers / Researchers / Citizens** - User-segment specific landing pages
- **About** - Lexora mission, team, technology, partnerships
- **Contact** - Lead generation with user type segmentation
- **Demo** - Demo booking flow
- **Partners** - Institutional partnerships (courts, law schools)
- **Blog** - Legal AI insights, administrative law trends
- **Terms & Privacy** - Legal compliance pages

### NuxtUI
Documentation for NuxtUI used in the project can be found at:

https://ui.nuxt.com/llms.txt

Always refer to this documentation when you want to use or change a certain NuxtUI component. In this llms.txt documentation you can find links to the documentation for any component you need.

## Content Tone and Voice

### Professional but Accessible
- Use clear, precise language that respects legal expertise
- Avoid jargon when explaining to citizens
- Maintain formality appropriate for judicial and legal professional audience
- Balance technical accuracy with readability

### Trust-Building
- Use specific metrics and data points
- Reference credible institutions and partnerships
- Include testimonials from real legal professionals (when available)
- Show transparency about technology limitations

### Regional Sensitivity
- Acknowledge different legal systems in each jurisdiction
- Use appropriate terminology for each country (e.g., "Upravni sud" in local language)
- Respect cultural differences in legal processes
- Include content in both Latin and Cyrillic scripts where appropriate

## Design and UX Principles

### Visual Identity
- Professional, clean, modern aesthetic
- Legal-themed imagery (courts, documents, scales of justice - but avoid clichés)
- Tech-forward elements to convey AI innovation
- Blue/navy color scheme suggesting trust and authority
- Avoid: Generic stock photos of lawyers in suits

### User Experience
- Fast, efficient navigation (legal professionals are time-constrained)
- Clear hierarchy of information
- Prominent search functionality where appropriate
- Easy access to pricing and demo booking
- Mobile-responsive (many lawyers work on tablets/phones)

### Performance
- Fast load times critical for professional users
- Optimize for Cloudflare Workers edge deployment
- Lighthouse score targets:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 100

## SEO Optimization

### Primary Keywords
- "administrative law research"
- "legal AI assistant"
- "cross-jurisdictional legal search"
- "montenegro serbia croatia legal database"
- "upravno pravo" (administrative law in Serbian)
- "sudske odluke" (court decisions in Serbian)

### Long-tail Keywords
- "compare administrative court decisions montenegro serbia"
- "statistical analysis administrative law cases"
- "multilingual legal research western balkans"
- "RAG legal AI"

### Regional SEO
- Target Montenegro (.me domain), Serbia, Croatia, Bosnia
- Include local legal terminology
- Reference local legal institutions
- Create content for both Latin and Cyrillic search queries

## Development Workflow

### When Adding Features
1. Consider impact on all four user segments
2. Ensure GDPR compliance
3. Test with both English and Serbian locales
4. Verify mobile responsiveness
5. Check loading performance
6. Update corresponding documentation in `/context/`

### When Writing Content
1. Consult `/context/lexora.md` for accurate product information
2. Use proper legal terminology
3. Include appropriate disclaimers
4. Verify claims against funding application data
5. Maintain consistent voice across locales

## Remember
When in doubt, always choose the option that makes it easier for legal professionals to understand Lexora's value, trust its accuracy, and start using it. Remove friction in the signup process, build credibility through specificity, and guide visitors toward conversion. The website's success is measured by how many legal professionals become paying subscribers, not by how impressive the technology appears.

**Lexora makes legal research faster, more accurate, and more accessible across the Western Balkans. Everything on this website should reinforce that message.**
