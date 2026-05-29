export type ProjectStatus = 'active' | 'shipped' | 'archived';

export type Project = {
  slug: string;
  company: string;
  role: string;
  dateRange: string;
  domain: string;
  status: ProjectStatus;
  title: string;
  summary: string;
  metrics: Array<{ value: string; label: string }>;
  stack: string[];
  featured: boolean;
  links?: {
    repo?: string;
    live?: string;
    docs?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'catalina-smartnic-rdma',
    company: 'Catalina Systems',
    role: 'Senior Software Engineer',
    dateRange: '2026 — present',
    domain: 'data path',
    status: 'active',
    title: 'SmartNIC validation and RDMA performance at line rate',
    summary:
      "Building end-to-end validation for SmartNIC system behavior across Linux and KVM — covering NFSoRDMA, NVMeOF, RDMA micro-benchmarks (RPING, PINGPONG), and DPDK / SoftRoCE paths. Latency, throughput, PPS, and CPU metrics measured at the kernel and user-space boundaries; manual probes hardened into Python + PyTest automation.",
    metrics: [
      { value: '100G', label: 'line rate target' },
      { value: 'RoCE / SoftRoCE', label: 'rdma transports' },
      { value: 'linux + kvm', label: 'environments' },
    ],
    stack: [
      'SmartNIC (RNIC)',
      'RDMA',
      'RoCE',
      'NFSoRDMA',
      'NVMeOF',
      'DPDK',
      'Linux kernel',
      'KVM',
      'Docker',
      'Python',
      'PyTest',
    ],
    featured: true,
  },
  {
    slug: 'fortinet-fortios-benchmark',
    company: 'Fortinet',
    role: 'Software Release QA Specialist',
    dateRange: '2022 — 2023',
    domain: 'burnaby, canada',
    status: 'shipped',
    title: 'FortiOS benchmark testing at 100G across hypervisors',
    summary:
      "Built a benchmark testing environment from scratch in Fortinet's data center — assembled Dell EMC servers, FortiGate appliances, and Spirent Avalanche traffic generators. Ran FortiOS regression across ESXi and KVM, tuning CPU affinity for SR-IOV, IPsec, SSL-VPN, DPDK, and Proxy AV paths. Wrote auto-scripts for FGT configuration deployment across hypervisor environments.",
    metrics: [
      { value: '10G / 100G', label: 'nic loads' },
      { value: 'intel · mlx · bcm', label: 'nic vendors' },
      { value: 'esxi + kvm', label: 'hypervisors' },
    ],
    stack: [
      'FortiOS',
      'FortiGate',
      'Spirent Avalanche',
      'SR-IOV',
      'DPDK',
      'IPsec',
      'SSL-VPN',
      'CPU affinity',
      'Python',
    ],
    featured: true,
  },
  {
    slug: 'motorola-wave-kvm-migration',
    company: 'Motorola Solutions',
    role: 'Senior Virtualization Engineer',
    dateRange: '2025',
    domain: 'virtualization',
    status: 'shipped',
    title: 'WAVE Tactical: VMware → RHEL KVM migration',
    summary:
      "Led validation of Motorola's WAVE Tactical communications product migration from VMware ESXi to RHEL KVM. Deployed and tested across Dell and HP server hardware, authored test plans and customer-facing FRD / SDD documents, and partnered with engineering on bug triage through peer review.",
    metrics: [
      { value: 'VMware → KVM', label: 'hypervisor migration' },
      { value: 'dell + hp', label: 'server validation' },
      { value: 'frd + sdd', label: 'docs authored' },
    ],
    stack: ['RHEL KVM', 'VMware ESXi', 'Tactical comms', 'Test planning', 'FRD / SDD'],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
