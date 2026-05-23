import React from 'react';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>
      <a href={`/blog/${blog.id}`}>Read More</a>
    </div>
  );
}

export default BlogCard;
