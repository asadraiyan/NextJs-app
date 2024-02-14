import React from "react";
import Link from "next/link";
import styles from "../app/blog.module.css";

const Blog = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href="/blogpost/learn-javascript" className={styles.link}>
            <h3>How to learn Javascript in 2024</h3>
          </Link>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2024</h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h3>How to learn Javascript in 2024</h3>
          <p>Javascript is the language used to design logic for the web</p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
