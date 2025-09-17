'use client';

import React from 'react'
import styles from './Timeline.module.css';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type CardProps = {
    temp: string;
}

// Register the ScrollTrigger plugin once.
gsap.registerPlugin(ScrollTrigger);

const Timeline= ({temp}: CardProps) => {
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
        <div className={`${styles.container} ${styles.left}`}>
            <div className={`${styles.content}`}>
                <h2>2001</h2>
                <p>I was origionally born in Daytona beach Florida where I spent the first few years of my life. I dont remember too much from that time, only hiding in my nursery with a dresser in front of the window as hurricane Charely beat down on us. From here started a long series of moves up and down the east coast.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
            <div className={`${styles.content}`}>
                <h2>2004</h2>
                <p>The first destination was Michigan were we lived in Roscommon for a few years, this is where I started preschool.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.left}`}>
            <div className={`${styles.content}`}>
                <h2>2007</h2>
                <p>Moved to Fairfax, Virginia, where I learned how to swim and started kindergarten.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
            <div className={`${styles.content}`}>
                <h2>2008</h2>
                <p>Moved back to Florida, this time living on Merrit Island the space coast. I remember watching shuttle launches from my driveway with my friends.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.left}`}>
            <div className={`${styles.content}`}>
                <h2>2011</h2>
                <p>Moved to Annapolis, Maryland where I started fourth grade. Lived here for a while getting to finish elementry and middle school before moving my Junior year of highschool.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
            <div className={`${styles.content}`}>
                <h2>2018</h2>
                <p>Moved to Virginia Beach, Virginia where I got to graduate from highschool.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.left}`}>
            <div className={`${styles.content}`}>
                <h2>2020</h2>
                <p>Graduated from Landstown Highschool in Virgnia Beach before moving to Albany, New York during the summer. Later that fall I got to start my college career at Rochester Institute of Technology.</p>
            </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
            <div className={`${styles.content}`}>
                <h2>2025</h2>
                <p>Graduated from Rochester Institute of Technology with my degree in Computer Science.</p>
            </div>
        </div>
    </div>
    )
}

export default Timeline