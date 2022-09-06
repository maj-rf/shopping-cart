import { Hero } from '../components/Hero';
import util_styles from '../styles/utils.module.css';

export const Home = () => {
  return (
    <div className={util_styles.container}>
      <h1>Hello</h1>
      <Hero />
    </div>
  );
};
