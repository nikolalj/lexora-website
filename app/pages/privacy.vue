<template>
  <div class="px-6 py-12 bg-white min-h-screen">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

    <div class="prose prose-lg max-w-none">
      <p class="text-gray-600 mb-8">
        <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
      </p>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
        <p class="text-gray-700 mb-4">
          Codeus d.o.o. ("we," "our," or "us"), the developer of Lexora, is committed to protecting your privacy and the confidentiality of your legal research activities. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Lexora AI-powered legal research platform ("Service").
        </p>
        <p class="text-gray-700 mb-4">
          We understand the sensitive nature of legal research and take special care to protect the confidentiality of your queries, search patterns, and usage data. This policy complies with the General Data Protection Regulation (GDPR) and applicable data protection laws in Montenegro, Serbia, and Croatia.
        </p>
        <p class="text-gray-700 mb-4">
          By using our Service, you consent to the data practices described in this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our Service.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2.1 Account Information</h3>
        <p class="text-gray-700 mb-4">When you create an account, we collect:</p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Name and professional title (e.g., Judge, Attorney, Researcher)</li>
          <li>Email address</li>
          <li>Organization/institution name (for Enterprise accounts)</li>
          <li>Professional credentials and bar association membership (optional)</li>
          <li>Country and jurisdiction of practice</li>
          <li>Password (encrypted and never stored in plain text)</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2.2 Legal Research Query Data</h3>
        <p class="text-gray-700 mb-4">
          <strong>This is the most sensitive category of data we handle.</strong> When you use Lexora, we collect:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Search queries and legal questions you submit</li>
          <li>Filters and parameters you apply (jurisdiction, date range, case type)</li>
          <li>Documents you view, save, or export</li>
          <li>Case summaries and analyses you generate</li>
          <li>Statistical queries you run</li>
          <li>Comparative analyses you perform</li>
          <li>Notes or annotations you add (if feature is available)</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Confidentiality Commitment:</strong> Your legal research queries are treated as confidential professional information. We do not share individual query data with third parties, law enforcement, or other users. See Section 4 for detailed information on how we protect this data.
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2.3 Payment and Billing Information</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Billing name and address</li>
          <li>Payment method information (processed by secure third-party payment processors)</li>
          <li>Transaction history</li>
          <li>VAT/Tax identification numbers (when applicable)</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Note:</strong> We do not store complete credit card numbers. Payment information is processed securely by our payment partners (Stripe/PayPal).
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2.4 Usage and Technical Data</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>IP address and geographic location (country/city level)</li>
          <li>Device information (browser type, operating system, device ID)</li>
          <li>Session duration and feature usage patterns</li>
          <li>Performance data (query response times, error logs)</li>
          <li>Referral source (how you found Lexora)</li>
          <li>Cookies and similar tracking technologies (see Section 8)</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">2.5 Communications</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Support requests and correspondence</li>
          <li>Feedback and feature requests</li>
          <li>Demo booking information</li>
          <li>Marketing communication preferences</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
        <p class="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">3.1 Providing the Service</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Processing your legal research queries and delivering results</li>
          <li>Generating case summaries and comparative analyses</li>
          <li>Maintaining your search history for your reference</li>
          <li>Enabling document export and saving features</li>
          <li>Providing customer support and technical assistance</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">3.2 Service Improvement and AI Model Training</h3>
        <p class="text-gray-700 mb-4">
          We use query data in <strong>anonymized, aggregated form only</strong> to:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Improve search accuracy and relevance</li>
          <li>Train and fine-tune our RAG models</li>
          <li>Identify common legal research patterns</li>
          <li>Detect and fix errors or "hallucinations" in AI responses</li>
          <li>Develop new features based on usage patterns</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Anonymization Process:</strong> Before using query data for model training, we remove all personally identifiable information including account IDs, names, specific case details that could identify active litigation, and any metadata that could trace queries back to individual users.
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">3.3 Business Operations</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Processing payments and managing subscriptions</li>
          <li>Sending transactional emails (receipts, account notifications)</li>
          <li>Detecting and preventing fraud or security threats</li>
          <li>Complying with legal obligations and court orders</li>
          <li>Conducting business analytics and reporting</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">3.4 Marketing Communications (Optional)</h3>
        <p class="text-gray-700 mb-4">
          With your explicit consent, we may send:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Product updates and new feature announcements</li>
          <li>Legal tech industry insights and blog posts</li>
          <li>Educational webinars and training opportunities</li>
          <li>Special offers and promotions</li>
        </ul>
        <p class="text-gray-700 mb-4">
          You can opt out of marketing communications at any time through your account settings or by clicking "unsubscribe" in any email.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Confidentiality of Legal Research Queries</h2>
        <p class="text-gray-700 mb-4">
          <strong>This section is critical for legal professionals using Lexora.</strong>
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">4.1 What We Don't Do</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>We do NOT sell query data</strong> to third parties, data brokers, or marketing companies</li>
          <li><strong>We do NOT share individual queries</strong> with other users, even in anonymized form</li>
          <li><strong>We do NOT use queries for targeted advertising</strong></li>
          <li><strong>We do NOT disclose queries to law enforcement</strong> except when required by valid court order (and we will notify you if legally permitted)</li>
          <li><strong>We do NOT allow employees</strong> to access individual query data except for technical support purposes with your explicit permission</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">4.2 How We Protect Query Confidentiality</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Encryption:</strong> All queries are encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
          <li><strong>Access Controls:</strong> Strict role-based access controls limit who can view query data</li>
          <li><strong>Audit Logs:</strong> All access to query databases is logged and monitored</li>
          <li><strong>Data Minimization:</strong> We only store query data necessary for service functionality</li>
          <li><strong>Anonymization Pipeline:</strong> Automated systems strip identifying information before using data for analytics</li>
          <li><strong>Geographic Storage:</strong> Data is stored in secure EU data centers (for GDPR compliance)</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">4.3 Enterprise On-Premise Deployment</h3>
        <p class="text-gray-700 mb-4">
          For institutions requiring maximum data control (courts, government agencies, large law firms), we offer on-premise deployment where:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>All query data remains on your infrastructure</li>
          <li>We have no access to query data</li>
          <li>You maintain complete control over data retention and deletion</li>
        </ul>
        <p class="text-gray-700 mb-4">
          Contact our Enterprise team at enterprise@{{ t('data.company.domain') }} for details.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
        <p class="text-gray-700 mb-4">We do not sell, trade, or rent your personal information. We may share information only in the following limited circumstances:</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">5.1 Service Providers</h3>
        <p class="text-gray-700 mb-4">
          We work with trusted third-party service providers who assist in operating our Service:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Cloud Infrastructure:</strong> AWS/Google Cloud (for hosting and storage)</li>
          <li><strong>Payment Processing:</strong> Stripe, PayPal (for billing)</li>
          <li><strong>Email Services:</strong> SendGrid, Mailgun (for transactional emails)</li>
          <li><strong>Analytics:</strong> Anonymized usage data only</li>
        </ul>
        <p class="text-gray-700 mb-4">
          All service providers are contractually bound to maintain confidentiality and use data only for providing services to us.
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">5.2 Legal Requirements</h3>
        <p class="text-gray-700 mb-4">
          We may disclose information if required by:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Valid court order or subpoena</li>
          <li>Government or regulatory request</li>
          <li>To protect our legal rights or defend against claims</li>
          <li>To prevent imminent harm or illegal activity</li>
        </ul>
        <p class="text-gray-700 mb-4">
          <strong>Transparency Commitment:</strong> If we receive a request for your data, we will notify you (unless legally prohibited) and give you an opportunity to challenge the request.
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">5.3 Business Transfers</h3>
        <p class="text-gray-700 mb-4">
          In the event of a merger, acquisition, or sale of assets, your information may be transferred. You will be notified of any change in ownership or control of your data.
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">5.4 Aggregated Anonymous Data</h3>
        <p class="text-gray-700 mb-4">
          We may share aggregated, anonymized statistics about Lexora usage, legal research trends, and system performance in:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Academic research publications</li>
          <li>Industry reports and presentations</li>
          <li>Marketing materials</li>
        </ul>
        <p class="text-gray-700 mb-4">
          This data cannot be used to identify individual users or specific queries.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
        <p class="text-gray-700 mb-4">
          We implement industry-leading security measures to protect your information:
        </p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Technical Measures</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Encryption:</strong> TLS 1.3 for data in transit, AES-256 for data at rest</li>
          <li><strong>Secure Authentication:</strong> Password hashing with bcrypt, multi-factor authentication (MFA) available</li>
          <li><strong>Firewalls and Intrusion Detection:</strong> Network-level security monitoring</li>
          <li><strong>Regular Security Audits:</strong> Third-party penetration testing and vulnerability assessments</li>
          <li><strong>Secure Development:</strong> Code reviews, security testing in CI/CD pipeline</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Organizational Measures</h3>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Access Controls:</strong> Principle of least privilege, role-based access</li>
          <li><strong>Employee Training:</strong> Regular security and privacy training for all staff</li>
          <li><strong>Incident Response Plan:</strong> Documented procedures for security breaches</li>
          <li><strong>Vendor Management:</strong> Security assessments of all third-party providers</li>
        </ul>

        <p class="text-gray-700 mb-4">
          <strong>Data Breach Notification:</strong> In the unlikely event of a data breach affecting your personal information, we will notify you within 72 hours as required by GDPR, along with information about the breach and steps we're taking to address it.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
        <p class="text-gray-700 mb-4">We retain different types of data for different periods:</p>

        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Account Information:</strong> Retained for the duration of your account plus 30 days after deletion (for recovery)</li>
          <li><strong>Query History:</strong> Retained for 12 months for active accounts (can be deleted earlier upon request)</li>
          <li><strong>Anonymized Analytics Data:</strong> Retained indefinitely for model improvement</li>
          <li><strong>Billing Records:</strong> Retained for 7 years (tax law requirement)</li>
          <li><strong>Support Communications:</strong> Retained for 3 years</li>
          <li><strong>Audit Logs:</strong> Retained for 2 years</li>
        </ul>

        <p class="text-gray-700 mb-4">
          You can request earlier deletion of your query history at any time through your account settings or by contacting privacy@{{ t('data.company.domain') }}.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
        <p class="text-gray-700 mb-4">We use cookies and similar technologies to enhance your experience:</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
        <p class="text-gray-700 mb-4">Required for core functionality (login, session management). Cannot be disabled.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h3>
        <p class="text-gray-700 mb-4">Help us understand how you use the Service (anonymized analytics). Can be disabled in settings.</p>

        <h3 class="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
        <p class="text-gray-700 mb-4">Remember your preferences (language, jurisdiction filters). Can be disabled in settings.</p>

        <p class="text-gray-700 mb-4">
          We do NOT use advertising or tracking cookies. Your browser settings can also control cookie preferences.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Your Rights (GDPR Compliance)</h2>
        <p class="text-gray-700 mb-4">Under GDPR and applicable data protection laws, you have the following rights:</p>

        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
          <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
          <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your data</li>
          <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
          <li><strong>Right to Data Portability:</strong> Receive your data in machine-readable format</li>
          <li><strong>Right to Object:</strong> Object to processing of your data for specific purposes</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
          <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your data protection authority</li>
        </ul>

        <p class="text-gray-700 mb-4">
          To exercise any of these rights, contact us at privacy@{{ t('data.company.domain') }}. We will respond within 30 days.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
        <p class="text-gray-700 mb-4">
          Lexora is intended for professional use by legal professionals and researchers. We do not knowingly collect information from individuals under 18 years of age. If you believe we have inadvertently collected such information, please contact us immediately.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
        <p class="text-gray-700 mb-4">
          Lexora primarily operates within the European Economic Area (EEA). If your data is transferred outside the EEA, we ensure appropriate safeguards are in place:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          <li>Data Processing Agreements with all third-party processors</li>
          <li>Adequacy decisions where available</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
        <p class="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4">
          <li>Email notification to your registered email address</li>
          <li>Prominent notice on our website and within the Service</li>
          <li>At least 30 days' advance notice before changes take effect</li>
        </ul>
        <p class="text-gray-700 mb-4">
          Your continued use of the Service after the effective date constitutes acceptance of the updated policy.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
        <p class="text-gray-700 mb-4">
          For privacy-related questions, concerns, or to exercise your rights, please contact:
        </p>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="text-gray-700">
            <strong>Data Protection Officer:</strong> privacy@{{ t('data.company.domain') }}<br>
            <strong>General Inquiries:</strong> contact@{{ t('data.company.domain') }}<br>
            <strong>Address:</strong> {{ t('data.company.address.street') }}, {{ t('data.company.address.city') }}, {{ t('data.company.address.country') }}<br>
            <strong>Phone:</strong> {{ t('data.company.contact.phone') }}<br>
            <strong>Company:</strong> Codeus d.o.o. (Developer of Lexora)<br>
            <strong>Registration Number:</strong> {{ t('data.company.registrationNumber') }}<br>
            <strong>VAT ID:</strong> {{ t('data.company.vatID') }}
          </p>
        </div>
        <p class="text-gray-700 mt-4">
          <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 3 business days, with full resolution within 30 days as required by GDPR.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO meta tags
usePageSeo({
  title: t('seo.privacy.title'),
  description: t('seo.privacy.description')
})
</script>
