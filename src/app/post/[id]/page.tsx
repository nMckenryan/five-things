import FullPagePostView from "~/app/components/full-post-page";

export default function PostPage({
  params: { id: postId },
}: {
  params: { id: string };
}) {

  const postIdAsNumber = Number(postId);

  if(Number.isNaN(postIdAsNumber)) {
    throw new Error("Invalid post ID");
  }

  return (
      <FullPagePostView postId={postIdAsNumber} />
  )
}