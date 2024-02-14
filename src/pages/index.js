import Image from "next/image";
import styles from "../app/page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hunting Coder</h1>
          <Image
            className={styles.myImg}
            src="/homeimg.avif"
            width={240}
            height={150}
            alt="img"
          ></Image>
          <p>A blog for hunting coders by a hunting coder</p>
        </div>
        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </>
  );
}
