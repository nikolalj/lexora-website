<template>
  <div class="px-6 py-12 bg-white min-h-screen">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

    <div class="prose prose-lg max-w-none">
      <p class="text-gray-600 mb-8">
        <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
      </p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
        <p class="text-gray-700 mb-4">
          By accessing and using Lexora ("Service"), an AI-powered legal research platform developed by Codeus d.o.o., you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
        </p>
        <p class="text-gray-700 mb-4">
          <strong>Important Notice:</strong> Lexora is a research tool and does not constitute legal advice. Results should be verified by qualified legal professionals. No attorney-client relationship is created through use of Lexora.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
        <p class="text-gray-700 mb-4">
          Lexora provides AI-powered legal research services, specifically:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Multilingual search across administrative law decisions and regulations in Montenegro, Serbia, and Croatia</li>
          <li>Cross-jurisdictional comparative analysis of court decisions</li>
          <li>Statistical querying and analytics of judicial outcomes</li>
          <li>AI-powered case summarization with citation traceability</li>
          <li>Natural language query processing in English, Montenegrin, Serbian, and Croatian</li>
        </ul>
        <p class="text-gray-700 mb-4">
          The Service is intended for use by legal professionals (judges, lawyers, attorneys), researchers, law professors, and citizens seeking legal information. All information provided is for research and informational purposes only.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
        <p class="text-gray-700 mb-4">
          To use certain features of our Service, you must create an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>You must be at least 18 years old to create an account</li>
          <li>You must provide accurate professional and contact information</li>
          <li>You are responsible for keeping your account information up to date</li>
          <li>You must not share your account credentials with unauthorized persons</li>
          <li>For Enterprise accounts, authorized administrators may manage multiple user seats</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
        <p class="text-gray-700 mb-4">
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Use the Service for any illegal or unauthorized purpose</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Use the Service to provide legal advice to third parties if you are not a qualified legal professional</li>
          <li>Interfere with or disrupt the Service or servers</li>
          <li>Attempt to gain unauthorized access to any part of the Service or underlying database</li>
          <li>Use automated systems (bots, scrapers) to access the Service without written permission</li>
          <li>Upload or transmit malicious code or content</li>
          <li>Impersonate any person or entity</li>
          <li>Redistribute, resell, or sublicense access to the Service without authorization</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Subscription Plans and Billing</h2>
        <p class="text-gray-700 mb-4">
          Lexora offers multiple subscription tiers:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Free Trial:</strong> 14-day trial with limited daily searches (10 searches/day)</li>
          <li><strong>Professional:</strong> Monthly subscription for individual users with unlimited searches</li>
          <li><strong>Enterprise:</strong> Custom pricing for institutions with multiple users and API access</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Billing Terms:</strong>
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Subscription fees are billed in advance on a monthly or annual basis</li>
          <li>Free trials do not require payment information</li>
          <li>Payment is due upon subscription activation</li>
          <li>All fees are non-refundable except as required by law or as specified in Enterprise agreements</li>
          <li>Late payments may result in service suspension</li>
          <li>We reserve the right to modify our pricing with 30 days' advance notice</li>
          <li>Cancellation takes effect at the end of the current billing period</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Data, Privacy, and Confidentiality</h2>
        <p class="text-gray-700 mb-4">
          We take the privacy and security of your data, especially legal research queries, seriously. Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
        </p>
        <p class="text-gray-700 mb-4">
          <strong>Legal Research Query Confidentiality:</strong>
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Your legal research queries are confidential and not shared with third parties</li>
          <li>Query data may be used in anonymized, aggregated form for model improvement and analytics</li>
          <li>We implement industry-standard encryption for data transmission and storage</li>
          <li>You retain ownership of your queries and any documents you upload</li>
          <li>We comply with GDPR and applicable data protection regulations</li>
          <li>Data backups are performed regularly for service continuity</li>
          <li>Enterprise customers may opt for on-premise deployment for enhanced data control</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Legal Corpus Data:</strong>
        </p>
        <p class="text-gray-700 mb-4">
          The legal documents (court decisions, regulations) in our database are publicly available information sourced from official government and judicial portals. We do not claim ownership of this public legal information.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Limitations and Disclaimers</h2>
        <p class="text-gray-700 mb-4">
          <strong>Not Legal Advice:</strong> Lexora is a research tool only. The Service does not provide legal advice, opinions, or recommendations. You should not rely on information from the Service as a substitute for professional legal advice from a qualified attorney.
        </p>
        <p class="text-gray-700 mb-4">
          <strong>No Attorney-Client Relationship:</strong> Use of the Service does not create an attorney-client relationship between you and Codeus, Lexora, or any legal professional.
        </p>
        <p class="text-gray-700 mb-4">
          <strong>Accuracy and Performance:</strong>
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>While we strive for high accuracy (target >85%), AI systems may produce errors or "hallucinations"</li>
          <li>All results should be independently verified by qualified legal professionals</li>
          <li>Performance metrics (response time, accuracy) are targets and may vary</li>
          <li>Database coverage, while comprehensive, may have gaps or delays in updates</li>
          <li>Statistical analyses are based on available data and may not reflect all relevant factors</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Jurisdictional Limitations:</strong> The Service currently covers administrative law in Montenegro, Serbia, and Croatia only. It does not cover other legal domains or jurisdictions unless explicitly stated.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
        <p class="text-gray-700 mb-4">
          The Service, including its software, algorithms, user interface, and proprietary features, are owned by Codeus and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>
        <p class="text-gray-700 mb-4">
          You are granted a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms. This license does not grant you any ownership rights to the underlying technology or legal database.
        </p>
        <p class="text-gray-700 mb-4">
          Public legal documents accessed through the Service remain in the public domain and are not subject to our intellectual property claims.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Service Availability</h2>
        <p class="text-gray-700 mb-4">
          While we strive to maintain high service availability (target uptime >99%), we do not guarantee uninterrupted access to the Service. We may perform scheduled maintenance that temporarily affects service availability, and we will provide reasonable advance notice when possible.
        </p>
        <p class="text-gray-700 mb-4">
          Enterprise customers may have specific Service Level Agreements (SLAs) defined in their contracts.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
        <p class="text-gray-700 mb-4">
          IN NO EVENT SHALL CODEUS OR LEXORA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Your use of or inability to use the Service</li>
          <li>Any inaccuracies, errors, or omissions in the legal information provided</li>
          <li>Any legal decisions made based on information from the Service</li>
          <li>Unauthorized access to or alteration of your data</li>
          <li>Any other matter relating to the Service</li>
        </ul>
        <p class="text-gray-700 mb-4">
          Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">11. Indemnification</h2>
        <p class="text-gray-700 mb-4">
          You agree to indemnify, defend, and hold harmless Codeus, Lexora, and their officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of another party</li>
          <li>Legal advice or services you provide to others based on information from the Service</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
        <p class="text-gray-700 mb-4">
          We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms, is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
        </p>
        <p class="text-gray-700 mb-4">
          You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing period.
        </p>
        <p class="text-gray-700 mb-4">
          Upon termination, your right to use the Service will immediately cease. We may delete your account data in accordance with our data retention policies.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
        <p class="text-gray-700 mb-4">
          We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
        </p>
        <p class="text-gray-700 mb-4">
          For material changes affecting Enterprise customers, we will provide at least 30 days' advance notice.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law and Jurisdiction</h2>
        <p class="text-gray-700 mb-4">
          These Terms shall be governed by and construed in accordance with the laws of Montenegro, without regard to its conflict of law provisions.
        </p>
        <p class="text-gray-700 mb-4">
          Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of Montenegro.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
        <p class="text-gray-700 mb-4">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700">
            <strong>Email:</strong> legal@{{ t('data.company.domain') }}<br>
            <strong>Address:</strong> {{ t('data.company.address.street') }}, {{ t('data.company.address.city') }}, {{ t('data.company.address.country') }}<br>
            <strong>Phone:</strong> {{ t('data.company.contact.phone') }}<br>
            <strong>Company:</strong> Codeus d.o.o. ({{ t('data.company.tradeName') }})
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.terms.title'),
  description: t('seo.terms.description')
})
</script>
