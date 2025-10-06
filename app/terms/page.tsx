import Link from 'next/link';

export const metadata = {
  title: "Terms of Service - 990 Challenge",
  description: "Terms of Service for 990 Challenge App",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-6">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            990 Challenge
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: October 5, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the 990 Challenge mobile application ("the App"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
            <p>
              990 Challenge is a mobile application that helps users track 90-day challenges and build lasting habits.
              The App provides tools for daily progress tracking, calendar visualization, and achievement analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App in compliance with all applicable laws and regulations</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Not use the App for any unlawful or prohibited purpose</li>
              <li>Maintain the security of your device and any data stored on it</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              The App and its original content, features, and functionality are owned by NavHome Realty LLC and are protected
              by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL NAVHOME REALTY LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE APP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data and Privacy</h2>
            <p>
              Your use of the App is also governed by our Privacy Policy. Please review our Privacy Policy to understand
              how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the App at any time without notice.
              We will not be liable to you or any third party for any modification, suspension, or discontinuation of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the
              new Terms on this page and updating the "Last updated" date. Your continued use of the App after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:support@990challenge.com" className="text-purple-600 hover:underline">support@990challenge.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-purple-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
