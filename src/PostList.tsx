import {Post} from "./Post"

export function PostList(){
    const posts = [
        {
            name: "post", 
            desc: "description", 
            src: "https://images.squarespace-cdn.com/content/v1/57263bf8f8baf385ff61bb09/1535668320137-NZQPOXCGLFT34I9E4Z1E/Screen+Shot+2018-08-30+at+6.17.10+PM.png",
            author: "serj roman"
        },
        {
            name: "post", 
            desc: "description", 
            src: "https://images.squarespace-cdn.com/content/v1/57263bf8f8baf385ff61bb09/1535668320137-NZQPOXCGLFT34I9E4Z1E/Screen+Shot+2018-08-30+at+6.17.10+PM.png",
            author: "serj roman"
        },
        {
            name: "post", 
            desc: "description", 
            src: "https://images.squarespace-cdn.com/content/v1/57263bf8f8baf385ff61bb09/1535668320137-NZQPOXCGLFT34I9E4Z1E/Screen+Shot+2018-08-30+at+6.17.10+PM.png",
            author: "serj roman"
        }
    ]

    return (
        <div>
            {posts.map((post) => {
                return <Post headline={post.name} desc={post.desc} src={post.src} author={post.author}></Post>
            })}
        </div>
    )

}