import { Hero } from '../components/Home/Hero';
import { Footer } from '../components/Home/Footer';
import { Featured } from '../components/Home/Featured';

export const Home = (): JSX.Element => {
  return (
    <div>
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
};
