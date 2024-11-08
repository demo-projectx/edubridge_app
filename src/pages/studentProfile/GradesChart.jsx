import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GradesChart = ({ grades }) => {
  const data = {
    labels: grades.map((grade) => grade.subject),
    datasets: [
      {
        label: "Grades",
        data: grades.map((grade) => grade.score),
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        borderColor: "rgba(34, 197, 94, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Student Grades" },
    },
  };

  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
      <h3 className="text-lg font-medium text-gray-700 mb-4">
        Grades Overview
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GradesChart;
