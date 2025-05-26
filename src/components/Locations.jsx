
// import { useState, useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const locations = [
//   {
//     name: "Dubai - UAE",
//     address:
//       "Office No.301, Centurion Star Building, Tower A, Port Saeed Dubai, UAE, PO Box 117133",
//     lat: 25.2532,
//     lon: 55.3657,
//     phone: "+971 4 123 4567",
//     email: "dubai@company.com",
//     hours: "Monday - Friday: 9:00 AM - 6:00 PM",
//     timezone: "Local Time (GMT+4)"
//   },
//   {
//     name: "India",
//     address:
//       "Office No.301, Centurion Star Building, Tower A, Port Saeed Dubai, UAE, PO Box 117133",
//     lat: 25.2532,
//     lon: 55.3657,
//     phone: "+91 11 4567 8901",
//     email: "india@company.com",
//     hours: "Monday - Friday: 9:30 AM - 6:30 PM",
//     timezone: "Local Time (GMT+5:30)"
//   },
// ];

// const getMapEmbedUrl = (lat, lon) =>
//   `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.02},${
//     lat - 0.01
//   },${lon + 0.02},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`;

// export default function GlobalPresence() {
//   const [activeTab, setActiveTab] = useState(0);
//   const tabsRef = useRef(null);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, []);

//   useEffect(() => {
//     if (tabsRef.current) {
//       const activeTabElement = tabsRef.current.children[activeTab];
//       if (activeTabElement) {
//         const container = tabsRef.current;
//         const scrollLeft =
//           activeTabElement.offsetLeft -
//           container.offsetWidth / 2 +
//           activeTabElement.offsetWidth / 2;
//         container.scrollLeft = scrollLeft;
//       }
//     }
//   }, [activeTab]);

//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white font-['Lato'] py-4 md:py-16 w-full overflow-hidden">
//       {/* Header Section */}
//       <div
//         className="text-center px-4 mb-6 md:mb-12 max-w-screen-lg mx-auto"
//         data-aos="fade-up"
//       >
//         <div className="inline-block px-4 py-1 rounded-full bg-sky-50 border border-sky-500 text-sky-600 text-sm mb-2">
//           Our Global Presence
//         </div>
//         <h2 className="text-lg md:text-4xl font-bold text-gray-800 mb-1">
//           A local company with{" "}
//           <span className="text-sky-600 md:text-red-600">Global Standards</span>
//         </h2>
//         <p className="hidden md:block text-gray-600 max-w-2xl mx-auto mt-4">
//           We are proud to serve clients worldwide with offices strategically located across continents,
//           bringing our expertise closer to you.
//         </p>
//       </div>

//       {/* Mobile Tabs */}
//       <div
//         ref={tabsRef}
//         className="flex md:hidden justify-start overflow-x-auto py-2 px-4 border-b"
//         style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
//       >
//         {locations.map((loc, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`py-1 px-3 text-sm font-medium focus:outline-none mx-1 whitespace-nowrap ${
//               activeTab === index
//                 ? "bg-sky-100 text-sky-700 rounded-md border border-sky-300"
//                 : "text-gray-700"
//             }`}
//           >
//             {loc.name}
//           </button>
//         ))}
//       </div>

//       {/* Mobile View */}
//       <div
//         className="md:hidden px-4 pb-6 mt-4"
//         data-aos="fade-up"
//         data-aos-delay="100"
//       >
//         <div className="bg-white rounded-lg overflow-hidden shadow-md">
//           <div className="w-full h-40 overflow-hidden">
//             <iframe
//               src={getMapEmbedUrl(
//                 locations[activeTab].lat,
//                 locations[activeTab].lon
//               )}
//               className="w-full h-full border-0"
//               loading="lazy"
//               title={`Map of ${locations[activeTab].name}`}
//             ></iframe>
//           </div>
//           <div className="p-4">
//             <h3 className="text-base font-semibold text-gray-800 mb-3 text-center md:text-left">
//               {locations[activeTab].name}
//             </h3>
//             <div className="flex items-start space-x-2">
//               <svg
//                 className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               <div className="flex-1 overflow-hidden">
//                 <span className="text-sky-600 font-medium block mb-1 text-sm">
//                   Office Address
//                 </span>
//                 <p className="text-gray-700 text-xs leading-relaxed break-words pr-2">
//                   {locations[activeTab].address}
//                 </p>
//               </div>
//             </div>
//             <button className="mt-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium text-center w-full rounded">
//               Explore
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop View - Premium UI Design */}
//       <div className="hidden md:block mt-8 max-w-7xl mx-auto px-6">
//         {/* Hero Section with 3D Globe Effect */}
//         <div className="relative bg-gradient-to-r from-sky-900 to-indigo-900 rounded-2xl overflow-hidden mb-12">
//           <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
//           {/* Decorative Elements */}
//           <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-3xl opacity-20"></div>
//           <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-3xl opacity-20"></div>
          
//           <div className="py-16 px-12 flex justify-between items-center z-10 relative">
//             <div className="max-w-lg">
//               <div className="inline-flex items-center px-4 py-1 rounded-full bg-white bg-opacity-10 backdrop-blur-sm space-x-2 mb-6">
//                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//                 <span className="text-white text-sm font-medium">Global Network</span>
//               </div>
              
//               <h3 className="text-4xl font-bold text-white mb-6">
//                 Worldwide Reach, <br />
//                 <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Local Expertise</span>
//               </h3>
              
//               <p className="text-gray-200 text-lg mb-8 leading-relaxed">
//                 With strategically positioned offices across key global markets, we deliver exceptional service 
//                 with deep local knowledge and international standards.
//               </p>
              
//               <div className="inline-flex bg-white bg-opacity-10 backdrop-blur-sm p-1 rounded-xl">
//                 {locations.map((loc, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveTab(index)}
//                     onMouseEnter={() => setHoverIndex(index)}
//                     onMouseLeave={() => setHoverIndex(null)}
//                     className={`relative px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
//                       activeTab === index
//                         ? "bg-white text-indigo-900 shadow-lg"
//                         : hoverIndex === index
//                         ? "bg-white bg-opacity-5 text-white"
//                         : "text-white hover:bg-white hover:bg-opacity-5"
//                     }`}
//                   >
//                     {loc.name}
//                     {activeTab === index && (
//                       <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             <div className="relative">
//               {/* 3D Globe Effect */}
//               <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//               <div className="w-72 h-72 border-2 border-white border-opacity-20 rounded-full relative">
//                 <div className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-sky-300 border-opacity-30 animate-spin-slow"></div>
//                 <div className="absolute w-full h-full rounded-full border-b-2 border-l-2 border-red-300 border-opacity-30 animate-spin-reverse-slow"></div>
                
//                 {/* Location Points */}
//                 <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
//                 <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
//                 <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                
//                 <div className="absolute inset-0 flex items-center justify-center text-center">
//                   <div>
//                     <div className="text-5xl font-bold text-white">{locations.length}</div>
//                     <div className="text-white text-lg">Global Offices</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Location Details - Premium Card Design */}
//         <div 
//           className="grid grid-cols-12 gap-8 mb-12" 
//           data-aos="fade-up" 
//           data-aos-delay="200"
//         >
//           {/* Left Column - Details */}
//           <div className="col-span-5">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
//               <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 relative">
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-bl-full"></div>
//                 <div className="inline-block px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-2">
//                   {locations[activeTab].name}
//                 </div>
//                 <h4 className="text-2xl font-bold text-white">
//                   Connect With Our Office
//                 </h4>
//               </div>
              
//               <div className="p-8">
//                 <div className="flex items-start mb-8">
//                   <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-3 rounded-lg mr-5 shadow-sm">
//                     <svg
//                       className="w-6 h-6 text-sky-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-gray-800 text-lg mb-2">Office Address</h5>
//                     <p className="text-gray-600 leading-relaxed">{locations[activeTab].address}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start mb-8">
//                   <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-3 rounded-lg mr-5 shadow-sm">
//                     <svg
//                       className="w-6 h-6 text-sky-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-gray-800 text-lg mb-2">Office Hours</h5>
//                     <p className="text-gray-600">{locations[activeTab].hours}</p>
//                     <p className="text-gray-600">{locations[activeTab].timezone}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start mb-10">
//                   <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-3 rounded-lg mr-5 shadow-sm">
//                     <svg
//                       className="w-6 h-6 text-sky-600"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h5 className="font-semibold text-gray-800 text-lg mb-2">Contact</h5>
//                     <p className="text-gray-600">{locations[activeTab].phone}</p>
//                     <p className="text-gray-600">{locations[activeTab].email}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex space-x-4">
                  
                  
//                   <button className="flex-1 bg-white border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-sky-100 flex items-center justify-center">
//                     <svg 
//                       className="w-5 h-5 mr-1" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       {/* <path 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round" 
//                         strokeWidth={2} 
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
//                       /> */}
//                     </svg>
//                     <span>Contact Us</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column - Map with Premium Styling */}
//         <div className="col-span-7">
//   <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-full relative border border-gray-200">
    
//     {/* Simplified Header Bar */}
//     <div className="absolute top-0 left-0 right-0 bg-sky-600 z-10 px-6 py-4 flex items-center gap-3 text-white shadow-md">
//       <div className="bg-red-600 p-2 rounded-md">
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//         </svg>
//       </div>
//       <div className="font-semibold tracking-wide text-base">
//         {locations[activeTab].name}
//       </div>
//     </div>

//     {/* Map Iframe */}
//     <iframe
//       src={getMapEmbedUrl(locations[activeTab].lat, locations[activeTab].lon)}
//       className="w-full h-full min-h-[550px] border-0 pt-16"
//       loading="lazy"
//       title={`Map of ${locations[activeTab].name}`}
//     ></iframe>
              
//               {/* Bottom Controls */}
//               <div className="absolute bottom-6 right-6 flex space-x-3">
//                 <button className="bg-white p-3 rounded-lg shadow-lg text-gray-700 hover:bg-gray-50 transition-all">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                 </button>
//                 <button className="bg-white p-3 rounded-lg shadow-lg text-gray-700 hover:bg-gray-50 transition-all">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                   </svg>
//                 </button>
//                 <button className="bg-white p-3 rounded-lg shadow-lg text-gray-700 hover:bg-gray-50 transition-all">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Global Stats - Premium Style */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
          
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 relative z-10">Our Global Impact</h3>
          
//           <div className="grid grid-cols-3 gap-5 relative z-10">
//             {[
//               { 
//                 value: "10+", 
//                 label: "Years of Excellence", 
//                 icon: (
//                   <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 )
//               },
//               // { 
//               //   value: "25+", 
//               //   label: "Expert Professionals", 
//               //   icon: (
//               //     <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//               //     </svg>
//               //   )
//               // },
//               { 
//                 value: "1000+", 
//                 label: "Satisfied Clients", 
//                 icon: (
//                   <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                   </svg>
//                 )
//               },
//               { 
//                 value: "100%", 
//                 label: "Customer Satisfaction", 
//                 icon: (
//                   <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                   </svg>
//                 )
//               }
//             ].map((stat, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//                 data-aos="fade-up"
//                 data-aos-delay={150 + index * 50}
//               >
//                 <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Testimonial Section */}
        
//         {/* Call To Action */}
//         <div 
//           className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-10 text-center shadow-xl relative overflow-hidden mb-6"
//           data-aos="fade-up"
//         >
//           {/* Decorative elements */}
//           <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>
          
//           <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to Expand Your Global Reach?</h3>
//           <p className="text-white text-opacity-90 max-w-xl mx-auto mb-8 relative z-10">
//             Partner with us to leverage our international presence and local expertise to grow your business across borders.
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-4 relative z-10">
//             {/* <button className="bg-white text-red-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all shadow-lg">
//               Schedule a Consultation
//             </button> */}
//             <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium py-3 px-8 rounded-lg transition-all">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Add this to your CSS or inline styles
// const customStyles = `
//   @keyframes spin-slow {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }

//   @keyframes spin-reverse-slow {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(-360deg); }
//   }

//   .animate-spin-slow {
//     animation: spin-slow 20s linear infinite;
//   }

//   .animate-spin-reverse-slow {
//     animation: spin-reverse-slow 15s linear infinite;
//   }

//   .bg-grid-pattern {
//     background-image: 
//       linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
//       linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
//     background-size: 20px 20px;
//   }
// `;



import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
{
  name: "Dubai - UAE",
  address:
    "Office No.301, Centurion Star Building, Tower A, Port Saeed Dubai, UAE, PO Box 117133",
  lat: 25.251729,
  lon: 55.333953,
  phone: "+971 4 123 4567",
  email: "info@commnetsysconsult.com",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  timezone: "Local Time (GMT+4)"
},

 {
  name: "India",
  address:
    "Office No 7/1, KKSK Building, 1st Floor, Visvanathar Koil St, St. Thomas Mount, Chennai-600016",
  lat: 13.0064,
  lon: 80.1986,
  phone: "+91 7558164222",
  email: "info@commnetsysconsult.in",
  hours: "Monday - Friday: 9:30 AM - 6:30 PM",
  timezone: "Local Time (GMT+5:30)"
},

];

const getMapEmbedUrl = (lat, lon) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.02},${
    lat - 0.01
  },${lon + 0.02},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`;

export default function GlobalPresence() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.children[activeTab];
      if (activeTabElement) {
        const container = tabsRef.current;
        const scrollLeft =
          activeTabElement.offsetLeft -
          container.offsetWidth / 2 +
          activeTabElement.offsetWidth / 2;
        container.scrollLeft = scrollLeft;
      }
    }
  }, [activeTab]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white font-['Lato'] py-4 md:py-16 w-full overflow-hidden">
      {/* Header Section */}
      <div
        className="text-center px-4 mb-6 md:mb-12 max-w-screen-lg mx-auto"
        data-aos="fade-up"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-sky-50 border border-sky-500 text-sky-600 text-sm mb-2">
          Our Global Presence
        </div>
        {/* <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-1">
          A local company with{" "}
          <span className="text-sky-600 md:text-red-600">Global Standards</span>
        </h2> */}
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4">
          We are proud to serve clients worldwide with offices strategically located across continents,
          bringing our expertise closer to you.
        </p>
      </div>

      {/* Hero Section with 3D Globe Effect - Both Mobile & Desktop */}
      <div className="mx-auto px-4 md:px-6 max-w-7xl">
        <div className="relative bg-gradient-to-r from-sky-900 to-indigo-900 rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-12">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-xl md:blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-xl md:blur-3xl opacity-20"></div>
          
          <div className="py-8 md:py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-10 relative">
            <div className="max-w-full md:max-w-lg text-center md:text-left mb-8 md:mb-0">
              <div className="inline-flex items-center px-3 md:px-4 py-1 rounded-full bg-white bg-opacity-10 backdrop-blur-sm space-x-2 mb-4 md:mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-white text-xs md:text-sm font-medium">Global Network</span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Worldwide Reach, <br />
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Local Expertise</span>
              </h3>
              
              <p className="text-gray-200 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                With strategically positioned offices across key global markets, we deliver exceptional service 
                with deep local knowledge and international standards.
              </p>
              
              <div className="inline-flex flex-wrap justify-center md:justify-start bg-white bg-opacity-10 backdrop-blur-sm p-1 rounded-xl">
                {locations.map((loc, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className={`relative px-4 md:px-8 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                      activeTab === index
                        ? "bg-white text-indigo-900 shadow-lg"
                        : hoverIndex === index
                        ? "bg-white bg-opacity-5 text-white"
                        : "text-white hover:bg-white hover:bg-opacity-5"
                    }`}
                  >
                    {loc.name}
                    {activeTab === index && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative hidden sm:block">
              {/* 3D Globe Effect */}
              <div className="w-52 h-52 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-48 h-48 md:w-72 md:h-72 border-2 border-white border-opacity-20 rounded-full relative">
                <div className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-sky-300 border-opacity-30 animate-spin-slow"></div>
                <div className="absolute w-full h-full rounded-full border-b-2 border-l-2 border-red-300 border-opacity-30 animate-spin-reverse-slow"></div>
                
                {/* Location Points */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <div className="text-3xl md:text-5xl font-bold text-white">{locations.length}</div>
                    <div className="text-white text-base md:text-lg">Global Offices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Details - Premium Card Design for Both Mobile & Desktop */}
        <div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {/* Left Column - Details */}
          <div className="col-span-1 md:col-span-5">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden h-full">
              <div className="bg-gradient-to-r from-red-500 to-red-500 px-6 md:px-8 py-4 md:py-6 relative">
                <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-white opacity-10 rounded-bl-full"></div>
                <div className="inline-block px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-xs md:text-sm font-medium mb-1 md:mb-2">
                  {locations[activeTab].name}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  Let’s Connect
                </h4>
              </div>
              
              <div className="p-5 md:p-8">
                <div className="flex items-start mb-6 md:mb-8">
                  <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-2 md:p-3 rounded-lg mr-4 md:mr-5 shadow-sm">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-sky-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 text-base md:text-lg mb-1 md:mb-2">Office Address</h5>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{locations[activeTab].address}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6 md:mb-8">
                  <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-2 md:p-3 rounded-lg mr-4 md:mr-5 shadow-sm">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 text-base md:text-lg mb-1 md:mb-2">Office Hours</h5>
                    <p className="text-gray-600 text-sm md:text-base">{locations[activeTab].hours}</p>
                    <p className="text-gray-600 text-sm md:text-base">{locations[activeTab].timezone}</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6 md:mb-10">
                  <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-2 md:p-3 rounded-lg mr-4 md:mr-5 shadow-sm">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-sky-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 text-base md:text-lg mb-1 md:mb-2">Contact</h5>
                    <p className="text-gray-600 text-sm md:text-base">{locations[activeTab].phone}</p>
                    <p className="text-gray-600 text-sm md:text-base">{locations[activeTab].email}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3 md:space-x-4">
                  {/* <button className="flex-1 bg-white border-2 border-sky-600 text-sky-600 hover:bg-sky-50 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all shadow-md md:shadow-lg shadow-sky-100 flex items-center justify-center text-sm md:text-base">
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 mr-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <a
                    href="/contactus">
                      Contact Us</a>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Map with Premium Styling */}
          <div className="col-span-1 md:col-span-7">
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl h-full relative border border-gray-200">
              
              {/* Simplified Header Bar */}
              <div className="absolute top-0 left-0 right-0 bg-sky-600 z-10 px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3 text-white shadow-md">
                <div className="bg-red-600 p-1.5 md:p-2 rounded-md">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-semibold tracking-wide text-sm md:text-base">
                  {locations[activeTab].name}
                </div>
              </div>

              {/* Map Iframe */}
              <iframe
                src={getMapEmbedUrl(locations[activeTab].lat, locations[activeTab].lon)}
                className="w-full h-full min-h-[300px] md:min-h-[550px] border-0 pt-12 md:pt-16"
                loading="lazy"
                title={`Map of ${locations[activeTab].name}`}
              ></iframe>
              
              {/* Bottom Controls */}
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex space-x-2 md:space-x-3">
                <button className="bg-white p-2 md:p-3 rounded-lg shadow-md md:shadow-lg text-gray-700 hover:bg-gray-50 transition-all">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="bg-white p-2 md:p-3 rounded-lg shadow-md md:shadow-lg text-gray-700 hover:bg-gray-50 transition-all">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button className="bg-white p-2 md:p-3 rounded-lg shadow-md md:shadow-lg text-gray-700 hover:bg-gray-50 transition-all">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Global Stats - Premium Style
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 mb-8 md:mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-70"></div>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 relative z-10">Our Global Impact</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 relative z-10">
            {[
              { 
                value: "10+", 
                label: "Years of Excellence", 
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                value: "1000+", 
                label: "Satisfied Clients", 
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                )
              },
              { 
                value: "100%", 
                label: "Customer Satisfaction", 
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={150 + index * 50}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
         */}
        {/* Call To Action */}
        <div 
          className="bg-gradient-to-r from-red-500 to-red-500 rounded-xl md:rounded-2xl p-6 md:p-10 text-center shadow-lg md:shadow-xl relative overflow-hidden mb-6"
          data-aos="fade-up"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 md:w-40 h-24 md:h-40 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>
          
          <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 relative z-10">Ready to Expand Your Global Reach?</h3>
          <p className="text-white text-opacity-90 text-sm md:text-base max-w-xl mx-auto mb-6 md:mb-8 relative z-10">
            Partner with us to leverage our international presence and local expertise to grow your business across borders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
            <a
  href="/contactus"
  className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all text-sm md:text-base"
>
  Contact With Us
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your CSS or inline styles
const customStyles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes spin-reverse-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .animate-spin-reverse-slow {
    animation: spin-reverse-slow 15s linear infinite;
  }

  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;