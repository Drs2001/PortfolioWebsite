import React from 'react'
import styles from "./page.module.css"
import ProjectCard from '../components/ProjectCard'
import data from "../data.json"

const Projects = () => {
    const mid = Math.ceil(data.projects.length / 2)
    const projectRow1 = data.projects.slice(0, mid)
    const projectRow2 = data.projects.slice(mid)

    return (
        <div className={styles.page}>
            <h1 className="title">My Projects</h1>
            <div className={styles.projectCards}>
            <div>
                {projectRow1.map((project: any, index: number) => (
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
            <div>
                {projectRow2.map((project: any, index: number) => (
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
            </div>
        </div>
    )
}

export default Projects