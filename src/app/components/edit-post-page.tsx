import { getPost } from "~/server/queries";
import EditCard from "./edit-card";

export default async function EditPostPage(props: { postId: number }) {
  const post = await getPost(props.postId);

  return (
    <EditCard
      subjectName={post.subjectName}
      postThing1={post.fiveThing1}
      postThing2={post.fiveThing2}
      postThing3={post.fiveThing3}
      postThing4={post.fiveThing4}
      postThing5={post.fiveThing5}
      postId={props.postId}
    />
  );
}
