import React from 'react'
import styles from './ExperienceCard.module.css';

type CardProps = {
    company: string;
    location: string;
    dates: string;
    title: string;
    description: string;
    link: string;
}

const ExperienceCard = ({company, location, dates, title, description, link}: CardProps) => {
    return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.left}>
        <h1 className={styles.title}>{company}</h1>
        <p>{location}</p>
        <p>{dates}</p>
      </a>

      <div className={styles.divider}></div> {/* ← divider between columns */}

      <div className={styles.right}>
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
    )
}

export default ExperienceCard