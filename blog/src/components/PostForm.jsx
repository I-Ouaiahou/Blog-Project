// PostForm.js

import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

function PostForm({ onSave, onCancel, setFormData, formData }) {
    const { updateState } = useContext(BlogContext);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreatePost = () => {
        onSave(formData);

        updateState({ post: formData });

        setFormData({ title: "", content: "" });
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
            />

            <label>Content:</label>
            <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
            />

            <button onClick={handleCreatePost}>Create Post</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default PostForm;
