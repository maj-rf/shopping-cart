import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Featured } from '../components/Featured';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
};
