import React from "react";

const App = () => {
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
      <h1>Starting react js core concepts {20 + 234} </h1>
      <div>
        <h1>
          All numbers are :
          {numbers.map((number) => (
            <ul key={number}>
              <li>{number}</li>
            </ul>
          ))}{" "}
        </h1>
      </div>
    </div>
  );
};

export default App;
