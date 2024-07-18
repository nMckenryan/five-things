
import Link from "next/link";
import BulletCard from "./components/bullet-card";

import styles from "./index.module.css";

import { getPosts } from "~/server/queries";

//if DB is changed, updates page on next visit
export const dynamic = "force-dynamic";

export default async function Home() {

  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div style={{display: "flex", flexDirection: "row", gap: "1rem", flexWrap: "wrap"}}>
          {posts.map(post => 
          <Link key={post.id} href={`/post/${post.id}`}>
            <BulletCard subjectName={post.subjectName} fiveGoodThings={[post.fiveThing1, post.fiveThing2, post.fiveThing3, post.fiveThing4, post.fiveThing5]} agreeCount={post.agreeCount} disagreeCount={post.disagreeCount} userId={post.userId} key={post.id}/>
          </Link>
        )}
        </div>
      </div>
    </main>
  );
}
