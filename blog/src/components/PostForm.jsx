import React, { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';

function PostForm() {
  const { createPost } = useBlogContext();
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreatePost = () => {
    createPost(formData);
    setFormData({ title: '', content: '' });
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
    </div>
  );
}

export default PostForm;
