import React from "react";
import { useState } from "react";

const AddDebtor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-screen bg-green-100">
          <div className="bg-gray-100 grid gap-y-2 text-center p-10 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Debtor</h2>
            {error && typeof error === "string" && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter debtors name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-[80%] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter debtors email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[80%] px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-[30%] bg-blue-500 text-white text-base py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer"
              >
                Add Debtor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDebtor;
