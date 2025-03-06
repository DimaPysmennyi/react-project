import { ReactNode } from "react";
// Импорт не используется, нужно убрать
import { PostList } from "../PostList/PostList";
import './Main.css'

interface IMainProps{
    children: ReactNode
}

export function Main(props: IMainProps){
    return (
        <div className="main">
            {props.children}
        </div>
    )
}