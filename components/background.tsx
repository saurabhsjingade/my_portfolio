export function Background() {
  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <svg
        className="fixed inset-0 z-0 pointer-events-none opacity-55"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="rgba(74, 142, 255, 0.18)" strokeWidth="0.7">
          <line x1="180" y1="160" x2="430" y2="240" />
          <line x1="430" y1="240" x2="720" y2="180" />
          <line x1="720" y1="180" x2="980" y2="280" />
          <line x1="980" y1="280" x2="1340" y2="200" />
          <line x1="430" y1="240" x2="520" y2="480" />
          <line x1="980" y1="280" x2="1120" y2="540" />
          <line x1="180" y1="160" x2="260" y2="420" />
          <line x1="1340" y1="200" x2="1420" y2="460" />
        </g>
        <g fill="rgba(74, 142, 255, 0.55)">
          {[
            { cx: 180, cy: 160, r: 2.5, delay: 0 },
            { cx: 430, cy: 240, r: 2, delay: 0.7 },
            { cx: 720, cy: 180, r: 2.5, delay: 1.4 },
            { cx: 980, cy: 280, r: 2, delay: 2.1 },
            { cx: 1340, cy: 200, r: 2.5, delay: 2.8 },
            { cx: 260, cy: 420, r: 2, delay: 3.5 },
            { cx: 520, cy: 480, r: 2, delay: 1.0 },
            { cx: 1120, cy: 540, r: 2, delay: 2.5 },
            { cx: 1420, cy: 460, r: 2, delay: 0.4 },
          ].map((node, i) => (
            <circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              className="animate-node-float"
              style={{ animationDelay: `${node.delay}s` }}
            />
          ))}
        </g>
      </svg>
    </>
  );
}
