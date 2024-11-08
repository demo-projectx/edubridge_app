import React from "react";

const Grades = () => {
  return (
    <div className="p-8 bg-green-50 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Grades</h2>
      <p className="text-green-600 mb-6">
        Review your academic grades and progress.
      </p>
      {/* Grades (dummy content) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-green-200 rounded-lg">
          <p className="font-bold text-lg">Mathematics</p>
          <p className="text-green-800">A</p>
        </div>
        <div className="p-4 bg-green-200 rounded-lg">
          <p className="font-bold text-lg">Science</p>
          <p className="text-green-800">B+</p>
        </div>
      </div>
    </div>
  );
};

export default Grades;
