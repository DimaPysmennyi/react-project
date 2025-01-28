import { Layout } from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostPage } from "../pages/PostPage/PostPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { createContext, useState } from "react";

export interface IPost{
    id: number,
    headline: string,
    desc: string,
    src?: string,
    author: string,
}

interface IPostContext {
    likedPosts: IPost[];
    addLikedPost: (post: IPost) => void;
    removeLikedPost: (id: number) => void;
    isPostLiked: (id: number) => boolean | null;
}

const initialValue: IPostContext = {likedPosts: [], addLikedPost: (post: IPost) => {}, removeLikedPost: (id: number) => {}, isPostLiked: (id: number) => null};
export const postContext = createContext<IPostContext>(initialValue);

export function App(){
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
        <div>
            <postContext.Provider value={{likedPosts: likedPosts, addLikedPost: addLikedPost, removeLikedPost: removeLikedPost, isPostLiked: isPostLiked}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout></Layout>}>
                            <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                        </Route>
                    </Routes>

                </BrowserRouter>
            </postContext.Provider>

        </div>
    )
}