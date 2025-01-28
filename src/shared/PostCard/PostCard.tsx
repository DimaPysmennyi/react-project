import { useState, useContext } from "react";
import './PostCard.css';
import { Link } from "react-router-dom";
import { IPost, postContext } from "../App";
import { LikeButton } from "../LikeButton/LikeButton";


export function PostCard(props: IPost){
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
        
            <div className='post'>
                <Link to={`/post/${props.id}`}>
                    <div className="img">
                        <img src={props.src} alt="" />
                    </div>
                    <div className="headlines">
                        <h2>{props.headline.slice(0, 23)}...</h2>
                        <p>{props.author}</p>
                    </div>
                </Link>
                <div className="desc">
                    <p>{props.desc.slice(0, 100)}...</p>
                    <LikeButton id={props.id} headline={props.headline} desc={props.desc} src={props.src} author={props.author}></LikeButton>
                </div>
            </div>

        
    )
}