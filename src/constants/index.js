import pic from "../pages/studentProfile/images/2.jpg";

export const STUDENT = {
  id: "001",
  photo: pic,
  name: "Abugre Abayeta",
  grades: [
    { subject: "Web Dev", score: 8 },
    { subject: "HTML", score: 10 },
    { subject: "CSS", score: 8 },
    { subject: "JavaScript", score: 6 },
  ],
  attendance: {
    totalDays: 30,
    attendedDays: 28,
  },
  feedback: [
    { date: "30/10/2024", comment: "Very exceptional student" },
    { date: "24/10/2024", comment: "Excellent student" },
  ],
};
