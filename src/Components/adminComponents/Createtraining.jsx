import React, { useState } from "react";
import styled from "styled-components";

// import { createtrainingRoute } from "../../utils/APIRoutes.js";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Createtraining = () => {
  const [FormValues, setFormData] = useState({
    trainingName: "",
    category: "",
    subcategory: "",
    message: "",
    price: "",
    image: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    if (event.target.name === "image") {
      setFormData({
        ...FormValues,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setFormData({ ...FormValues, [event.target.name]: event.target.value });
    }
  };

  const handleValidation = () => {
    const { trainingName, category, subcategory, price, image } = FormValues;
    if (trainingName === "") {
      toast.error("Training name is required", toastOptions);
      return false;
    } else if (category === "") {
      toast.error("Category is required", toastOptions);
      return false;
    } else if (subcategory === "") {
      toast.error("Subcategory is required", toastOptions);
      return false;
    } else if (price === "") {
      toast.error("price is required", toastOptions);
      return false;
    } else if (!image) {
      toast.error("image is required", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const formData = new FormData();
      formData.append("trainingName", FormValues.trainingName);
      formData.append("category", FormValues.category);
      formData.append("subcategory", FormValues.subcategory);
      formData.append("message", FormValues.message);
      formData.append("price", FormValues.price);
      formData.append("image", FormValues.image);
      const { data } = await axios.post(createtrainingRoute, formData);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        toast.success(data.msg, toastOptions);
        setFormData({
          trainingName: "",
          category: "",
          subcategory: "",
          message: "",
          price: "",
          image: "",
        });
      }
    }
  };
  return (
    <>
      <OuterContainer>
        <ContactContainer>
          <h2>Create Training</h2>
          <ContactForm onSubmit={(event) => handleSubmit(event)}>
            <input
              className="fields"
              name="trainingName"
              type="text"
              placeholder="Training Name"
              value={FormValues.trainingName}
              onChange={(e) => handleChange(e)}
            />
            <select
              className="fields"
              id="category"
              name="category"
              defaultValue="Select a Category"
              onChange={(e) => handleChange(e)}>
              <option value="development">Select a Category</option>
              <option value="development">Development</option>
              <option value="coding">Coding</option>
              <option value="robotics">Robotics</option>
              <option value="iot">IoT</option>
            </select>
            <input
              className="fields"
              name="subcategory"
              type="text"
              value={FormValues.subcategory}
              placeholder="Subcategory"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="fields"
              name="price"
              type="number"
              value={FormValues.price}
              placeholder="Price"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="fields"
              name="image"
              onChange={(e) => handleChange(e)}
              type="file"
            />
            <TextArea
              name="message"
              placeholder="Description"
              value={FormValues.message}
              onChange={(e) => handleChange(e)}></TextArea>
            <Button type="submit">Create</Button>
          </ContactForm>
        </ContactContainer>
      </OuterContainer>
      <ToastContainer />
    </>
  );
};

export default Createtraining;

const OuterContainer = styled.div`
  padding: 20px 0;
  width: 100%;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #e2c1ff;

  width: 80%;
  border-radius: 30px;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 20px;

  .fields {
    margin-bottom: 1rem;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    border: 3px solid #8209ec;
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border: 3px solid #8209ec;
  width: 100%;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;
