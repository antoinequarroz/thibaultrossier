import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Counter from '../src/components/Counter';
import Home from '../src/components/Home';
import Resume from '../src/components/Resume';
import Testimonial from '../src/components/Testimonial';
import Layout from '../src/layouts/Layout';
import { useEffect } from 'react';
import Calendrier from '../src/components/Calendrier';
import Sponsors from '../src/components/Sponsors';
import Shop from '../src/components/Shop';
const Portfolio = dynamic(() => import('../src/components/Portfolio'), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('dark');
  }, []);
  return (
    <Layout>
      <Home />
      <About />
      <Counter />
      <Resume />
      <Testimonial />
      <Calendrier />
      <Sponsors />
      <Shop />
      <Contact />
    </Layout>
  );
};

export default Index;
