import React from 'react';
import SEOTitle from '../../Components/SeoConfig/SEOTitle'; // Adjust path if needed
import { seoConfig } from '../../Components/SeoConfig/seoconfig'; // Adjust path if needed

const TermsAndConditions = () => {
  // Assuming you might add a specific SEO entry for Terms in seoConfig
  // If not, it will use a default title/description as shown below
  const pageSeo = seoConfig.termsAndConditions || {
    title: "Terms and Conditions - TFN Solutions",
    description: "Read the Terms and Conditions for using TFN Solutions' website and services.",
    keywords: "terms of service, TFN Solutions terms, legal, website terms"
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
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Terms of Service</h1>
      {/* Last updated date - secondary text */}
      <p className="text-sm text-[var(--text-secondary)] mb-8">Last Updated: 30th May, 2025</p>

      {/* Introduction */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">1. Introduction</h2>
      <p className="mb-4 text-[var(--text-secondary)]">
        Welcome to TFN Solutions (“TFN”, “we”, “our”, or “us”). These Terms of Service (“Terms”) govern your access to and use of our website, platforms, and services provided through <a href="https://www.tfnsolutions.us" className="text-blue-600 hover:underline">www.tfnsolutions.us</a>. By using our services, you agree to be bound by these Terms and our Privacy Policy.
      </p>
      <p className="mb-4 text-[var(--text-secondary)]">
        TFN provides end-to-end technology solutions, including but not limited to: managed IT services, custom software development, cloud solutions, infrastructure services, cybersecurity, and data analytics. We serve businesses, public institutions, and organizations across various sectors. These Terms apply to all visitors, clients, and service users.
      </p>
      <p className="mb-8 text-[var(--text-secondary)]">
        If you do not agree with these Terms, please refrain from using our website or services.
      </p>

      {/* Eligibility & Authorized Use */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">2. Eligibility & Authorized Use</h2>
      <p className="mb-4 text-[var(--text-secondary)]">By accessing TFN Solutions’ services, you represent that:</p>
      <ul className="list-disc list-inside mb-4 pl-4 text-[var(--text-secondary)]">
        <li>You are at least 18 years old or of legal majority in your jurisdiction.</li>
        <li>You are accessing the website for lawful business or informational purposes only.</li>
        <li>You are authorized to bind your organization to these Terms if you act on its behalf.</li>
      </ul>
      <p className="mb-4 text-[var(--text-secondary)]">
        TFN Solutions does not provide user accounts or login-based access to any services via this website. Users may interact with us only through publicly available content and optional contact forms.
      </p>
      <p className="mb-4 text-[var(--text-secondary)]">You agree not to misuse the website or any communication channel. Prohibited behavior includes:</p>
      <ul className="list-disc list-inside mb-6 pl-4 text-[var(--text-secondary)]">
        <li>Submitting false or malicious information through forms</li>
        <li>Attempting to access backend systems or restricted areas</li>
        <li>Using the site to spam, distribute malware, or launch cyberattacks</li>
      </ul>
      <p className="mb-8 text-[var(--text-secondary)]">
        TFN reserves the right to restrict or block access to our website if misuse or abuse is detected.
      </p>

      {/* Intellectual Property Rights */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">3. Intellectual Property Rights</h2>
      <p className="mb-4 text-[var(--text-secondary)]">
        All trademarks, service marks, logos, software, content, text, graphics, and intellectual property on this site belong exclusively to TFN Solutions or our partners.
      </p>
      <p className="mb-4 text-[var(--text-secondary)]">
        Users may not copy, replicate, reverse-engineer, transmit, or distribute any part of the website or its content without written consent. We grant you a limited, non-exclusive license to access and use our platform solely for your internal business needs.
      </p>
      <p className="mb-8 text-[var(--text-secondary)]">
        Violations of intellectual property rights will result in legal action and account termination.
      </p>

      {/* Scope of Services & Commitments */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">4. Scope of Services & Commitments</h2>
      <p className="mb-4 text-[var(--text-secondary)]">
        TFN Solutions offers both customizable and standardized IT and software solutions. Service engagement begins upon contract confirmation and may include:
      </p>
      <ul className="list-disc list-inside mb-4 pl-4 text-[var(--text-secondary)]">
        <li>Software and mobile app development</li>
        <li>Cloud migration and hosting</li>
        <li>Network infrastructure deployment</li>
        <li>IT helpdesk and technical support</li>
        <li>Cybersecurity and compliance audits</li>
        <li>Business continuity planning</li>
      </ul>
      <p className="mb-8 text-[var(--text-secondary)]">
        All services are subject to negotiated service level agreements (SLAs) and project timelines. Service limitations will be communicated clearly in advance.
      </p>

      {/* Limitation of Liability */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">5. Limitation of Liability</h2>
      <p className="mb-4 text-[var(--text-secondary)]">
        To the fullest extent permitted by applicable law, TFN Solutions shall not be liable for any indirect, incidental, special, punitive, or consequential damages including data loss, business interruption, or financial damages arising out of the use or inability to use our services or content.
      </p>
      <p className="mb-8 text-[var(--text-secondary)]">
        TFN makes no warranty that services will meet all user expectations or function error-free at all times.
      </p>

      {/* Indemnification */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">6. Indemnification</h2>
      <p className="mb-8 text-[var(--text-secondary)]">
        You agree to indemnify and hold harmless TFN Solutions, its officers, directors, affiliates, employees, and agents from any and all claims, liabilities, losses, damages, or expenses (including attorney fees) resulting from your use of the site, violation of these Terms, or infringement of any third-party rights.
      </p>

      {/* Termination of Use */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">7. Termination of Use</h2>
      <p className="mb-8 text-[var(--text-secondary)]">
        TFN reserves the right to terminate or suspend your access without notice if you breach these Terms or engage in unlawful activity. Users may terminate their use by ceasing to use the website and requesting account deactivation via <a href="mailto:support@tfnsolutions.us" className="text-blue-600 hover:underline">support@tfnsolutions.us</a>.
      </p>

      {/* Governing Law & Jurisdiction */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">8. Governing Law & Jurisdiction</h2>
      <p className="mb-8 text-[var(--text-secondary)]">
        These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising under or relating to these Terms shall be subject to the exclusive jurisdiction of the Nigerian courts.
      </p>

      {/* Contact Information */}
      <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">9. Contact Information</h2>
      <p className="mb-8 text-[var(--text-secondary)]">
        For all legal, technical, or data-related concerns, please contact: <a href="mailto:legal@tfnsolutions.us" className="text-blue-600 hover:underline">legal@tfnsolutions.us</a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;