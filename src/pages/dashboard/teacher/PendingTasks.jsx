import React from "react";

const PendingTasks = () => {
  return (
    <div className="p-8 bg-teal-50 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-800 mb-4">Pending Tasks</h2>
      <p className="text-teal-600 mb-6">
        Manage assignments, grading, and other tasks.
      </p>
      {/* Task List (dummy content) */}
      <ul className="space-y-4">
        <li className="p-4 bg-teal-100 rounded-lg">
          <p className="font-semibold">Grade Math Exam</p>
          <p className="text-teal-700">Due: Tomorrow</p>
        </li>
        <li className="p-4 bg-teal-100 rounded-lg">
          <p className="font-semibold">Prepare Quiz for Science</p>
          <p className="text-teal-700">Due: Friday</p>
        </li>
      </ul>
    </div>
  );
};

export default PendingTasks;
