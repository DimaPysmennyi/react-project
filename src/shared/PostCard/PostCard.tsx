import { useState } from "react";
import './PostCard.css';
import { Link } from "react-router-dom";

interface IProps{
    id: number,
    headline: string,
    desc: string,
    src?: string,
    author: string
}

export function PostCard(props: IProps){
    let [likes, setLikes] = useState(0)
    let [disabled, setDisabled] = useState(false)
    function addLikes(){
        setLikes(likes+1);
        setDisabled(true);
    }

    return (
        <Link to={`/post/${props.id}`}>
            <div className='post'>
                <div className="img">
                    <img src={props.src} alt="" />
                </div>
                <div className="headlines">
                    <h2>{props.headline.slice(0, 23)}...</h2>
                    <p>{props.author}</p>
                </div>
                <div className="desc">
                    <p>{props.desc.slice(0, 100)}...</p>
                    <div className="button-box">
                        <button disabled={disabled} onClick={addLikes}>Like</button>
                        <p>{likes}</p>
                    </div>
                </div>
            </div>
        </Link>

        
    )
}