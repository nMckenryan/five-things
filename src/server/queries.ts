import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';
import { and, eq } from 'drizzle-orm';
import { posts } from './db/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/client/components/redirect';


export async function getPosts() {
    const posts  = await db.query.posts.findMany();
    return posts;
}

export async function getMyPosts() {

    const user = auth();

    if(!user.userId) throw new Error("Cannot access posts: Unauthorised");

    const posts  = await db.query.posts.findMany({
        where: (model, {eq }) => eq(model.userId, user.userId)
    });
    return posts;
}

export async function getPost(id: number) {

    const user = auth();
    if(!user.userId) throw new Error("Cannot access posts: Unauthorised");

    const post  = await db.query.posts.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if(!post) throw new Error("Post not found");

    if(post.userId !== user.userId) throw new Error("Cannot access posts: Unauthorised");

    return post;
}

export async function updatePost2(id: number, subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string) {
    const user = auth();
    if(!user.userId) throw new Error("Cannot update posts: Unauthorised");

    await db.update(posts).set({subjectName, fiveThing1, fiveThing2, fiveThing3, fiveThing4, fiveThing5}).where(and (eq(posts.id, id), eq(posts.userId, user.userId)));
    
    redirect("/");
}


export async function deletePost(id: number) {
    const user = auth();
    if(!user.userId) throw new Error("Cannot delete posts: Unauthorised");

    await db.delete(posts).where(and (eq(posts.id, id), eq(posts.userId, user.userId)));

    redirect("/");
}