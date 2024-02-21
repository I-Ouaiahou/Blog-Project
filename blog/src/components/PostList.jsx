import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
function PostList() {
    const { posts } = useContext(BlogContext);

    console.log("Posts in PostList:", posts); // Log the posts array

    if (!posts || posts.length === 0) {
        return (
            <div style={styles.container}>
                <h2 style={styles.heading}>All Posts</h2>
                <p style={styles.noPostsMessage}>No posts available.</p>
            </div>
        );
    }

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
}
const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
    },
    postListContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    postTitle: {
        fontSize: "18px",
        marginBottom: "8px",
    },
    postContent: {
        marginBottom: "8px",
    },
    postCard: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        width: "300px",
        boxSizing: "border-box",
    },
    heading: {
        fontSize: "20px",
        marginBottom: "10px",
    },
    noPostsMessage: {
        fontStyle: "italic",
        color: "#888",
    },
    postList: {
        listStyle: "none",
        padding: "0",
    },
    postItem: {
        marginBottom: "10px",
    },
};

export default PostList;
