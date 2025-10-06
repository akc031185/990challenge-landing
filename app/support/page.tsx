import Link from 'next/link';

export const metadata = {
  title: "Support - 990 Challenge",
  description: "Get help with 990 Challenge App",
};

export default function Support() {
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
        <h1 className="text-4xl font-bold mb-8">Support</h1>

        <div className="space-y-8">
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Need help? Have a question or feedback? We're here to help!
            </p>
            <p>
              Email: <a href="mailto:support@990challenge.com" className="text-purple-600 hover:underline font-medium">support@990challenge.com</a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              We typically respond within 24-48 hours.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">How do I start a new challenge?</h3>
                <p className="text-gray-700">
                  Open the app and tap the "+" button to create a new 90-day challenge. Give it a name and start tracking your daily progress!
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Can I edit past days?</h3>
                <p className="text-gray-700">
                  Yes! You can mark any day as complete or incomplete by tapping on it in the calendar view.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Is my data backed up?</h3>
                <p className="text-gray-700">
                  Your data is stored locally on your device for privacy. We recommend keeping your device backed up using iCloud or iTunes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Can I track multiple challenges?</h3>
                <p className="text-gray-700">
                  Currently, the app is designed to focus on one 90-day challenge at a time to maximize your success and commitment.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">What happens after 90 days?</h3>
                <p className="text-gray-700">
                  Once you complete your 90-day challenge, you can start a new one! Your previous challenge data is saved for your records.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Report a Bug</h2>
            <p className="mb-4">
              Found a bug? Please help us improve by reporting it.
            </p>
            <p>
              Send bug reports to: <a href="mailto:support@990challenge.com?subject=Bug%20Report" className="text-purple-600 hover:underline font-medium">support@990challenge.com</a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Please include your device model, iOS version, and steps to reproduce the issue.
            </p>
          </section>

          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Feature Requests</h2>
            <p className="mb-4">
              Have an idea to make 990 Challenge better? We'd love to hear it!
            </p>
            <p>
              Email your suggestions to: <a href="mailto:support@990challenge.com?subject=Feature%20Request" className="text-purple-600 hover:underline font-medium">support@990challenge.com</a>
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
