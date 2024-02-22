import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import PostForm from "./PostForm";
import PostList from "./PostList";

function BlogComponent() {
    const { posts, updateState } = useContext(BlogContext);
    console.log(posts);
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

    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: "center" }}>Welcome to Blogging</h1>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={startCreatingPost}>
                    Create Post
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
