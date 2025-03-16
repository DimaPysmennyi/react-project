import { PostContextProvider } from "../context/postContextProvider";
import { AppRoutes } from "../routes/Routes";
import { UserContextProvider } from "../context/userContextProvider";

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
            <UserContextProvider>
            <PostContextProvider>
                <AppRoutes></AppRoutes>
            </PostContextProvider>
            </UserContextProvider>
        </div>
    )
}