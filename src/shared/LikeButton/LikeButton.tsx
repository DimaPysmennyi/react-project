import { useContext, useState } from "react";
import { IPost } from "../../hooks/usePostById";
import { postContext } from "../../context/postContextProvider";


export function LikeButton(props: IPost){
    let [likes, setLikes] = useState(0);
    // вот вместо useContext лучше сделать свой хук, который этим занимается
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
    // log убираем
    console.log(likedPosts);
    
    return (
        <div className="button-box">
            <button onClick={handleLike}>Like</button>
            <p>{likes}</p>
        </div>
    )
}