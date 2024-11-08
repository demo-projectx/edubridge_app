import React from "react";

const StudentInsights = () => {
  return (
    <div className="p-8 bg-indigo-50 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">
        Student Insights
      </h2>
      <p className="text-indigo-600 mb-6">
        Review students' performance and class progress.
      </p>
      {/* Insights (dummy content) */}
      <div className="space-y-4">
        <p>
          <span className="font-semibold">Class Average:</span> 85%
        </p>
        <p>
          <span className="font-semibold">Top Performer:</span> Jane Doe
        </p>
      </div>
    </div>
  );
};

export default StudentInsights;
