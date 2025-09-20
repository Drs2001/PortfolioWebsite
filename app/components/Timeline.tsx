'use client';

import React from 'react'
import styles from './Timeline.module.css';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import data from "../data.json";

// Register the ScrollTrigger plugin once.
gsap.registerPlugin(ScrollTrigger);

const Timeline= () => {
    const timelineContainer = useRef(null);

  useGSAP(() => {
        if (!timelineContainer.current) return;

        const cards = gsap.utils.toArray(`.${styles.container}`);

        cards.forEach((card, index) => {
            gsap.from(card as HTMLElement, { // Type assertion here
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card as HTMLElement, // And here
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                },
            });
        });

    }, []);

    return (
    <div ref={timelineContainer} className={styles.timeline}>
        {data.about.timeline.map((card, i) => (
          <div
            key={i}
            className={`${styles.container} ${i % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={`${styles.content}`}>
                <div className="flex-column">
                <h2>{card.year}</h2>
                <p>{card.description}</p>
                </div>
                {card.image != "" && (
                  <img src={card.image} />
                )}
            </div>
          </div>
        ))}
    </div>
    )
}

export default Timeline