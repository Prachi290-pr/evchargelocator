import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete'; // Correct import for Autocomplete
import '../styles/Community.css';

// PostForm Component
const PostForm = ({ addPost }) => {
  const [postContent, setPostContent] = useState('');
  const userOptions = ['User1', 'User2', 'User3']; // Example user list

  const handlePostSubmit = () => {
    if (postContent.trim() !== '') {
      addPost(postContent);
      setPostContent(''); // Clear the input after posting
    }
  };

  return (
    <div className="post-form">
      <Autocomplete
        options={userOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="What's on your mind?"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        )}
        onChange={(event, newValue) => {
          if (newValue) {
            setPostContent((prev) => `${prev} @${newValue}`); // Tagging example
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostSubmit}
        style={{ marginTop: '10px' }}
      >
        Post
      </Button>
    </div>
  );
};

// Post Component
const Post = ({ post, username }) => {
  return (
    <Card className="post-card" style={{ marginBottom: '20px' }}>
      <CardHeader
        avatar={<Avatar alt={username} src={`https://i.pravatar.cc/150?u=${username}`} />}
        title={username}
        subheader="Just now"
      />
      <CardContent>
        <Typography variant="body1">{post}</Typography>
        <div className="post-actions">
          <Button size="small" color="primary">Like</Button>
          <Button size="small" color="primary">Comment</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Community Component
const Community = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    setPosts([{ content, username: 'User1' }, ...posts]);
  };

  return (
    <div className="community-container">
      <h2>Community Feed</h2>
      <PostForm addPost={addPost} />
      <div className="posts-feed">
        {posts.map((post, index) => (
          <Post key={index} post={post.content} username={post.username} />
        ))}
      </div>
    </div>
  );
};

export default Community;
