import "./LoginPage.scss";
import "../../styles/partials/_global.scss";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import userIcon from "../../assets/icons/svg/user.svg";
import passwordIcon from "../../assets/icons/svg/password.svg";
import alertIcon from "../../assets/icons/svg/alertIcon.svg";

const BASE_URL = import.meta.env.VITE_APP_URL;
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

function LoginPage({ path }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [alluserData, setAllUserData] = useState([]);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [inputInvalid, setInputInvalid] = useState({
    email: false,
    password: false,
  });

  const [validationMessages, setValidationMessages] = useState({
    email: "",
    password: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
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

  async function getUserTable() {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      setAllUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserTable();
  }, [BASE_URL]);

  const validateForm = () => {
    let isValid = true;
    const newInputInvalid = {
      email: false,
      password: false,
    };

    const newValidationMessages = {
      email: "",
      password: "",
    };

    if (!formData.email) {
      newInputInvalid.email = true;
      newValidationMessages.email = "Email is required";
      isValid = false;
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newInputInvalid.email = true;
      newValidationMessages.email = "Invalid email";
      isValid = false;
    } else if (
      alluserData.find((user) => user.email === formData.email) &&
      path === "signup"
    ) {
      newInputInvalid.email = true;
      newValidationMessages.email = "Email already exists";
      isValid = false;
    }

    if (!formData.password) {
      newInputInvalid.password = true;
      newValidationMessages.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newInputInvalid.password = true;
      newValidationMessages.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setInputInvalid(newInputInvalid);
    setValidationMessages(newValidationMessages);
    return isValid;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setEmail(formData.email);
    setPassword(CryptoJS.AES.encrypt(formData.password, SECRET_KEY).toString());
    if (validateForm()) {
      try {
        console.log(email, password);
        const response = await axios.post(`${BASE_URL}/${path}`, {
          email: email,
          password: password,
        });
        if (response.status === 200) {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
          setFormData({
            email: "",
            password: "",
          });
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const ErrorMessage = ({ message }) => (
    <div className="input-error">
      <img src={alertIcon} alt="Error" className="input-error__icon" />
      <p className="text-danger">{message}</p>
    </div>
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmail(formData.email);
    setPassword(formData.password);
    if (validateForm()) {
      try {
        const response = await axios.post(`${BASE_URL}/login`, {
          email: email,
          password: password,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
          setFormData({
            email: "",
            password: "",
          });
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main className="login">
      <section className="login-form-container">
        <div className="login-form-logo">
          <h1 className="logo">BEAT</h1>
        </div>
        <form
          className="login-form"
          action="submit"
          onSubmit={path === "login" ? handleLogin : handleSignup}
        >
          <div className="form-group login-form-group">
            <img src={userIcon} alt="user icon" />
            <Input
              name="email"
              type="text"
              value={formData.email}
              className={inputInvalid.email ? "input--invalid" : ""}
              id="email"
              aria-describedby="emailHelp"
              placeholderText={
                inputInvalid.email ? validationMessages.email : "Enter email"
              }
              onChange={handleChange}
            />
          </div>
          {inputInvalid.email && (
            <ErrorMessage message={validationMessages.email} />
          )}
          <div className="form-group login-form-group">
            <small id="emailHelp" className="text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group login-form-group">
            <img src={passwordIcon} alt="password icon" />
            <Input
              name="password"
              type="password"
              value={formData.password}
              className={inputInvalid.password ? "input--invalid" : ""}
              id="password"
              placeholderText={
                inputInvalid.password
                  ? validationMessages.password
                  : "Enter password"
              }
              onChange={handleChange}
            />
          </div>
          {inputInvalid.password && (
            <ErrorMessage message={validationMessages.password} />
          )}

          {path === "login" ? (
            <button type="submit" className="login-button">
              Login
            </button>
          ) : (
            <button type="submit" className="login-button">
              Sign Up
            </button>
          )}
        </form>
      </section>
      {path === "login" && (
        <p className="text-light">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-light">
            <span>Sign up!</span>
          </Link>
        </p>
      )}
      {path === "signup" && (
        <p className="text-light">
          Already have an account?{" "}
          <Link to={"/login"} className="text-light">
            <span>Login!</span>
          </Link>
        </p>
      )}
    </main>
  );
}

export default LoginPage;
