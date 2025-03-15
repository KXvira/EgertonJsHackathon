import React, { useState } from "react";

const fakeBlacklistedDebtors = [
  {
    _id: "67d4e7d766a84363fc56249a",
    name: "Mary Wanjiku",
    phone: "+254723456789",
    email: "mary@gmail.com",
    reason: "Time Limit Expired",
  },
  {
    _id: "67d4e81766a84363fc56249d",
    name: "James Odhiambo",
    phone: "+254734567890",
    email: "james@gmail.com",
    reason: "Multiple Defaults",
  },
];

const Blacklist = () => {
  const [blacklistedDebtors, setBlacklistedDebtors] = useState(
    fakeBlacklistedDebtors
  );

  const removeFromBlacklist = (id) => {
    setBlacklistedDebtors(
      blacklistedDebtors.filter((debtor) => debtor._id !== id)
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Blacklisted Debtors
        </h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Reason</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blacklistedDebtors.length > 0 ? (
              blacklistedDebtors.map((debtor) => (
                <tr key={debtor._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.reason}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => removeFromBlacklist(debtor._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No blacklisted debtors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blacklist;
