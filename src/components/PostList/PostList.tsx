import { useEffect, useState } from "react"
import {Post} from "../Post/Post"
import './PostList.css'
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "Cat", 
        taglist: ["Cats"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum bibendum leo, vitae luctus nisl hendrerit ac. Duis accumsan convallis sem at dapibus. Proin viverra est ut posuere...", 
        cover_image: "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_16x9.jpg",
        author: "serj roman"
    },
    {
        id: 2,
        title: "React", 
        taglist: ["Developing"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum bibendum leo, vitae luctus nisl hendrerit ac. Duis accumsan convallis sem at dapibus. Proin viverra est ut posuere...", 
        cover_image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
        author: "serj roman"
    },
    {
        id: 3,
        title: "Movie", 
        taglist: ["Movies"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum bibendum leo, vitae luctus nisl hendrerit ac. Duis accumsan convallis sem at dapibus. Proin viverra est ut posuere...", 
        cover_image: "https://variety.com/wp-content/uploads/2023/03/Movie-Theater-Film-Cinema-Exhibition-Placeholder.jpg?w=1000&h=562&crop=1",
        author: "serj roman"
    },
    {
        id: 4,  
        title: "Marketing Tip", 
        taglist: ["Marketing"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum bibendum leo, vitae luctus nisl hendrerit ac. Duis accumsan convallis sem at dapibus. Proin viverra est ut posuere...", 
        cover_image: "https://media.licdn.com/dms/image/v2/D5612AQGaPpJHHoJ1yg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721182447314?e=2147483647&v=beta&t=wNMSy5Vbg7JOgCREYHwVzDXsU-xll4zDQdBaD8dRlyo",
        author: "serj roman"
    },

]

export function PostList(){
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        if (selectedCategory == 'All'){
            setFilteredPosts(posts);
        } else{
            setFilteredPosts(posts.filter((post) => {
                return post.taglist[0] === selectedCategory;
            }))
        }
    }, [selectedCategory])

    useEffect(() => {
        async function getArticles(){
            const response = await fetch('https://dev.to/api/articles');
            const posts = await response.json();
            setFilteredPosts(posts);
        }
        getArticles();
    })

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
                        <Post key={post.id} id={post.id} headline={post.title} desc={post.description} src={post.cover_image} author={post.author}></Post> 
                    )
                })}
            </div>
        </div>
    )

}