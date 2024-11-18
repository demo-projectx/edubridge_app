import React from "react";
import { useUser } from "../../components/userContext";
import { Link } from "react-router-dom";

const ResourceCenter = () => {
  const { user } = useUser(); // Access user details from context

  // Ensure the user exists before rendering
  if (!user) {
    return <div>Loading...</div>; // Or handle unauthorized access
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-5xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">
        Resource Center
      </h1>

      {/* Conditionally render Learning Resources for Students */}
      {user?.role === "Student" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Learning Resources
          </h2>
          <p className="mb-6 text-gray-700">
            Explore a curated selection of resources, including guides, videos,
            and downloadable materials to support your academic journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Math Study Guide */}
            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Math Study Guide</h3>
              <p className="text-gray-600">
                Comprehensive guide covering key math topics.
              </p>
              <Link
                to="https://www.sparknotes.com/math/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                View Resource
              </Link>
            </div>

            {/* Science Tutorial Videos */}
            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Science Tutorials</h3>
              <p className="text-gray-600">
                Watch engaging video lessons on various science topics.
              </p>
              <Link
                to="https://youtu.be/g_T4qwR9b_I?si=PE5wHVWvlqROwvql"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Watch Now
              </Link>
            </div>

            {/* English Writing Workbook */}
            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                English Writing Workbook
              </h3>
              <p className="text-gray-600">
                Download exercises to improve your writing skills.
              </p>
              <Link
                to="https://americanenglish.state.gov/files/ae/resource_files/developing_writing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Conditionally render Parental Guidance for Parents */}
      {user?.role === "Parent" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Parental Guidance
          </h2>
          <p className="mb-6 text-gray-700">
            Access resources to support your child’s education and well-being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Supporting Math Learning */}
            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                Supporting Math Learning
              </h3>
              <p className="text-gray-600">
                Tips and strategies for helping your child excel in math.
              </p>
              <Link
                to="https://www.mathnasium.com/math-centers/northbethesda/news/best-ways-improve-childs-math-skills-nb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                View Resource
              </Link>
            </div>

            {/* Managing Screen Time */}
            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Managing Screen Time</h3>
              <p className="text-gray-600">
                Practical advice on balancing screen use and study time.
              </p>
              <Link
                to="https://www.relationalpsych.group/articles/managing-screen-time-after-summer-a-balanced-approach-for-kids-and-parents#:~:text=Start%20by%20Setting%20Clear%20Rules%20for%20Screen%20Time,-The%20first%20and&text=For%20instance%2C%20limiting%20screen%20use,children's%20cognitive%20development%20and%20behavior."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                View Resource
              </Link>
            </div>

            {/* Emotional Support for Kids */}
            <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">
                Emotional Support for Kids
              </h3>
              <p className="text-gray-600">
                Learn how to recognize and address emotional challenges.
              </p>
              <Link
                to="https://www.ed.gov/sites/ed/files/documents/students/supporting-child-student-social-emotional-behavioral-mental-health.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                View PDF
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ResourceCenter;
