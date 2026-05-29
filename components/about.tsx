import Image from 'next/image';
import { site } from '@/data/site';
import { capabilities } from '@/data/capabilities';

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14 items-start">
      <div className="md:sticky md:top-24 max-w-[240px] md:max-w-none">
        <div
          className="aspect-square overflow-hidden rounded-xl relative"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-2)',
            filter: 'contrast(1.02) saturate(0.92)',
          }}
        >
          <Image
            src="/portrait.jpg"
            alt="Saurabh Jingade portrait"
            width={600}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, transparent 60%, rgba(5, 8, 16, 0.5) 100%)',
            }}
          />
        </div>
        <div
          className="mt-3.5 font-mono text-[11.5px] leading-[1.7]"
          style={{ color: 'var(--color-text-3)' }}
        >
          <PortraitRow label="location" value={site.location.toLowerCase()} />
          <PortraitRow
            label="auth"
            value={site.authorizedIn.map((c) => c.toLowerCase()).join(' · ')}
          />
          <PortraitRow label="notice" value={site.noticePeriod} />
          <PortraitRow
            label="langs"
            value={site.languages
              .map((l) => l.slice(0, 2).toLowerCase())
              .join(' · ')}
          />
        </div>
      </div>

      <div>
        <div className="" style={{ marginBottom: '40px' }}>
          <p
            style={{
              color: 'var(--color-text-2)',
              fontSize: '16px',
              lineHeight: 1.75,
              marginBottom: '22px',
            }}
          >
            I work close to the metal — the place where packets meet kernels,
            where the difference between a working system and a broken one is a
            misaligned ring buffer, a wrong CPU pinning, or a Mellanox counter
            that nobody thought to read.
          </p>
          <p
            style={{
              color: 'var(--color-text-2)',
              fontSize: '16px',
              lineHeight: 1.75,
              marginBottom: '22px',
            }}
          >
            My background is unusual in a useful way. I started in{' '}
            <Strong>network operations</Strong> at TCS, configuring Cisco and
            Juniper kit across fifteen-plus sites with BGP and OSPF in
            production. Then a <Strong>masters in internetworking</Strong> at
            the University of Alberta with a cybersecurity focus, including a
            published paper on 5G attack mitigation. Then{' '}
            <Strong>Fortinet&apos;s benchmark team</Strong> in Burnaby, where I
            learned how to make 100G hardware actually deliver 100G across NIC
            vendors and hypervisors. <Strong>Hypervisor migration work</Strong>{' '}
            at Motorola Solutions — VMware to KVM, validated across Dell and
            HP. Now <Strong>SmartNIC and RDMA validation</Strong> at Catalina,
            which is the closest I&apos;ve been to the actual data path and is
            where I want my career to go.
          </p>
          <p
            style={{
              color: 'var(--color-text-2)',
              fontSize: '16px',
              lineHeight: 1.75,
              marginBottom: '22px',
            }}
          >
            The throughline is the same question in different costumes:{' '}
            <Strong>
              does this high-performance system actually do what the spec
              claims, at scale, under load, in production?
            </Strong>{' '}
            Most of my job is making that question answerable — building the
            rigs, writing the automation, reading the counters, and writing
            the docs that let other engineers trust the answer.
          </p>
          <p
            style={{
              color: 'var(--color-text-2)',
              fontSize: '16px',
              lineHeight: 1.75,
            }}
          >
            Outside of work, I taught Isha yoga (Upa-yoga, Isha Kriya) to over
            150 participants and coordinated programs for 10,000+ in Vancouver
            — a 16-month volunteer block I took deliberately. It taught me
            more about running a calm operation under load than any sprint
            review ever has.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-5 py-4 items-baseline"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <div
                className="font-mono text-[11.5px] uppercase tracking-[0.12em]"
                style={{ color: 'var(--color-text-3)' }}
              >
                {cap.label}
              </div>
              <div
                className="font-mono"
                style={{
                  fontSize: '14.5px',
                  color: 'var(--color-text)',
                  lineHeight: 1.55,
                }}
              >
                {cap.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < cap.items.length - 1 && (
                      <span
                        style={{
                          color: 'var(--color-text-mute)',
                          margin: '0 6px',
                        }}
                      >
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>
      {children}
    </strong>
  );
}

function PortraitRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-1">
      <span style={{ color: 'var(--color-text-mute)' }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
