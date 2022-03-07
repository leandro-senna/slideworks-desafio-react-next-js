import React from 'react';
import axios from 'axios';
import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './component/header';
import Footer from './component/footer';

export default function Home ({livros}) {
  return (
    <div>
      <Head>
        <title>Livraria - Home</title>
        <meta name="description" content="Catálogo de livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className={styles.main}>
        {livros.map(livro => (
          <div className={styles.container_book} key={livro.id}>
            <a href={"/book-" + livro.id} style={{ textDecoration: 'none' }}>
              <img src={livro.image + "-" + livro.id} alt={"Imagem-" + livro.id} width="480" height="640" />
              <div className={styles.book_description}>
                <h2><span>Livro: </span> {livro.title}</h2>
                <b><span>Autor: </span>{livro.author}</b>
                <p>{livro.description}</p>
              </div>
              <div className={styles.book_footer}>
                <span>Gênero: {livro.genre}</span>
                <span>{livro.published}</span>
              </div>
            </a>
          </div>
        ))}
      </main>
      
      <Footer />
    
    </div>
  )
}    

Home.getInitialProps = async () => {
  const response = await axios.get('https://fakerapi.it/api/v1/books');
  return { livros: response.data.data }
};