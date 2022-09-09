import utils from '../styles/utils.module.css';
import styles from '../styles/hero.module.css';
import heroImg from '../assets/play-games.png';
import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <section className={utils.container}>
      <div className={styles.hero_container}>
        <img src={heroImg} alt="guy playing games on tv" />
        <div>
          <h1 className={styles.hero_heading}>Toss a coin to your Switcher!</h1>
          <p>
            Switcher is your one-stop online Shop dedicated for Nintendo Switch
            Products. Be up-to-date with the latest Switch games and
            accessories. Pick, Add to Cart, and products will be delivered{' '}
            <s>magically</s> at your doorsteps. Get Switched!
          </p>
        </div>
      </div>
      <button className={styles.hero_button}>
        <Link to="/shop">Shop Now</Link>
      </button>
    </section>
  );
};
