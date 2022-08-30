import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Cart: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Cart Page of Switcher" />
      </Head>
      <div>
        <h1>Cart: 0</h1>
      </div>
    </Layout>
  );
};

export default Cart;
