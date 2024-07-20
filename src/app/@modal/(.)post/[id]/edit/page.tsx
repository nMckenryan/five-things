
import EditPostPage from "~/app/components/edit-post-page";
import { Modal } from "../modal";

export default function PostModal({
  params: { id: postId },
}: {
  params: { id: string };
}) {

  const postIdAsNumber = Number(postId);

  if(Number.isNaN(postIdAsNumber)) {
    throw new Error("Invalid post ID");
  }

  return (
    <Modal>
      <EditPostPage postId={postIdAsNumber} />
    </Modal>
  )
}