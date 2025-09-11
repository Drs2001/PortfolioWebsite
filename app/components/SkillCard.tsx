import React from 'react'
import styles from './SkillCard.module.css';

type CardProps = {
    skill: string;
    percent: string;
}

const SkillCard = ({skill, percent}: CardProps) => {
    return (
    <div className={styles.card}>
        <p className={styles.title}>{skill}</p>
        <progress value={percent} max="100" className={styles.progress}></progress>
        <p className={styles.title}>{percent}%</p>
    </div>
    )
}

export default SkillCard