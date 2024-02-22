<<<<<<< HEAD
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
=======
import React from "react";
import { BlogProvider } from "./context/BlogContext";
import BlogComponent from "./components/BlogComponent";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";
function App() {
    return (
        <BlogProvider>
            <BlogComponent />
            {/* <PostForm />
            <PostList /> */}
        </BlogProvider>
    );
}
export default App;
>>>>>>> kirill-branch
