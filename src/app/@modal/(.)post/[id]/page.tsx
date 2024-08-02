import FullPagePostView from "~/app/components/full-post-page";
import { PostViewModal } from "./post-view-modal";
import { auth } from "@clerk/nextjs/server";
import { getPostUserId } from "~/server/queries";
import ToastHandler from "~/app/components/toast-handler";

export default async function PostModal({
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

  return (
    <ToastHandler>
      <PostViewModal
        postId={postIdAsNumber}
        isUserAuthorisedToEdit={isUserAuthorisedToEdit}
      >
        <FullPagePostView postId={postIdAsNumber} />
      </PostViewModal>
    </ToastHandler>
  );
}
