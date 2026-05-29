import Link from 'next/link';
import { Terminal } from './terminal';
import { site } from '@/data/site';

export function Hero() {
  return (
    <section className="pt-28 pb-24 relative">
      {/* Status pill */}
      <div
        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full mb-10 font-mono text-[12.5px]"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-2)',
          color: 'var(--color-text-2)',
        }}
      >
        <span
          className="w-[7px] h-[7px] rounded-full animate-pulse-dot flex-shrink-0"
          style={{
            background: 'var(--color-term-green)',
            boxShadow: '0 0 10px var(--color-term-green)',
          }}
        />
        <span>{site.availability}</span>
        <span style={{ color: 'var(--color-text-mute)' }}>·</span>
        <span>india / remote / canada</span>
      </div>

      {/* Name */}
      <h1
        className="heading-gradient font-semibold leading-[1.0] mb-8"
        style={{
          fontSize: 'clamp(46px, 7.2vw, 92px)',
          letterSpacing: '-0.045em',
        }}
      >
        {site.name}
      </h1>

      {/* Tagline */}
      <p
        className="max-w-[780px] mb-7 font-normal"
        style={{
          fontSize: 'clamp(20px, 2.4vw, 27px)',
          lineHeight: 1.4,
          letterSpacing: '-0.018em',
          color: 'var(--color-text-2)',
        }}
      >
        Network systems engineer working close to the wire —{' '}
        <span className="hl">
          SmartNIC validation, RDMA performance, virtualization
        </span>
        , and the automation that holds them together.
      </p>

      {/* Meta paragraph */}
      <p
        className="max-w-[720px] mb-11"
        style={{
          color: 'var(--color-text-3)',
          fontSize: '15px',
          lineHeight: 1.7,
        }}
      >
        Nine years across{' '}
        <strong style={{ color: 'var(--color-text-2)', fontWeight: 500 }}>
          networking infrastructure, hypervisors, and the data path
        </strong>
        . Currently at Catalina Systems on SmartNIC and RDMA system validation.
        Previously at Motorola Solutions migrating tactical comms from VMware to
        KVM, at Fortinet running 100G FortiOS benchmarks across Intel, Mellanox,
        and Broadcom NICs, and at TCS managing L2/L3 networks across 15+ sites.
        MS in Internetworking from the University of Alberta.
      </p>

      <Terminal />

      <div className="flex gap-3.5 flex-wrap">
        <Link
          href="#work"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-medium no-underline transition-all hover:-translate-y-px"
          style={{
            background: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          See selected work <span>→</span>
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-medium no-underline transition-colors"
          style={{
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border-2)',
          }}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
