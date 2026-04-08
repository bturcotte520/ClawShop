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
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/kiloclaw.png"
              alt="KiloClaw"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
          <Link
            href="/speakers"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            Speakers →
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            ClawShop Attendee Guide
          </h1>
          <div className="flex justify-center">
            <Image
              src="/logolarge.png"
              alt="ClawShop"
              width={600}
              height={200}
              loading="eager"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Follow the steps below to set up your environment, then explore what KiloClaw can do.
          </p>
        </section>

        {/* KiloClaw Signup */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">KiloClaw</h2>
            <p className="text-neutral-500 text-sm">Start using KiloClaw today.</p>
          </div>

          <div className="rounded-2xl border border-yellow-600/50 bg-yellow-950/30 p-8 space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-neutral-100">Sign Up for a Free Trial</h3>
              <p className="text-neutral-400 leading-relaxed">Get started with KiloClaw — the AI-powered coding assistant. Sign up for free and start building your personal AI agent today.</p>
            </div>
            <a
              href="https://kilo.codes/ClawShopCreate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition-colors duration-150 text-base"
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

        {/* Divider */}
        <div className="border-t border-neutral-800" />

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
