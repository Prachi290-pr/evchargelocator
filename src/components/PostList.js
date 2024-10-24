import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h4>{post.user}</h4>
      <p>{post.content}</p>
      <div className="post-actions">
        <button>Like</button>
        <button>Reply</button>
      </div>
    </div>
  );
};

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
