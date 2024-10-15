import FullPagePostView from "~/app/components/full-post-page";
import WindowLayout from "~/app/components/ui/window-layout";
import { auth } from "@clerk/nextjs/server";
import { getPostUserId } from "~/server/queries";

export default async function PostPage({
  params: { id: postId },
}: {
  params: { id: string };
}) {
  const postIdAsNumber = Number(postId);

  if (Number.isNaN(postIdAsNumber)) {
    throw new Error("Invalid post ID");
  }

  const user = auth();
  const loggedInUserId = user.userId ?? "Not Logged In";

  const postUserId = await getPostUserId(postIdAsNumber);

  const isUserAuthorisedToEdit = postUserId === loggedInUserId;

  //FULL PAGE VIEW OF POST
  return (
    <div
      className="page-background"
      style={{
        background: "linear-gradient(to bottom, #CAA478, #cc8855)",
        height: "94.9vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "2rem",
      }}
    >
      <WindowLayout
        postId={postIdAsNumber}
        isUserAuthorisedToEdit={isUserAuthorisedToEdit}
      >
        <FullPagePostView postId={postIdAsNumber} />
      </WindowLayout>
    </div>
  );
}
