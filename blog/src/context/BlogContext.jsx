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
};

export default BlogContext;
