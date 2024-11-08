import React from "react";

const Messages = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Messages from Teachers
      </h2>
      <p className="text-gray-600 mb-6">
        Review messages sent by your child’s teachers.
      </p>
      {/* Messages List (dummy content) */}
      <ul className="space-y-3">
        <li className="p-4 bg-blue-50 text-blue-600 rounded-lg">
          Message from Mr. Smith: "Your child has been performing excellently in
          mathematics."
        </li>
        <li className="p-4 bg-blue-50 text-blue-600 rounded-lg">
          Message from Ms. Johnson: "Your child missed a class yesterday."
        </li>
      </ul>
    </div>
  );
};

export default Messages;
