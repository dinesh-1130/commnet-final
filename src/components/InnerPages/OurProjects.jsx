import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PremiumProjectsPage() {
  const [activeProject, setActiveProject] = useState(0);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
  }, []);

  const projects = [
    {
      image: "/assets/jewel.png",
      heading: "Jewel Of Creek",
      title: "Jewel Of Creek - ICT Infra",
      client: "GBM",
      scope: [
        "IT Structured Cabling - 13000 Points",
        "CCTV/Security System - 2500 Camera",
      ],
      value: "AED 15,17,820",
      duration: "3 Years",
    },
    {
      image: "/assets/dewa.png",
      heading: "Dubai Electricity and Water Authority (DEWA)-CSOC",
      title: "CSOC Project",
      client: "GBM",
      scope: [
        "DEWA Installation of CSOC Racks",
        "Network cabling for panel from CSOC Rack",
        "Cyber security devices installation, testing & commissioning",
      ],
      value: "AED 26,23,250",
      duration: "1 Year",
    },
    {
      image: "/assets/atlantis.png",
      heading: "Atlantis The Royal",
      title: "Atlantis The Royal",
      client: "GBM",
      scope: [
        "Structured Cabling",
        "AV-BGM system installation",
        "GRMS System Implemented - 820 Rooms",
      ],
      value: "AED 496,900",
      duration: "14 Months",
    },
    {
      image: "/assets/fta.png",
      heading: "FTA Office Expansion – Level 13 & 17",
      title: "FTA Office Expansion – Level 13 & 17",
      client: "Top Rock Interiors",
      scope: [
        "Structured cabling",
        "CCTV System",
        "Network switching and Routing",
        "WiFi Solution",
      ],
      value: "AED 673,500",
      duration: "3 Months",
    },
    {
      image: "/assets/occidental.png",
      heading: "Occidental Hotel Al Jadaf – ELV & IT Infrastructure",
      title: "Occidental Hotel Al Jadaf – ELV & IT Infrastructure",
      client: "Al Seeb Group",
      scope: [
        "Data Centre, Structured Cabling - 2500 Points",
        "CCTV - 315 / ACS Doors - 15",
        "AV-PA / BGM / IPTV / SMATV - 800 Rooms",
        "Network Switching and Routing",
        "WiFi and Telephony",
      ],
      value: "AED 40,07,700",
      duration: "21 Months",
    },
  ];

  // Function to navigate projects
  const navigateProject = (direction) => {
    if (direction === 'next') {
      setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    } else {
      setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  return (
    <div className="font-['Montserrat'] bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-96 md:h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/assets/sample-5.jpg')] bg-cover bg-fixed bg-center"
          style={{transform: "translateZ(0)"}}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="w-24 h-1 bg-sky-500 mb-6" data-aos="fade-down" />
          <h1 
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Premier Projects
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Exceptional solutions delivered with uncompromising excellence
          </p>
          
          <div 
            className="mt-12 animate-bounce"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Projects Showcase - Large Screen Carousel */}
      <div className="hidden lg:block bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-800 relative">
              Featured Projects
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-sky-500"></span>
            </h2>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigateProject('prev')}
                className="p-3 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                onClick={() => navigateProject('next')}
                className="p-3 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-xl">
                    <div className="lg:w-1/2 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 lg:h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-sky-600 text-white px-6 py-2 rounded-br-lg font-semibold">
                        Project {index + 1}/{projects.length}
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-1 bg-sky-500 mr-4"></div>
                          <h3 className="text-lg font-semibold text-sky-600">{project.heading}</h3>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">{project.title}</h2>
                        
                        <div className="mb-8">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Client</p>
                              <p className="font-semibold text-gray-800">{project.client}</p>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <p className="text-lg font-semibold text-gray-800 mb-3">Scope of Work</p>
                            <ul className="space-y-2">
                              {project.scope.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <svg className="w-5 h-5 text-sky-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-500">Project Value</p>
                          <p className="text-xl font-bold text-gray-800">{project.value}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="text-xl font-bold text-gray-800">{project.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  activeProject === index ? "bg-sky-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile & Tablet View - Standard Project List */}
      <div className="lg:hidden bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-sky-500"></span>
          </h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-sky-600 text-white px-4 py-2 rounded-bl-lg font-semibold">
                    {index + 1}/{projects.length}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-1 bg-sky-500 mr-3"></div>
                    <h3 className="text-sm font-semibold text-sky-600">{project.heading}</h3>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h2>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                  
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Scope Of Work:</p>
                    <ul className="space-y-2">
                      {project.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-sky-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Project Value</p>
                      <p className="text-base font-bold text-gray-800">{project.value}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-base font-bold text-gray-800">{project.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-800 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Ready to build your next world-class project?
          </h2>
          <p 
            className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our expert team delivers exceptional solutions tailored to your needs
          </p>
          <button 
            className="px-8 py-3 bg-white text-sky-700 font-bold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact Us 
          </button>
        </div>
      </div>
    </div>
  );
}

