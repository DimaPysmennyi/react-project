import { useState } from "react"
import './Post.css'

interface IProps{
    headline: string,
    desc: string,
    src: string,
    author: string
}

export function Post(props: IProps){
    let [likes, setLikes] = useState(0)
    let [disabled, setDisabled] = useState(false)
    function addLikes(){
        setLikes(likes+1);
        setDisabled(true);
    }
    return (
        <div className='post'>
            <div className="img">
                <img src={props.src} alt="" />
            </div>
            <div className="headlines">
                <h2>{props.headline}</h2>
                <p>{props.author}</p>
            </div>
            <div className="desc">
                <p>{props.desc}</p>
                <div className="button-box">
                    <button disabled={disabled} onClick={addLikes}>Like</button>
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    )
}