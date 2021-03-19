import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout';
import useSWR from 'swr';
import Head from 'next/head'

const Profile = () => {
  const fetcher = url => fetch(url).then((response) => response.json())
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
  const styles = {
    main: {
      padding: 10,
      margin: 10,
      borderBottom: '1px solid black',
    }
  }
  if (error) return <h1>une erreur est survenue</h1>
  return (
    <>
      <Head>
        <title>Liste des Utilisateurs</title>
      </Head>
      <Layout>
        <h1>Cette page utilise Rendu coté client</h1>
        {data && data.map((user) => (
          <div key={user.id} style={styles.main}>
            <h1>{user.name}</h1>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        ))}
      </Layout>
    </>

  )
}

export default Profile;


