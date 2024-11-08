import React from "react";

const AttendanceSummary = ({ attendance }) => {
  const { totalDays, attendedDays } = attendance;
  const attendancePercentage = ((attendedDays / totalDays) * 100).toFixed(1);

  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
      <h3 className="text-lg font-medium text-gray-700 mb-2">
        Attendance Summary
      </h3>
      <p className="text-gray-600">
        Days Attended: <span className="font-semibold">{attendedDays}</span> /{" "}
        {totalDays}
      </p>
      <p className="text-gray-600">
        Attendance Rate:{" "}
        <span className="font-semibold">{attendancePercentage}%</span>
      </p>
    </div>
  );
};

export default AttendanceSummary;
