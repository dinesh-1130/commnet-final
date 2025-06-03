// import React, { useState, useEffect } from "react";

// export default function OurProjectsPage() {
//   const [activeProject, setActiveProject] = useState(null);
  
//   useEffect(() => {
//     // If you have AOS, initialize it here
//     if (typeof window !== 'undefined' && window.AOS) {
//       window.AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
//     }
//   }, []);

//   const projects = [
//   {
//     id: 1,
//     image: "/assets/jewel.png",
//     title: "Jewel Of Creek",
//     subtitle: "ICT Infra",
//     location: "Dubai, UAE",
//     description: "A large-scale ICT infrastructure development featuring extensive cabling and surveillance systems tailored to a luxury waterfront development.",
//     client: "GBM",
//     status: "Completed",
//     scope: [
//       "IT Structured Cabling - 13000 Points",
//       "CCTV/Security System - 2500 Camera"
//     ],
//     value: "AED 15,17,820",
//     duration: "3 Years"
//   },
//   {
//     id: 2,
//     image: "/assets/dewa.png",
//     title: "CSOC Project",
//     subtitle: "Cyber Security Operations Center",
//     location: "Dubai, UAE",
//     description: "A security-focused installation for DEWA integrating advanced racks, networking, and cyber security systems with full testing and commissioning.",
//     client: "GBM",
//     status: "Completed",
//     scope: [
//       "DEWA Installation of CSOC Racks",
//       "Network cabling for panel from CSOC Rack",
//       "Installation of cyber security devices, Testing and commissioning"
//     ],
//     value: "AED 26,23,250",
//     duration: "1 Year"
//   },
//   {
//     id: 3,
//     image: "/assets/atlantis.png",
//     title: "Atlantis The Royal",
//     subtitle: "Structured Cabling & GRMS",
//     location: "Palm Jumeirah, Dubai",
//     description: "An elite infrastructure implementation including GRMS and AV systems for one of the most luxurious landmarks in Dubai.",
//     client: "GBM",
//     status: "Completed",
//     scope: [
//       "Structured Cabling",
//       "AV-BGM system installation",
//       "GRMS System Implemented - 820 Rooms"
//     ],
//     value: "AED 496,900",
//     duration: "14 Months"
//   },
//   {
//     id: 4,
//     image: "/assets/occidental.png",
//     title: "Occidental Hotel Al Jadaf",
//     subtitle: "ELV & IT Infrastructure",
//     location: "Al Jadaf, Dubai",
//     description: "A comprehensive ELV and IT infrastructure implementation for a 5-star hotel including data, security, AV, and WiFi systems.",
//     client: "Al Seeb Group",
//     status: "Completed",
//     scope: [
//       "Data Centre, Structured Cabling - 2500 Points",
//       "Security System: CCTV - 315 / ACS Doors - 15",
//       "AV-PA system/BGM, IPTV/SMATV - 800 Rooms",
//       "Network-Switching and Routing",
//       "WiFi and Telephony"
//     ],
//     value: "AED 40,07,700",
//     duration: "21 Months"
//   },
//   {
//     id: 5,
//     image: "/assets/fifa.png",
//     title: "FIFA BEACH SOCCER WORLD CUP UAE 2024",
//     subtitle: "ELV & IT Infrastructure",
//     location: "Dubai, UAE",
//     description: "Temporary ICT and surveillance setup for the FIFA Beach Soccer World Cup, supporting event operations and security.",
//     client: "UAE Football Association",
//     status: "Completed",
//     scope: [
//       "Structured Cabling – FOC/UTP",
//       "CCTV for CID & Dubai Police",
//       "Network – Switching, Routing and Firewall",
//       "WiFi Solution & IPTV",
//       "IT Peripherals Laptops and Printers, System"
//     ],
//     value: "AED 25,25,750",
//     duration: "15 Days"
//   },
//   {
//     id: 6,
//     image: "/assets/Aptec.png",
//     title: "Aptec Corporate Office",
//     subtitle: "Data Centre & Security Systems",
//     location: "Dubai, UAE",
//     description: "Corporate office data centre setup with structured cabling, security systems, and critical power management.",
//     client: "Teksalah",
//     status: "Completed",
//     scope: [
//       "Data Centre - Raised floor, Racks, Cabling, EMS, FM200, CCU, UPS",
//       "Structured Cabling - UTP/FOC",
//       "CCTV and Access Control System"
//     ],
//     value: "AED 320,499",
//     duration: "1 Month"
//   },
//   {
//     id: 7,
//     image: "/assets/ICT.png",
//     title: "ICT & Security systems",
//     subtitle: "Network & Security Solutions",
//     location: "Dubai, UAE",
//     description: "Comprehensive ICT and SIRA-compliant security solutions deployment for office and production facilities.",
//     client: "Jotun Paints and Jotun Powder Coating",
//     status: "Completed",
//     scope: [
//       "Network Cabling FOC & UTP",
//       "CCTV System as per SIRA Regulation-800",
//       "Access Control System",
//       "WiFi and Data Centre Cabling"
//     ],
//     value: "AED 33,90,399",
//     duration: "14 Months"
//   },
//   {
//     id: 8,
//     image: "/assets/CSOC.png",
//     title: "CSOC & ICT, Security systems & AV",
//     subtitle: "Complete Infrastructure Services",
//     location: "UAE",
//     description: "Long-term infrastructure support covering server and storage, network, WiFi, and AV systems.",
//     client: "UAE Football Association",
//     status: "Ongoing",
//     scope: [
//       "Server Implementation",
//       "Network Switching and Routing",
//       "WIFI Implementation",
//       "Storage implementation",
//       "SLA for network infrastructure"
//     ],
//     value: "AED 70,16,110",
//     duration: "2017 to 2024 (8 Years)"
//   },
//   {
//     id: 9,
//     image: "/assets/Security.png",
//     title: "Security System - ACS",
//     subtitle: "Bank Branch Security",
//     location: "Dubai & Abu Dhabi",
//     description: "Security and access control system installation across multiple bank branches.",
//     client: "Samba Bank",
//     status: "Completed",
//     scope: [
//       "Access control system for branches Dubai and Abu Dhabi",
//       "UPS Installation",
//       "Network Cabling"
//     ],
//     value: "AED 130,125",
//     duration: "14 Days"
//   },
//   {
//     id: 10,
//     image: "/assets/Sharjah.png",
//     title: "Sharjah Police-Data Center",
//     subtitle: "Data Center Infrastructure",
//     location: "Sharjah, UAE",
//     description: "Data center buildout including server racks, structured cabling, and device migration support.",
//     client: "Sharjah Police",
//     status: "Completed",
//     scope: [
//       "Installation of Network/server racks - 80 Nos",
//       "Installation of containment and cable baskets",
//       "Rack to Rack Cabling – UTP/FOC",
//       "Equipment/Device installation and support migration activity"
//     ],
//     value: "AED 470,850",
//     duration: "25 Days"
//   },
//   {
//     id: 11,
//     image: "/assets/DubaiSafar.png",
//     title: "Dubai Safari Park",
//     subtitle: "Network & IT Maintenance",
//     location: "Dubai, UAE",
//     description: "Ongoing IT infrastructure support, including structured cabling and WiFi at Safari Park.",
//     client: "Gerab Systems",
//     status: "Ongoing",
//     scope: [
//       "WiFi Implementation",
//       "IT Structured Cabling - UTP/FOC",
//       "Data centre maintenance, Service level agreement for network infrastructure"
//     ],
//     value: "AED 557,890 / Year",
//     duration: "2022 to 2024 (2 Years)"
//   },
//   {
//     id: 12,
//     image: "/assets/EY.png",
//     title: "Office Renovation",
//     subtitle: "Data Centre Refurbishment",
//     location: "UAE",
//     description: "Refurbishment and installation of a Tier-1 data centre for EY corporate office.",
//     client: "EY",
//     status: "Completed",
//     scope: [
//       "Data centre Refurbishment",
//       "Installation of Tier-1 Data centre"
//     ],
//     value: "AED 415,900",
//     duration: "1 Month"
//   }
// ];


//   const closeProjectDetails = () => {
//     setActiveProject(null);
//   };

//   return (
//     <div className="font-sans bg-gray-50">
//       {/* Hero Section with Background Image */}
//       <div className="relative py-20 md:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-sky-900 opacity-90"></div>
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//          style={{ backgroundImage: "url('/assets/sample-5.jpg')" }}
//         />
        
//         <div className="relative container mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
//             Our Projects
//           </h2>
//           <div className="w-24 h-1 bg-sky-400 mx-auto mb-8" data-aos="fade-up" data-aos-delay="200"></div>
//           <p className="text-lg text-sky-100 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
//             Delivering excellence in engineering and construction with innovative solutions
//             and uncompromising quality across the UAE.
//           </p>
//         </div>
//       </div>

//       {/* Project Grid */}
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div 
//               key={project.id}
//               className="group relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer transition-all duration-300 hover:shadow-xl"
//               onClick={() => setActiveProject(project)}
//               data-aos="fade-up"
//             >
//               <img 
//                 src={project.image} 
//                 alt={project.title} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//               <div className="absolute inset-0 flex flex-col justify-end p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-sky-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   {project.subtitle}
//                 </p>
//                 <div className="w-0 h-1 bg-sky-400 mt-2 group-hover:w-16 transition-all duration-300"></div>
//               </div>
//               <div className="absolute inset-0 bg-sky-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
//                 <div className="text-center p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                   <p className="text-sky-100 mb-4">{project.subtitle}</p>
//                   <span className="inline-block px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-sky-800 transition-colors duration-300">
//                     View Details
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Project Details Modal */}
//       {activeProject && (
//   <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
//     <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto" data-aos="fade-up">
//       <div className="relative">
//         <img 
//           src={activeProject.image} 
//           alt={activeProject.title} 
//           className="w-full h-64 object-cover"
//         />
//         <button 
//           onClick={closeProjectDetails}
//           className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all duration-300"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//       </div>

//       <div className="p-6 md:p-8">
//         <div className="flex items-center mb-4">
//           <div className="w-12 h-1 bg-sky-500 mr-4"></div>
//           <h3 className="text-lg font-semibold text-sky-600">{activeProject.subtitle}</h3>
//         </div>

//         <h2 className="text-3xl font-bold text-gray-800 mb-4">{activeProject.title}</h2>
//         <p className="text-gray-600 mb-6">{activeProject.description}</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div>
//             {/* Location */}
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
//                 <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Location</p>
//                 <p className="font-semibold text-gray-800">{activeProject.location}</p>
//               </div>
//             </div>

//             {/* Client */}
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
//                 <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Client</p>
//                 <p className="font-semibold text-gray-800">{activeProject.client}</p>
//               </div>
//             </div>

//             {/* Status */}
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
//                 <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Status</p>
//                 <p className="font-semibold text-gray-800">Completed</p>
//               </div>
//             </div>
//           </div>

//           {/* Value and Duration */}
//           <div>
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
//                 <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Project Value</p>
//                 <p className="font-semibold text-gray-800">{activeProject.value}</p>
//               </div>
//             </div>

//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
//                 <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Duration</p>
//                 <p className="font-semibold text-gray-800">{activeProject.duration}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scope */}
//         <div className="mb-6">
//           <p className="text-lg font-semibold text-gray-800 mb-3">Scope of Work</p>
//           <ul className="space-y-2">
//             {activeProject.scope.map((item, idx) => (
//               <li key={idx} className="flex items-start">
//                 <svg className="w-5 h-5 text-sky-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span className="text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Close Button */}
//         <div className="pt-4 border-t border-gray-200">
//           <button 
//             onClick={closeProjectDetails}
//             className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-300"
//           >
//             Close Details
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function OurProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  const projects = [
    {
      id: 1,
      image: "/assets/jewel.png",
      title: "Jewel Of Creek",
      subtitle: "ICT Infra",
      location: "Dubai, UAE",
      description:
        "A large-scale ICT infrastructure development featuring extensive cabling and surveillance systems tailored to a luxury waterfront development.",
      client: "GBM",
      status: "Completed",
      scope: [
        "IT Structured Cabling - 13000 Points",
        "CCTV/Security System - 2500 Camera"
      ],
      value: "AED 15,17,820",
      duration: "3 Years"
    },
    {
      id: 2,
      image: "/assets/dewa.png",
      title: "CSOC Project",
      subtitle: "Cyber Security Operations Center",
      location: "Dubai, UAE",
      description:
        "A security-focused installation for DEWA integrating advanced racks, networking, and cyber security systems with full testing and commissioning.",
      client: "GBM",
      status: "Completed",
      scope: [
        "DEWA Installation of CSOC Racks",
        "Network cabling for panel from CSOC Rack",
        "Installation of cyber security devices, Testing and commissioning"
      ],
      value: "AED 26,23,250",
      duration: "1 Year"
    },
    {
      id: 3,
      image: "/assets/atlantis.png",
      title: "Atlantis The Royal",
      subtitle: "Structured Cabling & GRMS",
      location: "Palm Jumeirah, Dubai",
      description:
        "An elite infrastructure implementation including GRMS and AV systems for one of the most luxurious landmarks in Dubai.",
      client: "GBM",
      status: "Completed",
      scope: [
        "Structured Cabling",
        "AV-BGM system installation",
        "GRMS System Implemented - 820 Rooms"
      ],
      value: "AED 496,900",
      duration: "14 Months"
    },
    {
      id: 4,
      image: "/assets/occidental.png",
      title: "Occidental Hotel Al Jadaf",
      subtitle: "ELV & IT Infrastructure",
      location: "Al Jadaf, Dubai",
      description:
        "A comprehensive ELV and IT infrastructure implementation for a 5-star hotel including data, security, AV, and WiFi systems.",
      client: "Al Seeb Group",
      status: "Completed",
      scope: [
        "Data Centre, Structured Cabling - 2500 Points",
        "Security System: CCTV - 315 / ACS Doors - 15",
        "AV-PA system/BGM, IPTV/SMATV - 800 Rooms",
        "Network-Switching and Routing",
        "WiFi and Telephony"
      ],
      value: "AED 40,07,700",
      duration: "21 Months"
    },
    {
      id: 5,
      image: "/assets/fifa.png",
      title: "FIFA BEACH SOCCER WORLD CUP UAE 2024",
      subtitle: "ELV & IT Infrastructure",
      location: "Dubai, UAE",
      description:
        "Temporary ICT and surveillance setup for the FIFA Beach Soccer World Cup, supporting event operations and security.",
      client: "UAE Football Association",
      status: "Completed",
      scope: [
        "Structured Cabling – FOC/UTP",
        "CCTV for CID & Dubai Police",
        "Network – Switching, Routing and Firewall",
        "WiFi Solution & IPTV",
        "IT Peripherals Laptops and Printers, System"
      ],
      value: "AED 25,25,750",
      duration: "15 Days"
    },
    {
      id: 6,
      image: "/assets/Aptec.png",
      title: "Aptec Corporate Office",
      subtitle: "Data Centre & Security Systems",
      location: "Dubai, UAE",
      description:
        "Corporate office data centre setup with structured cabling, security systems, and critical power management.",
      client: "Teksalah",
      status: "Completed",
      scope: [
        "Data Centre - Raised floor, Racks, Cabling, EMS, FM200, CCU, UPS",
        "Structured Cabling - UTP/FOC",
        "CCTV and Access Control System"
      ],
      value: "AED 320,499",
      duration: "1 Month"
    },
    {
      id: 7,
      image: "/assets/ICT.png",
      title: "ICT & Security systems",
      subtitle: "Network & Security Solutions",
      location: "Dubai, UAE",
      description:
        "Comprehensive ICT and SIRA-compliant security solutions deployment for office and production facilities.",
      client: "Jotun Paints and Jotun Powder Coating",
      status: "Completed",
      scope: [
        "Network Cabling FOC & UTP",
        "CCTV System as per SIRA Regulation-800",
        "Access Control System",
        "WiFi and Data Centre Cabling"
      ],
      value: "AED 33,90,399",
      duration: "14 Months"
    },
    {
      id: 8,
      image: "/assets/CSOC.png",
      title: "CSOC & ICT, Security systems & AV",
      subtitle: "Complete Infrastructure Services",
      location: "UAE",
      description:
        "Long-term infrastructure support covering server and storage, network, WiFi, and AV systems.",
      client: "UAE Football Association",
      status: "Ongoing",
      scope: [
        "Server Implementation",
        "Network Switching and Routing",
        "WIFI Implementation",
        "Storage implementation",
        "SLA for network infrastructure"
      ],
      value: "AED 70,16,110",
      duration: "2017 to 2024 (8 Years)"
    },
    {
      id: 9,
      image: "/assets/Security.png",
      title: "Security System - ACS",
      subtitle: "Bank Branch Security",
      location: "Dubai & Abu Dhabi",
      description:
        "Security and access control system installation across multiple bank branches.",
      client: "Samba Bank",
      status: "Completed",
      scope: [
        "Access control system for branches Dubai and Abu Dhabi",
        "UPS Installation",
        "Network Cabling"
      ],
      value: "AED 130,125",
      duration: "14 Days"
    },
    {
      id: 10,
      image: "/assets/Sharjah.png",
      title: "Sharjah Police-Data Center",
      subtitle: "Data Center Infrastructure",
      location: "Sharjah, UAE",
      description:
        "Data center build-out including server racks, structured cabling, and device migration support.",
      client: "Sharjah Police",
      status: "Completed",
      scope: [
        "Installation of Network/server racks - 80 Nos",
        "Installation of containment and cable baskets",
        "Rack to Rack Cabling – UTP/FOC",
        "Equipment/Device installation and support migration activity"
      ],
      value: "AED 470,850",
      duration: "25 Days"
    },
    {
      id: 11,
      image: "/assets/DubaiSafar.png",
      title: "Dubai Safari Park",
      subtitle: "Network & IT Maintenance",
      location: "Dubai, UAE",
      description:
        "Ongoing IT infrastructure support, including structured cabling and WiFi at Safari Park.",
      client: "Gerab Systems",
      status: "Ongoing",
      scope: [
        "WiFi Implementation",
        "IT Structured Cabling - UTP/FOC",
        "Data centre maintenance, Service level agreement for network infrastructure"
      ],
      value: "AED 557,890 / Year",
      duration: "2022 to 2024 (2 Years)"
    },
    {
      id: 12,
      image: "/assets/EY.png",
      title: "Office Renovation",
      subtitle: "Data Centre Refurbishment",
      location: "UAE",
      description:
        "Refurbishment and installation of a Tier-1 data centre for EY corporate office.",
      client: "EY",
      status: "Completed",
      scope: [
        "Data centre Refurbishment",
        "Installation of Tier-1 Data centre"
      ],
      value: "AED 415,900",
      duration: "1 Month"
    },
    {
  id: 13,
  image: "/assets/verticle/Picture15.png",
  title: "Mining Container",
  subtitle: "Data Container Deployment",
  location: "Khalifa City, Abu Dhabi",
  description:
    "Deployment of large-scale temporary data containers for mining operations with high megawatt capacity across two locations.",
  client: "Orientek",
  status: "Completed",
  scope: [
    "50 Megawatt temporary data container project – Mina Zayed – 120 Containers",
    "125 Megawatt temporary data container project – Masdar City – 266 Containers"
  ],
  value: "AED 850,000",
  duration: "4 Months"
},
{
  id: 14,
  image: "/assets/verticle/Picture14.png",
  title: "Das Holding",
  subtitle: "IT Room & UPS AMC",
  location: "Abu Dhabi",
  description:
    "Setup of IT Room and structured cabling for UTP/FOC including UPS AMC service for DAS Holding headquarters.",
  client: "DAS HOLDING",
  status: "Completed",
  scope: [
    "IT Room",
    "Structured Cabling – UTP/FOC",
    "UPS AMC"
  ],
  value: "AED 380,750",
  duration: "20 Days"
},
{
  id: 15,
  image: "/assets/verticle/Picture13.png",
  title: "DiveTech",
  subtitle: "Structured Cabling",
  location: "AUH Ports",
  description:
    "Structured cabling for DiveTech facilities under Winner Holistics at Abu Dhabi Ports area.",
  client: "Winner Holistics",
  status: "Completed",
  scope: [
    "IT Structured Cabling – UTP/FOC"
  ],
  value: "AED 370,450",
  duration: "45 Days"
},
{
  id: 16,
  image: "/assets/verticle/Picture12.png",
  title: "Arjan Residency Burjuman",
  subtitle: "Structured Cabling Infrastructure",
  location: "Dubai",
  description:
    "Implementation of structured cabling works for a high-rise residential complex in Burjuman, managed by Alemco Engineering.",
  client: "ALEMCO ENGINEERING",
  status: "Completed",
  scope: [
    "IT Structured Cabling – UTP/FOC"
  ],
  value: "AED 399,956",
  duration: "5 Months"
},
{
  id: 17,
  image: "/assets/verticle/Picture11.png",
  title: "CCTV Implementation",
  subtitle: "Surveillance System Setup",
  location: "Abu Dhabi Airport",
  description:
    "Installation of CCTV systems as per ADMCC standards for Modern Baggage operations in Abu Dhabi Airport.",
  client: "Modern Baggage",
  status: "Completed",
  scope: [
    "CCTV Installation as per ADMCC"
  ],
  value: "AED 75,590",
  duration: "6 Days"
}

  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const displayedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-sky-900 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/sample-5.jpg')" }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Our Projects
          </h2>
          <div
            className="w-24 h-1 bg-sky-400 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <p
            className="text-lg text-sky-100 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Delivering excellence in engineering and construction with innovative
            solutions and uncompromising quality across the UAE.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setActiveProject(project)}
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sky-200 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.subtitle}
                </p>
                <div className="w-0 h-1 bg-sky-400 mt-2 group-hover:w-16 transition-all duration-300"></div>
              </div>
              <div className="absolute inset-0 bg-sky-800 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sky-100 mb-4">{project.subtitle}</p>
                  <span className="inline-block px-4 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-sky-800 transition-colors duration-300">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-sky-600 text-white hover:bg-sky-700"
              }`}
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-sky-600 text-white hover:bg-sky-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto" data-aos="fade-up">
            <div className="relative">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-sky-500 mr-4"></div>
                <h3 className="text-lg font-semibold text-sky-600">
                  {activeProject.subtitle}
                </h3>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {activeProject.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {activeProject.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  {/* Location */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-800">
                        {activeProject.location}
                      </p>
                    </div>
                  </div>

                  {/* Client */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-semibold text-gray-800">
                        {activeProject.client}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-semibold text-gray-800">
                        {activeProject.status}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Value and Duration */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Project Value
                      </p>
                      <p className="font-semibold text-gray-800">
                        {activeProject.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-5 h-5 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">
                        {activeProject.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scope */}
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Scope of Work
                </p>
                <ul className="space-y-2">
                  {activeProject.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-sky-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={closeProjectDetails}
                  className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-300"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
