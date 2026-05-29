import Link from 'next/link';
import type { Project } from '@/data/projects';

export function WorkCard({ project }: { project: Project }) {
  const statusStyles =
    project.status === 'active'
      ? {
          background: 'rgba(74, 222, 128, 0.08)',
          color: 'var(--color-term-green)',
          border: '1px solid rgba(74, 222, 128, 0.22)',
        }
      : {
          background: 'rgba(74, 142, 255, 0.08)',
          color: 'var(--color-accent-2)',
          border: '1px solid rgba(74, 142, 255, 0.22)',
        };

  return (
    <Link
      href={`/work/${project.slug}`}
      className="block rounded-2xl p-8 md:p-9 transition-all hover:-translate-y-0.5 no-underline text-inherit relative overflow-hidden group"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Top gradient accent on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity group-hover:opacity-60"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        }}
      />

      <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
        <div
          className="font-mono text-[11.5px] flex flex-wrap items-center gap-3.5"
          style={{ color: 'var(--color-text-3)', letterSpacing: '0.02em' }}
        >
          <span>{project.company}</span>
          <span style={{ color: 'var(--color-border-strong)' }}>·</span>
          <span>{project.dateRange}</span>
          <span style={{ color: 'var(--color-border-strong)' }}>·</span>
          <span>{project.domain}</span>
        </div>
        <span
          className="text-[10.5px] px-2.5 py-1 rounded-full font-mono uppercase tracking-[0.1em] font-medium"
          style={statusStyles}
        >
          ● {project.status}
        </span>
      </div>

      <h3
        className="font-semibold mb-3.5 leading-[1.22]"
        style={{
          fontSize: 'clamp(22px, 2.6vw, 28px)',
          letterSpacing: '-0.022em',
        }}
      >
        {project.title}
      </h3>

      <p
        className="mb-7 max-w-[760px]"
        style={{
          color: 'var(--color-text-2)',
          lineHeight: 1.65,
          fontSize: '15px',
        }}
      >
        {project.summary}
      </p>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-5"
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '22px',
          paddingBottom: '0',
          marginBottom: '22px',
        }}
      >
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <div
              className="font-mono font-medium mb-1.5"
              style={{
                fontSize: '19px',
                color: 'var(--color-text)',
                letterSpacing: '-0.005em',
              }}
            >
              {metric.value}
            </div>
            <div
              className="font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: 'var(--color-text-3)' }}
            >
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11.5px] px-2.5 py-1 rounded"
            style={{
              background: 'var(--color-bg-2)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-2)',
              letterSpacing: '0.01em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
