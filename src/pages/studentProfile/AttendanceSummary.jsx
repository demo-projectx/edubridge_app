import React from "react";

const AttendanceSummary = ({ attendance }) => {
  const { totalDays, attendedDays } = attendance;
  const attendancePercentage = ((attendedDays / totalDays) * 100).toFixed(1);

  const attendanceTrend =
    attendancePercentage >= 90
      ? "Excellent"
      : attendancePercentage >= 75
      ? "Good"
      : attendancePercentage >= 50
      ? "Needs Improvement"
      : "Critical";

  const suggestions = {
    Excellent: ["Keep up the great work!", "Maintain your current routine."],
    Good: [
      "Aim for 90%+ attendance.",
      "Identify and reduce minor distractions.",
    ],
    NeedsImprovement: [
      "Set reminders for classes.",
      "Discuss challenges with teachers.",
    ],
    Critical: [
      "Prioritize attendance immediately.",
      "Seek support to address underlying issues.",
    ],
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800">Attendance Summary</h2>
      <p className="text-gray-600 mt-2">
        Review your attendance statistics and progress.
      </p>

      {/* Attendance Overview */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Overall Attendance
          </h3>
          <p className="mt-2 text-gray-600">
            Days Attended:{" "}
            <span className="font-bold text-gray-800">{attendedDays}</span> /{" "}
            <span className="text-gray-800">{totalDays}</span>
          </p>
          <p className="mt-1 text-gray-600">
            Attendance Rate:{" "}
            <span className="font-bold text-gray-800">
              {attendancePercentage}%
            </span>
          </p>
          <p className="mt-1 text-gray-600">
            Performance Level:{" "}
            <span
              className={`font-bold ${
                attendanceTrend === "Excellent"
                  ? "text-green-600"
                  : attendanceTrend === "Good"
                  ? "text-blue-600"
                  : attendanceTrend === "Needs Improvement"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {attendanceTrend}
            </span>
          </p>
        </div>

        {/* Progress Visualization */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Progress Chart
          </h3>
          <div className="mt-4 relative h-6 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-6 rounded-full bg-green-500"
              style={{ width: `${attendancePercentage}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {attendancePercentage}% attendance achieved.
          </p>
        </div>
      </div>

      {/* Suggestions for Improvement */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">
          Suggestions for Improvement
        </h3>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          {suggestions[attendanceTrend].map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceSummary;
