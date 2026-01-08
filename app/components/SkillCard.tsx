import React, { useEffect, useState } from "react";
import styles from './SkillCard.module.css';

type CardProps = {
    skill: string;
    description: string;
}

const SkillCard = ({skill, description}: CardProps) => {
    const [open, setOpen] = useState(false);
    
      useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        }, [open]);

    return (
    <>
    <div className={styles.card}
    // onClick={() => setOpen(true)}
    >
        <p className={styles.title}>{skill}</p>
    </div>

    {/* Overlay (dark background) */}
      {/* {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />} */}

      {/* Drawer */}
      {/* <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          ✕
        </button>
        <div style={{paddingBottom: 20}}>
            <h1 className={styles.drawerTitle}>{skill}</h1>
            <p className={styles.drawerText}>{description}</p>
        </div>
      </div> */}
      </>
    )
}

export default SkillCard