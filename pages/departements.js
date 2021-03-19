import React from 'react';
import { Layout } from '../components/layout'
import Head from 'next/head'

const Departement = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: '1px solid black',
  }
  return (
    <>
      <Head>
        <title>Liste des departement</title>
      </Head>
      <Layout>
        {
          data.map((departement) => (
            <div key={departement.code} style={styles}>
              <h1>{departement.nom}</h1>
              <p> Code de departement: {departement.code}</p>
              <p> Code de la region: {departement.codeRegion}</p>
            </div>
          ))
        }
      </Layout>
    </>

  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://geo.api.gouv.fr/departements");
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}

export default Departement;