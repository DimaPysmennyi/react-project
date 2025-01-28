import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import './PostPage.css';
import { usePostById } from "../../hooks/usePostById";
import { LikeButton } from "../../shared/LikeButton/LikeButton";


export function PostPage(){
    const params = useParams();
    const {post, error} = usePostById(Number(params.id));
    return (
        <div className="postPage">
            { post !== undefined ? <>
                <h1>{post.title}</h1>
                <img src={post.cover_image} alt="" />
                <p>{post.tags}</p>
                <LikeButton id={post.id} headline={post.title} desc={post.description} src={post.cover_image} author={post.author}></LikeButton>
                <hr/>  
                <Markdown>
                    {post.body_markdown}
                </Markdown>
            </> : <div>{error}</div>}
        </div>
    )
}