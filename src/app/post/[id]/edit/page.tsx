import EditCard from "~/app/components/edit-card";
import { getSinglePost } from "~/server/queries";

export default async function PostModal({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const postIdAsNumber = Number(postId);

  const post = await getSinglePost(postIdAsNumber);

  if (Number.isNaN(postIdAsNumber)) {
    throw new Error("Invalid post ID");
  }

  return (
    <EditCard
      subjectName={post.subjectName}
      postThing1={post.fiveThing1}
      postThing2={post.fiveThing2}
      postThing3={post.fiveThing3}
      postThing4={post.fiveThing4}
      postThing5={post.fiveThing5}
      postId={postIdAsNumber}
    />
  );
}
