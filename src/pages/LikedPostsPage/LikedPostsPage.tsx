import { useContext } from "react";
import { postContext } from "../../context/postContextProvider";
import { Link } from "react-router-dom";

export function LikedPostsPage(){
    const {likedPosts, isPostLiked} = useContext(postContext);
    return (
        <div>
            <h1>Liked Posts</h1>
            {likedPosts.map((post) => {
                return <Link to={`/post/${post.id}`}>
                    <div>
                        <h2>{post.name}</h2>
                        <p>{post.description}</p>
                    </div>
                </Link>
            })}
        </div>
    )
}