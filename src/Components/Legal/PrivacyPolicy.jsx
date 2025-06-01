import React from 'react';
import SEOTitle from '../../Components/SeoConfig/SEOTitle'; // Adjust path if needed
import { seoConfig } from '../../Components/SeoConfig/seoconfig'; // Adjust path if needed

const PrivacyPolicy = () => {
  // Assuming you might add a specific SEO entry for Privacy Policy in seoConfig
  // If not, it will use a default title/description as shown below
  const pageSeo = seoConfig.privacyPolicy || {
    title: "Privacy Policy - TFN Solutions",
    description: "Understand how TFN Solutions collects, uses, and protects your personal information.",
    keywords: "privacy policy, data protection, TFN Solutions privacy, cookies"
  };

  return (
    <div className="container pt-36 mx-auto px-4 py-8 max-w-5xl">
      <SEOTitle
        title={pageSeo.title}
        description={pageSeo.description}
        keywords={pageSeo.keywords}
        image="/logo.png" // Use your default image path
      />

      {/* Main heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Privacy Policy</h1>
      {/* Last updated date - secondary text */}
      <p className="text-sm text-[var(--text-secondary)] mb-8">Last Updated: 30th May, 2024</p>

      {/* General paragraph text - secondary */}
      <p className="mb-6 text-[var(--text-secondary)]">
        This Privacy Policy describes how TFN Solutions ("TFN", "we", "our", or "us") collects, uses, and shares your information when you visit our website at <a href="https://www.tfnsolutions.us" className="text-blue-600 hover:underline">www.tfnsolutions.us</a>.
      </p>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">1. Information We Collect</h2>
      {/* Paragraph and list items - secondary */}
      <p className="mb-4 text-[var(--text-secondary)]">We may collect the following types of data:</p>
      <ul className="list-disc list-inside mb-6 pl-4 text-[var(--text-secondary)]">
        <li>Identity information (name, company name, title) if provided</li>
        <li>Contact information (email, phone number, address)</li>
        <li>Message or inquiry content</li>
        <li>IP address for basic website analytics</li>
      </ul>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">2. How We Use Your Information</h2>
      {/* Paragraph and list items - secondary */}
      <p className="mb-4 text-[var(--text-secondary)]">Your data is used for the following purposes:</p>
      <ul className="list-disc list-inside mb-6 pl-4 text-[var(--text-secondary)]">
        <li>To deliver requested services and support</li>
        <li>To improve user experience and personalize content</li>
        <li>For communication, service alerts, or administrative notices</li>
        <li>For marketing and promotional updates (with opt-out)</li>
        <li>For security and fraud prevention</li>
      </ul>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">3. Sharing of Data</h2>
      {/* Paragraph and list items - secondary */}
      <p className="mb-4 text-[var(--text-secondary)]">TFN Solutions does not sell your data. Data may be shared with:</p>
      <ul className="list-disc list-inside mb-6 pl-4 text-[var(--text-secondary)]">
        <li>Cloud or technical partners assisting service delivery</li>
        <li>Legal or regulatory authorities as required by law</li>
        <li>Third-party service providers with strict confidentiality agreements</li>
      </ul>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">4. Data Protection and Security</h2>
      {/* Paragraph - secondary */}
      <p className="mb-6 text-[var(--text-secondary)]">
        We use SSL encryption, access controls, regular audits, and secure infrastructure to protect your data.
      </p>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">5. Your Rights</h2>
      {/* Paragraph and list items - secondary */}
      <p className="mb-4 text-[var(--text-secondary)]">You have the right to:</p>
      <ul className="list-disc list-inside mb-6 pl-4 text-[var(--text-secondary)]">
        <li>Request correction or deletion of inaccurate submitted data</li>
        <li>Withdraw consent where applicable</li>
        <li>Contact us to exercise any of these rights via <a href="mailto:support@tfnsolutions.us" className="text-blue-600 hover:underline">support@tfnsolutions.us</a></li>
      </ul>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">6. Cookie Policy</h2>
      {/* Paragraphs and list items - secondary */}
      <p className="mb-4 text-[var(--text-secondary)]">We use cookies and similar tracking technologies to improve website performance, analytics, and advertising.</p>
      <p className="mb-4 text-[var(--text-secondary)]">Types of cookies used:</p>
      <ul className="list-disc list-inside mb-6 pl-4 text-[var(--text-secondary)]">
        <li>Analytics cookies (Google Analytics)</li>
        <li>Marketing cookies (Facebook Pixel, etc.)</li>
      </ul>
      <p className="mb-6 text-[var(--text-secondary)]">
        You may disable cookies through your browser settings. Note that disabling some cookies may affect website functionality.
      </p>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">7. Data Retention</h2>
      {/* Paragraph - secondary */}
      <p className="mb-6 text-[var(--text-secondary)]">
        We retain contact form submissions only for the duration necessary to respond to your inquiry and for record-keeping purposes. We do not store or associate personal data with any persistent account on our site.
      </p>

      {/* Section headings - primary */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">8. Updates to this Policy</h2>
      {/* Paragraph - secondary */}
      <p className="mb-8 text-[var(--text-secondary)]">
        We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised “Last updated” date. Your continued use of our services constitutes acceptance of these changes.
      </p>
    </div>
  );
};

export default PrivacyPolicy;