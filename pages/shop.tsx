import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Shop: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Shoping Page of Switcher" />
      </Head>
      <div>
        <h1>Shop</h1>
      </div>
    </Layout>
  );
};

export default Shop;
