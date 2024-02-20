// BlogContext.js

import React, { createContext, useState, useContext, useEffect } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const createPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    useEffect(() => {
        const storedPosts = localStorage.getItem("blogPosts");
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        }
    }, []);

    const updateState = (newState) => {
        setPosts((prevPosts) => [...prevPosts, newState.post]);
        // Save data to localStorage whenever the state changes
        localStorage.setItem(
            "blogPosts",
            JSON.stringify([...posts, newState.post])
        );
    };

    return (
        <BlogContext.Provider value={{ posts, createPost, updateState }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => {
    return useContext(BlogContext);
};

export default BlogContext;
