import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  const OurServices = [
    {
      id: "service-01",
      name: "Social Media Marketing",
    },
    {
      id: "service-02",
      name: "Web & Mobile App Development",
    },
    {
      id: "service-03",
      name: "Data & Analytics",
    },
  ];

  const OurTechnologies = [
    {
      id: "tech-01",
      name: "ReactJS",
    },
    {
      id: "tech-02",
      name: "Gatsby",
    },
    {
      id: "tech-03",
      name: "NextJS",
    },
    {
      id: "tech-05",
      name: "NodeJS",
    },
  ];

  return (
    <footer className="bg-violet-700 text-white p-12">
      <div className="pl-20 pr-20">
        {/* Logo and Description */}
        <div className="mb-8 md:flex md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center">
              <img src={logo} alt="AT Digital Logo" className="w-56" />
            </div>
            <p className="mt-5 max-w-md">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          
          <div className="md:w-1/3 md:ml-4 md:mr-4">
            <h3 className="font-medium text-2xl mb-4">Our Technologies</h3>
            <ul>
              {OurTechnologies.map((tech) => (
                <li key={tech.id} className="mb-3">
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="font-medium text-2xl mb-4">Our Services</h3>
            <ul>
              {OurServices.map((service) => (
                <li key={service.id} className="mb-3">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex my-4 justify-center pt-8 md:pt-20">
        <hr className="border-white w-2/3" />
      </div>
      <div className="flex justify-center items-center">
        <button className="text-sm mx-4">Privacy Policy</button>
        <span className="mx-3">|</span>
        <button className="text-sm">Terms & Conditions</button>
      </div>
    </footer>
  );
};

export default Footer;
