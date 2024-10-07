import React from 'react';
import Post from '.components/Post';

const NewsFeed = ({ posts }) => {
  return (
    <div className="newsfeed">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;
