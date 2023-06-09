import React from "react";
import "./Bottombar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
const Bottombar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to={"/"} className="nav__logo">
            Explore
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/user_dashboard" className="nav__link active-link">
                  <i className="bx bx-book-open nav__icon"></i>
                  {/* <i className='bx bx-home-alt nav__icon'></i> */}
                  <span className="nav__name">All Courses</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/mycourses" className="nav__link">
                  <i className="bx bx-book nav__icon"></i>
                  <span className="nav__name">My Courses</span>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/book_session" className="nav__link">
                  <i className="bx bx-time nav__icon"></i>
                  <span className="nav__name">My Session</span>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/profile" className="nav__link">
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__name">Profile</span>
                </NavLink>
              </li>

              <li className="nav__item">
                <Link to="#logout" className="nav__link">
                  <i className="bx bx-log-out nav__icon" id="log_out"></i>
                  <span onClick={logoutHandler} className="nav__name">
                    Logout
                  </span>
                </Link>
              </li>

              {/* <li className="nav__item">
                            <NavLink to="#portfolio" className="nav__link">
                                <i className='bx bx-briefcase-alt nav__icon'></i>
                                <span className="nav__name">Portfolio</span>
                            </NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="#contactme" className="nav__link">
                                <i className='bx bx-message-square-detail nav__icon'></i>
                                <span className="nav__name">Contactme</span>
                            </NavLink>
                        </li> */}
            </ul>
          </div>

          <img src="" alt="" className="nav__img" />
        </nav>
      </header>
    </>
  );
};

export default Bottombar;
