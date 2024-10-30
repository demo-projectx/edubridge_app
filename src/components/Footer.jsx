import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="container mx-auto text-center">
        <p className="mb-4">EduBridge © 2024. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
