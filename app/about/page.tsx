import type { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { About as AboutBlock } from '@/components/about';
import { experience } from '@/data/experience';
import { education, certifications } from '@/data/capabilities';

export const metadata: Metadata = {
  title: 'About',
  description: 'How I work, where I trained, and where I have worked.',
};

export default function AboutPage() {
  return (
    <div className="container-narrow pt-24 pb-24">
      <SectionHeader number="0x03" eyebrow="about" title="How I work" />

      <AboutBlock />

      <section className="mt-24">
        <SectionHeader
          number="0x05"
          eyebrow="career"
          title="Experience"
          sub="Reverse chronological. Career break Sep 2023 — Feb 2025 was a deliberate volunteer block with the Isha Foundation."
        />
        <ol className="space-y-0">
          {experience.map((exp, i) => (
            <li
              key={`${exp.company}-${exp.start}`}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-5 md:gap-10 py-7"
              style={{
                borderBottom:
                  i < experience.length - 1
                    ? '1px solid var(--color-border)'
                    : 'none',
              }}
            >
              <div
                className="font-mono text-[12.5px] leading-relaxed"
                style={{ color: 'var(--color-text-3)' }}
              >
                <div style={{ color: 'var(--color-text-2)' }}>
                  {exp.start} — {exp.end ?? 'present'}
                </div>
                <div style={{ marginTop: 4 }}>{exp.location}</div>
              </div>
              <div>
                <h3
                  className="font-semibold mb-1.5 leading-tight"
                  style={{
                    fontSize: '19px',
                    letterSpacing: '-0.012em',
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  className="font-mono text-[13px] mb-4"
                  style={{ color: 'var(--color-accent-2)' }}
                >
                  {exp.company}
                </div>
                <p
                  className="mb-4"
                  style={{
                    color: 'var(--color-text-2)',
                    fontSize: '15.5px',
                    lineHeight: 1.65,
                  }}
                >
                  {exp.short}
                </p>
                <ul
                  className="space-y-2"
                  style={{ color: 'var(--color-text-2)', fontSize: '14.5px' }}
                >
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        className="flex-shrink-0 font-mono"
                        style={{ color: 'var(--color-text-mute)' }}
                      >
                        →
                      </span>
                      <span style={{ lineHeight: 1.65 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-24">
        <SectionHeader
          number="0x06"
          eyebrow="training"
          title="Education & certifications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div
              className="font-mono text-[11.5px] uppercase tracking-[0.15em] mb-5"
              style={{ color: 'var(--color-text-3)' }}
            >
              education
            </div>
            <ul className="space-y-6">
              {education.map((e) => (
                <li key={e.degree}>
                  <div
                    className="font-medium mb-1"
                    style={{ fontSize: '15.5px' }}
                  >
                    {e.degree}
                  </div>
                  <div
                    className="font-mono text-[13px]"
                    style={{ color: 'var(--color-accent-2)' }}
                  >
                    {e.school}
                  </div>
                  <div
                    className="font-mono text-[12px] mt-1"
                    style={{ color: 'var(--color-text-3)' }}
                  >
                    {e.dateRange}
                    {e.gpa && ` · ${e.gpa}`} · {e.location}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="font-mono text-[11.5px] uppercase tracking-[0.15em] mb-5"
              style={{ color: 'var(--color-text-3)' }}
            >
              certifications
            </div>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="pb-4"
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <div
                    className="font-medium mb-0.5"
                    style={{ fontSize: '14.5px' }}
                  >
                    {c.name}
                  </div>
                  <div
                    className="font-mono text-[12px]"
                    style={{ color: 'var(--color-text-3)' }}
                  >
                    {c.issuer} · {c.date}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
