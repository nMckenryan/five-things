import { getPost } from "~/server/queries";
import BulletCardModal from "./bullet-card-modal";

export default async function FullPagePostView(props: { postId: number }) {

  const post = await getPost(props.postId);
  const postThings: string[] = [post.fiveThing1, post.fiveThing2, post.fiveThing3, post.fiveThing4, post.fiveThing5];

  return <BulletCardModal postId={props.postId} subjectName={post.subjectName} fiveGoodThings={postThings} agreeCount={post.agreeCount} disagreeCount={post.disagreeCount} userId={post.userId} dateCreated={post.createdAt} key={post.id} />;
}