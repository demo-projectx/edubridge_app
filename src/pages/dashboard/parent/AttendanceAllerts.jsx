import React from "react";

const AttendanceAlerts = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Attendance Alerts
      </h2>
      <p className="text-gray-600 mb-6">
        View your child’s attendance records and alerts.
      </p>
      {/* Attendance Alerts (dummy content) */}
      <ul className="space-y-3">
        <li className="p-4 bg-green-50 text-green-600 rounded-lg">
          2023-10-02: Present in all classes.
        </li>
        <li className="p-4 bg-red-50 text-red-600 rounded-lg">
          2023-10-01: Absent from science class.
        </li>
      </ul>
    </div>
  );
};

export default AttendanceAlerts;
