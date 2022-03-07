import React, { Component } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

class Header extends Component {
    render() {
        return(
        <header className={styles.header}>
            <a className={styles.link_logo} href="/">
                <Image src="/logo.svg" alt="Logotipo xxx" width={120} height={26} />
            </a>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/features">Features</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/team">Team</Link>
            </nav>
        </header>
        );
    };
};

export default Header;