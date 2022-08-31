import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import AppHead from '../components/AppHead';

const Home: NextPage = () => {
  return (
    <Layout>
      <AppHead title="Home" content="Switcher Shopping Cart" />
      <section>
        <h1>Switcher</h1>
      </section>
    </Layout>
  );
};

export default Home;
