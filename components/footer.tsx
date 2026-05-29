import { site } from '@/data/site';

const contacts = [
  { label: 'email', value: site.email, href: site.social.email },
  {
    label: 'github',
    value: `${site.social.githubHandle} →`,
    href: site.social.github,
  },
  {
    label: 'linkedin',
    value: `${site.social.linkedinHandle} →`,
    href: site.social.linkedin,
  },
  {
    label: 'medium',
    value: `${site.social.mediumHandle} →`,
    href: site.social.medium,
  },
  {
    label: 'naukri',
    value: 'view profile →',
    href: site.social.naukri,
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-24 pb-12 mt-10"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-20">
          <div>
            <div
              className="font-medium leading-[1.2] mb-5"
              style={{
                fontSize: 'clamp(26px, 3.4vw, 38px)',
                letterSpacing: '-0.028em',
                marginBottom: '22px',
              }}
            >
              Hiring for{' '}
              <em
                style={{
                  fontStyle: 'normal',
                  color: 'var(--color-accent)',
                }}
              >
                networking, virtualization, or systems work?
              </em>
            </div>
            <p
              className="max-w-[440px]"
              style={{
                color: 'var(--color-text-2)',
                fontSize: '15.5px',
                lineHeight: 1.7,
              }}
            >
              Email is the best channel. I read everything, reply to most
              things, and respond fastest to specific questions about RDMA,
              hypervisors, or NIC-level performance work. Open to senior IC
              roles — India, remote, or Canada-based teams.
            </p>
          </div>

          <div>
            {contacts.map((contact, i) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'
                }
                className="flex items-center justify-between py-4 transition-all hover:pl-2 group no-underline text-inherit"
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  borderTop: i === 0 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <span
                  className="font-mono text-[12px] uppercase tracking-[0.13em]"
                  style={{ color: 'var(--color-text-3)' }}
                >
                  {contact.label}
                </span>
                <span
                  className="font-mono text-[14.5px] transition-colors group-hover:text-[color:var(--color-accent)]"
                  style={{ color: 'var(--color-text)' }}
                >
                  {contact.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 pt-7 font-mono text-[12px]"
          style={{
            borderTop: '1px solid var(--color-border)',
            color: 'var(--color-text-3)',
            letterSpacing: '0.04em',
          }}
        >
          <div className="flex items-center gap-3.5">
            <span>© 2026 saurabh jingade</span>
            <span>·</span>
            <span>bengaluru, in</span>
          </div>
          <div className="flex items-center gap-3.5">
            <span>built with next.js · vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
