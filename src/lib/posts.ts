import { getCollection } from "astro:content";

export const posts = await getCollection('blog');
posts.sort((a, b) => a.data.posted.getTime() - b.data.posted.getTime());

export type Post = typeof posts[number];

export function getNextPost(postId: string): Post | null {
    const postIndex = posts.findIndex((post) => post.id == postId);
    return posts[postIndex + 1] ?? null;
}

export function getLastPost(postId: string): Post | null {
    const postIndex = posts.findIndex((post) => post.id == postId);
    return posts[postIndex - 1] ?? null;
}

export function getLatestPost(): Post {
    return posts[posts.length -1];
}