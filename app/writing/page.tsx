import type { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Engineering notes on networking, validation, and the strange edges of high-performance systems.',
};

export default function WritingPage() {
  return (
    <div className="container-narrow pt-24 pb-24">
      <SectionHeader
        number="0x04"
        eyebrow="writing"
        title="Notes from the data path"
        sub="Long-form on networking, virtualization, RDMA, and the strange edges of high-performance systems."
        linkHref={site.social.medium}
        linkLabel="medium archive →"
      />

      <div
        className="rounded-xl p-9 text-center"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        <div
          className="font-mono text-[11.5px] uppercase tracking-[0.15em] mb-3.5"
          style={{ color: 'var(--color-text-3)' }}
        >
          mdx-powered · coming soon
        </div>
        <p
          className="mx-auto max-w-[520px]"
          style={{
            color: 'var(--color-text-2)',
            fontSize: '15px',
            lineHeight: 1.65,
          }}
        >
          New posts will land here as MDX files in{' '}
          <code>content/writing/</code>. See the README for the post template.
        </p>
      </div>
    </div>
  );
}
