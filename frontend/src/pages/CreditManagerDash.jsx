import React from "react";
import { Link } from "react-router-dom";

const CreditManagerDash = () => {
  return (
    <div>
      <div>
        <Link to="/creditmanager/AddDebtor">Add Debtor</Link>
      </div>
    </div>
  );
};

export default CreditManagerDash;
