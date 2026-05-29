import Link from 'next/link';
import { site } from '@/data/site';

export function WritingSection() {
  return (
    <div
      className="rounded-2xl p-9 text-center"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div
        className="font-mono text-[11.5px] uppercase tracking-[0.15em] mb-3.5"
        style={{ color: 'var(--color-text-3)' }}
      >
        coming soon
      </div>
      <div
        className="font-medium mb-3.5"
        style={{
          fontSize: '22px',
          color: 'var(--color-text)',
          letterSpacing: '-0.015em',
        }}
      >
        New posts on the way
      </div>
      <p
        className="mx-auto mb-6 max-w-[520px]"
        style={{
          color: 'var(--color-text-2)',
          fontSize: '15px',
          lineHeight: 1.65,
        }}
      >
        Engineering notes on SmartNIC debugging, RDMA performance, and
        hypervisor migration land here once the site goes live. Existing Medium
        archive stays linked.
      </p>
      <a
        href={site.social.medium}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg font-mono text-[13px] no-underline transition-colors"
        style={{
          background: 'var(--color-bg-2)',
          border: '1px solid var(--color-border-2)',
          color: 'var(--color-text)',
        }}
      >
        visit medium archive ↗
      </a>
    </div>
  );
}
