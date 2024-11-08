import React from "react";

const BehavioralIssues = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Behavioral Issues
      </h2>
      <p className="text-gray-600 mb-6">
        Monitor and track behavioral issues or improvements.
      </p>
      {/* Behavioral Logs (dummy content) */}
      <ul className="space-y-3">
        <li className="p-4 bg-red-50 text-red-600 rounded-lg">
          Incident on 2023-10-01: Skipping class without permission.
        </li>
        <li className="p-4 bg-yellow-50 text-yellow-600 rounded-lg">
          Note: Improved classroom behavior observed.
        </li>
      </ul>
    </div>
  );
};

export default BehavioralIssues;
