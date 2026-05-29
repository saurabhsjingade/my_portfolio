export const site = {
  name: 'Saurabh Jingade',
  handle: 'saurabh-jingade',
  title: 'Saurabh Jingade — Network Systems Engineer',
  description:
    'Network systems engineer working close to the wire — SmartNIC validation, RDMA performance, virtualization, and the automation that holds them together.',
  url: 'https://saurabhjingade.com',
  email: 'saurabhsjingade@gmail.com',
  location: 'Bengaluru, India',
  availability: 'open to senior IC · networking + systems',
  authorizedIn: ['IN', 'CA', 'US'] as const,
  noticePeriod: '≤ 15 days',
  languages: ['English', 'Hindi', 'Kannada', 'Marathi'] as const,
  social: {
    email: 'mailto:saurabhsjingade@gmail.com',
    github: 'https://github.com/saurabhsjingade',
    githubHandle: '@saurabhsjingade',
    linkedin: 'https://www.linkedin.com/in/saurabh-jingade',
    linkedinHandle: 'in/saurabh-jingade',
    medium: 'https://medium.com/@hakarot.teh',
    mediumHandle: '@hakarot.teh',
    naukri: 'https://www.naukri.com/profile/saurabh-jingade', // update with public URL
  },
};

export type Site = typeof site;
