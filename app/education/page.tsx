import React from 'react'
import styles from "./page.module.css";
import data from "../data.json";

const Education = () => {
    return (
        <div className={styles.page}>
            <h1 className="title">
                Education
            </h1>
            <h2 className="subHeading">Summary</h2>
            <div style={{marginLeft: 30}}>
                <h2>GPA: {data.education.gpa}</h2>
                <p>{data.education.summary}</p>
            </div>
            <img src="/diploma.png" width={1000} height={1000} alt="" />
            <h2 className="subHeading">Completed Classes</h2>
            <div className={styles.classCards}>
                {data.education.classes.map((card, i) => (
                    <div
                        key={i}
                        className={styles.card}
                    >
                        <h2>
                            {card.name}
                        </h2>
                        <h3>Course Number: {card.courseNumber}</h3>
                        <h3>Course Grade: {card.grade}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education