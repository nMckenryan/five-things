import { getPost } from "~/server/queries";
import BulletCardEditModal from "./bullet-edit-card-modal";

export default async function EditPostPage(props: { postId: number }) {

  const post = await getPost(props.postId);

  return <BulletCardEditModal   
    subjectName={post.subjectName} 
    n1={post.fiveThing1}
    n2={post.fiveThing2}
    n3={post.fiveThing3}
    n4={post.fiveThing4}
    n5={post.fiveThing5}
    postId={props.postId}
 />
}