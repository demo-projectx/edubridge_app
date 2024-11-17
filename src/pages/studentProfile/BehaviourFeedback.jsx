import React from "react";

const BehaviorFeedback = ({ feedback }) => {
  // Categorizing feedback
  const positiveFeedback = feedback.filter(item => item.type === "positive");
  const negativeFeedback = feedback.filter(item => item.type === "negative");

  // Generating summary insights
  const totalFeedback = feedback.length;
  const positivePercentage = (
    (positiveFeedback.length / totalFeedback) *
    100
  ).toFixed(1);
  const negativePercentage = (
    (negativeFeedback.length / totalFeedback) *
    100
  ).toFixed(1);

  return (
    <div className="p-8 bg-blue-50 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-800">Behavior Feedback</h2>
      <p className="text-blue-600 mt-2">
        Track and analyze feedback on your behavior in class and beyond.
      </p>

      {/* Summary Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Positive Feedback Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-green-600">
            Positive Feedback
          </h3>
          <p className="mt-2 text-gray-600">
            Total Positive Comments:{" "}
            <span className="font-bold text-gray-800">
              {positiveFeedback.length}
            </span>
          </p>
          <p className="mt-1 text-gray-600">
            Percentage:{" "}
            <span className="font-bold text-gray-800">
              {positivePercentage}%
            </span>
          </p>
        </div>

        {/* Negative Feedback Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-red-600">
            Areas for Improvement
          </h3>
          <p className="mt-2 text-gray-600">
            Total Critical Comments:{" "}
            <span className="font-bold text-gray-800">
              {negativeFeedback.length}
            </span>
          </p>
          <p className="mt-1 text-gray-600">
            Percentage:{" "}
            <span className="font-bold text-gray-800">
              {negativePercentage}%
            </span>
          </p>
        </div>
      </div>

      {/* Detailed Feedback List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700">
          Detailed Feedback
        </h3>

        {/* Positive Feedback */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-green-600">
            Positive Comments
          </h4>
          {positiveFeedback.length > 0 ? (
            <ul className="mt-2 space-y-3">
              {positiveFeedback.map((item, index) => (
                <li
                  key={index}
                  className="p-4 bg-green-50 border-l-4 border-green-600 rounded-lg shadow-sm"
                >
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-800">
                      {item.date}:
                    </span>{" "}
                    {item.comment}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-600">No positive feedback available.</p>
          )}
        </div>

        {/* Negative Feedback */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-red-600">
            Areas for Improvement
          </h4>
          {negativeFeedback.length > 0 ? (
            <ul className="mt-2 space-y-3">
              {negativeFeedback.map((item, index) => (
                <li
                  key={index}
                  className="p-4 bg-red-50 border-l-4 border-red-600 rounded-lg shadow-sm"
                >
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-800">
                      {item.date}:
                    </span>{" "}
                    {item.comment}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-600">No critical feedback available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BehaviorFeedback;
