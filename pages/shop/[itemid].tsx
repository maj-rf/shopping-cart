import Layout from '../../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Item() {
  const router = useRouter();
  const itemId = router.query.itemid;
  return (
    <>
      <Head>
        <title>{itemId}</title>
      </Head>
      <article>
        <h2>Item: {itemId}</h2>
      </article>
    </>
  );
}
