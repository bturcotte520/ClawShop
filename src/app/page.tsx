import Link from "next/link";

export default function Home() {
  const setupSteps = [
    {
      step: 1,
      title: "Install Docker Desktop",
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
      title: "Create a GitHub Account",
      description: "Sign up for GitHub to host your code and collaborate with others.",
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
      title: "Create a Google Account",
      description: "Set up a Google account to access Google services and cloud tools.",
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-sm font-bold">
              K
            </div>
            <span className="font-semibold text-neutral-100 tracking-tight">KiloClaw Setup Guide</span>
          </div>
          <Link
            href="/prompts"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            Prompts →
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get Started with KiloClaw
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Follow the steps below to set up your environment, then explore what KiloClaw can do.
          </p>
        </section>

        {/* Setup Directions */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Setup Directions</h2>
            <p className="text-neutral-500 text-sm">Complete these steps before getting started.</p>
          </div>

          <ol className="space-y-4">
            {setupSteps.map(({ step, title, description, href, label, icon }) => (
              <li key={step} className="group flex gap-5 items-start rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 hover:bg-neutral-800/60 transition-all duration-200">
                {/* Step number */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-neutral-300 group-hover:bg-neutral-700 transition-colors">
                  {step}
                </div>

                {/* Content */}
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
          KiloClaw Setup Guide — all links open in a new tab
        </div>
      </footer>
    </main>
  );
}
