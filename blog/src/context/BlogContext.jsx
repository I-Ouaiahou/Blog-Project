
import React, { createContext, useState, useContext, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const updateState = (newState) => {
        const updatedPosts = [...(posts || []), newState?.post || {}];

        setPosts(updatedPosts);

        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    const createPost = (newPost) => {
        updateState({ post: newPost });
    };

    const deletePost = (postToDelete) => {
        const updatedPosts = posts.filter((post) => post !== postToDelete);
        setPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    const modifyPost = (modifiedPost) => {
        const updatedPosts = posts.map((post) =>
            post === modifiedPost ? { ...post, isModified: true } : post
        );
        setPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
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
        <BlogContext.Provider
            value={{ posts, createPost, updateState, deletePost, modifyPost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
