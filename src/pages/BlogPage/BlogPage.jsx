import BlogItem from "../../components/BlogItem/BlogItem";
import "./BlogPage.scss";
import { useEffect, useState } from "react";
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
      <h1 className="blog-main__headline">Blog</h1>
      <section className="blog-container">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </section>
    </main>
  );
}

export default Blog;
