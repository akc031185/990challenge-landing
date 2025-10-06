import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '990 Challenge - Transform Your Life in 90 Days | Habit Tracker App',
  description: 'Build lasting habits with the 990 Challenge app. Track your 90-day challenges, monitor daily progress, and achieve your goals with our powerful iOS habit tracker.',
  keywords: ['90 day challenge', 'habit tracker', 'goal tracking', 'productivity app', 'habit building', 'iOS app', 'daily tracker', 'streak tracker'],
  authors: [{ name: 'NavHome Realty LLC' }],
  creator: 'NavHome Realty LLC',
  publisher: 'NavHome Realty LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://990challenge.com'),
  openGraph: {
    title: '990 Challenge - Transform Your Life in 90 Days',
    description: 'Build lasting habits with the 990 Challenge app. Track your 90-day challenges, monitor daily progress, and achieve your goals.',
    url: 'https://990challenge.com',
    siteName: '990 Challenge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '990 Challenge - Habit Tracker App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '990 Challenge - Transform Your Life in 90 Days',
    description: 'Build lasting habits with the 990 Challenge app. Track your 90-day challenges and achieve your goals.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 sm:px-6 py-6">
        <nav className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            990 Challenge
          </h1>
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white transition-colors duration-200">
              Support
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
              Terms
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200 text-sm mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Now Available on iOS
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Transform Your Life
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              in 90 Days
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Track your daily progress, build lasting habits, and achieve your goals with our powerful challenge tracker designed for real, sustainable change.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#"
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </span>
            </a>
            <a
              href="#features"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">90</div>
              <div className="text-sm sm:text-base text-gray-400">Days to Success</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm sm:text-base text-gray-400">Offline First</div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-sm sm:text-base text-gray-400">Unlimited Challenges</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-24 sm:mt-32">
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📅</div>
            <h3 className="text-2xl font-bold text-white mb-4">Daily Tracking</h3>
            <p className="text-gray-300 leading-relaxed">
              Mark each day complete and watch your streak grow. Stay motivated with beautiful visual progress indicators and reminders.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
            <p className="text-gray-300 leading-relaxed">
              Track completion rates, monitor streaks, and see your progress over time with detailed insights and statistics.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Goal Achievement</h3>
            <p className="text-gray-300 leading-relaxed">
              Research-backed 90-day framework to turn any goal into a lasting habit that sticks for life.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Privacy First</h3>
            <p className="text-gray-300 leading-relaxed">
              Your data stays on your device. No cloud sync, no tracking, complete privacy and control over your information.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Beautiful Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Clean, intuitive interface designed for iOS. Gorgeous calendar views and smooth animations make tracking effortless.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-gray-300 leading-relaxed">
              Native iOS performance with instant loading and smooth interactions. No lag, no delays, just pure speed.
            </p>
          </div>
        </div>

        {/* Why 90 Days Section */}
        <div className="mt-24 sm:mt-32">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-purple-500/20 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Why 90 Days?
              </h3>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
                Studies show it takes approximately <span className="text-purple-300 font-semibold">90 days to form a lasting habit</span>. Our app is built around this proven timeframe to maximize your success and create real, sustainable change in your life.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-purple-300 mb-2">0-30</div>
                  <div className="text-sm text-gray-300">Building Foundation</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-pink-300 mb-2">31-60</div>
                  <div className="text-sm text-gray-300">Forming Habits</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-indigo-300 mb-2">61-90</div>
                  <div className="text-sm text-gray-300">Lasting Change</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 sm:mt-32 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of people transforming their lives one day at a time
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download Now
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 sm:px-6 py-12 mt-24 border-t border-white/10">
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              990 Challenge
            </h2>
            <p className="text-gray-400 text-sm">Transform your life, one day at a time</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-white transition-colors duration-200">
              Support
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 NavHome Realty LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
