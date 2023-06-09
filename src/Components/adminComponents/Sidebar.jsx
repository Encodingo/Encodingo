import React from "react";
import styled from "styled-components";
import { FaHome, FaStar, FaSlidersH, FaTv, FaUsers } from "react-icons/fa";

import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  padding-top: 10px;
  @media screen and (max-width: 895px) {
    width: 25%;
  }
  @media only screen and (max-width: 678px) {
    width: 100vw;
    flex-direction: row;
  }
`;
const ContainerItem = styled.div`
  white-space: nowrap;
  padding: 10px 15px;
  margin: 10px;
  font-family: "Rubik", sans-serif;

  border-radius: 6px;
  background-color: #f7f5ff;
  color: #03a9f4;

  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: hsl(272, 93%, 48%);
    color: white;
  }

  .icons {
    margin-bottom: -2px;
    margin-right: 5px;
  }

  @media screen and (max-width: 895px) {
    font-size: 12px;
  }
`;

export default function Sidebar({ setButtonClicked }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    //setLoggedIn(false);
    navigate("/");
  };
  return (
    <SidebarContainer>
      <ContainerItem onClick={() => setButtonClicked("statistics")}>
        <FaHome className="icons" />
        Dashboard
      </ContainerItem>
      <ContainerItem onClick={() => setButtonClicked("course")}>
        <FaTv className="icons" />
        All Trainings
      </ContainerItem>
      <ContainerItem onClick={() => setButtonClicked("users")}>
        <FaUsers className="icons" />
        Users
      </ContainerItem>
      <ContainerItem onClick={() => setButtonClicked("createtraining")}>
        <FaSlidersH className="icons" />
        Create Training
      </ContainerItem>
      <ContainerItem onClick={() => setButtonClicked("colleges")}>
        <FaSlidersH className="icons" />
        Colleges
      </ContainerItem>
      <ContainerItem onClick={handleLogout}>
        <BiExit className="icons" />
        Logout
      </ContainerItem>
    </SidebarContainer>
  );
}
