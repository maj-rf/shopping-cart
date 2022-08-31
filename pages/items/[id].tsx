import Layout from '../../components/Layout';
import Head from 'next/head';

export default function Item() {
  return (
    <Layout>
      <Head>
        <title>Item Name</title>
      </Head>
      <article>
        <h2>Item Name</h2>
      </article>
    </Layout>
  );
}
