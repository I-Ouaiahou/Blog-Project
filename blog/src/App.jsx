import React from 'react'
import {BlogProvider} from './context/BlogContext.jsx';
import BlogComponent from './components/BlogComponent.jsx';
import PostForm from './components/PostForm.jsx'
import PostList from './components/PostList.jsx';
import './App.css';

function App() {
  return (
    <BlogProvider> 
     <div className='app-container'>
     <BlogComponent/> 
      <PostForm/> 
      <PostList/> 
     </div>
    </BlogProvider>
  )
}

export default App