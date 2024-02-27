import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const UserComponent = () => {
    const { posts } = useContext(BlogContext);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>All Posts</h2>
            <div style={styles.postListContainer}>
                {posts.map((post, index) => (
                    <div key={index} style={styles.postCard}>
                        <h3 style={styles.postTitle}>
                            {" "}
                            Title: {post?.title || "Untitled"}
                        </h3>
                        <p style={styles.postContent}>
                            {" "}
                            Content: {post?.content || "No content"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundImage: "url('../background.jpg')",  
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff", 
    },
    postListContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    postTitle: {
        fontSize: "18px",
        marginBottom: "8px",
        color: "#333", 
    },
    postContent: {
        marginBottom: "8px",
        wordWrap: "break-word",
        color: "#555", 
    },
    postCard: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        width: "300px",
        boxSizing: "border-box",
        background: "#fff",  
    },
};


export default UserComponent;
