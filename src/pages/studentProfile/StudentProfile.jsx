import React from "react";
import GradesChart from "./GradesChart";
import AttendanceSummary from "./AttendanceSummary";
import BehaviorFeedback from "./BehaviourFeedback";
// import pic from "../studentProfile/images/2.jpg"

const StudentProfile = ({ student }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <div className="flex items-center mb-6">
        <img
          src={student?.photo}
          alt={student?.name}
          className="w-20 h-20 rounded-full shadow-md"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {student?.name}
          </h2>
          <p className="text-sm text-gray-500">ID: {student?.id}</p>
        </div>
      </div>
      <GradesChart grades={student?.grades} />
      <AttendanceSummary attendance={student?.attendance} />
      <BehaviorFeedback feedback={student?.feedback} />
    </div>
  );
};

export default StudentProfile;
