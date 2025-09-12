import React from 'react'
import styles from './ProjectCard.module.css';
import Image from "next/image";

type CardProps = {
    title: string;
    summary: string;
    about: string;
    tags: Array<string>;
    image: string;
    link: string;
}

const ProjectCard = ({title, summary, about, tags, image, link}: CardProps) => {
    return (
    <div className={styles.card}>
        <div className={styles.imageContainer}>
            <Image src={image} width={500} height={500} alt="" />
            <div className={styles.overlay}></div>
            <div className={styles.toolTip}>
                <h1 className={styles.tipTitle}>{title}</h1>
                <p className={styles.tipSummary}>{summary}</p>
                <div className={styles.tags}>
                    {tags.map((tag: any, index: any) => (
                    <p key={index} className={styles.tag}>{tag}</p>
                ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard