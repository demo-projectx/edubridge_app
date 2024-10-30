import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Teachers input data and insights",
      description: "Monitor students and track their progress.",
    },
    {
      title: "Parents receive instant updates",
      description: "Stay informed about your child’s learning.",
    },
    {
      title: "Students track progress and goals",
      description: "Get motivated to achieve more.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-grey-600 mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold text-grey-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
