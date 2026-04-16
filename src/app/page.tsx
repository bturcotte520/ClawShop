import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const setupSteps = [
    {
      step: 1,
      title: "Install Docker Desktop (Optional but recommended)",
      description: "Download and install Docker Desktop to run containers on your machine.",
      href: "https://www.docker.com/products/docker-desktop/",
      label: "Install Docker Desktop",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625v2.625m0 2.625v2.625" />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Create a GitHub Account for your Bot",
      description: "Sign up for a dedicated GitHub account for your bot. We recommend using a separate account so your bot doesn't have immediate access to your sensitive personal repositories and information.",
      href: "https://github.com/",
      label: "Create GitHub Account",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Create a Google Account for your Bot",
      description: "Set up a dedicated Google account for your bot. We recommend using a separate account so your bot doesn't have immediate access to your sensitive personal data and Google services.",
      href: "https://www.google.com/",
      label: "Create Google Account",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
    },
  ];

  const resources = [
    {
      title: "KiloClaw Use Cases",
      description: "Explore real-world use cases and examples powered by KiloClaw.",
      href: "https://kilo.ai/kiloclaw/bytes",
      label: "Browse Use Cases",
      badge: "Examples",
    },
    {
      title: "KiloClaw Benchmark",
      description: "See how KiloClaw performs on PinchBench — the AI coding benchmark.",
      href: "https://pinchbench.com/",
      label: "View Benchmark",
      badge: "Performance",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Image
            src="/kiloclaw.png"
            alt="KiloClaw"
            width={200}
            height={60}
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <Link
            href="/prompts"
            className="text-sm font-semibold px-4 py-2 rounded-xl border border-violet-700/50 bg-violet-950/40 text-violet-400 hover:bg-violet-900/40 hover:border-violet-600 hover:text-violet-300 transition-all duration-150"
          >
            Starter Prompts →
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-14 sm:space-y-20">

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            ClawCon Michigan
          </h1>
          <p className="text-lg font-medium text-neutral-400 sm:text-xl">KiloClaw Resource Guide</p>
          <div className="flex justify-center items-center gap-10 sm:gap-16 flex-wrap">
            <Image
              src="/clawcon.png"
              alt="ClawCon"
              width={200}
              height={80}
              loading="eager"
              className="h-28 w-auto object-contain sm:h-44"
            />
            <Image
              src="/um.png"
              alt="University of Michigan"
              width={200}
              height={80}
              loading="eager"
              className="h-28 w-auto object-contain sm:h-44"
            />
            <Image
              src="/oc.png"
              alt="OC"
              width={200}
              height={80}
              loading="eager"
              className="h-28 w-auto object-contain sm:h-44"
            />
          </div>
        </section>

        {/* Contest */}
        <section className="space-y-6">
          <div className="rounded-2xl border border-violet-700/40 bg-violet-950/20 p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 border border-violet-700/40 bg-violet-950/40 px-2.5 py-1 rounded-full">Contest</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Share Your KiloClaw Setup &amp; Win</h2>
              <p className="text-neutral-400 leading-relaxed">
                Record your KiloClaw use case, post it to socials, tag Kilo — the best submissions win cash prizes.
              </p>
            </div>

            {/* Prizes */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-4 rounded-xl border border-yellow-600/30 bg-yellow-950/20 px-5 py-4">
                <div className="shrink-0 text-2xl font-black text-yellow-400">🥇</div>
                <div>
                  <div className="text-lg font-bold text-yellow-300">$1,000</div>
                  <div className="text-sm text-neutral-500">First place</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-neutral-700/50 bg-neutral-900/60 px-5 py-4">
                <div className="shrink-0 text-2xl font-black text-neutral-400">🥈</div>
                <div>
                  <div className="text-lg font-bold text-neutral-200">4 × $500</div>
                  <div className="text-sm text-neutral-500">Runner-up prizes</div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wide">How to Enter</h3>
              <ol className="space-y-1.5 text-sm text-neutral-400">
                <li className="flex gap-2.5"><span className="shrink-0 text-violet-500 font-semibold">1.</span>Record your KiloClaw use case in action</li>
                <li className="flex gap-2.5"><span className="shrink-0 text-violet-500 font-semibold">2.</span>Post the video to X, LinkedIn, or Instagram</li>
                <li className="flex gap-2.5"><span className="shrink-0 text-violet-500 font-semibold">3.</span>Tag Kilo using the accounts below — the best use cases win</li>
              </ol>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://x.com/kilocode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white transition-all duration-150 text-sm font-medium"
              >
                {/* X (Twitter) */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.013 5.303 6.15-7.303zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
                @kilocode
              </a>
              <a
                href="https://www.linkedin.com/company/kilo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-blue-600/50 hover:bg-blue-950/20 hover:text-blue-300 transition-all duration-150 text-sm font-medium"
              >
                {/* LinkedIn */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Kilo on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/kilocodeai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-pink-600/50 hover:bg-pink-950/20 hover:text-pink-300 transition-all duration-150 text-sm font-medium"
              >
                {/* Instagram */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @kilocodeai
              </a>
            </div>
          </div>
        </section>

        {/* KiloClaw Signup */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">KiloClaw</h2>
            <p className="text-neutral-500 text-sm">Start using KiloClaw today.</p>
          </div>

          <div className="rounded-2xl border border-yellow-600/50 bg-yellow-950/30 p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-neutral-100">Sign Up for a Free Trial</h3>
              <p className="text-neutral-400 leading-relaxed">Get started with KiloClaw — the AI-powered coding assistant. Sign up for free and start building your personal AI agent today.</p>
            </div>
            <a
              href="https://kilo.codes/ClawShopCreate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition-colors duration-150 text-base w-full sm:w-auto justify-center sm:justify-start"
            >
              Sign Up for Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </section>

        {/* OpenClaw Starter Prompts */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">OpenClaw Starter Prompts</h2>
            <p className="text-neutral-500 text-sm">Browse prompts for common use cases to get started quickly.</p>
          </div>
          <Link
            href="/prompts"
            className="group flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-5 hover:border-violet-800/60 hover:bg-neutral-800/60 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <span className="text-base font-semibold text-neutral-100 group-hover:text-white transition-colors">View Starter Prompts</span>
            </div>
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </section>

        {/* Resources */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Resources</h2>
            <p className="text-neutral-500 text-sm">Learn more about KiloClaw and how it performs.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map(({ title, description, href, label, badge }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:border-violet-800/60 hover:bg-neutral-800/60 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-neutral-100 group-hover:text-white transition-colors">{title}</h3>
                  <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/20">
                    {badge}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">{description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                  {label}
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800" />

        {/* Further Setup Directions */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Further Setup Directions</h2>
            <p className="text-neutral-500 text-sm">Complete these steps before getting started.</p>
          </div>

          <ol className="space-y-4">
            {setupSteps.map(({ step, title, description, href, label, icon }) => (
              <li key={step} className="group flex gap-5 items-start rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 hover:bg-neutral-800/60 transition-all duration-200">
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-neutral-300 group-hover:bg-neutral-700 transition-colors">
                  {step}
                </div>
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">{icon}</span>
                    <h3 className="text-base font-semibold text-neutral-100">{title}</h3>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    {label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

      </div>

      {/* QR/Link button — fixed bottom right */}
      <div className="fixed bottom-6 right-6">
        <Link
          href="/qr"
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border border-yellow-600/50 bg-yellow-950/40 text-yellow-400 hover:bg-yellow-950/60 hover:border-yellow-500 hover:text-yellow-300 transition-all duration-150 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 17.25h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
          </svg>
          QR / Link
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-xs text-neutral-600">
          ClawShop Attendee Guide — all links open in a new tab
        </div>
      </footer>
    </main>
  );
}
