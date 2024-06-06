import BulletCard from "./components/bullet-card";

import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Five Things!
        </h1>
        <div className={styles.cardRow}>
          <BulletCard/>
         
        </div>
      </div>
    </main>
  );
}
