import React from 'react'
import styles from './Footer.module.css';
import Icons from "./Icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Icons />
            <div className={styles.contact}>
                <p>Dylanspence705607@gmail.com</p>
                <p>+1 321-292-4540</p>
            </div>
            <hr className={styles.line} />
        </footer>
    )
}

export default Footer