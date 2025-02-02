import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { Layout } from "../shared/Layout/Layout";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/liked" element={<LikedPostsPage></LikedPostsPage>}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}