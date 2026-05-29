export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string | null;
  short: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Catalina Systems',
    role: 'Senior Software Engineer',
    location: 'Bengaluru, India',
    start: 'Feb 2026',
    end: null,
    short: 'SmartNIC validation, RDMA, NFSoRDMA, NVMeOF across Linux and KVM.',
    bullets: [
      'SmartNIC system validation and automation for high-performance networking and storage across Linux and KVM environments.',
      'RDMA and data-path testing — NFSoRDMA validation, RDMA micro-benchmarks (RPING, PINGPONG), and performance analysis across kernel, DPDK, and SoftRoCE paths.',
      'Python + PyTest automation and low-level debugging across Linux, RDMA, and storage stacks (NFS, iSCSI, NVMe) — covering latency, throughput, PPS, and CPU metrics.',
    ],
  },
  {
    company: 'ACL Digital · Motorola Solutions',
    role: 'Senior Virtualization Engineer',
    location: 'India',
    start: 'Feb 2025',
    end: 'Dec 2025',
    short: 'VMware → KVM migration of the WAVE Tactical product.',
    bullets: [
      'Migrated the WAVE Tactical Product from VMware to RHEL KVM, including virtualization setup, deployment testing on Dell and HP servers, and debugging issues based on FRD and SDD.',
      'Authored test plans and test cases; reviewed customer-facing documents (FRD and SDD) and participated in peer review.',
    ],
  },
  {
    company: 'Isha Foundation',
    role: 'Volunteer · Yoga Teacher and Program Coordinator',
    location: 'Vancouver, Canada · McMinnville, USA',
    start: 'Sep 2023',
    end: 'Oct 2024',
    short: 'A 16-month volunteer block — teaching Isha yoga, coordinating programs at scale.',
    bullets: [
      'Taught Upa-yoga and Isha Kriya sessions to over 150 participants.',
      'Coordinated Inner Engineering Total programs and city promotion outreach engaging 10,000+ participants.',
      'Set up and managed Cisco Firepower 1010 (FDM) for the Isha Institute of Inner-Science network — security policies, NAT rules, geolocation restrictions, and Snort-based IDS — sustaining >95% uptime.',
    ],
  },
  {
    company: 'Fortinet',
    role: 'Software Release QA Specialist · Benchmark Team (R&D)',
    location: 'Burnaby, Canada',
    start: 'May 2022',
    end: 'Aug 2023',
    short: 'FortiOS benchmark testing at 100G across NIC vendors and hypervisors.',
    bullets: [
      "Built a benchmark testing environment from scratch in Fortinet's data center — Dell EMC servers, FortiGate appliances, Fortinet APs, L1 switching, and Spirent Avalanche.",
      'Performed benchmark regression on FortiOS across ESXi and KVM, covering CPU cores and NICs from Intel, Mellanox, and Broadcom, for 10G and 100G loads — manual and automated.',
      'Wrote and maintained auto-scripts; troubleshot FortiGate config and deployment across hypervisors.',
      'Optimized FortiOS performance via CPU affinity tuning for better resource utilization and load balancing.',
      'Created test scenarios for FortiOS features — throughput, concurrency, CPS, log, Proxy AV, DLP, Flow AV, SR-IOV, IPv6, DPDK, non-SR-IOV, IPsec, SSL-VPN.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer · Senior Network Engineer',
    location: 'Bengaluru, India',
    start: 'May 2021',
    end: 'Apr 2022',
    short: 'Cisco BGP/OSPF across 15+ sites, Python network automation.',
    bullets: [
      'Configured and maintained Cisco routers and switches across 15+ sites using L2/L3 protocols; automated tests in Python.',
      'Implemented BGP and OSPF routing with network automation; improved performance and cut latency by 20% via QA validation.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer · Junior Network Engineer',
    location: 'Bengaluru, India',
    start: 'Jan 2018',
    end: 'Aug 2019',
    short: "Juniper SRX firewall management; Zscaler VPN for 500+ users.",
    bullets: [
      "Managed client's Juniper SRX firewalls, enforcing security policies and mitigating cyber threats by 30%.",
      'Administered Zscaler VPN solutions, ensuring secure vendor access for 500+ users across multiple geographies.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Assistant System Engineer · Network Administrator',
    location: 'Bengaluru, India',
    start: 'Mar 2017',
    end: 'Dec 2017',
    short: 'Cisco device implementation and tuning for security and performance.',
    bullets: [
      'Assisted in implementing and configuring Cisco devices, tuning them for optimal security and performance.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'System Engineer Trainee · Network Security',
    location: 'Bengaluru, India',
    start: 'Dec 2016',
    end: 'Feb 2017',
    short: 'Initial Learning Program — vendor configurations on Cisco and Juniper.',
    bullets: [
      'Supervised a team of six to build and diagnose issues in small/medium-sized networks.',
      'Completed ILP — 12 weeks of training in configuring standard network protocols on Cisco and Juniper.',
    ],
  },
];
