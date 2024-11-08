import React from "react";

const Feedback = () => {
  return (
    <div className="p-8 bg-yellow-50 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-yellow-800 mb-4">Feedback</h2>
      <p className="text-yellow-600 mb-6">Read feedback from your teachers.</p>
      {/* Feedback List (dummy content) */}
      <ul className="space-y-4">
        <li className="p-4 bg-yellow-100 rounded-lg">
          <p className="font-semibold">Math Teacher:</p>
          <p>Excellent performance in recent tests!</p>
        </li>
        <li className="p-4 bg-yellow-100 rounded-lg">
          <p className="font-semibold">Science Teacher:</p>
          <p>Great effort, but focus on lab assignments.</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
