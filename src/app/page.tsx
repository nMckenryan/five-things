import Link from "next/link";
import BulletCard from "./components/bullet-card";

import styles from "./index.module.css";

import { getPosts } from "~/server/queries";
import { clerkClient } from "@clerk/nextjs/server";

//if DB is changed, updates page on next visit
export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();

  async function getPostUserId(id: string) {
    const user = await clerkClient.users.getUser(id);
    const userName = user.fullName ?? "Anonymous";
    return String(userName);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {posts.map(async (post) => {
            const userName = await getPostUserId(post.userId);
            return (
              <Link key={post.id} href={`/post/${post.id}`}>
                <BulletCard
                  subjectName={post.subjectName}
                  fiveGoodThings={[
                    post.fiveThing1,
                    post.fiveThing2,
                    post.fiveThing3,
                    post.fiveThing4,
                    post.fiveThing5,
                  ]}
                  userId={post.userId}
                  userName={userName}
                  dateCreated={post.createdAt}
                  key={post.id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
