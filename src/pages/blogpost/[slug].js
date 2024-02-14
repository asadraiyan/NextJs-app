import React from "react";
import { useRouter } from "next/router";
import styles from "../../app/blogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of the page {slug}</h1>
          <hr />
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            magni esse quam aspernatur, sit cupiditate quas? Pariatur, debitis
            eveniet quae ipsum incidunt quas molestias necessitatibus ratione
            ullam dignissimos iure suscipit? Eligendi, voluptatum delectus,
            nobis mollitia, quas corporis animi dolorum unde dolores id quis
            repellendus soluta odit! Fuga quas sed aperiam.
          </div>
        </main>
      </div>
    </>
  );
};

export default Slug;
