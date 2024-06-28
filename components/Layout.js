// components/Layout.js
import React from "react";
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="/">Dashboard</Link></li>
                        <li><Link href="/order/new">Create Order</Link></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.main}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
            <footer className={styles.footer}>
                <p>Barrel App Technical Test</p>
            </footer>
        </div>
    );
};

export default Layout;
