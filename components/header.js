import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';
import styles from './header.module.css';

export const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <span className={router.pathname === '/' ? styles.active : styles.link  }>Home</span>
      </Link>
      <Link href="/blog" passHref>
        <span className={router.pathname === '/blog' ? styles.active : styles.link}>blog</span>
      </Link>
      <Link href="/profil" passHref>
        <span className={router.pathname === '/profil' ? styles.active : styles.link}>Profile</span>
      </Link>
      <Link href="/blog/items" passHref>
        <span className={router.pathname === '/blog/items' ? styles.active : styles.link}>Items</span>
      </Link>
      <Link href="/blog/category" passHref>
        <span className={router.pathname === '/blog/category' ? styles.active : styles.link}>Category</span>
      </Link>
      <Link href="/departements" passHref>
        <span className={router.pathname === '/departements' ? styles.active : styles.link}>Departements</span>
      </Link>
    </div>
  )
}
