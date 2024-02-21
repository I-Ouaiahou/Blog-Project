// BlogContext.js

import React, { createContext, useState, useContext, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const updateState = (newState) => {
        const updatedPosts = [
            ...(posts || []), // Use existing posts or initialize an empty array
            newState?.post || {}, // Use the new post or initialize an empty object
        ];

        setPosts(updatedPosts);

        // Save data to localStorage whenever the state changes
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    const createPost = (newPost) => {
        updateState({ post: newPost });
    };

    useEffect(() => {
        try {
            const storedPosts = localStorage.getItem("blogPosts");
            if (storedPosts) {
                setPosts(JSON.parse(storedPosts));
            }
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }, []);

    return (
        <BlogContext.Provider value={{ posts, createPost, updateState }}>
            {children}
        </BlogContext.Provider>
    );
};

// export const useBlogContext = () => {
//     return useContext(BlogContext);
// };

export default BlogContext;
