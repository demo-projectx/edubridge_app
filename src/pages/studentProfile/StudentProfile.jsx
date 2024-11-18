import React from "react";
import GradesChart from "./GradesChart";
import AttendanceSummary from "./AttendanceSummary";
import BehaviorFeedback from "./BehaviourFeedback";

const StudentProfile = ({ student }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      {/* Profile Picture and Basic Info */}
      <div className="text-center mb-8">
        <img
          src={student?.photo}
          alt={student?.name}
          className="w-24 h-24 rounded-full shadow-md mx-auto"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          {student?.name}
        </h2>
        <p className="text-sm text-gray-500">ID: {student?.id}</p>
      </div>

      {/* Grid Layout for Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <GradesChart grades={student?.grades} />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <AttendanceSummary attendance={student?.attendance} />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2">
          <BehaviorFeedback feedback={student?.feedback} />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
