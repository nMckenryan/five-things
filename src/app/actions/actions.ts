'use server'

import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

 
export async function createPost(subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string) {
    const agreeCount = 0; 
    const disagreeCount = 0;
    const userName = "jim";
    
    await db.insert(posts).values({
      subjectName,
      agreeCount,
      disagreeCount,
      fiveThing1,
      fiveThing2,
      fiveThing3,
      fiveThing4,
      fiveThing5,
      userName
    });
}