import React from 'react'
import styles from "./page.module.css";

const Education = () => {
    return (
        <div className={styles.page}>
            <h1 className="title">
                Education
            </h1>
            <img src="/diploma.png" width={1000} height={1000} alt="" />
        </div>
    )
}

export default Education