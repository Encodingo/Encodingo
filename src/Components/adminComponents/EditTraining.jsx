import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { editTrainingRoute } from '../../utils/APIRoutes';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EditTraining = ({ editId, trainings,setEdit }) => {
  const desiredTraining = trainings.find(obj => obj._id === editId);
  const [formData, setFormData] = useState({
    id:'',
    trainingName: '',
    price: '',
    category: '',
    subcategory: ''
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (desiredTraining) {
      setFormData({
        id:editId,
        trainingName: desiredTraining.trainingName,
        price: desiredTraining.price,
        category: desiredTraining.category,
        subcategory: desiredTraining.subcategory
      });
    }
  }, [editId, trainings]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { trainingName, category, subcategory, price,id } = formData;
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
    } else if (!id) {
      toast.error("training is not selected", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { data } = await axios.post(editTrainingRoute, formData);
      if (data.status === false) { 
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        toast.success(data.msg, toastOptions);
        setEdit({editOpen:false,editId:null})
      }
    }
  };

  return (
    <>

    <EditContainer>
    <ImageContainer>
      <img src={desiredTraining.image} alt="" />
      <Button onClick={()=>setEdit({editOpen:false,editId:null})}>Cancel</Button>
      </ImageContainer>
      <EditForm onSubmit={(event) => handleSubmit(event)}>
        <p>New Training Name</p>
        <input
          type="text"
          name="trainingName"
          value={formData.trainingName}
          onChange={handleChange}
        />
        <p>New Training Price</p>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <p>New Training Category</p>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a Category</option>
          <option value="development">Development</option>
          <option value="coding">Coding</option>
          <option value="robotics">Robotics</option>
          <option value="iot">IoT</option>
        </select>
        <p>New Training Subcategory</p>
        <input
          type="text"
          name="subcategory"
          value={formData.subcategory}
          onChange={handleChange}
        />
         <Button type="submit">Edit Training</Button>
      </EditForm>
      
    </EditContainer>
    <ToastContainer />
    </>
  );
};

export default EditTraining;

const EditContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;


`;

const EditForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 20px;

  p {
    margin-bottom: 5px;
  }
  select,
  input {
    margin-bottom: 20px;
    padding: 15px 10px;
    border-radius: 10px;
    font-size: 17px;
    border: 3px solid #8209ec;
  }
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

const ImageContainer=styled.div`
display:flex;
flex-direction:column;
img {
    height: 300px;
    width: 400px;
    margin-bottom:10px;
  }
  button{
    width:100px;
    background:red;
  }

`