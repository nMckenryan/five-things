import { getPost } from "~/server/queries";

export default async function FullPagePostView(props: { postId: number }) {

  const post = await getPost(props.postId);
  return <div> {post.subjectName}</div>;
}