import React from 'react';
import BlogCard from '../components/BlogCard';

function Blog() {
  const blogs = [];

  return (
    <div className="blog-page">
      <h1>Gaming Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
