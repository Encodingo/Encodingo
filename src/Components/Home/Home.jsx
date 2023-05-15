import React from "react";
import "../../assets/css/style.css";
// import herobg from "../../assets/images/hero-bg.svg";
import about from "../../assets/images/about.jpg";
import course1 from "../../assets/images/course-1.jpg";
import course2 from "../../assets/images/course-2.jpg";
import course3 from "../../assets/images/course-3.jpg";
import suresh from "../../assets/images/suresh.jpg";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";
import blogshape from "../../assets/images/blog-shape.png";
import blogbg from "../../assets/images/blog-bg.svg";
import AboutSection from "../AboutSection/AboutSection";
import NewSection from "../NewSection/NewSection";
import CourseCard from "../CourseCard/CourseCard";
import VideoSection from "../VideoSection/VideoSection";
import StateSection from "../StateSection/StateSection";
import BlogCard from "../BlogCard/BlogCard";
import CategorySection from "../CategorySection/CategorySection";
import FrontPageBanner from "../FrontPageBanner/FrontPageBanner";

// hii this is simple comment
const Home = () => {
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
      img: course2,
      duration: 8,
      level: "Intermediate",
      rating: "4.5/500",
      title: "Java Programming Masterclass for Software Developers",
      price: 8000,
      lesson: 15,
      students: 6500,
    },
    {
      img: course3,
      duration: 12,
      level: "Advanced",
      rating: "4.8/500",
      title: "The Complete Camtasia Course for Content Creators",
      price: 12000,
      lesson: 12,
      students: 7000,
    },
  ];

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

  const data = {
    img: about,
    startline: "Transforming your",
    midline: "childs future",
    endline: "through coding",
    tagline:
      "At Encodingo, we are more than just a coding platform. We are a community of passionate educators and coders who are dedicated to making a positive impact on the lives of children. We believe that coding has the power to change the world, and we are excited to be a part of the journey.",
  };

  return (
    <>
      {/* FrontPageBanner */}
      <FrontPageBanner/>

      {/* <!--- /CATEGORY--> */}

      <CategorySection/>

      {/* About */}

      <AboutSection data={data} />

      {/* <!-- new section start --> */}

      <NewSection />

      {/* <!--- /COURSE--> */}

      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          {/* <!-- <p class="section-subtitle">Popular Courses</p> --> */}
          <h2 className="h2 section-title">Our Coding Curriculum</h2>
          <ul className="grid-list">
            {card && card.map((card) => <CourseCard card={card} />)}
          </ul>

          <a href="course.html" className="btn has-before">
            <span className="span">Book A Demo Session</span>
          </a>
        </div>
      </section>

      {/* <!-- - /VIDEO--> */}

      <VideoSection />

      {/* <!--- /STATE--> */}

      <StateSection />

      {/* <!--- /BLOG--> */}

      <section
        className="section blog has-bg-image1"
        id="blog"
        aria-label="blog"
        style={{ backgroundImage: { blogbg }, marginTop: "-100px" }}
      >
        <div className="container">
          {/* <!-- <p class="section-subtitle">Our Top Educators</p> --> */}

          <h2 className="h2 section-title">Top 1% of educators</h2>
          <p className="section-subtitle"></p>

          <ul className="grid-list">
            <BlogCard data={sureshblog} />
            <BlogCard data={shubhamblog} />
            <BlogCard data={manishblog} />
          </ul>

          <img
            src={blogshape}
            width="186"
            height="186"
            loading="lazy"
            alt=""
            className="shape blog-shape"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
