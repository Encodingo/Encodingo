import React from "react";
import "../../assets/css/style.css";
import { IonIcon } from "@ionic/react";
import {
  people,
  libraryOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import { Button } from "@material-ui/core";

const BookSessionCard = ({ card }) => {
  return (
    <>
      {/* <!--- /COURSE --> */}
      <div className="course-card">
        <figure
          className="card-banner img-holder"
          style={{ width: "370", height: "220" }}>
          <img
            src={card.img}
            width="370"
            height="220"
            loading="lazy"
            alt="Build Responsive Real- World Websites with HTML and CSS"
            className="img-cover"
          />
        </figure>

        {/* <div className="abs-badge">
          <IonIcon icon={timeOutline} aria-hidden="true" />

          <span className="span">{card.duration} Weeks</span>
        </div> */}

        <div className="card-content">
          <div className="bagesBox">
            <span className="badge">{card.level}</span>
            <span className="badge" id="badge2">
              Advance
            </span>
          </div>
          <h3 className="h3 card-title">{card.teacher_name}</h3>

          <div className="wrapper" id="wrapperBox">
            <div className="rating-wrapper">
              <IonIcon icon={starOutline} aria-hidden="true" />
              <IonIcon icon={starOutline} aria-hidden="true" />
              <IonIcon icon={starOutline} aria-hidden="true" />
              <IonIcon icon={starOutline} aria-hidden="true" />
              <IonIcon icon={starOutline} aria-hidden="true" />
            </div>

            <p className="rating-text">({`${card.rating}+`} Rating)</p>
          </div>

          {/* <card className="price" value="6000">
            {card.price}
          </card> */}

          <ul className="card-meta-list">
            <li className="card-meta-item">
              <IonIcon icon={people} aria-hidden="true" />
              <span className="span">{`${card.students}+`} Students</span>
            </li>

            <li className="card-meta-item">
              <IonIcon icon={libraryOutline} aria-hidden="true" />
              <span className="span">{card.lesson} Lessons</span>
            </li>
          </ul>

          <div className="card-buttons">
            <Button variant="contained" color="primary">
              Details
            </Button>
            <Button variant="contained" color="secondary">
              Book
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookSessionCard;
