import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../Components/adminComponents/Sidebar";
import Statistics from "../Components/adminComponents/Statistics";
// import Course from "../Components/Course";
import Createtraining from "../Components/adminComponents/Createtraining";
import { useNavigate } from "react-router-dom";
import Users from "../Components/adminComponents/Users";
import Colleges from "../Components/adminComponents/Colleges";

const HomeBox = styled.div`
  margin: 10px;

  margin-top: 80px;
  padding-top: 20px;

  @media only screen and (max-width: 625px) {
    margin: 0;
    margin-top: 80px;
    padding: 0;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  ${"" /* background-color: #dddce1; */}

  @media only screen and (max-width:678px) {
    flex-direction: column;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState("statistics");

  // useEffect(() => {
  //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     // navigate("/");
  //   } else {
  //     const user = JSON.parse(
  //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //     );
  //     if (user.isAdmin === false) {
  //       navigate("/");
  //     }
  //   }
  // }, []);

  return (
    <>
      <HomeBox>
        <HomeContainer>
          <Sidebar setButtonClicked={setButtonClicked} />
          {buttonClicked === "statistics" && <Statistics />}
          {/* {buttonClicked === "course" && <Course admin={true} />} */}
          {buttonClicked === "createtraining" && <Createtraining />}
          {buttonClicked === "colleges" && <Colleges />}
          {buttonClicked === "users" && <Users />}
        </HomeContainer>
      </HomeBox>
    </>
  );
};
export default Dashboard;
