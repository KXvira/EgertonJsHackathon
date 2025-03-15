import React, { useState, useEffect } from "react";

const fakeData = [
  {
    _id: "67d4e7d766a84363fc56249a",
    name: "Mary Wanjiku",
    phone: "+254723456789",
    price: 8000,
    item: "Microwave Oven",
    balance: 2000,
    status: "overdue",
    dueDate: "2025-03-10T10:00:00.000Z",
  },
  {
    _id: "67d4e81766a84363fc56249d",
    name: "James Odhiambo",
    phone: "+254734567890",
    price: 25000,
    item: "HP Laptop",
    balance: 10000,
    status: "paid",
    dueDate: "2025-04-15T09:15:00.000Z",
  },
  {
    _id: "67d4e83866a84363fc56249f",
    name: "John Doe",
    phone: "+254712345678",
    price: 15000,
    item: "Samsung Galaxy A54",
    balance: 5000,
    status: "paid",
    dueDate: "2025-04-01T14:30:00.000Z",
  },
  {
    _id: "67d4f6e21bf166081aaef3bc",
    name: "jjd",
    phone: "3232434",
    price: 222,
    item: "ddd",
    balance: 11,
    status: "pending",
    dueDate: "2025-03-21T00:00:00.000Z",
  },
  {
    _id: "67d5008adb726ebc74d3126e",
    name: "hjchj",
    phone: "88743287",
    price: 2000,
    item: "phone",
    balance: 11,
    status: "pending",
    dueDate: "2025-03-18T00:00:00.000Z",
  },
];

const ViewDebtors = () => {
  const [debtors, setDebtors] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    setDebtors(fakeData);
  }, []);

  const filteredDebtors = debtors.filter(
    (debtor) =>
      debtor.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? debtor.status === statusFilter : true)
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Debtors List</h2>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="border px-3 py-2 rounded w-2/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border px-3 py-2 rounded w-1/3"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Item</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Balance</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredDebtors.length > 0 ? (
              filteredDebtors.map((debtor) => (
                <tr key={debtor._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {debtor.item}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Ksh {debtor.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Ksh {debtor.balance}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 font-bold ${
                      debtor.status === "overdue"
                        ? "text-red-500"
                        : debtor.status === "paid"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {debtor.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(debtor.dueDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No matching debtors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewDebtors;
