import React from "react";

const ReportDetails = ({ report }) => {
  return (
    <div className="mt-4 p-4 bg-green-50 rounded-lg shadow-inner">
      <h3 className="text-lg font-medium text-gray-800">{report.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{report.details}</p>
    </div>
  );
};

export default ReportDetails;
