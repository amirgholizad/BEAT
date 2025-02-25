import "./BlogForm.scss";
import Input from "../../components/Input/Input";
import Uploader from "../../components/Uploader/Uploader";
import { useEffect, useState } from "react";
import { getAllUsers, createBlog, editBlog } from "../../scripts/functions";
import { useNavigate } from "react-router-dom";
import alertIcon from "../../assets/icons/svg/alertIcon.svg";
import AES from "crypto-js/aes";

function BlogForm({ mode, initialData }) {
  const [users, setUsers] = useState([]);
  const navigation = useNavigate();
  const baseUrl = import.meta.env.VITE_APP_URL;
  const secretKey = import.meta.env.VITE_SECRET_KEY;

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers(baseUrl);
      const user_names = data.map((user) => user.user_name);
      if (data) setUsers(user_names);
    };
    getUsers();
  }, [baseUrl, getAllUsers]);

  let initialFormData = {
    user: "",
    title: "",
    links: "",
    content: "",
  };

  if (initialData) {
    initialFormData.user = initialData.user;
    initialFormData.title = initialData.title;
    initialFormData.links = initialData.links;
    initialFormData.content = initialData.content;
  }

  const [formData, setFormData] = useState(initialFormData);
  const [inputInvalid, setInputInvalid] = useState({
    user: false,
    title: false,
    links: false,
    content: false,
  });
  const [validationMessages, setValidationMessages] = useState({
    user: "",
    title: "",
    links: "",
    content: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        user: initialData.user,
        title: initialData.title,
        links: initialData.links,
        content: initialData.content,
      });
    }
  }, [mode, initialData]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setInputInvalid({
      ...inputInvalid,
      [name]: false,
    });
    setValidationMessages({
      ...validationMessages,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newInputInvalid = {
      user: false,
      title: false,
      links: false,
      content: false,
    };

    const newValidationMessages = {
      user: "",
      title: "",
      links: "",
      content: "",
    };

    if (!formData.user) {
      newInputInvalid.user = true;
      newValidationMessages.user = "Please select a user";
      isValid = false;
    }

    if (!formData.title) {
      newInputInvalid.title = true;
      newValidationMessages.title = "Please enter a title";
      isValid = false;
    }

    if (!formData.links) {
      newInputInvalid.links = true;
      newValidationMessages.links = "Please enter a link as your reference";
      isValid = false;
    }

    if (!formData.content) {
      newInputInvalid.content = true;
      newValidationMessages.content = "You can not submit an empty blog";
      isValid = false;
    }

    setInputInvalid(newInputInvalid);
    setValidationMessages(newValidationMessages);
    return isValid;
  };

  let photoName = AES.encrypt(
    `${formData.title}${formData.user}`,
    secretKey
  ).toString();

  photoName = photoName.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  photoName = photoName.substring(0, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newBlog = {
        user: formData.user,
        title: formData.title,
        links: formData.links,
        files: `${photoName}.png`,
        content: formData.content,
      };
      try {
        if (mode === "edit") {
          console.log("newBlog", newBlog);
          const response = await editBlog(newBlog, initialData.id, baseUrl);
          if (response === "Success") {
            alert("Your blog post was successfully updated!");
            setTimeout(() => {
              navigation("/blog"), 3000;
            });
            setFormData(newBlog);
          } else {
            alert("An error occurred. Please try again.");
          }

          navigation("/blog");
        } else {
          const response = await createBlog(newBlog, baseUrl);
          if (response === "Success") {
            alert("Your blog post was successfully posted!");
            setTimeout(() => {
              navigation("/blog"), 3000;
            });
            setFormData(initialFormData);
          } else {
            alert("An error occurred. Please try again.");
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const ErrorMessage = ({ message }) => (
    <span className="input-error">
      <img src={alertIcon} alt="Error" className="input-error__icon" />
      <p className="input-error__message">{message}</p>
    </span>
  );

  return (
    <form onSubmit={handleSubmit} className="create-blog-form">
      <section className="create-blog-form-left">
        <Input
          name="title"
          labelName="Title"
          type="text"
          onChange={handleChange}
          className="create-blog-form__input"
          placeholderText={"Enter a title for your post"}
          value={formData.title}
        />
        {inputInvalid.title && (
          <ErrorMessage message={validationMessages.title} />
        )}

        <Input
          name="user"
          labelName="User"
          type="dropdown"
          options={users}
          onChange={handleChange}
          className="create-blog-form__input"
          placeholderText={"Select a user"}
          value={formData.user}
        />
        {inputInvalid.user && (
          <ErrorMessage message={validationMessages.user} />
        )}

        <Input
          name="links"
          labelName="Links"
          type="text"
          onChange={handleChange}
          className="create-blog-form__input"
          placeholderText={"Enter a link as your reference"}
          value={formData.links}
        />
        {inputInvalid.links && (
          <ErrorMessage message={validationMessages.links} />
        )}
        <Input
          name="content"
          labelName="Content"
          type="textarea"
          placeholderText="Enter your blog post here"
          onChange={handleChange}
          className="create-blog-form__input"
          value={formData.content}
        />
        {inputInvalid.content && (
          <ErrorMessage message={validationMessages.content} />
        )}
      </section>
      <section className="create-blog-form-right">
        <Uploader photoName={photoName} />

        {/* <button className="create-blog-form-right__button" type="submit">
          Submit
        </button> */}
      </section>
    </form>
  );
}

export default BlogForm;
