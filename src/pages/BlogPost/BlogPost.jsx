import React from "react";
import "./BlogPost.scss";
import { fetchBlogById, convertDate } from "../../functions/Functions";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function BlogPost() {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const id = useParams().id;
  const [blog, setBlog] = useState("");

  useEffect(() => {
    const getBlog = async () => {
      const data = await fetchBlogById(id, baseUrl);
      if (data) setBlog(data);
    };
    getBlog();
    const { title, content, created_at, user_name, links } = blog;
  }, [id, baseUrl, fetchBlogById]);

  const simpleDate = convertDate(blog.created_at);

  return (
    <main className="blog-post-main">
      <section className="blog-post-container">
        <img
          className="blog-post-container__cover"
          src={`${baseUrl}/covers/${blog.files}`}
          alt="blog post image"
        />
        <div className="blog-post-container__info">
          <p className="blog-post-container__info__author">{blog.user_name}</p>
          <p className="blog-post-container__info__date">{simpleDate}</p>
        </div>
        <h1 className="blog-post-container__headline">{blog.title}</h1>
        <p className="blog-post-container__content">{blog.content}</p>
        <a className="blog-post-container__links" href={blog.links}>
          Read more...
        </a>
      </section>
    </main>
  );
}

export default BlogPost;
