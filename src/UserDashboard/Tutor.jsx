import React from "react";
import tutorImg from "../assets/images/tutor.png"
const Tutor = () => {
    return (
        <>
            <div className="tutor">
                <div className="mainSection">
                    <div className="text">
                        <h1>Teach English OR Coding Online With Encodingo</h1>
                        <p>Emphasize these benefits in your communication with potential tutors to attract qualified and passionate educators to join Encodingo</p>

                        <div className="applyBox">
                            <input type="text" name="" id="" placeholder="What do You want to Teach" />
                            <a href="#">Apply</a>
                        </div>
                    </div>
                    <div className="image">
                        <img src={tutorImg} alt="" />
                    </div>
                </div>
                <div className="tutor_boxes">
                    <div className="box" id="box1">
                        <h3>Teaching Opportunities</h3>
                    </div>
                    <div className="box" id="box2">
                        <h3>Flexibility and Convenience</h3>
                    </div>
                    <div className="box" id="box3">
                        <h3>Increased Earning Potential</h3>
                    </div>
                    <div className="box" id="box4">
                        <h3>Global Networking</h3>
                    </div>
                    <div className="box" id="box5">
                        <h3>Professional Growth</h3>
                    </div>
                    <div className="box" id="box6">
                        <h3>Personal Branding</h3>
                    </div>
                    <div className="box" id="box7">
                        <h3>Ongoing Development</h3>
                    </div>
                    <div className="box" id="box8">
                        <h3>Making a Difference</h3>
                    </div>
                </div>
                <a href="#">Apply</a>

            </div>
        </>
    );
};

export default Tutor;
