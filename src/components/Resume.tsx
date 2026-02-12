import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import { ExperienceCard } from '@/components/ExperienceCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolsCard } from '@/components/ToolsCard';

import { education, experience, tools } from '@/constants';

export function Resume() {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='resume'
    >
      <SectionHeader
        subtitle='Resume'
        title='Education and practical experience'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        With a background in Computer Science and hands-on experience in
        software development, I've worked on diverse projects ranging from
        landing pages to SaaS dashboards. Each project has strengthened my focus
        on building clean, functional, and user-friendly digital experiences
      </motion.p>
      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {education.map((item, index) => (
              <ExperienceCard
                key={index}
                item={item}
              />
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>
          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((item, index) => (
              <ExperienceCard
                key={index}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <div className='my-16'>
        <motion.h2
          variants={fadeUp}
          className='text-3xl font-semibold mb-8 capitalize'
        >
          My favorite tools
        </motion.h2>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
          className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5'
        >
          {tools.map((tool, index) => (
            <ToolsCard
              key={index}
              tool={tool}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
