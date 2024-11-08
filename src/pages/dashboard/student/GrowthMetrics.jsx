import React from "react";

const GrowthMetrics = () => {
  return (
    <div className="p-8 bg-purple-50 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Growth Metrics
      </h2>
      <p className="text-purple-600 mb-6">
        Track your growth in different subjects.
      </p>
      {/* Growth Metrics (dummy content) */}
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Mathematics</p>
          <div className="w-full bg-purple-200 rounded-full h-4">
            <div
              className="bg-purple-800 h-4 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div>
          <p className="font-semibold">Science</p>
          <div className="w-full bg-purple-200 rounded-full h-4">
            <div
              className="bg-purple-800 h-4 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthMetrics;
