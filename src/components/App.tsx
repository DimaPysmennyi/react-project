import { PostList } from "./PostList/PostList"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import './App.css'


export function App(){
    return (
        <div>
            <Header></Header>            
            <h1 className="forum">Forum</h1>
            <PostList></PostList>
            <Footer></Footer>
        </div>
    )
}