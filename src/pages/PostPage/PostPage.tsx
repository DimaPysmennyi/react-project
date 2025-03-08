import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import './PostPage.css';
import { usePostById } from "../../hooks/usePostById";
import { LikeButton } from "../../shared/LikeButton/LikeButton";
import { Grid } from "react-loader-spinner";


export function PostPage(){
    const params = useParams();
    const {post, isLoading, error} = usePostById(Number(params.id));
    return (
        <div className="postPage">
            { isLoading === true ? (<div><Grid
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
            /></div>) : ( post ? <>
                <h1>{post.name}</h1>
                {/* <img src={post.cover_image} alt="" /> */}
                {/* <p>{post.tags}</p> */}
                <LikeButton id={post.id} 
                    name={post.name} 
                    description={post.description}  
                    time={post.time}
                    comment={post.comment}
                    userId={post.userId}   
                    author={post.author}
                    ></LikeButton>  
                <hr/>  
                {/* <Markdown>
                    {post.body_markdown}
                </Markdown> */}
            </> : <div>{error}</div>)
            }
        </div>
    )
}