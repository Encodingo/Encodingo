import { useState, useEffect } from "react";
import "../../assets/css/style.css";
import bootcamp from "../../assets/images/bootcamp.jpg";
// import about from "../../assets/images/about.jpg";
import course1 from "../../assets/images/course-1.jpg";
import course2 from "../../assets/images/course-2.jpg";
import course3 from "../../assets/images/course-3.jpg";
import suresh from "../../assets/images/suresh.jpg";
// import manish from "../../assets/images/manish.jpg";
// import shubham from "../../assets/images/shubham.jpg";
import blogshape from "../../assets/images/blog-shape.png";
import blogbg from "../../assets/images/blog-bg.svg";
import NewSection from "../NewSection/NewSection";
import CourseCard from "../CourseCard/CourseCard";
import AboutSection from "../AboutSection/AboutSection";
import BlogCard from "../BlogCard/BlogCard";
import VideoSection from "../VideoSection/VideoSection";
import StateSection from "../StateSection/StateSection";
import "../../assets/css/authentication_styles.css";
import "../Auth/AuthContainer.css";
import AuthContainer from "../Auth/AuthContainer";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Bootcamp = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    console.log("clicked");
    setShowModal(!showModal);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body.style.overflowX = "hidden";
    } else {
      body.style.overflowX = "auto";
    }
  }, [showModal]);

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

  const data = {
    img: bootcamp,
    startline: "Encodingo coding",
    midline: "Bootcamp",
    endline: "for schools",
    tagline:
      "Our coding bootcamp for schools is designed to be flexible and adaptable to the needs of your students. We offer a range of programs and courses that can be customized to fit your schools unique needs and goals.",
  };

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
  return (
    <>
      <Header />
      {/* About */}

      <AboutSection data={data} />

      {/* <!-- new section start --> */}
      <NewSection />
      {/* <!-- new section end --> */}

      {/* <!--- /COURSE --> */}

      <section className="section course" id="courses" aria-label="course">
        <div className="container">
          {/* <!-- <p class="section-subtitle">Popular Courses</p> --> */}
          <h2 className="h2 section-title">Our Coding Curriculum</h2>
          <ul className="grid-list">
            {card && card.map((card) => <CourseCard card={card} />)}
          </ul>

          <button className="btn has-before" onClick={handleModal}>
            <Link to={"/bootcamp"}>
              <span className="span">Book A Demo Session</span>
            </Link>
          </button>

          {/* <a href="course.html" className="btn has-before">
            <span className="span">Book A Demo Session</span>
          </a> */}
        </div>
      </section>

      {/* <!--- /VIDEO--> */}

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
          {/* <p className="section-subtitle"></p> */}
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

      {/* for book a demo session */}
      {showModal && (
        <div className="modal">
          <button className="close-btn" onClick={handleModal}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>
          <AuthContainer />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Bootcamp;
