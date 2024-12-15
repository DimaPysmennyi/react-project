import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import './PostPage.css';

export function PostPage(){
    const params = useParams();
    let post = {
        title: '',
        cover_image: '',
        tags: '',
        body_markdown: '',
    };
    let [receivedPost, setReceivedPost] = useState(post);
    useEffect(() => {
        async function getArticle(){
            const response = await fetch(`https://dev.to/api/articles/${params.id}`);
            const json = await response.json();
            setReceivedPost(json);
        }
        getArticle();
    }, [])
    // const postTitle = receivedPost['title'];
    return (
        <div className="postPage">
            {/* <h1>{params.id}</h1>; */}
            <h1>{receivedPost.title}</h1>
            <img src={receivedPost.cover_image} alt="" />
            <p>{receivedPost.tags}</p>
            <hr/>  
            <Markdown>
                {receivedPost.body_markdown}
            </Markdown>
        </div>
    )
}