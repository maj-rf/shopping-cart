import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import AppHead from '../components/AppHead';

const Shop: NextPage = () => {
  return (
    <Layout>
      <AppHead title="Shop" content="Shop Page of Switcher" />
      <section>
        <h1>Shop</h1>
        <ul>
          <li>
            <div>
              <h2>
                <Link href="/items/[id]">Item 1</Link>
              </h2>
            </div>
          </li>
          <li>
            <div>
              <h2>
                <Link href="/">Item 2</Link>
              </h2>
            </div>
          </li>
          <li>
            <div>
              <h2>
                <Link href="/">Item 3</Link>
              </h2>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Shop;
