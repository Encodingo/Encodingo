import React, { useEffect, useState } from "react";
import axios from "axios";
// import { allUsersRoute } from '../../utils/APIRoutes';
import UsersCard from "./UsersCard";
import styled from "styled-components";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [dates, setDates] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    const getusers = async () => {
      try {
        console.log("Users.jsx");
        // const response = await axios.get(allUsersRoute);
        // setUsers(response.data);
      } catch (error) {
        console.error("Error retrieving users:", error);
      }
    };
    getusers();
  }, []);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Handle navigation to the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Handle navigation to the previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };

  useEffect(() => {
    // Filter the data based on the selected dates
    const filtered = users.filter((user) => {
      const userDate = new Date(user.date);
      return (
        dates.length === 0 ||
        (dates[0] <= formatDate(userDate) && dates[1] >= formatDate(userDate))
      );
    });

    setFilteredData(filtered);
  }, [users, dates]);

  const Filter = () => {
    // Filter the data based on the selected dates
    // Slice the data based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currData = filteredData.slice(startIndex, endIndex);
    setCurrentData(currData);
  };

  useEffect(() => {
    Filter();
  }, [filteredData, currentPage]);

  // console.log(dates);
  return (
    <>
      <UserContainer>
        <Space direction="vertical" size={12}>
          <RangePicker
            onChange={(values) => {
              if (values) {
                setDates(
                  values.map((item) => {
                    return formatDate(item.$d);
                  })
                );
              } else {
                setDates([]);
              }
            }}
          />
        </Space>
        <Header>
          <p>Email</p>
          <p>Details </p>
          <p>Date Joined</p>
          <p>Make Admin</p>
        </Header>
        <hr />
        {currentData.map((user, index) => {
          return (
            <UsersCard
              key={index}
              userId={user._id}
              email={user.email}
              date={user.date}
              isAdmin={user.isAdmin}
            />
          );
        })}
        <hr />
        <div className="naviagtionBtn">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </UserContainer>
    </>
  );
};

export default Users;

const UserContainer = styled.div`
  padding-top: 30px;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  flex: 1;

  .naviagtionBtn {
    display: flex;
    justify-content: center;
    column-gap: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  font-weight: bold;

  p {
    width: 33%;
  }
`;
