import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';


export async function getPostUserId(id: number) {
    const post = await db.query.posts.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    return post?.userId;
}


export async function getPosts() {
    const posts = await db.query.posts.findMany();
    return posts;
}

export async function getMyPosts() {

    const user = auth();

    if (!user.userId) throw new Error("Cannot access own user posts: Unauthorised");

    const posts = await db.query.posts.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId)
    });
    return posts;
}

export async function getSinglePost(id: number) {
    const post = await db.query.posts.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if (!post) throw new Error("Post: " + id + " not found");

    return post;
}