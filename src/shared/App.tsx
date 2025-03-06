import { PostContextProvider } from "../context/postContextProvider";
import { AppRoutes } from "../routes/Routes";
// а ты чего тут забыл. в отдельный файл types
export interface IPost{
    id: number,
    headline: string,
    desc: string,
    src?: string,
    author: string,
}



export function App(){
    return (
        <div>
            <PostContextProvider>
                <AppRoutes></AppRoutes>
            </PostContextProvider>
        </div>
    )
}