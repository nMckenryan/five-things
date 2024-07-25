import { getSinglePost } from "~/server/queries";
import EditCard from "./edit-card";

export default async function EditPostPage(props: { postId: number }) {
  const post = await getSinglePost(props.postId);

  return (
    <div
      className="page-background"
      style={{
        background: "linear-gradient(to bottom, #256670, #1E425E)",
        height: "93vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem",
      }}
    >
      <EditCard
        subjectName={post.subjectName}
        postThing1={post.fiveThing1}
        postThing2={post.fiveThing2}
        postThing3={post.fiveThing3}
        postThing4={post.fiveThing4}
        postThing5={post.fiveThing5}
        postId={props.postId}
      />
    </div>
  );
}
