import Lenis from 'lenis';
import { useEffect } from 'react';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';

export function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function frameHandler(time: number) {
      lenis.raf(time);

      requestAnimationFrame(frameHandler);
    }

    requestAnimationFrame(frameHandler);
  }, []);

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
  );
}
