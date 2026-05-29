type TermLine = {
  type: 'cmd' | 'out' | 'blank' | 'cursor';
  parts?: Array<{ text: string; color?: 'prompt' | 'host' | 'cmd' | 'out' | 'amber' | 'green' | 'rose' | 'comment' }>;
};

const COLOR_VAR: Record<string, string> = {
  prompt: 'var(--color-term-cyan)',
  host: 'var(--color-accent-2)',
  cmd: 'var(--color-text)',
  out: 'var(--color-text-2)',
  amber: 'var(--color-term-amber)',
  green: 'var(--color-term-green)',
  rose: 'var(--color-term-rose)',
  comment: 'var(--color-text-mute)',
};

const lines: TermLine[] = [
  {
    type: 'cmd',
    parts: [
      { text: '→ ', color: 'prompt' },
      { text: 'saurabh@catalina', color: 'host' },
      { text: ':~$ ', color: 'cmd' },
      { text: 'whoami --role', color: 'cmd' },
    ],
  },
  {
    type: 'out',
    parts: [{ text: 'senior software engineer · data-path validation', color: 'out' }],
  },
  { type: 'blank' },
  {
    type: 'cmd',
    parts: [
      { text: '→ ', color: 'prompt' },
      { text: 'saurabh@catalina', color: 'host' },
      { text: ':~$ ', color: 'cmd' },
      { text: 'cat ~/.current-focus', color: 'cmd' },
    ],
  },
  { type: 'out', parts: [{ text: 'working_on:', color: 'out' }] },
  {
    type: 'out',
    parts: [
      { text: '  - ', color: 'out' },
      { text: 'NFSoRDMA validation', color: 'amber' },
      { text: '  ', color: 'out' },
      { text: '# manual + automated', color: 'comment' },
    ],
  },
  {
    type: 'out',
    parts: [
      { text: '  - ', color: 'out' },
      { text: 'RDMA micro-benchmarks', color: 'amber' },
      { text: '  ', color: 'out' },
      { text: '# RPING, PINGPONG', color: 'comment' },
    ],
  },
  {
    type: 'out',
    parts: [
      { text: '  - ', color: 'out' },
      { text: 'DPDK + SoftRoCE paths', color: 'amber' },
    ],
  },
  {
    type: 'out',
    parts: [
      { text: '  - ', color: 'out' },
      { text: 'Linux + KVM environments', color: 'amber' },
    ],
  },
  {
    type: 'out',
    parts: [
      { text: 'measuring: ', color: 'out' },
      { text: 'latency · throughput · PPS · CPU', color: 'green' },
    ],
  },
  { type: 'blank' },
  {
    type: 'cmd',
    parts: [
      { text: '→ ', color: 'prompt' },
      { text: 'saurabh@catalina', color: 'host' },
      { text: ':~$ ', color: 'cmd' },
      { text: 'uptime --career', color: 'cmd' },
    ],
  },
  {
    type: 'out',
    parts: [
      { text: '4 months at catalina · 9 years in networking · ', color: 'out' },
      { text: '∞ tabs open', color: 'rose' },
    ],
  },
  {
    type: 'cursor',
    parts: [
      { text: '→ ', color: 'prompt' },
      { text: 'saurabh@catalina', color: 'host' },
      { text: ':~$ ', color: 'cmd' },
    ],
  },
];

export function Terminal() {
  return (
    <div
      role="img"
      aria-label="Terminal output showing current focus areas — NFSoRDMA validation, RDMA micro-benchmarks, DPDK and SoftRoCE paths, Linux and KVM environments"
      className="mb-11 max-w-[720px]"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-2)',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: '13.5px',
        lineHeight: 1.65,
        boxShadow:
          '0 24px 60px -20px rgba(0, 0, 0, 0.6), 0 0 1px rgba(74, 142, 255, 0.18) inset',
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: 'var(--color-bg-2)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <span
          className="w-[11px] h-[11px] rounded-full"
          style={{ background: '#2A2F3E' }}
        />
        <span
          className="w-[11px] h-[11px] rounded-full"
          style={{ background: '#2A2F3E' }}
        />
        <span
          className="w-[11px] h-[11px] rounded-full"
          style={{ background: '#2A2F3E' }}
        />
        <span
          className="ml-auto mr-auto text-[11px] tracking-wider"
          style={{ color: 'var(--color-text-3)' }}
        >
          saurabh@catalina ~ /current-focus
        </span>
        <span className="w-[30px]" />
      </div>
      <div
        className="px-5 pt-4 pb-5"
        style={{ color: 'var(--color-text)' }}
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className="block whitespace-pre-wrap break-words"
          >
            {line.type === 'blank' ? (
              <>&nbsp;</>
            ) : (
              <>
                {line.parts?.map((part, j) => (
                  <span
                    key={j}
                    style={{ color: part.color ? COLOR_VAR[part.color] : undefined }}
                  >
                    {part.text}
                  </span>
                ))}
                {line.type === 'cursor' && (
                  <span
                    className="inline-block w-2 h-3.5 ml-0.5 animate-blink"
                    style={{
                      background: 'var(--color-term-cyan)',
                      verticalAlign: '-2px',
                    }}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
