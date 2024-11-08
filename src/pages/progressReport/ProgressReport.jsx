import React, { useState } from "react";
import ReportList from "./ReportList";
import ReportDetails from "./ReportDetails";
import AddReportForm from "./AddReportForm";

const ProgressReport = ({ reports, userRole }) => {
  const [selectedReport, setSelectedReport] = useState(null);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Progress Report
      </h2>
      {userRole === "teacher" && <AddReportForm />}
      <ReportList reports={reports} onSelectReport={setSelectedReport} />
      {selectedReport && <ReportDetails report={selectedReport} />}
    </div>
  );
};

export default ProgressReport;
