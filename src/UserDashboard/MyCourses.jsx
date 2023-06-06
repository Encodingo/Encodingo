import React from "react";
import Sidebar from "./Sidebar/Sidebar";
// import CourseCard from "../Components/CourseCard/CourseCard";
// import myCourseCard from "./myCourseCard";
import course1 from "../assets/images/course-1.jpg";
import "./UserDashboard.css";
import Bottombar from "./Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import MyCard from "./MyCard";

const MyCourses = () => {
  const card = [
    {
      img: course1,
      duration: 12,
      level: "Biggnner",
      rating: "4.8/500",
      title: "Build Responsive Real- World Websites with HTML and CSS",
      price: 6000,
      lesson: 12,
      students: 5000,
    },
    {
      img: course1,
      duration: 8,
      level: "Intermediate",
      rating: "4.5/500",
      title: "Java Programming Masterclass for Software Developers",
      price: 8000,
      lesson: 15,
      students: 6500,
    },
    {
      img: course1,
      duration: 12,
      level: "Advanced",
      rating: "4.8/500",
      title: "The Complete Camtasia Course for Content Creators",
      price: 12000,
      lesson: 12,
      students: 7000,
    },
    {
      img: course1,
      duration: 12,
      level: "Biggnner",
      rating: "4.8/500",
      title: "Build Responsive Real- World Websites with HTML and CSS",
      price: 6000,
      lesson: 12,
      students: 5000,
    },
    {
      img: course1,
      duration: 8,
      level: "Intermediate",
      rating: "4.5/500",
      title: "Java Programming Masterclass for Software Developers",
      price: 8000,
      lesson: 15,
      students: 6500,
    },
    {
      img: course1,
      duration: 12,
      level: "Advanced",
      rating: "4.8/500",
      title: "The Complete Camtasia Course for Content Creators",
      price: 12000,
      lesson: 12,
      students: 7000,
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  return (
    <>
      {windowWidth < 767 ? <Bottombar /> : <Sidebar />}

      <section className="home-section">
        <div>
          <div className="container course-container">
            <ul className="grid-list course-grid">
              {/* {card && card.map((card) => <CourseCard card={card} />)} */}
              {card && card.map((card) => <MyCard card={card} />)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default MyCourses;
