import React, { useEffect } from "react";
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
import BookSession from "../ButtonBook/BookSession";
import Header from "../Header";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { gettopcourses } from "../../actions/course";
import { toast } from "react-hot-toast";

// hii this is simple comment
const Home = () => {
  
  const { loading, top3courses, error, message } = useSelector(
    (state) => state.topcourse
  );
  const dispatch = useDispatch();

  useEffect(() => {
    

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    dispatch(gettopcourses());
  }, [dispatch, error, message]);

  
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
      {/* Header */}
      <Header />

      {/* FrontPageBanner */}
      <FrontPageBanner />

      {/* <!--- /CATEGORY--> */}

      <CategorySection />

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
            {top3courses.length > 0 ? (
              top3courses.map((item) => (
                <CourseCard
                  key={item._id}
                  poster={item.poster}
                  title={item.title}
                  category={item.category}
                  level={item.level}
                  imageSrc={course1}
                  id={item._id}
                  duration={item.duration}
                  rating={item.rating}
                  users={item.users}
                  price={item.price}
                  details={item.details}
                  numOfVideos={item.numOfVideos}
                  loading={loading}
                />
              ))
            ) : (
              <h1>Course Not Found</h1>
            )}
          </ul>

          <BookSession />

          {/* <a href="course.html" className="btn has-before">
            <span className="span">Book A Demo Session</span>
          </a> */}
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

      <Footer />
    </>
  );
};

export default Home;

// new comment form yashasvi side for branch
