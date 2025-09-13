"use client";
import React, { useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";

type CardProps = {
  title: string;
  summary: string;
  about: string;
  tags: Array<string>;
  image: string;
  link: string;
};

const ProjectCard = ({ title, summary, about, tags, image, link }: CardProps) => {
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
      {/* Project Card */}
      <div className={styles.card}>
        <div
          className={styles.imageContainer}
          onClick={() => setOpen(true)} // open drawer on click
        >
          <img src={image} width={500} height={500} alt={title} />
          <div className={styles.overlay}></div>
          <div className={styles.toolTip}>
            <h1 className={styles.tipTitle}>{title}</h1>
            <p className={styles.tipSummary}>{summary}</p>
            <div className={styles.tipTags}>
              {tags.map((tag, index) => (
                <p key={index} className={styles.tipTag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay (dark background) */}
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}

      {/* Drawer */}
      <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
          ✕
        </button>
        <div style={{paddingBottom: 20}}>
            <h1 className={styles.drawerTitle}>{title}</h1>
            <p className={styles.drawerText}>{summary}</p>
        </div>
        <img src={image} width={500} height={500} alt={title} style={{ borderRadius: "12px"}} />
        <div style={{paddingBottom: 20, paddingTop: 30}}>
            <h2 className={styles.drawerSubHeading}>About</h2>
            <p className={styles.drawerText}>{about}</p>
        </div>
        <div style={{paddingBottom: 20}}>
            <h2 className={styles.drawerSubHeading}>Technologies</h2>
            <div className={styles.drawerTags}>
                {tags.map((tag, index) => (
                    <p key={index} className={styles.drawerTag}>
                    {tag}
                    </p>
                ))}
            </div>
        </div>
        <div style={{paddingBottom: 20, paddingTop: 30}}>
            <h2 className={styles.drawerSubHeading}>Check out the project</h2>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
