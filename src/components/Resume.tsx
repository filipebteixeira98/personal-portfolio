import { motion } from 'motion/react';
import { useMemo } from 'react';

import { ExperienceCard } from '@/components/ExperienceCard';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolsCard } from '@/components/ToolsCard';

import { education, experience, tools } from '@/constants';

import { fadeUp, staggerContainer } from '@/lib/animations';

type Identifiable<T> = T & { id: string };

const getUniqueIdentifier = <T,>(item: T): Identifiable<T> => ({
  ...item,
  id: crypto.randomUUID(),
});

export function Resume() {
  const formattedEducation = useMemo(
    () => education.map(getUniqueIdentifier),
    [],
  );
  const formattedExperience = useMemo(
    () => experience.map(getUniqueIdentifier),
    [],
  );
  const formattedTools = useMemo(() => tools.map(getUniqueIdentifier), []);

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
        Turning ideas into digital reality. As a Full-Stack Developer, I
        specialize in crafting high-performance, scalable applications using
        React, Node.js, and TypeScript. I don't just write code; I build systems
        with a focus on technical discipline, clean architecture, and long-term
        maintainability. I am driven by a commitment to rigorous standards and
        delivering results that scale
      </motion.p>
      <div className='grid gap-x-10 my-16 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <h2 className='text-3xl font-semibold mb-8'>Education</h2>
          <div className='space-y-8 border-l border-neutral-700 pl-6'>
            {formattedEducation.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className='text-3xl font-semibold mb-8'>Work Experience</h2>
          <div className='space-y-8 border-l border-border pl-6'>
            {formattedExperience.map((item) => (
              <ExperienceCard
                key={item.id}
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
          {formattedTools.map((item) => (
            <ToolsCard
              key={item.id}
              tool={item}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
