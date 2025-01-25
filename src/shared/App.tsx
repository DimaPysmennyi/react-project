import { Layout } from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostPage } from "../pages/PostPage/PostPage";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { IPost } from "./PostCard/PostCard";
import { createContext, useState } from "react";

interface IPostContext {
    likedPosts: IPost[];
    addLikedPost: (post: IPost) => void;
}

const initialValue: IPostContext = {likedPosts: [], addLikedPost: (post: IPost) => {}};
export const postContext = createContext<IPostContext>(initialValue);

export function App(){
    const [likedPosts, setLikedPosts] = useState<IPost[]>([]);

    function addLikedPost(post: IPost){
        let newLikedPosts = [...likedPosts, post];
        setLikedPosts(newLikedPosts);
    }

    return (
        <div>
            <postContext.Provider value={{likedPosts: likedPosts, addLikedPost: addLikedPost}}>
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