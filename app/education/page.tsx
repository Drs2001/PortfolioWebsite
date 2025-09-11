import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";

const Education = () => {
    return (
        <div className={styles.page}>
            <h1 className="title">
                Education
            </h1>
            <Image src="/diploma.png" width={1000} height={1000} alt="" />
        </div>
    )
}

export default Education