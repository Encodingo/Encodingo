import Sidebar from "./Sidebar/Sidebar";
import suresh from "../assets/images/suresh.jpg";
import "./UserDashboard.css";
import Bottombar from "./Bottombar/Bottombar";
import BlogCard from "../Components/BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
// import { college } from "../utils/APIRoutes";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const navigate = useNavigate();

  // const toastOptions = {
  //   position: "top-right",
  //   autoClose: 5000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   // theme: "dark",
  // };

  const [FormValues, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormValues, [name]: value });
    // console.log(FormValues);
  };

  // const handleValidation = () => {
  //   const { name, email, phone, designation, organization, message } =
  //     FormValues;
  //   if (name === "") {
  //     toast.error("name is required", toastOptions);
  //     return false;
  //   } else if (email === "") {
  //     toast.error("email is required", toastOptions);
  //     return false;
  //   } else if (phone === "") {
  //     toast.error("phone is required", toastOptions);
  //     return false;
  //   } else if (designation === "") {
  //     toast.error("designation is required", toastOptions);
  //     return false;
  //   } else if (organization === "") {
  //     toast.error("organization is required", toastOptions);
  //     return false;
  //   } else if (organization === "") {
  //     toast.error("organization is required", toastOptions);
  //     return false;
  //   } else if (message === "") {
  //     toast.error("message is required", toastOptions);
  //     return false;
  //   }

  //   return true;
  // };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const { name, email, phone, designation, organization, message } =
  //         FormValues;

  //       if (handleValidation()) {
  //         // const response = await college(FormValues);
  //         const { response } = await axios.post(college, FormValues);
  //         toast.success("Form Submitted successfully");
  //         setFormData({
  //           name: "",
  //           email: "",
  //           phone: "",
  //           designation: "",
  //           organization: "",
  //           message: "",
  //         });
  //         navigate("/forcollege");
  //       }
  //     } catch (e) {
  //       // console.log("error: " + e);
  //       toast.error("Some Error Occured");
  //     }
  //   };

  return (
    <>
      {/* <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1> */}
      {windowWidth < 767 ? <Bottombar /> : <Sidebar />}

      <section className="home-section">
        <div className="profile">
          <div className="mainContainer">
            {/* <h1>Profile</h1> */}
            {/* <collegeForm> */}
            {/* <form onSubmit={(event) => handleSubmit(event)}> */}
            <form>
              <div className="form-item">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={user.phone}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="phone">DOB</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="dob"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="phone">Grade</label>
                <div className="gradeOptions">
                  <select id="grade" name="grade">
                    <option value="">Select Grade</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your grade"
                  />
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="phone">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="form-item">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                name="designation"
                id="designation"
                placeholder="Designation"
                value={FormValues.designation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                name="organization"
                id="organization"
                placeholder="Organization"
                value={FormValues.organization}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                rows="5"
                name="message"
                id="message"
                placeholder="Message"
                value={FormValues.message}
                onChange={handleChange}
                required
              />
            </div> */}

              {/* <input type="submit" onClick={handleSubmit} value="Submit" /> */}
              {/* <button onClick={handleSubmit}>Submit</button> */}
              <button>Submit</button>
            </form>
            {/* </collegeForm> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
