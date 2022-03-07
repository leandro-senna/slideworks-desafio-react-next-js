import React from 'react';
import axios from 'axios';
import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './component/header';
import Footer from './component/footer';
import { useRouter } from 'next/router';

export default function Book ({livros}) {

  const router = useRouter();
  
  let item = router.query.book.split("-")[1];

  return (
    <div>
      <Head>
        <title>Livro {livros[item].id} </title>
        <meta name="description" content="Catálogo de livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className={styles.main_book}>
        <img src={livros[item].image + "-" + livros[item].id} alt={"Imagem-" + livros[item].id} width="480" height="640" />
        <div className={styles.box_book}>
          <h1>{livros[item].title}</h1>
          <b>Autor: {livros[item].author}</b>
          <span></span>
          <p>{livros[item].description}</p>
          <span></span>
          <strong>The standard Lorem Ipsum passage, used since the 1500s</strong>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <strong>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</strong>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          <strong>1914 translation by H. Rackham</strong>
          <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ..."</p>
        </div>
      </main>
      
      <Footer />
    
    </div>
  )
}    

Book.getInitialProps = async () => {
  const response = await axios.get('https://fakerapi.it/api/v1/books');
  return { livros: response.data.data }
};