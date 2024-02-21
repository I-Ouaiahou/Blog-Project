import React, { useState, useEffect } from 'react';
import { useBlogContext } from '../context/BlogContext';
import PostForm from './PostForm';
import PostList from './PostList';

function BlogComponent() {
  const { posts, createPost, modifyPost, deletePost } = useBlogContext();
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isModifyingPost, setIsModifyingPost] = useState(false);
  const [displayPosts, setDisplayPosts] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });

 
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      createPost(JSON.parse(savedPosts));
    }
  }, []);

  function startCreatingPost() {
    setIsCreatingPost(true);
  }

  function cancelCreatingPost() {
    setIsCreatingPost(false);
    setFormData({ title: '', content: '' });
  }

  function handleCreatePost() {
    const newPosts = [...posts, formData];
    
   
    const limitedPosts = newPosts.slice(-10);
  
    createPost(limitedPosts);
  
    
    localStorage.setItem('blogPosts', JSON.stringify(limitedPosts));
  
    setFormData({ title: '', content: '' });
    setIsCreatingPost(false);
  }
  

  function startModifyingPost() {
    setIsModifyingPost(true);
  }

  function cancelModifyingPost() {
    setIsModifyingPost(false);
    setFormData({ title: '', content: '' });
  }

  function handleModifyPost() {
    modifyPost(formData);
    setFormData({ title: '', content: '' });
    setIsModifyingPost(false);
  }

  function handleDeletePost() {
    if (posts && posts.length > 0) {
      const postToDelete = posts[0];
      deletePost(postToDelete);
    } else {
      console.log('No posts to delete.');
    }
  }

  function handleDisplayPosts() {
    setDisplayPosts(true);
  }

  function handleHidePosts() {
    setDisplayPosts(false);
  }

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center' }}>React Blog</h1>
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
          View Posts
        </button>
        {displayPosts && (
          <button style={styles.button} onClick={handleHidePosts}>
            Hide Posts
          </button>
        )}
      </div>

      {isCreatingPost && (
        <PostForm onSave={handleCreatePost} onCancel={cancelCreatingPost} />
      )}

      {isModifyingPost && (
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <label>Content:</label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
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

      {displayPosts && (
        <div>
          <h2 style={styles.subHeading}>View Post</h2>
          {/* Display posts here */}
          <PostList posts={posts} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  buttonsContainer: {
    marginBottom: '20px',
  },
  button: {
    margin: '5px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default BlogComponent;
