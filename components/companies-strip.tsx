const companies = [
  { name: 'Catalina Systems', dateRange: '2026 — present' },
  { name: 'Motorola Solutions', dateRange: '2025' },
  { name: 'Fortinet', dateRange: '2022 — 2023' },
  { name: 'TCS', dateRange: '2016 — 2022' },
];

export function CompaniesStrip() {
  return (
    <section
      className="py-14"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="text-center font-mono text-[11.5px] uppercase tracking-[0.18em] mb-8"
        style={{ color: 'var(--color-text-3)' }}
      >
        <span style={{ color: 'var(--color-text-mute)' }}>—</span>
        <span className="mx-3.5">where I&apos;ve worked</span>
        <span style={{ color: 'var(--color-text-mute)' }}>—</span>
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 rounded-xl overflow-hidden"
        style={{
          background: 'var(--color-bg-2)',
          border: '1px solid var(--color-border)',
        }}
      >
        {companies.map((company, i) => (
          <div
            key={company.name}
            className="text-center py-7 px-5 transition-colors hover:bg-[color:var(--color-surface)]"
            style={{
              borderRight:
                i < companies.length - 1
                  ? '1px solid var(--color-border)'
                  : 'none',
            }}
          >
            <div
              className="font-medium text-[15px] mb-1.5"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.005em' }}
            >
              {company.name}
            </div>
            <div
              className="text-[11.5px] font-mono"
              style={{
                color: 'var(--color-text-3)',
                letterSpacing: '0.02em',
              }}
            >
              {company.dateRange}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
