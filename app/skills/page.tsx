import React from 'react'
import styles from "./page.module.css";
import SkillCard from "../components/SkillCard";
import data from "../data.json";

const Skills = () => {
    return (
        <div className={styles.page}>
            <h1 className="title">Skills</h1>
            <div className={styles.cards}>
                {data.skills.map((skill: any, index: number) => (
                    <SkillCard 
                        key={index}
                        skill={skill.skill}
                        percent={skill.percent}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills