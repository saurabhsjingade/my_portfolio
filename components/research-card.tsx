import type { ResearchEntry } from '@/data/capabilities';

export function ResearchCard({ entry }: { entry: ResearchEntry }) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 p-9 rounded-2xl transition-all no-underline text-inherit"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: 'var(--color-bg-2)',
          border: '1px solid var(--color-border-2)',
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-accent-2)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
        >
          <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4Z" />
          <path d="M4 4v12a4 4 0 0 0 4 4" />
          <path d="M8 8h8M8 12h6" />
        </svg>
      </div>
      <div>
        <div
          className="font-mono text-[11px] uppercase tracking-[0.14em] mb-3 flex flex-wrap gap-3.5"
          style={{ color: 'var(--color-text-3)' }}
        >
          <span>{entry.venue}</span>
          <span style={{ color: 'var(--color-border-strong)' }}>·</span>
          <span>{entry.date}</span>
          <span style={{ color: 'var(--color-border-strong)' }}>·</span>
          <span>{entry.tags.join(' · ')}</span>
        </div>
        <h3
          className="font-semibold mb-3 leading-[1.3]"
          style={{ fontSize: '22px', letterSpacing: '-0.018em' }}
        >
          {entry.title}
        </h3>
        <p
          className="mb-4 max-w-[720px]"
          style={{
            color: 'var(--color-text-2)',
            fontSize: '15px',
            lineHeight: 1.65,
          }}
        >
          {entry.summary}
        </p>
        <span
          className="inline-flex items-center gap-2 font-mono text-[13px]"
          style={{ color: 'var(--color-accent)' }}
        >
          read on era.library.ualberta.ca →
        </span>
      </div>
    </a>
  );
}
