import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';

import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';

export function About() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming complexity into effortless design'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Solving complex puzzles through clean code and thoughtful design. As a
        Full Stack Developer, I bridge the gap between back-end logic and
        front-end beauty. My mission is simple: to create digital products that
        feel natural and perform flawlessly
      </motion.p>
      <motion.p
        variants={fadeUp}
        className='mt-2 text-neutral-300'
      >
        Over the years, I’ve shaped web, brand, and product experiences using
        Figma, React, and Tailwind CSS. From architecting scalable design
        systems to perfecting a single button animation, I focus on making
        technology feel human, helpful, and simple
      </motion.p>
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button
          asChild
          className='mt-5'
        >
          <a href='#contact'>Contact me</a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
