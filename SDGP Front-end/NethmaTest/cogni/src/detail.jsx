import React from "react";

const Post = ({ title, content, publishedDate }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p className="published-date">{publishedDate}</p>
      <div className="content">{content}</div>
    </article>
  );
};

const BlogPage = () => {
  const posts = [
    {
      title: "My First Blog Post",
      content: "This is my first blog post ever! I'm excited to share my thoughts and experiences with you.",
      publishedDate: "2024-02-08",
    },
    {
      title: "Another Interesting Post",
      content: "Here's another post I wrote about something I found interesting.",
      publishedDate: "2024-02-07",
    },
  ];

  return (
    <div className="blog-page">
      <h1>My Blog</h1>
      {posts.map((post) => (
        <Post key={post.title} {...post} />
      ))}
    </div>
  );
};

export default BlogPage;
