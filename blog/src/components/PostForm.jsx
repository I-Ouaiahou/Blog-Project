
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
          {formData && (
              <>
                  <label style={{color: 'black'}}>Title:</label>
                  <div>
                      <input
                          className="input"
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                      />
                  </div>

                  <div className="label">
                  <label>Content:</label>
                  </div>
                  <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                     
                  />

                  <div className="create-post1">
                      <button
                          className="create-button1"
                          onClick={handleCreatePost}
                      >
                          Create Post
                      </button>
                      <button
                          className="create-button2"
                          onClick={onCancel}
                      >
                          Cancel
                      </button>
                  </div>
              </>
          )}
      </div>
  );
}


export default PostForm;


