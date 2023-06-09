import React from "react";
import styled from "styled-components";
import { BiDownload, BiAddToQueue } from "react-icons/bi";
import { CiMemoPad, CiCalendar, CiUser } from "react-icons/ci";
import StatisticsCard from "./StatisticsCard";
import Charts from "./charts";

const OuterContainer = styled.div`
  display: flex;
  font-family: "Rubik", sans-serif;
  flex-direction: column;
  padding: 20px 30px;
  width:80%;
 @media screen and ( min-width:678px) and (max-width:895px){
    width:75%;
  }
  @media only screen and (max-width:678px){
   width:100%;
    padding: 10px 10px;
  }

`;
const StatisticsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  column-gap:10px;

  @media only screen and (max-width:1272px){
    row-gap:20px;
  }
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap:wrap;
 
`;

const Statistics = () => {
  return (
    <OuterContainer>
      <HeadingContainer>
        <h3>Admin Dashboard</h3>
       
      </HeadingContainer>
      <StatisticsContainer>
        <StatisticsCard
          title="SALES"
          Value="34040"
          icon={<CiCalendar />}

        />
        <StatisticsCard
          title="Users"
          Value="47033"
          icon={<CiUser />}
  
        />
        <StatisticsCard
          title="Trainings"
          Value="400"
          icon={<BiDownload />}
       
          
        />
        <StatisticsCard
          title="Revenue"
          Value="61344"
          icon={<BiAddToQueue />}
    
        />
      </StatisticsContainer>

   <Charts />

    </OuterContainer>
  );
};
export default Statistics;
