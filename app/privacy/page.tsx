import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - 990 Challenge",
  description: "Privacy Policy for 990 Challenge App",
};

export default function Privacy() {
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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: October 5, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p>
              NavHome Realty LLC ("we," "our," or "us") operates the 990 Challenge mobile application.
              This Privacy Policy explains how we collect, use, and protect your information when you use our app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p>990 Challenge is designed with privacy in mind. We collect minimal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Challenge Data:</strong> Your challenge progress, completion status, and calendar entries are stored locally on your device.</li>
              <li><strong>Device Information:</strong> Basic device information for app functionality and crash reporting.</li>
              <li><strong>Analytics:</strong> Anonymous usage statistics to improve the app experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Storage</h2>
            <p>
              All your challenge data is stored locally on your device. We do not store your personal challenge information on our servers.
              This means your data remains private and under your control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
            <p>We may use third-party services for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics (to understand how users interact with the app)</li>
              <li>Crash reporting (to identify and fix bugs)</li>
            </ul>
            <p className="mt-4">These services have their own privacy policies and we encourage you to review them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of electronic storage
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our app is not directed to children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:privacy@990challenge.com" className="text-purple-600 hover:underline">privacy@990challenge.com</a>
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
