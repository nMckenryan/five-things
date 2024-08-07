"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm/sql";
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

        console.log("inserted post");
    } catch (error) {
        console.log("Could not insert post: ", error);
    }

}

export async function updatePost(postId: number, subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string) {
    console.log("updating post " + postId);
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


export async function deletePost(postId: number) {
    console.log("deleting post:" + postId);
    try {
        await db.delete(posts).where(eq(posts.id, postId));
    } catch (error) {
        console.log("Could not delete post: ", error);
    }

}