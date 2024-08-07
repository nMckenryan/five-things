import FullPagePostView from "~/app/components/full-post-page";
import WindowLayout from "~/app/components/window-layout";

export default async function PostPage({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const postIdAsNumber = Number(postId);

  if (Number.isNaN(postIdAsNumber)) {
    throw new Error("Invalid post ID");
  }

  //FULL PAGE VIEW OF POST
  return (
    <div
      className="page-background"
      style={{
        background: "linear-gradient(to bottom, #256670, #1E425E)",
        height: "94.9vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "2rem",
      }}
    >
      <WindowLayout postId={postIdAsNumber}>
        <FullPagePostView postId={postIdAsNumber} />
      </WindowLayout>
    </div>
  );
}
