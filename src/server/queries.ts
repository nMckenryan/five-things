import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';



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