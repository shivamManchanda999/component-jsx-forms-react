import React from "react";
import { useState } from "react";

const NewShop = () => {
  const [formDetails, setformDetails] = useState({
    name: "",
    description: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChangeEvent = (event) => {
    const { name, value } = event.target;
    setformDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleFileChangeEvent = (event) => {
    const file = event.target.files[0];
    const validExtensions = [".jpg", ".jpeg", ".png"];

    if (file) {
      const fileExtension = "." + file.name.split(".").pop().toLowerCase();

      if (validExtensions.includes(fileExtension)) {
        setUploadedFile(file);
      } else {
        alert("Invalid file type. Please upload a valid image.");
        setUploadedFile(null);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formDetails);
    console.log(uploadedFile);

    setformDetails({
      name: "",
      description: "",
    });

    setUploadedFile(null);
  };

  return (
    <div className="NewProductForm">
      <form onSubmit={handleSubmit}>
        <h2>New Shop</h2>
        <div>
          <input
            type="file"
            id="fileUploadShop"
            style={{ display: "none" }}
            onChange={handleFileChangeEvent}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("fileUploadShop").click();
            }}
          >
            UPLOAD PHOTO
          </button>
          {uploadedFile && <p>File Uploaded is: {uploadedFile.name}</p>}
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formDetails.name}
            onChange={handleInputChangeEvent}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formDetails.description}
            onChange={handleInputChangeEvent}
          />
        </div>
        <button type="submit">SUBMIT</button>
        <button
          type="button"
          onClick={() => {
            setformDetails({
              name: "",
              description: "",
            });
            setUploadedFile(null);
          }}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
};

export default NewShop;
