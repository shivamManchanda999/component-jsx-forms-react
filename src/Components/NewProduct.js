import React from "react";
import { useState } from "react";
import "../styles/NewProduct.css";

const NewProduct = () => {
  const [formDetails, setformDetails] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
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
      category: "",
      quantity: "",
      price: "",
    });

    setUploadedFile(null);
  };

  return (
    <div className="NewProductForm">
      <form onSubmit={handleSubmit}>
        <h2>New Product</h2>
        <div>
          <input
            type="file"
            id="fileUploadProduct"
            style={{ display: "none" }}
            onChange={handleFileChangeEvent}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("fileUploadProduct").click();
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
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formDetails.category}
            onChange={handleInputChangeEvent}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formDetails.quantity}
            onChange={handleInputChangeEvent}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={formDetails.price}
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
              category: "",
              quantity: "",
              price: "",
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

export default NewProduct;
