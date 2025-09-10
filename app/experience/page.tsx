import React from 'react';
import styles from "./page.module.css";
import ExperienceCard from "../components/ExperienceCard";
import data from "../data.json"

const Experience = () => {
    return (
        <div className={styles.page}>
            <h1 className='title'>My Work Experience</h1>
            <div className={styles.cards}>
                {data.experience.map((job: any, index: number) => (
                    <ExperienceCard 
                        key={index}
                        company={job.company}
                        location={job.location}
                        dates={job.dates}
                        title={job.title}
                        description={job.description}
                        link={job.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience