import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import styled from "styled-components";

const Charts = () => {
  const data = [
    { name: "Robotics", users: 2000 },
    { name: "Drone", users: 1500 },
    { name: "IoT", users: 1000 },
    { name: "Developement", users: 3000 },
  ];

  return (
      <ChartContainer>
        <PieChart width={350}  height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        
        <BarChart
        className="barchart"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 30,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ChartContainer>
   
  );
};

export default Charts;


const ChartContainer=styled.div`
display:flex;
justify-content:space-between;

.barchart{
    margin-top:40px;
}

@media screen and (max-width:1095px){
flex-direction:column;
align-items:center;
padding-right:30px;

.barchart{
    margin-top:0;
  
}
}
`