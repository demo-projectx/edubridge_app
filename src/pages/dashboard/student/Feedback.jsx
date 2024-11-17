import React, { useState } from "react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      teacher: "Math Teacher",
      subject: "Mathematics",
      feedback: "Excellent performance in recent tests!",
      date: "2024-11-01",
    },
    {
      id: 2,
      teacher: "Science Teacher",
      subject: "Science",
      feedback: "Great effort, but focus on lab assignments.",
      date: "2024-11-05",
    },
    {
      id: 3,
      teacher: "English Teacher",
      subject: "English",
      feedback: "Impressive essay writing. Keep it up!",
      date: "2024-11-07",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const teachers = ["Math Teacher", "Science Teacher", "English Teacher"];
  const subjects = ["Mathematics", "Science", "English"];

  // Filter and sort logic
  const filteredFeedbacks = feedbacks.filter((fb) =>
    filter === "All" ? true : fb.subject === filter
  );

  const sortedFeedbacks = filteredFeedbacks.sort((a, b) =>
    sortBy === "date"
      ? new Date(b.date) - new Date(a.date)
      : a.teacher.localeCompare(b.teacher)
  );

  return (
    <div className="p-8 bg-yellow-50 shadow-lg rounded-lg max-w-6xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-yellow-800">Feedback</h2>
        <p className="text-yellow-600 mt-2">
          View and manage feedback from your teachers.
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Filter by Subject */}
        <div>
          <label className="block text-sm font-medium text-yellow-800 mb-1">
            Filter by Subject:
          </label>
          <select
            className="w-full px-3 py-2 border border-yellow-400 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by */}
        <div>
          <label className="block text-sm font-medium text-yellow-800 mb-1">
            Sort by:
          </label>
          <select
            className="w-full px-3 py-2 border border-yellow-400 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
      </div>

      {/* Feedback List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedFeedbacks.map((fb) => (
          <div key={fb.id} className="p-4 bg-yellow-100 rounded-lg shadow">
            <p className="font-semibold text-yellow-800">{fb.teacher}</p>
            <p className="text-sm text-yellow-700">{fb.subject}</p>
            <p className="mt-2">{fb.feedback}</p>
            <p className="text-xs text-yellow-500 mt-2">{fb.date}</p>
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">
          Submit Feedback
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newFeedback = {
              id: feedbacks.length + 1,
              teacher: formData.get("teacher"),
              subject: formData.get("subject"),
              feedback: formData.get("feedback"),
              date: new Date().toISOString().split("T")[0],
            };
            setFeedbacks([...feedbacks, newFeedback]);
            e.target.reset();
          }}
        >
          <div className="space-y-4">
            {/* Teacher Dropdown */}
            <div>
              <label className="block text-sm font-medium text-yellow-800">
                Teacher:
              </label>
              <select
                name="teacher"
                required
                className="mt-1 block w-full px-3 py-2 border border-yellow-400 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="">Select a teacher</option>
                {teachers.map((teacher) => (
                  <option key={teacher} value={teacher}>
                    {teacher}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-yellow-800">
                Subject:
              </label>
              <select
                name="subject"
                required
                className="mt-1 block w-full px-3 py-2 border border-yellow-400 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="">Select a subject</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Feedback Textarea */}
            <div>
              <label className="block text-sm font-medium text-yellow-800">
                Feedback:
              </label>
              <textarea
                name="feedback"
                required
                className="mt-1 block w-full px-3 py-2 border border-yellow-400 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
