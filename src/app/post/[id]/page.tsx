import FullPagePostView from "~/app/components/full-post-page";

export default function PostPage({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const postIdAsNumber = Number(postId);

  if (Number.isNaN(postIdAsNumber)) {
    throw new Error("Invalid post ID");
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #256670, #1E425E);",
        height: "93vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem",
      }}
    >
      <FullPagePostView postId={postIdAsNumber} />
    </div>
  );
}
