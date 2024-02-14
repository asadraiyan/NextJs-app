import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/" className={styles.link}>
            <li>Home</li>
          </Link>
          <Link href="/about" className={styles.link}>
            <li>About</li>
          </Link>
          <Link href="/blog" className={styles.link}>
            <li>Blog</li>
          </Link>
          <Link href="/contact" className={styles.link}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
