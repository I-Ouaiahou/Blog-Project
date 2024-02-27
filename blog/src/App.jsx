import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogComponent from "./components/BlogComponent";
import AdminComponent from "./components/AdminComponent";
import UserComponent from "./components/UserComponent";
import { BlogProvider } from "./context/BlogContext";
import "./App.css";

function App() {
    const isAdmin = true;

    return (
        <Router>
            <BlogProvider>
                <Routes>
                    <Route path="/" element={<BlogComponent />} />
                    {isAdmin && (
                        <Route path="/admin" element={<AdminComponent />} />
                    )}
                    <Route path="/user" element={<UserComponent />} />
                </Routes>
            </BlogProvider>
        </Router>
    );
}

export default App;
