import type { NextPage } from 'next';
import Layout from '../components/Layout';
import AppHead from '../components/AppHead';

const Cart: NextPage = () => {
  return (
    <Layout>
      <AppHead title="Cart" content="Cart Page of Switcher" />
      <section>
        <h1>Cart: 0</h1>
      </section>
    </Layout>
  );
};

export default Cart;
