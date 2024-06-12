
import { db } from "~/server/db";
import BulletCard from "./components/bullet-card";
import InsertCard from "./components/insert-card";
import styles from "./index.module.css";

//if DB is changed, updates page on next visit
export const dynamic = "force-dynamic";

export default async function Home() {
  const posts  = await db.query.posts.findMany();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Five Things!
        </h1>
        
        <div className={styles.cardRow}>
        {posts.map(post => 
          <BulletCard subjectName={post.subjectName} fiveGoodThings={[post.fiveThing1, post.fiveThing2, post.fiveThing3, post.fiveThing4, post.fiveThing5]} agreeCount={post.agreeCount} disagreeCount={post.disagreeCount} userName={post.userName} key={post.id}/>
        )}
          <InsertCard/>
        </div>
      </div>
    </main>
  );
}
