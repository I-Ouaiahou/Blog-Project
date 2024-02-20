import React from 'react'
import {BlogProvider} from './context/BlogContext.jsx';
import BlogComponent from './components/BlogComponent.jsx';
import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx';

function App() {
  return (
    <BlogProvider>
      <BlogComponent/> 
      <PostForm/> 
      <PostList/> 
    </BlogProvider>
  )
}

export default App