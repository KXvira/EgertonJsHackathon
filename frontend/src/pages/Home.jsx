import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="display-flex justify-content-center align-items-center">
        <h1>Smart Business Manager</h1>
      </div>
      <div>
        <Link to="/creditmanager">Login</Link>
      </div>
    </div>
  );
};

export default Home;
