import type { Metadata } from 'next';
import { SectionHeader } from '@/components/section-header';
import { WorkCard } from '@/components/work-card';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected case studies across SmartNIC validation, hypervisor migration, and high-throughput network benchmarking.',
};

export default function WorkPage() {
  return (
    <div className="container-narrow pt-24 pb-24">
      <SectionHeader
        number="0x01"
        eyebrow="all work"
        title="Case studies"
        sub="Every project in one place. Click through for the full write-up."
      />
      <div className="grid gap-5">
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
