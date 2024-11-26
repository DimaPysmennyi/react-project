import { useState } from "react"

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
        <div>
            <h1>{props.headline}</h1>
            <p>{props.desc}</p>
            <img width="500px" height="300px" src={props.src} alt="" />
            <p>{props.author}</p>
            <button disabled={disabled} onClick={addLikes}>Like</button>
            <p>{likes}</p>
        </div>
    )
}