import { getSinglePost } from "~/server/queries";
import BulletCardModal from "./bullet-card-modal";
import { clerkClient } from "@clerk/nextjs/server";

export default async function FullPagePostView(props: { postId: number }) {
  const post = await getSinglePost(props.postId);

  const user = await clerkClient.users.getUser(post.userId);
  const userName = user.fullName ?? "Anonymous";

  return (
    <BulletCardModal
      postId={props.postId}
      subjectName={post.subjectName}
      postThing1={post.fiveThing1}
      postThing2={post.fiveThing2}
      postThing3={post.fiveThing3}
      postThing4={post.fiveThing4}
      postThing5={post.fiveThing5}
      agreeCount={post.agreeCount}
      disagreeCount={post.disagreeCount}
      userName={userName}
      dateCreated={post.createdAt}
      key={post.id}
    />
  );
}
