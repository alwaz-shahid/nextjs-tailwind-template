import { NextSeo } from 'next-seo';
import Layout from '../src/components/Layout';

export default function Home() {
  return (
    <>
      <NextSeo title='Home' />
      <Layout />
    </>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 1000000,
    props: {},
  };
}
