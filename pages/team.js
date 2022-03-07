import React from 'react';
import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './component/header';
import Footer from './component/footer';

export default function Team () {
  return (
    <div>
      <Head>
        <title>Livraria - Team</title>
        <meta name="description" content="Nosso Time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className={styles.main_xpages}>
          <h1>Nosso Time</h1>
      </main>
      
      <Footer />
    
    </div>
  )
}