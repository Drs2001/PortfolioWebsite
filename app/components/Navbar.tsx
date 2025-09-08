import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href="/projects" className={styles.link}>Projects</Link>
        </div>
    )
}

export default Navbar