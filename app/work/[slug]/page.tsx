import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="container-narrow pt-20 pb-24 max-w-[820px]">
      <Link
        href="/work"
        className="font-mono text-[13px] no-underline mb-10 inline-block"
        style={{ color: 'var(--color-text-2)' }}
      >
        ← all work
      </Link>

      <div
        className="font-mono text-[11.5px] uppercase tracking-[0.16em] mb-3.5"
        style={{ color: 'var(--color-accent)' }}
      >
        {project.company} · {project.dateRange} · {project.domain}
      </div>

      <h1
        className="font-semibold mb-7 leading-[1.1]"
        style={{
          fontSize: 'clamp(32px, 4.8vw, 52px)',
          letterSpacing: '-0.03em',
        }}
      >
        {project.title}
      </h1>

      <p
        className="mb-10"
        style={{
          color: 'var(--color-text-2)',
          fontSize: '18px',
          lineHeight: 1.65,
        }}
      >
        {project.summary}
      </p>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 pb-10"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        {project.metrics.map((m) => (
          <div key={m.label}>
            <div
              className="font-mono mb-1.5"
              style={{ fontSize: '22px', color: 'var(--color-text)' }}
            >
              {m.value}
            </div>
            <div
              className="font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: 'var(--color-text-3)' }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/*
        Full case study content goes here. For each project, write up:
        - Context / what problem you were solving
        - Approach / how you broke it down
        - Technical decisions and tradeoffs
        - Results and what you'd do differently

        For now this is a stub. Edit this page (or extract to MDX) when you're ready.
      */}
      <div
        className="rounded-xl p-9"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        <div
          className="font-mono text-[11.5px] uppercase tracking-[0.15em] mb-4"
          style={{ color: 'var(--color-text-3)' }}
        >
          full write-up coming soon
        </div>
        <p
          style={{
            color: 'var(--color-text-2)',
            fontSize: '15.5px',
            lineHeight: 1.7,
          }}
        >
          This case study is a stub. Replace this block with the full
          write-up — context, approach, technical decisions, and results.
          Recommended structure is in <code>app/work/[slug]/page.tsx</code>{' '}
          comments.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11.5px] px-2.5 py-1 rounded"
            style={{
              background: 'var(--color-bg-2)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
