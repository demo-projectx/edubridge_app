import React from "react";

const BehaviorFeedback = ({ feedback }) => {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
      <h3 className="text-lg font-medium text-gray-700 mb-2">
        Behavior Feedback
      </h3>
      <ul className="text-gray-600 text-sm">
        {feedback?.map((item, index) => (
          <li key={index} className="border-b py-2">
            <span className="font-semibold text-green-600">{item.date}:</span>{" "}
            {item.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BehaviorFeedback;
