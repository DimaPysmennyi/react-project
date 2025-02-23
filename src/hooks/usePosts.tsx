import { useEffect, useState } from "react";
import {IPost} from './usePostById'

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        async function getPosts(){
            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:8000/api/post/all');
                const posts = await response.json();
                setPosts(posts)
            } catch (error){
                const err = error instanceof Error ? error.message : undefined;
                setError(`${err}`);
            } finally {
                setIsLoading(false);
            }
        }
        getPosts();

    }, [])
    return {posts: posts, isLoading: isLoading, error: error};
}