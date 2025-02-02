import { useState, useContext } from "react";
import './PostCard.css';
import { Link } from "react-router-dom";
import { IPost } from "../../hooks/usePostById";
import { postContext } from "../../context/postContextProvider";
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
                        <img src={props.cover_image} alt="" />
                    </div>
                    <div className="headlines">
                        <h2>{props.title.slice(0, 23)}...</h2>
                        <p>{props.author}</p>
                    </div>
                </Link>
                <div className="desc">
                    <p>{props.description.slice(0, 100)}...</p>
                    <LikeButton id={props.id} 
                    title={props.title} 
                    description={props.description} 
                    cover_image={props.cover_image} 
                    author={props.author}
                    tags={props.tags}
                    body_markdown={props.body_markdown}
                    ></LikeButton>
                </div>
            </div>

        
    )
}