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
    </div>
    )
}

export default SkillCard