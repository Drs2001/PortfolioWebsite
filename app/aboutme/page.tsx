import React from 'react'
import styles from "./page.module.css";
import data from "../data.json"
import Timeline from "../components/Timeline";
import HobbyCarousel from "../components/HobbyCarousel";

const Aboutme = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className="title">About Me</h1>
                <div className={styles.nav}>
                    <a href="#summary" className={styles.link}>Summary</a>
                    <a href="#interests" className={styles.link}>Interests/ Hobbies</a>
                    <a href="#history" className={styles.link}>My History</a>
                </div>
            </div>
            <div className={styles.body}>
                <h2 id="summary" className={styles.subHeading}>Summary</h2>
                <p>{data.about.summary}</p>
                <h2 id="interests" className={styles.subHeading}>Interests/ Hobbies</h2>
                <HobbyCarousel/>
                <h2 id="history" className={styles.subHeading}>My History</h2>
                <Timeline 
                    temp="test"
                />
            </div>
        </div>
    )
}

export default Aboutme