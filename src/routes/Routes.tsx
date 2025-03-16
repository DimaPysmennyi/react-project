import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { Layout } from "../shared/Layout/Layout";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="/liked" element={<LikedPostsPage></LikedPostsPage>}></Route>
                    <Route path="/register" element={<RegistrationPage></RegistrationPage>}></Route>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}