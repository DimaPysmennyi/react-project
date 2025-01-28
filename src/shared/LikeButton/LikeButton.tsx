import { useContext, useState } from "react";
import { IPost, postContext } from "../App";


export function LikeButton(props: IPost){
    let [likes, setLikes] = useState(0);
    let {likedPosts, addLikedPost, removeLikedPost, isPostLiked} = useContext(postContext);

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