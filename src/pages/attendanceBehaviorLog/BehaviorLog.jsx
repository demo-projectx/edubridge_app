import React from "react";

const BehaviorLog = ({ behaviorData }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
      <h3 className="text-lg font-medium text-gray-700 mb-2">Behavior Log</h3>
      <ul className="text-gray-600 text-sm">
        {behaviorData.map((entry, index) => (
          <li key={index} className="border-b py-2">
            {entry.date}: {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BehaviorLog;
