import React from 'react';
import { Layout } from '../components/layout';
import Link from 'next/link';
import Head from 'next/head'

const Blog = ({ data }) => {
  const styles = {
    main: {
      margin: 20,
      padding: 20,
      borderBottom: "1px solid black",
    },
    img: {
      height: 200,
      width: 300,
    }
  }
  return (
    <>
      <Head>
        <title>Liste des blogs</title>
      </Head>
      <Layout>
        <h1>Cette page utilise getStaticProps</h1>
        {
          data.data.map((post) => (
            <div style={styles.main} key={post._id}>
              <h1 >{post.title}</h1>
              <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
                <div>
                  <img src={post.pictures[0]} style={styles.img} />
                </div>
              </Link>
              <div>{post.body}</div>
            </div>
          ))
        }
      </Layout>
    </>
  )
}

export const getStaticProps = async (context) => {
  const url = 'https://aqueous-meadow-07678.herokuapp.com/api/posts'
  const response = await fetch(`${url}`);
  const data = await response.json();
  return {
    props: {
      data
    }
  }
}
export default Blog;
