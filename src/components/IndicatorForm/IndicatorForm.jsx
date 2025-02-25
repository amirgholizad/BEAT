import "./IndicatorForm.scss";
import Input from "../../components/Input/Input";
import { useEffect, useState } from "react";
import {
  getAllUsers,
  createIndicator,
  editIndicator,
} from "../../scripts/functions";
import { useNavigate } from "react-router-dom";
import alertIcon from "../../assets/icons/svg/alertIcon.svg";

function IndicatorForm({ mode, initialData }) {
  const author = sessionStorage.getItem("user");
  const [users, setUsers] = useState([]);
  const navigation = useNavigate();
  const baseUrl = import.meta.env.VITE_APP_URL;

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers(baseUrl);
      const user_names = data.map((user) => user.user_name);
      if (data) setUsers(user_names);
    };
    getUsers();
  }, [baseUrl, getAllUsers]);

  const indicatorTypes = ["trend", "momentum", "volatility", "volume", "other"];

  const initialFormData = {
    user: "",
    name: "",
    type: "",
    language: "",
    license: "",
    description: "",
    code: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [inputInvalid, setInputInvalid] = useState({
    user: false,
    name: false,
    type: false,
    language: false,
    license: false,
    description: false,
    code: false,
  });
  const [validationMessages, setValidationMessages] = useState({
    user: "",
    name: "",
    type: "",
    language: "",
    license: "",
    description: "",
    code: "",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        user: initialData.user,
        name: initialData.name,
        type: initialData.type,
        language: initialData.language,
        license: initialData.license,
        description: initialData.description,
        code: initialData.code,
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
      name: false,
      type: false,
      language: false,
      license: false,
      description: false,
      code: false,
    };

    const newValidationMessages = {
      user: "",
      name: "",
      type: "",
      language: "",
      license: "",
      description: "",
      code: "",
    };

    if (!formData.user) {
      newInputInvalid.user = true;
      newValidationMessages.user = "Please select a user";
      isValid = false;
    }

    if (!formData.name) {
      newInputInvalid.name = true;
      newValidationMessages.name = "Please enter a name";
      isValid = false;
    }

    if (!formData.type) {
      newInputInvalid.type = true;
      newValidationMessages.type = "Please select a type";
      isValid = false;
    }

    if (!formData.language) {
      newInputInvalid.language = true;
      newValidationMessages.language = "Please select a language";
      isValid = false;
    }

    if (!formData.license) {
      newInputInvalid.license = true;
      newValidationMessages.license = "Please select a license";
      isValid = false;
    }

    if (!formData.description) {
      newInputInvalid.description = true;
      newValidationMessages.description = "Please enter a description";
      isValid = false;
    }

    if (!formData.code) {
      newInputInvalid.code = true;
      newValidationMessages.code = "Please enter code";
      isValid = false;
    }

    setInputInvalid(newInputInvalid);
    setValidationMessages(newValidationMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newIndicator = {
        user: formData.user,
        name: formData.name,
        type: formData.type,
        language: formData.language,
        license: formData.license,
        description: formData.description,
        code: formData.code,
      };
      try {
        if (mode === "edit") {
          console.log("newIndicator", newIndicator);
          await editIndicator(newIndicator, initialData.id, baseUrl);

          navigation("/indicator-marketplace");
        } else {
          const response = await createIndicator(newIndicator, baseUrl);
          if (response === "Success") {
            alert("Your indicator was successfully updated!");
            setTimeout(() => {
              navigation("/indicator-marketplace"), 3000;
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
    <form onSubmit={handleSubmit} className="create-indicator-form">
      <section className="create-indicator-form-left">
        <Input
          name="user"
          labelName="User"
          type="dropdown"
          options={author}
          className="create-indicator-form__input"
          placeholderText={"Select a user"}
          value={author}
        />
        {inputInvalid.user && (
          <ErrorMessage message={validationMessages.user} />
        )}

        <Input
          name="name"
          labelName="Name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          className="create-indicator-form__input"
          placeholderText={"Enter a name"}
          value={formData.name}
        />
        {inputInvalid.name && (
          <ErrorMessage message={validationMessages.name} />
        )}

        <Input
          name="type"
          labelName="Type"
          type="dropdown"
          placeholder="Type"
          options={indicatorTypes}
          onChange={handleChange}
          className="create-indicator-form__input"
          placeholderText={"Select a type"}
          value={formData.type}
        />
        {inputInvalid.type && (
          <ErrorMessage message={validationMessages.type} />
        )}
        <Input
          name="language"
          labelName="Language"
          type="dropdown"
          placeholder="Language"
          options={["python", "JavaScript"]}
          onChange={handleChange}
          className="create-indicator-form__input"
          placeholderText={"Select a language"}
          value={formData.language}
        />
        {inputInvalid.language && (
          <ErrorMessage message={validationMessages.language} />
        )}
        <Input
          name="license"
          labelName="License"
          type="dropdown"
          placeholderText={"Select a license"}
          options={["FREE", "PREMIUM"]}
          onChange={handleChange}
          className="create-indicator-form__input"
          value={formData.license}
        />
        {inputInvalid.license && (
          <ErrorMessage message={validationMessages.license} />
        )}
      </section>
      <section className="create-indicator-form-right">
        <Input
          name="description"
          labelName="Description"
          type="textarea"
          placeholder="Description"
          onChange={handleChange}
          className="create-indicator-form__input"
          placeholderText={"Enter a description"}
          value={formData.description}
        />
        {inputInvalid.description && (
          <ErrorMessage message={validationMessages.description} />
        )}
        <Input
          name="code"
          labelName="Code"
          type="textarea"
          placeholderText="Add your code..."
          onChange={handleChange}
          className="create-indicator-form__input"
          value={formData.code}
        />
        {inputInvalid.code && (
          <ErrorMessage message={validationMessages.code} />
        )}
        <button className="create-indicator-form-right__button">Submit</button>
      </section>
    </form>
  );
}

export default IndicatorForm;
