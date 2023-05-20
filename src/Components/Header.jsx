import React from "react";
import "../assets/css/style.css";
import "../assets/css/authentication_styles.css";
import "./Auth/AuthContainer.css";
import logo from "../assets/images/logonew.svg";
import { NavLink , Link, useNavigate } from "react-router-dom";
import AuthContainer from "./Auth/AuthContainer";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
// import SearchBar from "./SearchBar/SearchBar";
const Header = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    // console.log("clicked");
    setShowModal(!showModal);
    // if(!showModal){
    //   navigate("/login");
    // }
    // else{
    //   navigate("/");
    // }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body.style.overflowX = "hidden";
    } else {
      body.style.overflowX = "auto";
    }
  }, [showModal]);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);


  return (
    <>
      <header className={`header ${isFixed ? "active" : ""}`} data-header>
        <div className="container">
          <div className="header-box">
            <div className="header-actions">
              {/* <form >
              <input
                type="text"
                placeholder="Search..."
              />
            </form> */}

              {/* <button
              className="header-action-btn"
              aria-label="toggle search"
              title="Search"
            >
              <IonIcon icon={searchCircleOutline} aria-hidden="true" />
            </button> */}

              {/* <button
              className="header-action-btn"
              aria-label="cart"
              title="Cart"
            >
              <IonIcon icon={cartOutline} aria-hidden="true" />

              <span className="btn-badge">0</span>
            </button> */}

              <button
                onClick={handleMenuClick}
                className="header-action-btn"
                aria-label="open menu"
                data-nav-toggler
              >
                <IonIcon icon={menuOutline} aria-hidden="true" />
              </button>
            </div>

            <Link to={"/"} className="logo1">
              <img src={logo} width="162" height="50" alt="EduWeb logo" />
            </Link>
          </div>

          {/* <a href="/" className="logo">
            <img src={logo} width="162" height="50" alt="EduWeb logo" />
          </a> */}

          <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
            <div className="wrapper">
              <Link onClick={handleMenuClick} to={"/"} className="logo">
                <img src={logo} width="162" height="50" alt="EduWeb logo" />
              </Link>

              {/* <a href="/" className="logo">
                <img src={logo} width="162" height="50" alt="EduWeb logo" />
              </a> */}

              <button
                onClick={handleMenuClick}
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
              >
                <IonIcon icon={closeOutline} aria-hidden="true" />
              </button>
            </div>

            <ul className="navbar-list">
              <li className="navbar-item">
                <NavLink
                  onClick={handleMenuClick}
                  to={"/"}
                  className="navbar-link"
                >
                  Explore
                </NavLink>

                {/* <a href="/" className="navbar-link" data-nav-link>
                  Explore
                </a> */}
              </li>
              <li className="navbar-item">
                <NavLink
                  onClick={handleMenuClick}
                  to={"/courses"}
                  className="navbar-link"
                >
                  Courses
                </NavLink>
                {/* <a href="courses" className="navbar-link" data-nav-link>
                  Courses
                </a> */}
              </li>
              <li className="navbar-item">
                <Link
                  onClick={handleMenuClick}
                  to={"/bootcamp"}
                  className="navbar-link"
                >
                  Bootcamp
                </Link>
                {/* <a href="bootcamp" className="navbar-link" data-nav-link>
                  Bootcamp
                </a> */}
              </li>

              <li className="navbar-item">
                <Link
                  onClick={handleMenuClick}
                  to={"/"}
                  className="navbar-link"
                >
                  Blog
                </Link>
                {/* <a href="#blog" className="navbar-link" data-nav-link>
                  Blog
                </a> */}
              </li>

              <li className="navbar-item">
                <Link
                  onClick={handleMenuClick}
                  to={"/about"}
                  className="navbar-link"
                >
                  About
                </Link>
                {/* <a href="about" className="navbar-link" data-nav-link>
                  About
                </a> */}
              </li>
            </ul>
          </nav>
          <button className="btn has-before" onClick={handleModal}>
            <Link to={"#"}>
              <span className="span">Book A Session</span>
            </Link>
          </button>
          {/* <a onClick={handleModal} href="/" className="btn has-before">
            <span className="span">Book A Session</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a> */}
          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>

      {showModal && (
        <div className="modal">
          <button className="close-btn"  onClick={handleModal}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>
          <AuthContainer />
        </div>
      )}
    </>
  );
};

export default Header;
