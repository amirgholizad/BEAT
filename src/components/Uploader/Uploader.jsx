import { useState } from "react";
import "./Uploader.scss";
import axios from "axios";

function Uploader({ photoName }) {
  const baseUrl = import.meta.env.VITE_APP_URL;
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("File name:", photoName);
      const response = await axios.post(
        `${baseUrl}/upload?photo_name=${photoName}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File upload response:", response.data.message);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <img
          src={image}
          alt="Preview"
          style={{ maxWidth: "300px", marginTop: "10px" }}
        />
      )}
      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Uploader;
