import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Teacher",
      message:
        "EduBridge has helped me stay updated on every student’s progress with ease.",
    },
    {
      name: "Jane Smith",
      role: "Parent",
      message:
        "I can now track my child’s learning journey seamlessly. It’s amazing!",
    },
    {
      name: "Emma Johnson",
      role: "Student",
      message: "EduBridge motivates me to achieve more and reach my goals.",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-grey-600 mb-10">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.message}"</p>
              <h4 className="text-lg font-semibold text-grey-600">
                {testimonial.name}
              </h4>
              <span className="text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
