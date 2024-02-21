import React from 'react';
import { useBlogContext } from '../context/BlogContext';

function PostList() {
  const { posts } = useBlogContext();

 
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
      <ul style={styles.postList}>
        {posts.map((post, index) => (
          <li key={index} style={styles.postItem}>
            <strong>{post.title}</strong> - {post.date} by {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  noPostsMessage: {
    fontStyle: 'italic',
    color: '#888',
  },
  postList: {
    listStyle: 'none',
    padding: '0',
  },
  postItem: {
    marginBottom: '10px',
  },
};

export default PostList;
