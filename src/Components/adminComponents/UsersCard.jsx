import React, { useState } from "react";
import styled from "styled-components";
// import { makeAdminRoute } from "../../utils/APIRoutes";

import axios from "axios";

const UsersCard = ({ email, isAdmin, date, userId }) => {
  const [adminset, setadminset] = useState(isAdmin);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  };

  const handleAdmin = async () => {
    // const { data } = await axios.post(makeAdminRoute, {
    //   email,
    // });

    // if (data.status === false) {
    //   console.log("error");
    // } else {
    //   setadminset(true);
    // }
    console.log("Usercard");
  };
  return (
    <CardContainer>
      <p>{email}</p>
      <span>
        {isAdmin === true && (
          <Button disabled={true} style={{ background: "grey" }}>
            ADMIN
          </Button>
        )}
        {isAdmin === false && <Button>User Details</Button>}
      </span>
      <p> {formatDate(date)}</p>
      {adminset === false && <Button onClick={handleAdmin}>Make Admin</Button>}
      {adminset && <Button style={{ background: "grey" }}>Admin</Button>}
    </CardContainer>
  );
};

export default UsersCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span,
  p {
    width: 25%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #8209ec;
  color: white;
  border-radius: 10px;
`;
