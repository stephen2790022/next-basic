import React from 'react';
import Head from 'next/head';
import { Layout } from '../../components/layout'

const CodeRegion = ({ data }) => {
  return (
    <>
      {
        data &&
        <>
          <Head>
            <title>{data.nom}</title>
          </Head>
          <Layout>
            <h1>Region: {data.nom}</h1>
            <p>code: {data.code}</p>
          </Layout>
        </>
      }
    </>
  );
};

export const getServerSideProps = async (context) => {
  const code = context.params.code;
  const response = await fetch(`https://geo.api.gouv.fr/regions/${code}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}
export default CodeRegion;