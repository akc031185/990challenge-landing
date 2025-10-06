import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">990 Challenge</h1>
          <div className="space-x-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition">Privacy</Link>
            <Link href="/support" className="text-gray-300 hover:text-white transition">Support</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition">Terms</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Life<br />in 90 Days
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Track your daily progress, build lasting habits, and achieve your goals with our powerful challenge tracker.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Download on App Store
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-white mb-4">Daily Tracking</h3>
            <p className="text-gray-300">
              Mark each day complete and watch your streak grow. Stay motivated with visual progress.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-gray-300">
              Track completion rates, monitor streaks, and see your progress over time.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Goal Achievement</h3>
            <p className="text-gray-300">
              Research-backed 90-day framework to turn any goal into a lasting habit.
            </p>
          </div>
        </div>

        {/* Why 90 Days */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">Why 90 Days?</h3>
          <p className="text-xl text-gray-300">
            Studies show it takes approximately 90 days to form a lasting habit. Our app is built around this proven timeframe to maximize your success and create real, sustainable change in your life.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-24 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 NavHome Realty LLC. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/support" className="hover:text-white transition">Support</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
