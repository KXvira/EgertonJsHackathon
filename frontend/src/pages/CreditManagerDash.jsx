import React from "react";
import { Link, Outlet } from "react-router-dom";

const CreditManagerDash = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-5">
        <h1 className="text-2xl font-bold mb-6 text-center">Credit Manager</h1>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/creditmanager/AddDebtor"
            className="px-4 py-2 rounded hover:bg-blue-700"
          >
            ➕ Add Debtor
          </Link>
          <Link
            to="/creditmanager/ViewDebtors"
            className="px-4 py-2 rounded hover:bg-blue-700"
          >
            📋 View Debtors
          </Link>
          <Link
            to="/creditmanager/Blacklist"
            className="px-4 py-2 rounded hover:bg-blue-700"
          >
            🚫 Blacklist
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* Renders nested components */}
      </main>
    </div>
  );
};

export default CreditManagerDash;
