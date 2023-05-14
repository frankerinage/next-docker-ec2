'use client';

import { fetchPosts } from '@/lib/funcs/blog/fetch-posts';

const Posts = async () => {
  return (
    <div className="my-10">
      <button onClick={fetchPosts}>Fetch Posts</button>
    </div>
  );
};

export default Posts;
