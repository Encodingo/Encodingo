import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import suresh from "../../assets/images/suresh.jpg"
import "../UserDashboard.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
const BookSession = () => {
  const sureshblog = {
    img: suresh,
    title: "Suresh Vidyarthi",
  };

  const shubhamblog = {
    img: suresh,
    title: "Shubham Raj",
  };

  const manishblog = {
    img: suresh,
    title: "Manish Mandan",
  };

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
              style={{ color: "white", marginBottom: "5rem" }}
            >
              We Have Best Mentors...
            </h2>
            <ul className="grid-list">
              <BlogCard data={sureshblog} />
              <BlogCard data={shubhamblog} />
              <BlogCard data={manishblog} />
            </ul>

            {/* <button className="btn has-before" onClick={handleModal}>
              <Link to={"/courses"}>
                <span className="span">Book A Demo Session</span>
              </Link>
            </button> */}

            {/* <a href="/" className="btn has-before" onClick={handleModal}>
            <span className="span">Book A Demo Session</span>
          </a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookSession;
