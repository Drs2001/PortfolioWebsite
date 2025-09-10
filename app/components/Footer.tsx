import React from 'react'
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className="text-blue-500">Testing</p>
            <p className="text-blue-500">Testing</p>
            <p className="text-blue-500">Testing</p>
        </footer>
    )
}

export default Footer