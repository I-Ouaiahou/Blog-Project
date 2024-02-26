import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function PostList() {
    const { posts, deletePost, modifyPost, updateState } = useContext(BlogContext);
    const [formData, setFormData] = useState({ title: "", content: "" });
    const [editingPost, setEditingPost] = useState(null);

    const handleDelete = (post) => {
        deletePost(post);
    };

    const handleModify = (post) => {
        setFormData({
            title: post?.title || "",
            content: post?.content || "",
        });
        setEditingPost(post);
    };

    const handleSaveChanges = () => {
        const modifiedPost = {
            ...editingPost,
            title: formData.title,
            content: formData.content,
        };
        updateState({ post: modifiedPost });
        setFormData({ title: "", content: "" });
        setEditingPost(null);
    };

    const handleCancelModify = () => {
        setFormData({ title: "", content: "" });
        setEditingPost(null);
    };

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
                        {editingPost && editingPost === post ? (
                            <>
                                <textarea
                                    style={styles.textarea}
                                    value={formData.content}
                                    onChange={(e) =>
                                        setFormData({ ...formData, content: e.target.value })
                                    }
                                />
                                <div style={styles.buttonsContainer}>
                                    <button style={styles.button} onClick={handleSaveChanges}>
                                        Save Changes
                                    </button>
                                    <button style={styles.button} onClick={handleCancelModify}>
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p style={styles.postContent}>
                                    {" "}
                                    Content: {post?.content || "No content"}
                                </p>
                                <div style={styles.buttonsContainer}>
                                    <FaRegEdit onClick={() => handleModify(post)}>
                                        Modify
                                    </FaRegEdit>
                                    <MdDeleteOutline onClick={() => handleDelete(post)}>
                                        Delete
                                    </MdDeleteOutline>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    // ... (your existing styles)
    textarea: {
        width: "100%",
        minHeight: "100px",
        marginBottom: "8px",
    },
    buttonsContainer: {
        marginTop: "8px",
    },
    button: {
        margin: "5px",
        padding: "8px 16px",
        fontSize: "16px",
        cursor: "pointer",
    },
};

export default PostList;