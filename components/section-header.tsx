import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  number: string;
  eyebrow: string;
  title: string;
  sub?: string;
  linkHref?: string;
  linkLabel?: string;
  children?: ReactNode;
};

export function SectionHeader({
  number,
  eyebrow,
  title,
  sub,
  linkHref,
  linkLabel,
}: Props) {
  return (
    <div
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 pb-6"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <div>
        <div
          className="font-mono text-[11.5px] uppercase tracking-[0.16em] mb-3.5 flex items-center gap-2.5"
          style={{ color: 'var(--color-accent)' }}
        >
          <span
            className="inline-block w-[22px] h-px"
            style={{ background: 'var(--color-accent)' }}
          />
          <span>
            // {number} · {eyebrow}
          </span>
        </div>
        <h2
          className="font-semibold leading-[1.12]"
          style={{
            fontSize: 'clamp(28px, 3.6vw, 40px)',
            letterSpacing: '-0.028em',
          }}
        >
          {title}
        </h2>
        {sub && (
          <p
            className="mt-2.5 max-w-[540px]"
            style={{
              color: 'var(--color-text-2)',
              fontSize: '15.5px',
              lineHeight: 1.6,
            }}
          >
            {sub}
          </p>
        )}
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="font-mono text-[13px] no-underline flex items-center gap-2 flex-shrink-0 transition-colors hover:text-[color:var(--color-accent)]"
          style={{ color: 'var(--color-text-2)' }}
        >
          <span style={{ color: 'var(--color-text-mute)' }}>[</span>
          {linkLabel}
          <span style={{ color: 'var(--color-text-mute)' }}>]</span>
        </Link>
      )}
    </div>
  );
}
