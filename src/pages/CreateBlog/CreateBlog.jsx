import "./CreateBlog.scss";
import BlogForm from "../../components/BlogForm/BlogForm";

function CreateBlog() {
  return (
    <main className="create-blog-main">
      <h1 className="create-blog-main__headline">Create Blog</h1>
      <BlogForm mode="create" />
    </main>
  );
}

export default CreateBlog;
