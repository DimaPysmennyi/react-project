import { useState, useContext } from "react";
import './PostCard.css';
import { Link } from "react-router-dom";
import { postContext } from "../App";


export interface IPost{
    id: number,
    headline: string,
    desc: string,
    src?: string,
    author: string
}

export function PostCard(props: IPost){
    let [likes, setLikes] = useState(0)
    let [disabled, setDisabled] = useState(false)
    let likedPosts = useContext(postContext);

    function addLikes(){
        setLikes(likes+1);
        likedPosts.addLikedPost(props);
        setDisabled(true);
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
                    <div className="button-box">
                        <button disabled={disabled} onClick={addLikes}>Like</button>
                        <p>{likes}</p>
                    </div>
                </div>
            </div>

        
    )
}