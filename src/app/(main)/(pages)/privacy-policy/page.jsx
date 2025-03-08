import React from "react";
import HeaderBanner from "@/components/organisms/HeaderBanner";

const PrivacyPolicies = () => {
  return (
    <>
      <HeaderBanner 
        backgroundImage="/images/tchero.svg" 
        title="Privacy and Policies" 
        subtitle="Travel safe and happy" 
        subtitleColor="white" 
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">
            This Privacy Policy outlines how Hindu Tourism P. Ltd. collects, uses, and protects your personal information when you use our services.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <p className="text-gray-700">
            We collect personal information that you provide, such as your name, contact details, and payment information. Additionally, we may collect data from cookies and analytics tools.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your personal data to process bookings, improve our services, and provide customer support. We do not sell your information to third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p className="text-gray-700">
            We implement strict security measures to protect your information from unauthorized access, disclosure, or loss.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p className="text-gray-700">
            Our website uses cookies to enhance user experience and analyze website traffic. You can disable cookies through your browser settings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
          <p className="text-gray-700">
            We may use third-party services for payments and analytics, which have their own privacy policies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal information. Contact us for any data-related requests.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Policy Updates</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Continued use of our services implies acceptance of the changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at support@example.com.
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicies;
