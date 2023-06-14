import React from "react";
import "../../assets/css/style.css";
import { IonIcon } from "@ionic/react";
import { Rating } from "@material-ui/lab";
import course1 from "../../assets/images/course-1.jpg"
import {useNavigate} from 'react-router-dom'
import {
  people,
  libraryOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import { Button } from "@material-ui/core";

const CourseCard = ({poster , title , category , level , duration , rating , users , price , details , numOfVideos , loading}) => {

  const Navigate = useNavigate();
  const detailshandler = () =>{
      Navigate(details)
  }

  const options = {
    value: rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      {/* <!--- /COURSE --> */}
      <div className="course-card">
        <figure
          className="card-banner img-holder"
          style={{ width: "370", height: "220" }}
        >
          <img
            src={poster.url}
            width="370"
            height="220"
            loading="lazy"
            alt="Build Responsive Real- World Websites with HTML and CSS"
            className="img-cover"
          />
        </figure>

        <div className="abs-badge">
          <IonIcon icon={timeOutline} aria-hidden="true" />

          <span className="span">{duration} Weeks</span>
        </div>

        <div className="card-content">
          <span className="badge">{level}</span>
          <span className="badge" style={{marginTop:'10px'}}>{category}</span>
          <h3 className="h3 card-title">
            
              {title}
           
          </h3>

          <div className="wrapper">
            <div className="rating-wrapper">
                <Rating {...options} />
            </div>

            <p className="rating-text">({`${rating}+`} Rating out of 5)</p>
          </div>

          <card className="price" value="6000">
            {price}
          </card>

          <ul className="card-meta-list">
            <li className="card-meta-item">
              <IonIcon icon={libraryOutline} aria-hidden="true" />

              <span className="span">{numOfVideos} Lessons</span>
            </li>

            <li className="card-meta-item">
              <IonIcon icon={people} aria-hidden="true" />
              <span className="span">{`${users}+`} Students</span>
            </li>
          </ul>

          <div className="card-buttons">
            <Button onClick={detailshandler}  variant="contained" color="secondary">
               Details
            </Button>
            <Button variant="contained" color="primary">
              {price} ₹
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};



export default CourseCard;
