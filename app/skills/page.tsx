"use client";

import { useState } from 'react';
import React from 'react'
import styles from "./page.module.css";
import SkillCard from "../components/SkillCard";
import data from "../data.json";

const Skills = () => {
    const [query, setQuery] = useState("");

    const filteredSkills = data.skills
    .filter((skill) =>
        skill.name.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => 
        Number(b.percent) - Number(a.percent)
    );

    const languages: { name: string; category: string; percent: string; }[] = []
    const frameworks: { name: string; category: string; percent: string; }[] = []
    const devops: { name: string; category: string; percent: string; }[] = []
    const os: { name: string; category: string; percent: string; }[] = []

    filteredSkills.forEach((skill) =>{
        switch (skill.category){
            case "Languages":
                languages.push(skill);
                break;
            case "Frameworks and Tools":
                frameworks.push(skill);
                break;
            case "DevOps and Infastructure":
                devops.push(skill);
                break;
            case "Operating Systems":
                os.push(skill);
                break;
        }
    });
    
    return (
        <div className={styles.page}>
            <h1 className="title" style={{alignSelf: 'center'}}>Skills</h1>
            <input 
                type="text" 
                placeholder="Search Skills.." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchBar}
                style={{alignSelf: 'center'}}
            />
            <div className={styles.skillSections}>
                <h1 className={styles.subHeading}>Languages</h1>
                <div className={styles.cards}>
                    {languages.map((skill: any, index: number) => (
                        <SkillCard 
                            key={index}
                            skill={skill.name}
                            percent={skill.percent}
                        />
                    ))}
                </div>
                <h1 className={styles.subHeading}>Frameworks and Tools</h1>
                <div className={styles.cards}>
                    {frameworks.map((skill: any, index: number) => (
                        <SkillCard 
                            key={index}
                            skill={skill.name}
                            percent={skill.percent}
                        />
                    ))}
                </div>
                <h1 className={styles.subHeading}>DevOps and Infastructure</h1>
                <div className={styles.cards}>
                    {devops.map((skill: any, index: number) => (
                        <SkillCard 
                            key={index}
                            skill={skill.name}
                            percent={skill.percent}
                        />
                    ))}
                </div>
                <h1 className={styles.subHeading}>Operating Systems</h1>
                <div className={styles.cards}>
                    {os.map((skill: any, index: number) => (
                        <SkillCard 
                            key={index}
                            skill={skill.name}
                            percent={skill.percent}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills