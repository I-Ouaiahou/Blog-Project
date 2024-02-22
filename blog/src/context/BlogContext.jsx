<<<<<<< HEAD
import React, { createContext, useState, useContext, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [state, setState] = useState({ posts: [] });

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  const createPost = (newPost) => {
    updateState({ posts: [...state.posts, newPost] });
  };

  useEffect(() => {
    
    localStorage.setItem('blogPosts', JSON.stringify(state.posts));
  }, [state.posts]);

  return (
    <BlogContext.Provider value={{ ...state, createPost, updateState }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
=======
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
>>>>>>> kirill-branch
};

export default BlogContext;
