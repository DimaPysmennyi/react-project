import { useEffect, useState } from "react"
import { PostCard } from "../PostCard/PostCard"
import { usePosts } from "../../hooks/usePosts";
import './PostList.css';

export function PostList(){
    const {posts, isLoading, error} = usePosts();

    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // useEffect(() => {
    //     if (selectedCategory == 'All'){
    //         setFilteredPosts(posts);
    //     } else{
    //         setFilteredPosts(posts.filter((post) => {
    //             return post.tags === selectedCategory;
    //         }))
    //     }
    // }, [selectedCategory])

    useEffect(() => {
        setFilteredPosts(posts);
    }, [posts])

    return (
        <div className="post-list">
            <select onChange={(event) => {
                setSelectedCategory(event.target.value)
            }}>
                <option value="All">All</option>
                <option value="Cats">Cats</option>
                <option value="Developing">Developing</option>
                <option value="Movies">Movies</option>
                <option value="Marketing">Marketing</option>
            </select>
            <div className="selectedPosts">
                {filteredPosts.map((post) => {
                    return (
                        <PostCard id={post.id} 
                        name={post.name} 
                        description={post.description}  
                        time={post.time}
                        comment={post.comment}
                        userId={post.userId}   
                        author={post.author}
                        ></PostCard>
                    )
                })}
            </div>
        </div>
    )

}