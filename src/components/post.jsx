import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post border-bottom p-3 bg-white w-shadow">
      <div className="media text-muted pt-3">
        <img src={post.userImage} alt="user" className="mr-3 post-user-image" />
        <div className="media-body pb-3 mb-0 small lh-125">
          <div className="d-flex justify-content-between align-items-center w-100">
            <a href="#" className="text-gray-dark post-user-name">{post.userName}</a>
          </div>
          <span className="d-block">{post.time} <i className='bx bx-globe ml-3'></i></span>
        </div>
      </div>
      <div className="mt-3">
        <p>{post.content}</p>
      </div>
      {post.image && <img src={post.image} className="post-content" alt="post" />}
    </div>
  );
};

export default Post;
