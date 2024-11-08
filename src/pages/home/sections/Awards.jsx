// import pic from "../images/Award.png";
// import pic1 from "../images/images";
// import pic2 from "../images/gold";

const Awards = () => {
  const awardsData = [
    {
      title: "Best Student Performance Tracking Platform",
      description:
        "Awarded for outstanding contributions in improving student monitoring and engagement.",
      image:
        "https://www.dimolanka.com/wp-content/uploads/2023/10/CMA-Excellence-in-Integrated-Reports-Awards-Gold-Winner.jpg", // Replace with your image link
    },
    {
      title: "Excellence in Educational Innovation",
      description:
        "Recognized for innovative approaches to bridging the communication gap between parents and teachers.",
      image:
        "https://www.shutterstock.com/image-vector/gold-podium-star-vector-illustration-600nw-2473961929.jpg",
    },
    {
      title: "Most Impactful EdTech Solution 2024",
      description:
        "Honored for our contributions to educational technology and youth empowerment.",
      image: "https://www.aoa.org/AOA/Images/Awards/Award_Star.jpg",
    },
    // Add more awards as needed
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-grey-600 mb-4">
          Our Achievements & Awards
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          EduBridge is recognized for its outstanding contributions in the field
          of education and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-grey-600">
                {award.title}
              </h2>
              <p className="text-gray-600 mt-2">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-600 text-white py-8 px-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Inspiring Quotes</h2>
          <p className="italic">
            "Education is the most powerful weapon which you can use to change
            the world." – Nelson Mandela
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
