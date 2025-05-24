import React from 'react';
import { useTranslation } from 'react-i18next';
import AdDisplay from './AdDisplay';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400">Terms of Service</h1>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Introduction</h2>
        <p className="mb-3">
          Welcome to SpinzTheWheelz. These Terms of Service ("Terms") govern your use of the SpinzTheWheelz website
          and all related services provided by SpinzTheWheelz.
        </p>
        <p className="mb-3">
          By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms,
          you may not access our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Use License</h2>
        <p className="mb-3">
          Permission is granted to temporarily use our website for personal, non-commercial transitory viewing only.
          This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc list-inside mb-3 ml-4 space-y-1">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose or for any public display;</li>
          <li>Attempt to reverse engineer any software contained on the SpinzTheWheelz website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p className="mb-3">
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by SpinzTheWheelz at any time.
        </p>
      </section>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Disclaimer</h2>
        <p className="mb-3">
          The materials on the SpinzTheWheelz website are provided "as is". SpinzTheWheelz makes no warranties,
          expressed or implied, and hereby disclaims and negates all other warranties, including without limitation,
          implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>
        <p className="mb-3">
          Further, SpinzTheWheelz does not warrant or make any representations concerning the accuracy, likely results,
          or reliability of the use of the materials on its website or otherwise relating to such materials or on any
          sites linked to this site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Limitations</h2>
        <p className="mb-3">
          In no event shall SpinzTheWheelz or its suppliers be liable for any damages (including, without limitation,
          damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
          the materials on SpinzTheWheelz's website, even if SpinzTheWheelz or a SpinzTheWheelz authorized representative
          has been notified orally or in writing of the possibility of such damage.
        </p>
        <p className="mb-3">
          Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply to you.
        </p>
      </section>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Accuracy of Materials</h2>
        <p className="mb-3">
          The materials appearing on the SpinzTheWheelz website could include technical, typographical, or photographic errors.
          SpinzTheWheelz does not warrant that any of the materials on its website are accurate, complete, or current.
          SpinzTheWheelz may make changes to the materials contained on its website at any time without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Links</h2>
        <p className="mb-3">
          SpinzTheWheelz has not reviewed all of the sites linked to its website and is not responsible for the contents
          of any such linked site. The inclusion of any link does not imply endorsement by SpinzTheWheelz of the site.
          Use of any such linked website is at the user's own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Modifications</h2>
        <p className="mb-3">
          SpinzTheWheelz may revise these Terms of Service for its website at any time without notice. By using this website,
          you are agreeing to be bound by the then current version of these Terms of Service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Governing Law</h2>
        <p className="mb-3">
          These Terms shall be governed and construed in accordance with the laws applicable to the location of
          SpinzTheWheelz's primary place of business, without regard to its conflict of law provisions.
        </p>
        <p className="mb-3">
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      </section>

      <div className="mb-8">
        <AdDisplay />
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-300">Contact Us</h2>
        <p className="mb-3">
          If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
