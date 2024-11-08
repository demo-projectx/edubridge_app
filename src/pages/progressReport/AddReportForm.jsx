import React, { useState } from "react";

const AddReportForm = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting new report
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-lg font-medium text-gray-800 mb-2">Add New Report</h3>
      <input
        type="text"
        className="w-full p-2 mb-2 border rounded-lg"
        placeholder="Report Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-2 border rounded-lg"
        placeholder="Report Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Add Report
      </button>
    </form>
  );
};

export default AddReportForm;
