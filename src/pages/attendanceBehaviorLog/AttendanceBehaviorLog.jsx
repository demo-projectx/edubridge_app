import React from "react";
import AttendanceCalendar from "./AttendanceCalendar";
import BehaviorLog from "./BehaviorLog";

const AttendanceBehaviorLog = ({ attendanceData, behaviorData }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Attendance & Behavior
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AttendanceCalendar attendanceData={attendanceData} />
        <BehaviorLog behaviorData={behaviorData} />
      </div>
    </div>
  );
};

export default AttendanceBehaviorLog;
