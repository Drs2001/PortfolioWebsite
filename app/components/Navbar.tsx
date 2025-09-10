import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';
import data from "../data.json"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.linksGroup}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/aboutme" className={styles.link}>About Me</Link>
                <Link href="/projects" className={styles.link}>Projects</Link>
                <Link href="/education" className={styles.link}>Education</Link>
                <Link href="/experience" className={styles.link}>Experience</Link>
                <Link href="/skills" className={styles.link}>Skills</Link>
            </div>
            <a href={`mailto:${data.personal_info.email}`} className={styles.contactButton}>Contact Me</a>
        </div>
    )
}

export default Navbar