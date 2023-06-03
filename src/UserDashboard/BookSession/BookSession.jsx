import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CourseCard from "../../Components/CourseCard/CourseCard";
import course from "../../assets/images/course-1.jpg";
import "../UserDashboard.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import BookSessionCard from "./BookSessionCard";
import teacherImg from "../../assets/images/suresh.jpg";
const BookSession = () => {
  const card = [
    {
      img: teacherImg,
      level: "Biggnner",
      rating: "4.8/500",
      teacher_name: "Suresh Vidyarthi",
      price: 6000,
      lesson: 1000,
      students: 5000,
    },
    {
      img: teacherImg,
      level: "Intermediate",
      rating: "4.5/500",
      teacher_name: "Suresh Vidyarthi",
      price: 8000,
      lesson: 15,
      students: 6500,
    },
    {
      img: teacherImg,
      level: "Advanced",
      rating: "4.8/500",
      teacher_name: "Suresh Vidyarthi",
      price: 12000,
      lesson: 12,
      students: 7000,
    },
    {
      img: teacherImg,
      level: "Biggnner",
      rating: "4.8/500",
      teacher_name: "Suresh Vidyarthi",
      price: 6000,
      lesson: 12,
      students: 5000,
    },
    {
      img: teacherImg,
      level: "Intermediate",
      rating: "4.5/500",
      teacher_name: "Suresh Vidyarthi",
      price: 8000,
      lesson: 15,
      students: 6500,
    },
    {
      img: teacherImg,
      level: "Advanced",
      rating: "4.8/500",
      teacher_name: "Suresh Vidyarthi",
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
          <div className="container">
            {/* <!-- <p class="section-subtitle">Popular Courses</p> --> */}
            <h2
              className="h2 section-title"
              style={{ color: "white", marginBottom: "5rem" }}>
              Book a Session
            </h2>
            <ul className="grid-list">
              {card &&
                card.map((card) => {
                  return <BookSessionCard card={card} />;
                })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookSession;
