import "./BlogItem.scss";
import { Link } from "react-router-dom";

function BlogItem({ blog }) {
  const baseUrl = import.meta.env.VITE_APP_URL;

  const { id, title, content, files, links, created_at, user_id, user_name } =
    blog;

  const date = new Date(created_at);
  const simpleDate = date.toISOString().split("T")[0];
  return (
    <article className="blog-item">
      <Link to={`/blog/${id}`}>
        <img
          className="blog-item__cover"
          src={`${baseUrl}/covers/${files}`}
          alt="blog cover image"
        />
      </Link>

      <h2 className="blog-item__headline">{title}</h2>
      <div className="blog-item__info">
        <p className="blog-item__info__author">{user_name}</p>
        <p className="blog-item__info__date">{simpleDate}</p>
      </div>
    </article>
  );
}

export default BlogItem;
