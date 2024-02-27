import React, { createContext, useState, useContext, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        try {
            const storedPosts = localStorage.getItem("blogPosts");
            return storedPosts ? JSON.parse(storedPosts) : [];
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return [];
        }
    });

    const createPost = (newPost) => {
        const updatedPosts = [...(posts || []), newPost];
        setPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    const deletePost = (postToDelete) => {
        const updatedPosts = posts.filter((post) => post !== postToDelete);
        setPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    const modifyPost = (modifiedPost) => {
        const updatedPosts = posts.map((post) =>
            post.title === modifiedPost.title ? { ...post, ...modifiedPost, isModified: true } : post
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
            value={{ posts, createPost, deletePost, modifyPost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
