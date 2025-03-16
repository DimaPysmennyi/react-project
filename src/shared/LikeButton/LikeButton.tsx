import { useState } from "react";
import { IPost } from "../../hooks/usePostById";
import { usePostContext } from "../../context/postContextProvider";


export function LikeButton(props: IPost){
    let [likes, setLikes] = useState(0);
    let {likedPosts, addLikedPost, removeLikedPost, isPostLiked} = usePostContext();

    function handleLike(){
        if (isPostLiked(props.id)){
            setLikes(likes-1);
            removeLikedPost(props.id);
            return;
        }
        addLikedPost(props);
        setLikes(likes+1);
    }

    console.log(likedPosts);
    
    return (
        <div className="button-box">
            <button onClick={handleLike}>Like</button>
            <p>{likes}</p>
        </div>
    )
}