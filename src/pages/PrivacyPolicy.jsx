import React from 'react';
import { Layout } from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-50">

      {/* Header Section */}
      <header className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Saroj College of Engineering and Polytechnic is committed to protecting your privacy and personal information.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
          <div className="mb-12">
            
            <p className="text-gray-700 mb-6">
              At Saroj College of Engineering and Polytechnic, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Register for courses or programs</li>
                <li>Apply for admission</li>
                <li>Contact us through forms or email</li>
                <li>Participate in surveys or events</li>
                <li>Subscribe to our newsletters</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The types of information we may collect include your name, email address, phone number, educational background, and other relevant details.
              </p>
            </section>

            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Processing admissions and registrations</li>
                <li>Providing educational services and support</li>
                <li>Communicating important college information</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Conducting research and analysis</li>
              </ul>
            </section>

            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell or rent your personal information to third parties. However, we may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Affiliated educational institutions</li>
                <li>Service providers who assist in our operations</li>
                <li>Government authorities when required by law</li>
                <li>Academic partners for collaborative programs</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
              </p>
            </section>

            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              <p className="text-gray-700">
                These measures include encryption, access controls, secure servers, and regular security assessments.
              </p>
            </section>

            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on applicable laws, you may have rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact our Data Protection Officer using the information provided below.
              </p>
            </section>

            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-semibold text-indigo-800 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

          </div>
        </div>
      </main>

     </div>
    </Layout>
  );
};

export default PrivacyPolicy;