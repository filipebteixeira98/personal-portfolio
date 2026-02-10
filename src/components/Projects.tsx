import { motion } from 'motion/react';

import { staggerContainer } from '@/lib/animations';

import { projectsData } from '@/constants';

import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';

export function Projects() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        title='My featured projects'
        subtitle='Projects'
      />
      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
