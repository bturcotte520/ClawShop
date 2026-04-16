import Link from "next/link";
import Image from "next/image";
import { PromptCard } from "./PromptCard";

const prompts = [
  {
    title: "Initial Best Practices",
    description: "Enforce best practices for your AI assistant's core directives, memory, and communication style.",
    text: `Update AGENTS.md with these rules:
Core directive: You are my personal AI assistant. Be proactive — don't wait to be asked. Flag things before they become problems.
Anti-looping: If you've attempted the same action twice with the same result, stop and report the issue to me. Never retry more than twice without changing your approach.
Hard rules: Never send any email, message, or communication externally without my explicit approval. Never delete anything. Always verify dates with the date command before scheduling.
Communication: Keep messages short and scannable, bullet points when appropriate, and no extra fluff or filler words.`,
  },
  {
    title: "Skills Setup",
    description: "Install the summarize, clawddocs, and QMD skills via npm.",
    text: `Install the following skills: summarize, clawddocs, and QMD. Use npm.`,
  },
  {
    title: "Morning Briefing",
    description: "Daily 7 AM cron: calendar, news, weather, and recommended tasks.",
    text: `Set up a cron job that runs every day at 7:00 AM.
Every morning, I want you to send me a briefing. Here's what it should include:
Today's calendar: Pull all events for today. For each one, list the time, title, and attendees. Flag any conflicts.


News and blogs: Search the web for the latest news on [YOUR TOPICS]. Also check [YOUR SPECIFIC SOURCES]. Give me 3-5 headlines that are actually worth reading, with one-sentence summaries and links.


Weather: Check the weather for [YOUR CITY]. If rain is expected, mention it. If it's unusually hot or cold, mention it.


Recommended tasks: Based on what you see in my calendar, email, and any pending items from memory, suggest 2-3 tasks you could complete for me today without my involvement. These could be things like drafting email responses, researching a meeting attendee, summarizing a long thread, or anything else you think would save me time.


Format everything clean and scannable. Keep it short. Don't send a novel. If there's nothing noteworthy in a section, skip it.`,
  },
  {
    title: "Inbox Triage",
    description: "Every 2 hours on weekdays: categorize email into Urgent / Action needed / Informational / Ignore.",
    text: `Set up a cron job that runs every 2 hours during business hours, Monday through Friday (9 AM to 6 PM).
Every time it runs, check my Gmail inbox for new unread messages since the last check.
Categorize each message into one of these buckets:
Urgent: Needs a response today. Emails from [LIST KEY CONTACTS], or anything containing words like "urgent," "ASAP," "deadline today," or "time-sensitive."
Action needed: Needs a response this week but not today. Meeting requests, project updates that need input, questions directed at me.
Informational: Newsletters, automated notifications, CC'd threads, FYI messages. Summarize each in one line.
Ignore: Marketing, cold outreach, spam that got through. Don't surface these.
For every urgent and action-needed email, draft a response. Don't send it — just draft it and show it to me for approval.
Send me a summary formatted like: "X urgent, Y action needed, Z informational" with one-line descriptions of the urgent ones.
If there are no new messages, don't message me. Stay quiet.`,
  },
  {
    title: "Personal CRM",
    description: "Daily 6 AM cron: build and maintain a contacts memory file from your email and calendar activity.",
    text: `Set up a daily cron job that runs at 6:00 AM.
Every morning, scan my Gmail and Google Calendar for the past 24 hours.
For every person I interacted with — whether via email or a calendar meeting:
Check if they already exist in my contacts memory. If not, create a new entry.
For each contact, track: their name, email, company/role if you can determine it, when I first interacted with them, when we last interacted, how many times we've interacted, and any important context from our conversations.
Filter out noise — marketing emails, automated notifications, cold outreach, newsletters. Only track real human interactions.
Store all of this in a structured format in memory/contacts.md.
When I ask you about a contact — like "what do I know about Sarah?" or "who haven't I talked to in a while?" or "who do I know at a certain company?" — search your contacts memory and give me everything you have.
Also: if anyone I've interacted with hasn't heard from me in 14+ days and our last interaction suggested a follow-up, flag them in my morning briefing.`,
  },
  {
    title: "Second Brain",
    description: "Instant memory capture to date files, contacts, tasks, USER.md, and a knowledge base.",
    text: `I want to use you as my second brain. Here's how this works:
Anytime I send you something to remember — a thought, a fact, a link, a name, a preference, a random idea, anything — save it immediately to my memory files. Use today's date file (memory/YYYY-MM-DD.md) for the raw capture, and also evaluate whether it belongs in a more permanent place:
If it's about a person, add it to memory/contacts.md
If it's a task or reminder, create a cron job for it at the time I specify
If it's a preference or fact about me, update USER.md
If it's a general reference I might want later, add it to memory/knowledge.md
When I ask you to find something — "what was that restaurant someone recommended?" or "what did I save about the Q3 plan?" or "what are my notes on project X?" — search across ALL memory files and give me everything relevant.
Important rules:
Never ask me "do you want me to save this?" Just save it. If I'm telling you something, I want it remembered.
Keep the raw captures timestamped and searchable.
Once a week (Sunday evening), do a quick review of the week's captures and promote anything important to the right long-term file.
Acknowledge saves briefly — something like "Got it" or "Saved" — and move on. Don't make it a whole conversation.`,
  },
  {
    title: "Content Research Digest",
    description: "Daily noon cron: Hacker News, Reddit, and web search filtered for your topics, under 500 words.",
    text: `Set up a cron job that runs every day at 12:00 PM (noon).
I want a daily research digest. Here's what to do:
Search Hacker News for the top stories from the last 24 hours. Filter for topics related to [YOUR TOPICS]. Give me the top 5 most interesting, with a one-sentence summary of why each matters.


Search Reddit for the most upvoted posts in the last 24 hours from these subreddits: [YOUR SUBREDDITS]. Top 3, summarized.


Search the web for any notable news, launches, or announcements in my space from the last 24 hours. Things I might have missed. Top 3.


If you find anything that's directly relevant to my work or projects (based on what you know about me from USER.md and memory), call it out specifically and tell me why it matters to me.


Format: Keep the whole digest under 500 words. No fluff. Link to the source for each item. If nothing interesting happened today, say so and keep it short.
Over time, pay attention to which items I engage with (if I ask follow-up questions or say "interesting" or save it to memory) and which I ignore. Adjust your filtering accordingly.`,
  },
];

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link href="/" className="text-neutral-400 hover:text-neutral-200 transition-colors text-sm">
            ← Back
          </Link>
          <span className="text-neutral-700">/</span>
          <span className="text-neutral-400 text-base">OpenClaw Starter Prompts</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            OpenClaw Starter Prompts
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Paste these prompts into KiloClaw to configure your AI assistant. Fill in the fields, then copy — each prompt is self-contained.
          </p>
        </section>

        {/* Prompt list */}
        <ol className="space-y-6">
          {prompts.map((prompt, index) => (
            <PromptCard
              key={index}
              index={index}
              title={prompt.title}
              description={prompt.description}
              text={prompt.text}
            />
          ))}
        </ol>

      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-neutral-600">
          ClawShop Attendee Guide — fill in your details, then copy prompts directly into KiloClaw
        </div>
      </footer>
    </main>
  );
}
