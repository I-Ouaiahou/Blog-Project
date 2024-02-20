// PostForm.js

import React, { useState } from "react";
import { useBlogContext } from "../context/BlogContext";

function PostForm({ onSave, onCancel }) {
    const [formData, setFormData] = useState({ title: "", content: "" });
    const { updateState } = useBlogContext();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreatePost = () => {
        console.log("onSave:", typeof onSave, onSave);
        onSave(formData);
        updateState({ post: formData }); // Assuming you have a post property in newState
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
