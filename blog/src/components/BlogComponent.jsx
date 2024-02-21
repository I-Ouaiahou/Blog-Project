import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import PostForm from "./PostForm";
import PostList from "./PostList";

function BlogComponent() {
    const { posts, createPost, modifyPost, deletePost, updateState } =
        useContext(BlogContext);
    console.log("Posts:", posts);
    const [isCreatingPost, setIsCreatingPost] = useState(false);
    const [isModifyingPost, setIsModifyingPost] = useState(false);
    const [formData, setFormData] = useState({ title: "", content: "" });

    function startCreatingPost() {
        setIsCreatingPost(true);
    }

    function cancelCreatingPost() {
        setIsCreatingPost(false);
        setFormData({ title: "", content: "" });
    }

    function handleCreatePost() {
        const newPost = { title: formData.title, content: formData.content };
        // console.log("newPost:", newPost);
        updateState({ post: newPost });
        setFormData({ title: "", content: "" });
        setIsCreatingPost(false);
    }

    function startModifyingPost() {
        setIsModifyingPost(true);
    }

    function cancelModifyingPost() {
        setIsModifyingPost(false);
        setFormData({ title: "", content: "" });
    }

    function handleModifyPost() {
        const modifiedPost = {
            title: formData.title,
            content: formData.content,
        };
        updateState([modifiedPost]);
        setFormData({ title: "", content: "" });
        setIsModifyingPost(false);
    }

    function handleDeletePost() {
        if (posts && posts.length > 0) {
            const postToDelete = posts[0];
            deletePost(postToDelete);
        } else {
            console.log("No posts to delete.");
        }
    }

    function handleDisplayPosts() {
        console.log(posts);
    }

    function handleViewPost() {
        console.log("View Post");
    }

    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: "center" }}>React Blog</h1>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={startCreatingPost}>
                    Create Post
                </button>
                <button style={styles.button} onClick={startModifyingPost}>
                    Modify Post
                </button>
                <button style={styles.button} onClick={handleDeletePost}>
                    Delete Post
                </button>
                <button style={styles.button} onClick={handleDisplayPosts}>
                    Display Posts
                </button>
            </div>

            {isCreatingPost && (
                <PostForm
                    setFormData={setFormData}
                    formData={formData}
                    onSave={handleCreatePost}
                    onCancel={cancelCreatingPost}
                />
            )}

            {isModifyingPost && (
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => {
                            setFormData({ ...formData, title: e.target.value });
                        }}
                    />

                    <label>Content:</label>
                    <textarea
                        value={formData.content}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                content: e.target.value,
                            })
                        }
                    />

                    <button style={styles.button} onClick={handleModifyPost}>
                        Save Changes
                    </button>
                    <button style={styles.button} onClick={cancelModifyingPost}>
                        Cancel
                    </button>
                </div>
            )}

            <PostList posts={posts} />

            <div>
                <h2 style={styles.subHeading}>View Post</h2>
                <button style={styles.button} onClick={handleViewPost}>
                    View Post
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
    },
    heading: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    subHeading: {
        fontSize: "20px",
        marginBottom: "10px",
    },
    buttonsContainer: {
        marginBottom: "20px",
    },
    button: {
        margin: "5px",
        padding: "8px 16px",
        fontSize: "16px",
        cursor: "pointer",
    },
};

export default BlogComponent;
