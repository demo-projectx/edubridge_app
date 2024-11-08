import React from "react";

const ChildProgress = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Child Progress
      </h2>
      <p className="text-gray-600 mb-6">
        Track your child’s academic progress and milestones here.
      </p>
      {/* Academic Progress Chart (dummy content) */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Academic Performance
        </h3>
        <p>Grades Chart Placeholder</p>
      </div>
    </div>
  );
};

export default ChildProgress;
