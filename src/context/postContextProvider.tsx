import { createContext } from "react";
import { IPost } from "../hooks/usePostById";
import { ReactNode, useState } from "react";


interface IPostContext {
    likedPosts: IPost[];
    addLikedPost: (post: IPost) => void;
    removeLikedPost: (id: number) => void;
    isPostLiked: (id: number) => boolean | null;
}


const initialValue: IPostContext = {likedPosts: [], addLikedPost: (post: IPost) => {}, removeLikedPost: (id: number) => {}, isPostLiked: (id: number) => null};
// сам контекст не надо экспортировать
export const postContext = createContext<IPostContext>(initialValue);
// лучше вот тут сделать хук, который будет ретуртинь useContext


interface IPostContextProviderProps{
    children: ReactNode
}

export function PostContextProvider(props: IPostContextProviderProps){
    const {children} = props;
    const [likedPosts, setLikedPosts] = useState<IPost[]>([]);

    function addLikedPost(post: IPost){
        let newLikedPosts = [...likedPosts, post];
        setLikedPosts(newLikedPosts);
    }

    function removeLikedPost(id: number){
        let newLikedPosts = likedPosts.filter((post) => {
            return post.id !== id;
        })
        setLikedPosts(newLikedPosts);
    }

    function isPostLiked(id: number){
        for (let post of likedPosts){
            if (post.id === id){
                return true;
            }
        }
        return false;
    }

    return (
        <postContext.Provider value={{likedPosts: likedPosts, addLikedPost: addLikedPost, removeLikedPost: removeLikedPost, isPostLiked: isPostLiked}}>
            {children}
        </postContext.Provider>
    )
}