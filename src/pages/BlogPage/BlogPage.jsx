import BlogItem from "../../components/BlogItem/BlogItem";
import "./BlogPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBlogs } from "../../functions/Functions";

function Blog() {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchAllBlogs(baseUrl);
      if (data) setBlogs(data);
    };
    getBlogs();
  }, [baseUrl]);

  return (
    <main className="blog-main">
      <div className="blog-main__headline">
        <h1 className="blog-main__headline__title">Blog</h1>
        <Link to="/blog/create">
          <button className="blog-main__headline__button">
            Start a New Blog
          </button>
        </Link>
      </div>
      <section className="blog-container">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}

export default Blog;
