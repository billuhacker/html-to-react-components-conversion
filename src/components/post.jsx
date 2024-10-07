import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border-b p-4 bg-white shadow-sm">
      <div className="flex items-start space-x-4">
        <img src={post.userImage} alt="user" className="w-10 h-10 rounded-full" />
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <a href="#" className="text-gray-800 font-semibold">{post.userName}</a>
          </div>
          <span className="block text-gray-500 text-sm">
            {post.time} <i className='bx bx-globe ml-2'></i>
          </span>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-gray-700">{post.content}</p>
      </div>
      {post.image && (
        <img src={post.image} className="mt-3 rounded-lg" alt="post" />
      )}
    </div>
  );
};

export default Post;
