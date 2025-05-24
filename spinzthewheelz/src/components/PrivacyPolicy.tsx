import React from 'react';
import { useTranslation } from 'react-i18next';
import AdDisplay from './AdDisplay';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400">Privacy Policy</h1>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Introduction</h2>
        <p className="mb-3">
          At SpinzTheWheelz, we value your privacy and are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website.
        </p>
        <p className="mb-3">
          By using SpinzTheWheelz, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Information We Collect</h2>
        <p className="mb-3">
          <strong>Log Data:</strong> Like many websites, we collect information that your browser sends whenever you visit our site.
          This may include your computer's IP address, browser type, pages visited, time spent on those pages, and other statistics.
        </p>
        <p className="mb-3">
          <strong>Cookies:</strong> We use cookies to collect information and improve our services. You can instruct your browser to
          refuse all cookies or to indicate when a cookie is being sent.
        </p>
        <p className="mb-3">
          <strong>Local Storage:</strong> We may store certain preferences and settings in your browser's local storage to enhance
          your experience, such as wheel settings, color preferences, and result history.
        </p>
      </section>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">How We Use Your Information</h2>
        <p className="mb-3">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
          <li>Provide, maintain, and improve our services</li>
          <li>Monitor the usage of our website</li>
          <li>Detect, prevent, and address technical issues</li>
          <li>Personalize your experience</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Third-Party Services</h2>
        <p className="mb-3">
          <strong>Google Analytics:</strong> We may use Google Analytics to track and analyze website usage. Google Analytics may collect information such as
          how often users visit the website and what pages they visit. For more information on Google Analytics privacy practices, please visit:
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline"> Google Privacy Policy</a>.
        </p>
        <p className="mb-3">
          <strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google AdSense may use cookies and web beacons to collect information
          about your visits to this and other websites to provide relevant advertisements. For more information, please visit:
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline"> Google Ads Privacy</a>.
        </p>
      </section>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Data Security</h2>
        <p className="mb-3">
          The security of your data is important to us, but please remember that no method of transmission over the Internet or method
          of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information,
          we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Children's Privacy</h2>
        <p className="mb-3">
          Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information
          from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete
          this information from our servers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Changes to This Privacy Policy</h2>
        <p className="mb-3">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when
          they are posted on this page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Contact Us</h2>
        <p className="mb-3">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-3">
          <a href="mailto:info@spinzthewheelz.com" className="text-purple-600 dark:text-purple-400 hover:underline">info@spinzthewheelz.com</a>
        </p>
      </section>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>Last updated: May 22, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
