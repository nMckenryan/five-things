import FullPagePostView from "~/app/components/full-post-page";
import PageLayout from "~/app/components/page-layout";

export default function PostPage({
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
    <PageLayout key={postIdAsNumber} postId={postIdAsNumber}>
      <FullPagePostView postId={postIdAsNumber} />
    </PageLayout>
  );
}
