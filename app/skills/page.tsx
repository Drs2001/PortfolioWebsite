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
    
    return (
        <div className={styles.page}>
            <h1 className="title">Skills</h1>
            <input 
                type="text" 
                placeholder="Search Skills.." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchBar}
            />
            <div className={styles.cards}>
                {filteredSkills.map((skill: any, index: number) => (
                    <SkillCard 
                        key={index}
                        skill={skill.name}
                        percent={skill.percent}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills