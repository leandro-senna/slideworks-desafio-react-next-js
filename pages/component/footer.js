import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

class Footer extends Component {
    render() {
        return(
            <footer className={styles.footer}>
                <Image src="/logo_footer.svg" alt="Redes Sociais" width={140} height={35} />
                <span></span>
                <a href='/'>Terms & Conditions</a>
                <a href='/'>Privacy Policy</a>
                <div className={styles.find_us}><Image src="/find_us.svg" alt="Redes Sociais" width={110} height={25} /></div>
            </footer>
        );
    };
};

export default Footer;