import Link from "next/link";
import BulletCard from "./components/bullet-card";
import Skeleton from "@mui/material/Skeleton";
import { clerkClient } from "@clerk/nextjs/server";
import { StrictMode, Suspense } from "react";

import styles from "./index.module.css";
import { getPosts } from "~/server/queries";

//if DB is changed, updates page on next visit
export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();

  const getUserName = async (userId: string) => {
    const user = await clerkClient.users.getUser(userId);
    return user.fullName ?? "Anonymous";
  };

  return (
    <StrictMode>
      <main className={styles.main}>
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {posts.map(async (post) => {
              const userName = await getUserName(post.userId);

              return (
                <Suspense
                  key={post.id}
                  fallback={
                    <Skeleton variant="rectangular" width={210} height={60} />
                  }
                >
                  <Link href={`/post/${post.id}`}>
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
                    />
                  </Link>
                </Suspense>
              );
            })}
          </div>
        </div>
      </main>
    </StrictMode>
  );
}
