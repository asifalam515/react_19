import React from "react";
import UserCard from "../UserCard/UserCard";

const Users = () => {
  const userinfo = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 28,
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      age: 32,
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      age: 25,
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      age: 29,
      isActive: true,
    },
  ];
  return (
    <div>
      <h3 className="text-center text-2xl">
        All Users number is {userinfo.length}{" "}
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {userinfo.map((info) => (
          <UserCard key={info.id} info={info}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
