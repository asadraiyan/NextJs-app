import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hunting Coder</h1>
          <p>A blog for hunting coders by a hunting coder</p>
        </div>
        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  );
}
