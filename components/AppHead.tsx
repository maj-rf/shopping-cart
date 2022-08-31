import Head from 'next/head';

type AppHeadProps = {
  title: string;
  content: string;
};

export default function AppHead(props: AppHeadProps): JSX.Element {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
