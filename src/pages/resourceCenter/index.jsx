import React from "react";

const ResourceCenter = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-5xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Resource Center</h1>

      {/* Learning Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Learning Resources
        </h2>
        <p className="mb-6 text-gray-700">
          Access a variety of guides, educational materials, and study plans to
          support your learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Learning Resource */}
          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Math Study Guide</h3>
            <p className="text-gray-600">
              Comprehensive guide covering key math topics for middle school
              students.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              View Resource
            </button>
          </div>

          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Science Experiments</h3>
            <p className="text-gray-600">
              Explore simple science experiments to understand basic concepts in
              physics and chemistry.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              View Resource
            </button>
          </div>

          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">English Grammar Guide</h3>
            <p className="text-gray-600">
              Learn the fundamentals of English grammar to improve your writing
              skills.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              View Resource
            </button>
          </div>

          {/* Additional resources can be added here */}
        </div>
      </section>

      {/* Parental Guidance Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Parental Guidance
        </h2>
        <p className="mb-6 text-gray-700">
          Resources curated to help parents support their children’s learning
          and personal development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Parental Resource */}
          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Supporting Math Learning</h3>
            <p className="text-gray-600">
              Tips and strategies for helping your child excel in math.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              View Resource
            </button>
          </div>

          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">
              Building Good Study Habits
            </h3>
            <p className="text-gray-600">
              A guide for parents to encourage effective study routines at home.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              View Resource
            </button>
          </div>

          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Managing Screen Time</h3>
            <p className="text-gray-600">
              Learn ways to help your child balance screen time with other
              activities.
            </p>
            <button className="mt-4 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
              View Resource
            </button>
          </div>

          {/* Additional parental guidance resources can be added here */}
        </div>
      </section>
    </div>
  );
};

export default ResourceCenter;
