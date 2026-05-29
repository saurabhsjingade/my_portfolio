export const capabilities: Array<{ label: string; items: string[] }> = [
  {
    label: 'data path',
    items: ['RDMA', 'RoCE', 'DPDK', 'NFSoRDMA', 'NVMeOF', 'SR-IOV', 'SoftRoCE', 'iSCSI'],
  },
  {
    label: 'hypervisors',
    items: ['RHEL KVM', 'VMware ESXi', 'libvirt', 'Docker'],
  },
  {
    label: 'networking',
    items: ['TCP/IP', 'BGP', 'OSPF', 'STP', 'L2/L3', 'IPsec', 'SSL-VPN'],
  },
  {
    label: 'vendors',
    items: ['Fortinet', 'Cisco', 'Juniper', 'Intel', 'Mellanox', 'Broadcom'],
  },
  {
    label: 'automation',
    items: ['Python', 'PyTest', 'Spirent Avalanche', 'CyberFlood', 'shell'],
  },
  {
    label: 'platforms',
    items: ['Linux', 'UNIX', 'Windows'],
  },
  {
    label: 'certifications',
    items: [
      'Fortinet NSE 2',
      'TCM OSINT',
      'Jr. Penetration Tester',
      'Python Network Programming',
    ],
  },
];

export const certifications: Array<{
  name: string;
  issuer: string;
  date: string;
  url?: string;
}> = [
  {
    name: 'Python Network Programming for Network Engineers (Python 3)',
    issuer: 'Udemy',
    date: 'Jul 2025',
  },
  {
    name: 'Fortinet Network Security Expert Level 2: Certified Associate',
    issuer: 'Fortinet',
    date: 'Mar 2023',
  },
  {
    name: 'OSINT',
    issuer: 'TCM Security',
    date: 'Feb 2022',
  },
  {
    name: 'Jr. Penetration Tester',
    issuer: 'TryHackMe',
    date: 'Nov 2021',
  },
  {
    name: 'Advent of Cyber 2021',
    issuer: 'TryHackMe',
    date: '2021',
  },
];

export type ResearchEntry = {
  title: string;
  venue: string;
  date: string;
  url: string;
  summary: string;
  tags: string[];
};

export const research: ResearchEntry[] = [
  {
    title: 'Research, analysis, and implementation of security attacks in 5G and IoT',
    venue: 'University of Alberta · ERA Library',
    date: 'Published Apr 2021',
    url: 'https://era.library.ualberta.ca/items/704e42de-ad88-435b-b427-407ef4d49d1b',
    summary:
      'A study of the 5G network architecture and its evolution from prior generations, with simulated attacks (DoS, sinkhole, IMSI catchers) implemented in NetSIM and proposed mitigation strategies for both 5G and adjacent IoT deployments. Completed during my Masters at the University of Alberta and archived in the UAlberta ERA library.',
    tags: ['5G', 'IoT', 'Security', 'NetSIM'],
  },
];

export const education: Array<{
  degree: string;
  school: string;
  location: string;
  dateRange: string;
  gpa?: string;
}> = [
  {
    degree: 'MS, Internetworking (Cybersecurity)',
    school: 'University of Alberta',
    location: 'Edmonton, Canada',
    dateRange: 'Sep 2019 — Apr 2021',
    gpa: 'GPA 3.9 / 4',
  },
  {
    degree: 'BE, Telecommunications',
    school: 'Visvesvaraya Technological University',
    location: 'Bengaluru, India',
    dateRange: 'Sep 2012 — Jun 2016',
    gpa: 'GPA 3.3 / 4',
  },
];
