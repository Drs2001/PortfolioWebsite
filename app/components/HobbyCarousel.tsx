"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./HobbyCarousel.module.css";
import data from "../data.json";

const cards = data.about.interests;

export default function HobbyCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hoverActive = useRef(false);

  // Animate active card changes
  useEffect(() => {
  const total = cards.length;
  cardRefs.current.forEach((card, i) => {
    let offset = i - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    // Default hidden
    let x = 0;
    let scale = 0.7;
    let opacity = 0;
    let rotationY = 0;
    let zIndex = -1;

    if (offset === 0) {
      // Center card
      x = 0;
      scale = 1;
      opacity = 1;
      rotationY = 0;
      zIndex = 1;
    } else if (offset === -1) {
      // Left card
      x = -250;
      scale = 0.8;
      opacity = 0.5;
      rotationY = 25;
    } else if (offset === 1) {
      // Right card
      x = 250;
      scale = 0.8;
      opacity = 0.5;
      rotationY = -25;
    }

    gsap.to(card, {
      x,
      scale,
      opacity,
      rotationY,
      duration: 0.6,
      zIndex,
      ease: "power3.out",
    });
  });
}, [activeIndex]);


  // Handle scroll wheel (only when hovering carousel)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!hoverActive.current) return; // only trigger if hovering
      e.preventDefault(); // block page scroll

      setActiveIndex((prev) => {
        const total = cards.length;
        return e.deltaY > 0
          ? (prev + 1) % total
          : (prev - 1 + total) % total;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Handle mouse enter/leave
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onEnter = () => (hoverActive.current = true);
    const onLeave = () => (hoverActive.current = false);

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Handle touch swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;

      const diffX = e.changedTouches[0].clientX - touchStartX.current;
      const threshold = 25; // min px to count as swipe

      if (diffX > threshold) {
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
      } else if (diffX < -threshold) {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }

      touchStartX.current = null;
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div ref={containerRef} className={styles.carouselContainer}>
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardRefs.current[i] = el;
            }}
            className={styles.carouselCard}
            style={{backgroundImage: `url(${card.image})`}}
          >
            <h1>{card.name}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
