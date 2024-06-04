import React from "react";
import { useState } from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Fardeen",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
