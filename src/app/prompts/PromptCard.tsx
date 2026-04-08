"use client";

import { useState, useMemo } from "react";

type Segment = { type: "text"; value: string } | { type: "bracket"; value: string };

function parseSegments(text: string): Segment[] {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((p) => {
    if (p.startsWith("[") && p.endsWith("]")) {
      return { type: "bracket", value: p.slice(1, -1) };
    }
    return { type: "text", value: p };
  });
}

export function PromptCard({
  title,
  description,
  text,
  index,
}: {
  title: string;
  description: string;
  text: string;
  index: number;
}) {
  const segments = useMemo(() => parseSegments(text), [text]);

  const bracketLabels = useMemo(() => {
    const seen = new Set<string>();
    const labels: string[] = [];
    segments.forEach((s) => {
      if (s.type === "bracket" && !seen.has(s.value)) {
        seen.add(s.value);
        labels.push(s.value);
      }
    });
    return labels;
  }, [segments]);

  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  function getFilledText() {
    return segments
      .map((s) => {
        if (s.type === "bracket") return values[s.value] || `[${s.value}]`;
        return s.value;
      })
      .join("");
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(getFilledText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <li className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5">
        <div className="flex items-start gap-4">
          <span className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-neutral-400">
            {index + 1}
          </span>
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-neutral-100">{title}</h2>
            <p className="text-base text-neutral-500">{description}</p>
          </div>
        </div>
        <div className="shrink-0 pt-0.5">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 hover:bg-neutral-700 transition-all duration-150 select-none"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.637c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Madlib inputs */}
      {bracketLabels.length > 0 && (
        <div className="border-t border-neutral-800 px-6 py-5 space-y-3 bg-neutral-900/50">
          <p className="text-sm text-neutral-500 mb-1">Fill in your details:</p>
          {bracketLabels.map((label) => (
            <div key={label} className="flex items-center gap-4">
              <label className="text-sm font-medium text-yellow-400 shrink-0 w-52 truncate">
                {label}
              </label>
              <input
                type="text"
                value={values[label] || ""}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [label]: e.target.value }))
                }
                placeholder={`Enter ${label.toLowerCase()}…`}
                className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-yellow-600/60 focus:ring-1 focus:ring-yellow-600/30 transition-colors"
              />
            </div>
          ))}
        </div>
      )}

      {/* Prompt text */}
      <div className="border-t border-neutral-800 bg-neutral-950/60 px-6 py-5">
        <pre className="text-sm text-neutral-400 whitespace-pre-wrap leading-relaxed overflow-x-auto">
          {segments.map((seg, i) => {
            if (seg.type === "bracket") {
              const val = values[seg.value];
              return (
                <span
                  key={i}
                  className={
                    val
                      ? "text-yellow-300 font-semibold"
                      : "text-yellow-500/60 italic"
                  }
                >
                  {val || `[${seg.value}]`}
                </span>
              );
            }
            return <span key={i}>{seg.value}</span>;
          })}
        </pre>
      </div>
    </li>
  );
}
