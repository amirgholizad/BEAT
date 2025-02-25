import "./CreateBlog.scss";
import BlogForm from "../../components/BlogForm/BlogForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CreateBlog() {
  const navigation = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigation("/login");
    }
  }, [navigation]);
  return (
    <main className="create-blog-main">
      <h1 className="create-blog-main__headline">Create Blog</h1>
      <BlogForm mode="create" />
    </main>
  );
}

export default CreateBlog;
