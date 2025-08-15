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
        {userinfo.map((info) => (
          <div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
