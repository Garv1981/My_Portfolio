import React from "react";
import { FaEye, FaLink } from "react-icons/fa";
import la from "../../public/la.png"; 
import mp from "../../public/mp.png"; 
import po from "../../public/po.png"; 
const projects = [
  {
    title: "Laundry System Website",
    description: "This project is designed to provide an efficient and automated laundry management system for users to schedule pickups, track the status of their laundry, and manage payments online.",
    image: la,
    link: "https://github.com/Vansh-13/Laundry3",
    demo: "https://fantastic-wisp-d8059a.netlify.app/",
  },
  {
    title: "Currency-Converter Website",
    description: "This is a simple and intuitive web application that allows users to convert amounts between different currencies using the latest exchange rates. Built using HTML, CSS, and JavaScript, this project demonstrates how to fetch live data from an API and create a responsive, user-friendly interface.",
    image: mp, 
    link: "https://github.com/Garv1981/Currency-Converter"
    
  },
  {
    title: "Ecommerce-Cloth Store",
    description: "An online store platform where customers can browse and purchase a wide variety of clothing items. The site features a user-friendly interface, secure payment options, and personalized recommendations based on user preferences and trends.",
    image: po, 
    link: "https://github.com/Vansh-13/ClothHaven",
    demo: "https://clothehavencom.netlify.app/",
  }
  
];

function Portfolio() {
  return (
    <section id="portfolio" className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 bg-gradient-to-r from-gray-100 to-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-200 hover:bg-blue-700 shadow-md"
                >
                  <FaLink />
                  <span className="text-sm">Source Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-200 hover:bg-green-700 shadow-md"
                >
                  <FaEye />
                  <span className="text-sm">View Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
