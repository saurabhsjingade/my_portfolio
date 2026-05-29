import { Hero } from '@/components/hero';
import { CompaniesStrip } from '@/components/companies-strip';
import { SectionHeader } from '@/components/section-header';
import { WorkCard } from '@/components/work-card';
import { ResearchCard } from '@/components/research-card';
import { About } from '@/components/about';
import { WritingSection } from '@/components/writing-section';
import { featuredProjects } from '@/data/projects';
import { research } from '@/data/capabilities';

export default function HomePage() {
  return (
    <div className="container-narrow">
      <Hero />
      <CompaniesStrip />

      <section id="work" className="py-24">
        <SectionHeader
          number="0x01"
          eyebrow="selected work"
          title="Case studies"
          sub="Three projects across SmartNIC validation, hypervisor migration, and high-throughput network benchmark."
          linkHref="/work"
          linkLabel="all_work →"
        />
        <div className="grid gap-5">
          {featuredProjects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="research" className="py-24">
        <SectionHeader
          number="0x02"
          eyebrow="published research"
          title="Peer review"
        />
        <div className="grid gap-5">
          {research.map((entry) => (
            <ResearchCard key={entry.url} entry={entry} />
          ))}
        </div>
      </section>

      <section id="about" className="py-24">
        <SectionHeader number="0x03" eyebrow="about" title="How I work" />
        <About />
      </section>

      <section id="writing" className="py-24">
        <SectionHeader
          number="0x04"
          eyebrow="writing"
          title="Notes from the data path"
          sub="Long-form on networking, validation, and the strange edges of high-performance systems. Pulling from Medium and adding new posts under MDX in the new site."
          linkHref="/writing"
          linkLabel="medium.com/@hakarot.teh →"
        />
        <WritingSection />
      </section>
    </div>
  );
}
