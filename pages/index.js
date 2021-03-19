import React, { useEffect } from 'react';
import { Layout } from '../components/layout';
import Link from 'next/link';
import Head from 'next/head'

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: '1px solid black',
  }
  return (
    <>
      <Head>
        <title>Liste des regions</title>
      </Head>
      <Layout>
        <div className="container">
          <h1>Cette page utilise getServerSideProps</h1>
          {data && data.map((region) => (
            <div style={styles} key={region.code}>
              <Link href='/region/[code]' as={`/region/${region.code}`} passHref>
                <h1>{region.nom}</h1>
              </Link>
              <p>{region.code}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("https://geo.api.gouv.fr/regions");
  const data = await response.json();
  return {
    props: {
      data
    }
  }
}
export default Home;

