import React from 'react'
import styles from "./page.module.css"
import ProjectCard from '../components/ProjectCard'
import data from "../data.json"

const Projects = () => {
    return (
        <div className={styles.page}>
            <h1 className="title">My Projects</h1>
            {data.projects.map((project: any, index: number) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    summary={project.summary}
                    about={project.about}
                    tags={project.tags}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    )
}

export default Projects