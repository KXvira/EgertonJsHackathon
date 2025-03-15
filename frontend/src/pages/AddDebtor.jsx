import React, { useState } from "react";

const AddDebtor = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [dateOfDebt, setDateOfDebt] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://e9d0-2c0f-fe38-225a-7f3d-252e-9e38-fab5-3cbe.ngrok-free.app/addrecord";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !phone ||
      !item ||
      !price ||
      !amountPaid ||
      !dateOfDebt ||
      !dueDate
    ) {
      setError("All fields are required!");
      return;
    }

    setError(null);
    setLoading(true);

    const debtorData = {
      name,
      phone,
      item,
      price,
      balance: amountPaid,
      datePurchased: dateOfDebt,
      dueDate,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(debtorData),
      });

      if (!response.ok) {
        throw new Error("Failed to add debtor. Try again.");
      }

      console.log("Debtor Added:", debtorData);

      // Reset form
      setName("");
      setPhone("");
      setItem("");
      setPrice("");
      setAmountPaid("");
      setDateOfDebt("");
      setDueDate("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-gray-100 grid gap-y-2 text-center p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Debtor</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Debtor's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Item Name"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              placeholder="Amount Paid"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date (Date of Debt)
            </label>
            <input
              type="date"
              value={dateOfDebt}
              onChange={(e) => setDateOfDebt(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white text-base py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer"
          >
            {loading ? "Adding..." : "Add Debtor"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDebtor;
