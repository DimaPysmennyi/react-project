import { Layout } from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostPage } from "./PostPage/PostPage";
import { PostList } from "./PostList/PostList";
// import './App.css';


export function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostList></PostList>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    </Route>
                </Routes>

            </BrowserRouter>
        </div>
    )
}