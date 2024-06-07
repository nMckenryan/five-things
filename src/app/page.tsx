import BulletCard from "./components/bullet-card";
import InsertCard from "./components/insert-card";
import styles from "./index.module.css";

const fiveGood = ["I love my ghostbusters", "I havent seen it", "ghornstbutters", "gangbusters rudi julliani", "I liked it when they stoped the washington sniper"];
const fiveMoreGood = ["meabls", "noodle", "beans maybe?", "tomat", "forgetabitas"]


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Five Things!
        </h1>
        <div className={styles.cardRow}>
          <BulletCard subjectName="Ghostbusters 2" fiveGoodThings={fiveGood} agreeCount={3} disagreeCount={0}/>
          <BulletCard subjectName="lsagna" fiveGoodThings={fiveMoreGood} agreeCount={42323} disagreeCount={2}/>
          <InsertCard/>
        </div>
      </div>
    </main>
  );
}
