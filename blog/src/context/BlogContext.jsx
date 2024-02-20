import React, { createContext, useState, useContext } from 'react';


const BlogContext = createContext();


export const BlogProvider = ({ children }) => {
 
  const [state, setState] = useState(/* initial state here */);

  
  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

 
  return (
    <BlogContext.Provider value={{ ...state, updateState }}>
      {children}
    </BlogContext.Provider>
  );
};


export const useBlogContext = () => {
  return useContext(BlogContext);
};

export default BlogContext;
