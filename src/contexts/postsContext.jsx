'use client'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext()

export function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_blogId}/posts?key=${process.env.REACT_APP_APIKey}`
                );
                setPosts(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar posts do Blogger:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <PostsContext.Provider value={{ posts }}>
            {children}
        </PostsContext.Provider>
    )
}