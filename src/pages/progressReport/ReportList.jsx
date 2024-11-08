import React from "react";

const ReportList = ({ reports, onSelectReport }) => {
  return (
    <ul className="text-gray-600 text-sm">
      {reports.map((report, index) => (
        <li
          key={index}
          className="p-3 bg-gray-50 hover:bg-green-100 rounded-lg mb-2 cursor-pointer"
          onClick={() => onSelectReport(report)}
        >
          {report.title} - {report.date}
        </li>
      ))}
    </ul>
  );
};

export default ReportList;
