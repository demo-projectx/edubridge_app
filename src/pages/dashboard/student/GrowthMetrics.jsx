import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GrowthMetrics = () => {
  // Mock data for progress tracking
  const subjects = [
    {
      name: "Mathematics",
      progress: 85,
      improvement: "5% increase last month",
    },
    { name: "Science", progress: 70, improvement: "2% increase last month" },
    { name: "English", progress: 78, improvement: "4% increase last month" },
    {
      name: "Social Studies",
      progress: 88,
      improvement: "3% increase last month",
    },
  ];

  // Chart Data
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Mathematics",
        data: [70, 75, 78, 80, 85, 88],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.5)",
      },
      {
        label: "Science",
        data: [60, 65, 68, 70, 72, 75],
        borderColor: "#6d28d9",
        backgroundColor: "rgba(109, 40, 217, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.raw}%` } },
    },
  };

  return (
    <div className="p-8 bg-purple-50 shadow-lg rounded-lg max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-purple-800">Growth Metrics</h2>
        <p className="text-purple-600 mt-2">
          Gain insights into your academic performance and track your progress.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Subject Progress */}
        <div className="bg-white rounded-lg shadow p-6 col-span-1 md:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold text-purple-800">
            Subject Progress
          </h3>
          {subjects.map((subject, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <p className="font-medium text-purple-700">{subject.name}</p>
                <p className="text-sm text-purple-500">{subject.improvement}</p>
              </div>
              <div className="w-full bg-purple-200 rounded-full h-4">
                <div
                  className="bg-purple-800 h-4 rounded-full"
                  style={{ width: `${subject.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">
            Performance Over Time
          </h3>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Recommendations Section */}
        <div className="bg-white rounded-lg shadow p-6 col-span-1">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">
            Personalized Recommendations
          </h3>
          <ul className="list-disc pl-6 text-purple-700 space-y-2">
            <li>Focus on topics where your performance is below 75%.</li>
            <li>Review Mathematics chapters to sustain your current growth.</li>
            <li>Join the Science club to enhance practical understanding.</li>
            <li>Take mock tests to improve time management skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrowthMetrics;
