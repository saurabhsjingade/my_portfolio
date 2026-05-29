import Link from 'next/link';
import { site } from '@/data/site';

const navLinks = [
  { href: '/#work', label: 'work' },
  { href: '/#research', label: 'research' },
  { href: '/#about', label: 'about' },
  { href: '/writing', label: 'writing' },
  { href: '/#contact', label: 'contact' },
];

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: 'rgba(5, 8, 16, 0.72)',
        borderBottom: '1px solid rgba(26, 33, 56, 0.6)',
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-[13.5px] font-medium tracking-tight no-underline"
          style={{ color: 'var(--color-text)' }}
        >
          <span className="w-[18px] h-[18px] flex-shrink-0">
            <svg viewBox="0 0 20 20" fill="none">
              <rect
                x="1"
                y="1"
                width="18"
                height="18"
                rx="4"
                stroke="#4A8EFF"
                strokeWidth="1.4"
              />
              <circle cx="10" cy="10" r="3" fill="#4A8EFF" />
              <circle
                cx="10"
                cy="10"
                r="6"
                stroke="#4A8EFF"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
            </svg>
          </span>
          <span>
            <span style={{ color: 'var(--color-text-3)' }}>~/</span>
            <span>{site.handle}</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-7 list-none font-mono text-[13px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="no-underline transition-colors hover:text-[color:var(--color-text)]"
                style={{ color: 'var(--color-text-2)' }}
              >
                <span style={{ color: 'var(--color-text-mute)' }}>/</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[12.5px] px-3.5 py-2 rounded-md no-underline transition-colors"
          style={{
            color: 'var(--color-text-2)',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-2)',
          }}
        >
          resume.pdf ↓
        </a>
      </div>
    </nav>
  );
}
