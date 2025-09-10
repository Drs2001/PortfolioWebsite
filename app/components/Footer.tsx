import React from 'react'
import styles from './Footer.module.css';
import Icons from "./Icons";
import data from "../data.json";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Icons />
            <div className={styles.contact}>
                <p>{data.personal_info.email}</p>
                <p>{data.personal_info.phonenumber}</p>
            </div>
            {/* <hr className={styles.line} /> */}
            <p>© {new Date().getFullYear()} Dylan Spence</p>
        </footer>
    )
}

export default Footer