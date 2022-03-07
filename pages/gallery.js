import React from 'react';
import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './component/header';
import Footer from './component/footer';

export default function Gallery () {
  return (
    <div>
      <Head>
        <title>Livraria - Gallery</title>
        <meta name="description" content="Galeria de Livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className={styles.main_xpages}>
          <h1>Galeria</h1>
      </main>
      
      <Footer />
    
    </div>
  )
}