"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import data from "../data.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Nav Links + Contact */}
      <div
        ref={menuRef}
        className={`${styles.linksGroup} ${isOpen ? styles.showMenu : ""}`}
      >
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/aboutme" className={styles.link}>About Me</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/education" className={styles.link}>Education</Link>
        <Link href="/experience" className={styles.link}>Experience</Link>
        <Link href="/skills" className={styles.link}>Skills</Link>
        <a
          href={`mailto:${data.personal_info.email}`}
          className={styles.contactButton}
        >
          Contact Me
        </a>
      </div>

      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
