import React from "react";

const Grades = () => {
  const gradesData = [
    {
      subject: "Mathematics",
      grade: "A",
      gradePoint: 4.0,
      comments: "Excellent grasp of concepts and problem-solving skills.",
    },
    {
      subject: "Social Studies",
      grade: "A",
      gradePoint: 4.0,
      comments: "Great understanding of social and cultural topics.",
    },
    {
      subject: "Physical Science",
      grade: "A",
      gradePoint: 4.0,
      comments: "Outstanding performance in theory and experiments.",
    },
    {
      subject: "English",
      grade: "B+",
      gradePoint: 3.5,
      comments: "Good command of language, but work on essay structure.",
    },
    {
      subject: "Biology",
      grade: "B",
      gradePoint: 3.0,
      comments: "Fair understanding of biological concepts, needs improvement.",
    },
  ];

  const overallGradePoint =
    gradesData.reduce((sum, { gradePoint }) => sum + gradePoint, 0) /
    gradesData.length;

  return (
    <div className="p-8 bg-green-50 shadow-lg rounded-lg max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800">Grades</h2>
        <p className="text-green-600 mt-2">
          Review your academic grades, progress, and teacher feedback.
        </p>
      </div>

      {/* Overall Grade Point */}
      <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-green-800">Overall GPA</h3>
        <p className="text-green-700 text-lg mt-2">
          {overallGradePoint.toFixed(2)} / 4.0
        </p>
      </div>

      {/* Grades List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gradesData.map(({ subject, grade, gradePoint, comments }) => (
          <div
            key={subject}
            className="p-4 bg-green-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <p className="font-bold text-lg text-green-800">{subject}</p>
            <p className="text-green-700 mt-1">Grade: {grade}</p>
            <p className="text-green-700">Grade Point: {gradePoint}</p>
            <p className="text-green-600 mt-2 text-sm">"{comments}"</p>
          </div>
        ))}
      </div>

      {/* Grade Improvement Tips */}
      <div className="mt-10 p-6 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold text-green-800">
          Tips for Improvement
        </h3>
        <ul className="list-disc list-inside text-green-700 mt-4 space-y-2">
          <li>
            Focus on essay writing and structure to improve English grades.
          </li>
          <li>
            Regularly review biological concepts and attend study groups for
            Biology.
          </li>
          <li>
            Continue practicing problem-solving techniques for Mathematics.
          </li>
          <li>Seek teacher feedback frequently to address weak areas.</li>
        </ul>
      </div>
    </div>
  );
};

export default Grades;
