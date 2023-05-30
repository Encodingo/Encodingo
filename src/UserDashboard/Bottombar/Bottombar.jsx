import React from "react";
import "./Bottombar.css";
import { Link , useNavigate} from "react-router-dom";
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
                <a href="#home" className="nav__link active-link">
                  <i className="bx bx-book-open nav__icon"></i>
                  {/* <i className='bx bx-home-alt nav__icon'></i> */}
                  <span className="nav__name">All Courses</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#my courses" className="nav__link">
                  <i className="bx bx-book nav__icon"></i>
                  <span className="nav__name">My Courses</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#my session" className="nav__link">
                  <i className="bx bx-time nav__icon"></i>
                  <span className="nav__name">My Session</span>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="bx bx-user nav__icon"></i>
                  <span className="nav__name">Profile</span>
                </a>
              </li>

              <li className="nav__item">
                <Link href="#logout" className="nav__link">
                  <i className="bx bx-log-out nav__icon" id="log_out"></i>
                  <span onClick={logoutHandler} className="nav__name">
                    Logout
                  </span>
                </Link>
              </li>

              {/* <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className='bx bx-briefcase-alt nav__icon'></i>
                                <span className="nav__name">Portfolio</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contactme" className="nav__link">
                                <i className='bx bx-message-square-detail nav__icon'></i>
                                <span className="nav__name">Contactme</span>
                            </a>
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
