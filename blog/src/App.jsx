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
