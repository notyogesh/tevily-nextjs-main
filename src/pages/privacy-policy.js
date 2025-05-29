import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
const PrivacyPolicy = () => {
  return (
    <Layout pageTitle="Privacy Policy">
      <PageHeader title="Privacy Policy" />
      <div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6 text-blue-700">
            Privacy Policy
          </h1>

          <p className="mb-4">
            At Make Your Vacations, your privacy is very important to us. This
            Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you use our website or services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Personal information (name, email address, phone number)</li>
            <li>Travel preferences and destination interests</li>
            <li>Payment and billing details</li>
            <li>Website usage data via cookies and analytics tools</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>To process bookings and payments</li>
            <li>To personalize your travel experience</li>
            <li>
              To send updates, promotional offers, and newsletters (with your
              consent)
            </li>
            <li>To improve our services and user experience</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            3. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell your personal data. We may share information with
            trusted third-party vendors, partners, or authorities only when
            necessary to fulfill services or comply with legal obligations.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Rights</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              You have the right to access, modify, or delete your personal
              data.
            </li>
            <li>You can unsubscribe from promotional emails at any time.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your
            information against unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            6. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy occasionally. Any changes will be
            reflected on this page with a revised date.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this policy, please contact
            us at{" "}
            <a
              href="mailto:info@makeyourvacations.com"
              className="text-blue-600 underline"
            >
              info@makeyourvacations.com
            </a>
            .
          </p>

          <p className="text-sm text-gray-500 mt-10">
            Last updated: May 29, 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
