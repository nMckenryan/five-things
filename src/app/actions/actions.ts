"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm/sql";
import { redirect } from "next/dist/client/components/redirect";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

 
export async function createPost(subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string) {
    const agreeCount = 0; 
    const disagreeCount = 0;

    const user = auth();
    const userId = user.userId;

    try {
        await db.insert(posts).values({
            subjectName,
            agreeCount,
            disagreeCount,
            fiveThing1,
            fiveThing2,
            fiveThing3,
            fiveThing4,
            fiveThing5,
            userId: userId ?? "Unknown User",
          });
          
    redirect("/");
    } catch (error) {
        console.log("Could not insert post: ", error);
    }

}

export async function updatePost(postId: number, subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string) {
    console.log("updating post");
    try {
        await db.update(posts).set({
            subjectName,
            fiveThing1,
            fiveThing2,
            fiveThing3,
            fiveThing4,
            fiveThing5,
            updatedAt: new Date(),
        }).where(eq(posts.id, postId));
        
    } catch (error) {
        console.log("Could not update post: ", error);
    }
}
