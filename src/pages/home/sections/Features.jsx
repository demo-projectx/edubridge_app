import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-time Student Monitoring",
      description: "Track student performance instantly.",
    },
    {
      title: "Seamless Communication",
      description: "Connect with parents and teachers easily.",
    },
    {
      title: "Insightful Analytics",
      description: "Gain insights on student progress.",
    },
    {
      title: "Resource Center",
      description: "Access resources for better learning.",
    },
  ];

  return (
    <section id="features" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-600 mb-10">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
