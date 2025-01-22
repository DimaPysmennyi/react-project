import { useEffect, useState } from "react";

export interface IPost{
    id: number,
    title: string,
    cover_image: string,
    tags: string,
    description: string,
    body_markdown: string,
    author: string,
}

export function usePostById(id: number){
    let [receivedPost, setReceivedPost] = useState<IPost>();
    let [isLoading, setIsLoading] = useState<boolean>(false);
    let [error, setError] = useState<string>();
    useEffect(() => {
        async function getArticle(){
            try{
                setIsLoading(true);
                const response = await fetch(`https://dev.to/api/articles/${id}`);
                const json = await response.json();
                setReceivedPost(json);
            } catch (error){
                const err = error instanceof Error ? error.message : undefined;
                setError(`${err}`);
            } finally{
                setIsLoading(false);
            }
        }
        getArticle();
    }, [id])
    return {post: receivedPost, isLoading: isLoading, error: error};
}
