import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  padding: 20px;
  background-color: #e2c1ff;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
    width:240px;
    min-width:150px;
    margin-top:15px;
  
  @media only screen and (max-width:1057px){
    padding: 10px 10px;
    margin-right:5px;
    width:150px;
  }

  .title {
    margin-bottom: 12px;
    opacity: 0.8;
    font-size: smaller;
  }
  .valueContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
`;
const StatisticsCard = ({ title, Value, icon, percentage, gain }) => {
  return (
    <CardContainer gain={gain}>
      <span className="title">{title}</span>
      <div className="valueContainer">
        <span>{Value}</span>
        <span style={{marginLeft:"10px" }}>{icon}</span>
      </div>
 
    </CardContainer>
  );
};
export default StatisticsCard;
