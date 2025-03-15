import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Smart Business Manager
      </h1>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Link
          to="/creditmanager"
          className="bg-blue-500 text-white px-4 py-3 rounded-lg text-center hover:bg-blue-600"
        >
          Debtor Management
        </Link>
        <Link
          to="/blacklist"
          className="bg-red-500 text-white px-4 py-3 rounded-lg text-center hover:bg-red-600"
        >
          Blacklist
        </Link>
        <Link
          to="/reports"
          className="bg-green-500 text-white px-4 py-3 rounded-lg text-center hover:bg-green-600"
        >
          Reports
        </Link>
        <Link
          to="/settings"
          className="bg-gray-500 text-white px-4 py-3 rounded-lg text-center hover:bg-gray-600"
        >
          Settings
        </Link>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg text-center">
            <h3 className="text-lg font-bold">Total Debtors</h3>
            <p className="text-2xl font-semibold">120</p>
          </div>
          <div className="p-4 bg-red-100 rounded-lg text-center">
            <h3 className="text-lg font-bold">Overdue Accounts</h3>
            <p className="text-2xl font-semibold">30</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <h3 className="text-lg font-bold">Blacklisted</h3>
            <p className="text-2xl font-semibold">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
