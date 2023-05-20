import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/authentication_styles.css";
import "../Auth/AuthContainer.css";
import AuthContainer from "../Auth/AuthContainer";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

const BookSession = () => {
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

  return (
    <>
      <button className="btn has-before" onClick={handleModal}>
        <Link to={"/"}>
          <span className="span">Book A Demo Session</span>
        </Link>
      </button>

      {showModal && (
        <div className="modal">
          <button className="close-btn" onClick={handleModal}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>
          <AuthContainer />
        </div>
      )}
    </>
  );
};

export default BookSession;
