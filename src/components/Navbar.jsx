// // import { useState, useEffect } from "react";
// // import {
// //   User,
// //   Server,
// //   ShieldCheck,
// //   ShieldHalf,
// //   Code2,
// //   MonitorSmartphone,
// //   Lock,
// //   Globe2,
// //   BatteryCharging,
// //   Laptop,
// //   LayoutTemplate,
// //   Database,
// //   Menu,
// //   Phone,
// //   X,
// //   ChevronDown,
// //   FolderKanban,
// //   Users,
// //   Plug,
// //   Bolt,
// //   Network,
// //   Building,
// //   Package,
// //   Globe

// // } from "lucide-react";
// // import { FaFolderOpen } from "react-icons/fa";
// // import { Zap } from "lucide-react";
// // import { Link, NavLink } from "react-router-dom";

// // export default function Navbar() {
// //   const [activeDropdown, setActiveDropdown] = useState(null); // 'services', 'about', or null
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
// //   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// // const [mobileVerticlesOpen, setMobileVerticlesOpen] = useState(false);
// //   // Close all dropdowns when scrolling
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //       if (activeDropdown) {
// //         setActiveDropdown(null);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [activeDropdown]);

// //   // Handle mouse leave for the entire navbar area
// //   const handleMouseLeaveNav = () => {
// //     setActiveDropdown(null);
// //   };

// //   const services = [

// //     {
// //   icon: <Server />,
// //   label: "Data Center",
// //   link: "/Datacenter",
// // },

// //     {
// //       icon: <Globe />,
// //       label: "Enterprise Systems Group",
// //       link: "/enterprise-systems-group",
// //     },

// //      {
// //       icon: <Database />,
// //       label: "Infrastructure Systems Group",
// //       link: "/infrastructuresystemgroup",
// //     },
// //      {
// //       icon: <Lock />,
// //       label: "Security Systems",
// //       link: "/securitysystems",
// //     },
// //      {
// //       icon: <MonitorSmartphone />,
// //       label: "AV Solutions",
// //       link: "/avsolutions",
// //     },

// //     {
// //       icon: <Zap />,
// //       label: "Power Solutions",
// //       link: "/powersolutions"
// //     },

// //   ];

// //   const aboutItems = [
// //     {
// //       icon: <Building />,
// //       label: "Who We Are",
// //       link: "/aboutus",
// //     },
// //     {
// //       icon: <Users />,
// //       label: "Our Leadership",
// //       link: "/why-choose-us",
// //     },
// //   ];

// //   const verticles = [
// //  { icon: <Package />, label: "Chainex", link: "/Verticles2" },
// //   { icon: <Plug />, label: "Power Solutions", link: "/Verticles3" },
// //       {
// //       icon: <ShieldHalf />,
// //       label: "Cyber Security Services",
// //       link: "/cybersecurityservices",
// //     },
// //    {
// //       icon: <Globe2 />,
// //       label: "IoT Services",
// //       link: "/iotservices",
// //     },
// //     { icon: <Bolt />, label: "Lightning Solutions", link: "/Verticles" },

// //     {
// //       icon: <Laptop />,
// //       label: "Software Development",
// //       link: "/softwaredevelopment",
// //     },

// // {
// //       icon: <Code2 />,
// //       label: "Professional IT Services",
// //       link: "/professionalitservices",
// //     },

// //   // { icon: <LayoutTemplate />, label: "Core Services", link: "/Verticles4" },

// //     {
// //       icon: <ShieldCheck />,
// //       label: "Information Security",
// //       link: "/informationsecurity",
// //     },
// //      {
// //       icon: <LayoutTemplate />,
// //       label: "Website Development",
// //       link: "/websitedevelopment",
// //     },

// // ];

// //   return (
// //     <div className="relative font-['Lato']" onMouseLeave={handleMouseLeaveNav}>
// //       {/* Navbar */}
// //       <nav
// //         data-aos="fade-down"
// //         className={`fixed top-0 left-0 w-full z-50 px-6 py-4  flex justify-between items-center transition-all duration-300 animate-fadeDown ${
// //           scrolled
// //             ? "bg-white shadow-md text-black"
// //             : "bg-transparent text-white"
// //         }`}
// //       >
// //         <a href="/">
// //           <img
// //             src="/assets/logo-newone.png"
// //             alt="COMMNET Logo"
// //             className="h-14 w-auto"
// //           />
// //         </a>

// //         {/* Desktop Menu */}
// //         <ul className="hidden lg:flex space-x-16 text-lg font-medium text-inherit">
// //           <li>
// //             <a href="/" className="hover:text-red-500 ">Home</a>
// //           </li>
// //           <li
// //             onMouseEnter={() => setActiveDropdown('about')}
// //             className="relative cursor-pointer hover:text-red-500  "
// //           >
// //             <span>About Us</span>
// //           </li>

// //           <li
// //             onMouseEnter={() => setActiveDropdown('services')}
// //             className="relative cursor-pointer hover:text-red-500 "
// //           >
// //             <span>Services</span>
// //           </li>
// //           <li
// //   onMouseEnter={() => setActiveDropdown('verticles')}
// //   className="relative cursor-pointer hover:text-red-500 "
// // >
// //   <span>Solutions</span>
// // </li>

// //           <li>
// //             <a href="/ourprojects1 " className="hover:text-red-500 "  onClick={() => setActiveDropdown(null)}>
// //               Projects
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/contactus" className="hover:text-red-500 " onClick={() => setActiveDropdown(null)}>
// //               Contact Us
// //             </a>
// //           </li>
// //         </ul>

// //         {/* Desktop Buttons */}
// //         <div className="hidden lg:flex items-center space-x-4">
// //           {/* Buttons removed as per original */}
// //         </div>

// //         {/* Mobile Icons */}
// //         <div className="lg:hidden flex space-x-2">
// //           <div
// //             onClick={() => setMobileMenuOpen(true)}
// //             className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
// //               scrolled ? "border-black text-black" : "border-white text-white"
// //             }`}
// //           >
// //             <Menu className="w-5 h-5" />
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Desktop Services Dropdown - Now white background with black text */}
// //       {activeDropdown === 'services' && (
// //         <div
// //           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-white text-black grid-cols-12 gap-6 shadow-lg "
// //           data-aos="fade-down"
// //         >
// //           <div className="col-span-3 border-r pr-6">
// //             {/* Left column content removed as per original */}
// //           </div>
// //           <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
// //             {services.map((service, index) => (
// //      <NavLink
// //   key={index}
// //   to={service.link}
// //   onClick={() => setActiveDropdown(null)}
// //   className="flex items-center space-x-3"
// // >
// //   <div className="text-black hover:text-red-500 transition-colors duration-200">
// //     {service.icon}
// //   </div>
// //   <div className="text-sm font-medium text-black hover:text-red-600 transition-colors duration-200">
// //     {service.label}
// //   </div>
// // </NavLink>

// //             ))}
// //           </div>

// //         </div>
// //       )}

// //       {activeDropdown === 'verticles' && (
// //   <div
// //     className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-white text-black grid-cols-12 gap-6 shadow-lg"
// //     data-aos="fade-down"
// //   >
// //     <div className="col-span-3 border-r pr-6">
// //       {/* Left column content removed as per original */}
// //     </div>
// //     <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
// //       {verticles.map((item, index) => (
// //         <NavLink
// //   key={index}
// //   to={item.link}
// //   onClick={() => setActiveDropdown(null)}
// //   className="flex items-center space-x-3 transition-colors duration-200"
// // >
// //   <div className="text-black hover:text-red-500 transition-colors duration-200">
// //     {item.icon}
// //   </div>
// //   <div className="text-sm font-medium text-black hover:text-red-600 transition-colors duration-200">
// //     {item.label}
// //   </div>
// // </NavLink>

// //       ))}
// //     </div>
// //   </div>
// // )}

// //       {/* Desktop About Us Dropdown - Now white background with black text */}
// //       {activeDropdown === 'about' && (
// //         <div
// //           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-transparent text-black grid-cols-12 gap-6 "
// //           data-aos="fade-down"
// //         >
// //           <div className="col-span-4 pr-6">
// //             {/* Left column content removed as per original */}
// //           </div>
// //           <div className="col-span-2 bg-white px-6 p-6">
// //             <div className="flex flex-col items-center justify-center gap-6 h-full">
// //               {aboutItems.map((item, index) => (
// //                 <NavLink
// //                   key={index}
// //                   to={item.link}
// //                   onClick={() => setActiveDropdown(null)}
// //                   className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-200"
// //                 >
// //                   <div className="w-10 h-10 rounded-full bg-gray-100 text-black hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-200">
// //                     {item.icon}
// //                   </div>
// //                   <div>
// //                     <div className="text-sm font-medium">{item.label}</div>
// //                   </div>
// //                 </NavLink>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="col-span-3">
// //             {/* Right column content removed as per original */}
// //           </div>
// //         </div>
// //       )}

// //       {/* Mobile Menu */}
// //       {mobileMenuOpen && (
// //         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
// //           <div className="flex justify-between items-center mb-6">
// //             <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
// //             <button
// //               onClick={() => setMobileMenuOpen(false)}
// //               className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
// //             >
// //               <X className="w-5 h-5" />
// //             </button>
// //           </div>

// //           <ul className="space-y-6 text-lg font-semibold">
// //             <li>
// //               <a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a>
// //             </li>
// //             <li
// //               className="cursor-pointer"
// //               onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
// //             >
// //               <div className="flex items-center justify-between">
// //                 <span>About Us</span>
// //                 <ChevronDown
// //                   className={`w-5 h-5 transition-transform ${
// //                     mobileAboutOpen ? "rotate-180" : ""
// //                   }`}
// //                 />
// //               </div>
// //             </li>
// //             {mobileAboutOpen && (
// //               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
// //                 {aboutItems.map((item, index) => (
// //                   <li key={index}>
// //                     <a
// //                       href={item.link}
// //                       className="flex items-center space-x-2"
// //                       onClick={() => setMobileMenuOpen(false)}
// //                     >
// //                       <span>{item.icon}</span>
// //                       <span>{item.label}</span>
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //             <li
// //               className="cursor-pointer"
// //               onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
// //             >
// //               <div className="flex items-center justify-between">
// //                 <span>Services</span>
// //                 <ChevronDown
// //                   className={`w-5 h-5 transition-transform ${
// //                     mobileServicesOpen ? "rotate-180" : ""
// //                   }`}
// //                 />
// //               </div>
// //             </li>
// //             {mobileServicesOpen && (
// //               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
// //                 {services.map((service, index) => (
// //                   <li key={index}>
// //                     <a
// //                       href={service.link}
// //                       className="flex items-center space-x-2"
// //                       onClick={() => setMobileMenuOpen(false)}
// //                     >
// //                       <span>{service.icon}</span>
// //                       <span>{service.label}</span>
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //             <li
// //   className="cursor-pointer"
// //   onClick={() => setMobileVerticlesOpen(!mobileVerticlesOpen)}
// // >
// //   <div className="flex items-center justify-between">
// //     <span>Solutions</span>
// //     <ChevronDown className={`w-5 h-5 transition-transform ${mobileVerticlesOpen ? "rotate-180" : ""}`} />
// //   </div>
// // </li>

// // {mobileVerticlesOpen && (
// //   <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
// //     {verticles.map((item, index) => (
// //       <li key={index}>
// //         <a
// //           href={item.link}
// //           className="flex items-center space-x-2"
// //           onClick={() => setMobileMenuOpen(false)}
// //         >
// //           <span>{item.icon}</span>
// //           <span>{item.label}</span>
// //         </a>
// //       </li>
// //     ))}
// //   </ul>
// // )}

// //             <li>
// //               <a href="/ourprojects1" onClick={() => setMobileMenuOpen(false)}>
// //                 Projects
// //               </a>
// //             </li>
// //             <li>
// //               <a href="/contactus" onClick={() => setMobileMenuOpen(false)}>
// //                 Contact Us
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       )}

// //       {/* Floating WhatsApp Button */}
// //       <div className="fixed bottom-16 right-6 z-50 text-center">
// //         <p className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'} mr-2`}>
// //           <span>Need Help?</span>
// //         </p>
// //         <a
// //           href="https://wa.me/+971526965307?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="block mt-1"
// //         >
// //           <img
// //             src="/assets/watsapp-1.png"
// //             alt="WhatsApp"
// //             className="w-12 h-12"
// //           />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// import {
//   User,
//   Server,
//   ShieldCheck,
//   ShieldHalf,
//   Code2,
//   MonitorSmartphone,
//   Lock,
//   Globe2,
//   BatteryCharging,
//   Laptop,
//   LayoutTemplate,
//   Database,
//   Menu,
//   Phone,
//   X,
//   ChevronDown,
//   FolderKanban,
//   Users,
//   Plug,
//   Bolt,
//   Network,
//   Building,
//   Package,
//   Globe,
// } from "lucide-react";
// import { FaFolderOpen } from "react-icons/fa";
// import { Zap } from "lucide-react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState(null); // 'services', 'about', or null
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileVerticlesOpen, setMobileVerticlesOpen] = useState(false);

//   // Close all dropdowns when scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//       if (activeDropdown) {
//         setActiveDropdown(null);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeDropdown]);

//   const services = [
//     {
//       icon: <Server />,
//       label: "Data Center",
//       link: "/Datacenter",
//     },
//     {
//       icon: <Globe />,
//       label: "Enterprise Systems Group",
//       link: "/enterprise-systems-group",
//     },
//     {
//       icon: <Database />,
//       label: "Infrastructure Systems Group",
//       link: "/infrastructuresystemgroup",
//     },
//     {
//       icon: <Lock />,
//       label: "Security Systems",
//       link: "/securitysystems",
//     },
//     {
//       icon: <MonitorSmartphone />,
//       label: "AV Solutions",
//       link: "/avsolutions",
//     },
//     {
//       icon: <Zap />,
//       label: "Power Solutions",
//       link: "/powersolutions",
//     },
//   ];

//   const aboutItems = [
//     {
//       icon: <Building />,
//       label: "Who We Are",
//       link: "/aboutus",
//     },
//     {
//       icon: <Users />,
//       label: "Our Leadership",
//       link: "/why-choose-us",
//     },
//   ];

//   const verticles = [
//     { icon: <Package />, label: "Chainex", link: "/Verticles2" },
//     { icon: <Plug />, label: "Power Solutions", link: "/Verticles3" },
//     {
//       icon: <ShieldHalf />,
//       label: "Cyber Security Services",
//       link: "/cybersecurityservices",
//     },
//     {
//       icon: <Globe2 />,
//       label: "IoT Services",
//       link: "/iotservices",
//     },
//     { icon: <Bolt />, label: "Lightning Solutions", link: "/Verticles" },
//     {
//       icon: <Laptop />,
//       label: "Software Development",
//       link: "/softwaredevelopment",
//     },
//     {
//       icon: <Code2 />,
//       label: "Professional IT Services",
//       link: "/professionalitservices",
//     },
//     {
//       icon: <ShieldCheck />,
//       label: "Information Security",
//       link: "/informationsecurity",
//     },
//     {
//       icon: <LayoutTemplate />,
//       label: "Website Development",
//       link: "/websitedevelopment",
//     },
//   ];

//   return (
//     <div className="relative font-['Lato']">
//       {/* Navbar */}
//       <nav
//         data-aos="fade-down"
//         className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
//           scrolled
//             ? "bg-white shadow-md text-black"
//             : "bg-transparent text-white"
//         }`}
//       >
//         <a href="/">
//           <img
//             src="/assets/logo-newone.png"
//             alt="COMMNET Logo"
//             className="h-14 w-auto"
//           />
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-16 text-lg font-medium text-inherit">
//           <li onMouseEnter={() => setActiveDropdown(null)}>
//             <a href="/" className="hover:text-red-500">
//               Home
//             </a>
//           </li>

//           <li
//             onMouseEnter={() => setActiveDropdown("about")}
//             onMouseLeave={() => {
//               // Only close if not moving to dropdown
//               setTimeout(() => {
//                 if (activeDropdown === "about") {
//                   const aboutDropdown = document.querySelector(
//                     '[data-dropdown="about"]'
//                   );
//                   if (aboutDropdown && !aboutDropdown.matches(":hover")) {
//                     setActiveDropdown(null);
//                   }
//                 }
//               }, 100);
//             }}
//             className="relative cursor-pointer hover:text-red-500"
//           >
//             <span>About Us</span>
//           </li>

//           <li
//             onMouseEnter={() => setActiveDropdown("services")}
//             onMouseLeave={() => {
//               // Only close if not moving to dropdown
//               setTimeout(() => {
//                 if (activeDropdown === "services") {
//                   const servicesDropdown = document.querySelector(
//                     '[data-dropdown="services"]'
//                   );
//                   if (servicesDropdown && !servicesDropdown.matches(":hover")) {
//                     setActiveDropdown(null);
//                   }
//                 }
//               }, 100);
//             }}
//             className="relative cursor-pointer hover:text-red-500"
//           >
//             <span>Services</span>
//           </li>

//           <li
//             onMouseEnter={() => setActiveDropdown("verticles")}
//             onMouseLeave={() => {
//               // Only close if not moving to dropdown
//               setTimeout(() => {
//                 if (activeDropdown === "verticles") {
//                   const verticlesDropdown = document.querySelector(
//                     '[data-dropdown="verticles"]'
//                   );
//                   if (
//                     verticlesDropdown &&
//                     !verticlesDropdown.matches(":hover")
//                   ) {
//                     setActiveDropdown(null);
//                   }
//                 }
//               }, 100);
//             }}
//             className="relative cursor-pointer hover:text-red-500"
//           >
//             <span>Solutions</span>
//           </li>

//           <li onMouseEnter={() => setActiveDropdown(null)}>
//             <a href="/ourprojects1" className="hover:text-red-500">
//               Projects
//             </a>
//           </li>

//           <li onMouseEnter={() => setActiveDropdown(null)}>
//             <a href="/contactus" className="hover:text-red-500">
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center space-x-4">
//           {/* Buttons removed as per original */}
//         </div>

//         {/* Mobile Icons */}
//         <div className="lg:hidden flex space-x-2">
//           <div
//             onClick={() => setMobileMenuOpen(true)}
//             className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//           >
//             <Menu className="w-5 h-5" />
//           </div>
//         </div>
//       </nav>

//       {/* Desktop Services Dropdown */}
//       {activeDropdown === "services" && (
//         <div
//           data-dropdown="services"
//           onMouseEnter={() => setActiveDropdown("services")}
//           onMouseLeave={() => setActiveDropdown(null)}
//           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-white text-black grid-cols-12 gap-6 shadow-lg"
//           data-aos="fade-down"
//         >
//           <div className="col-span-3 border-r pr-6">
//             {/* Left column content removed as per original */}
//           </div>
//           <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
//             {services.map((service, index) => (
//               <NavLink
//                 key={index}
//                 to={service.link}
//                 onClick={() => setActiveDropdown(null)}
//                 className="flex items-center space-x-3"
//               >
//                 <div className="text-black hover:text-red-500 transition-colors duration-200">
//                   {service.icon}
//                 </div>
//                 <div className="text-sm font-medium text-black hover:text-red-600 transition-colors duration-200">
//                   {service.label}
//                 </div>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Desktop Verticles Dropdown */}
//       {activeDropdown === "verticles" && (
//         <div
//           data-dropdown="verticles"
//           onMouseEnter={() => setActiveDropdown("verticles")}
//           onMouseLeave={() => setActiveDropdown(null)}
//           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-white text-black grid-cols-12 gap-6 shadow-lg"
//           data-aos="fade-down"
//         >
//           <div className="col-span-3 border-r pr-6">
//             {/* Left column content removed as per original */}
//           </div>
//           <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
//             {verticles.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={item.link}
//                 onClick={() => setActiveDropdown(null)}
//                 className="flex items-center space-x-3 transition-colors duration-200"
//               >
//                 <div className="text-black hover:text-red-500 transition-colors duration-200">
//                   {item.icon}
//                 </div>
//                 <div className="text-sm font-medium text-black hover:text-red-600 transition-colors duration-200">
//                   {item.label}
//                 </div>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Desktop About Us Dropdown */}
//       {activeDropdown === "about" && (
//         <div
//           data-dropdown="about"
//           onMouseEnter={() => setActiveDropdown("about")}
//           onMouseLeave={() => setActiveDropdown(null)}
//           className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-transparent text-black grid-cols-12 gap-6"
//           data-aos="fade-down"
//         >
//           <div className="col-span-4 pr-6">
//             {/* Left column content removed as per original */}
//           </div>
//           <div className="col-span-2 bg-white px-6 p-6">
//             <div className="flex flex-col items-center justify-center gap-6 h-full">
//               {aboutItems.map((item, index) => (
//                 <NavLink
//                   key={index}
//                   to={item.link}
//                   onClick={() => setActiveDropdown(null)}
//                   className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-200"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-gray-100 text-black hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-200">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <div className="text-sm font-medium">{item.label}</div>
//                   </div>
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//           <div className="col-span-3">
//             {/* Right column content removed as per original */}
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           <ul className="space-y-6 text-lg font-semibold">
//             <li>
//               <a href="/" onClick={() => setMobileMenuOpen(false)}>
//                 Home
//               </a>
//             </li>
//             <li
//               className="cursor-pointer"
//               onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
//             >
//               <div className="flex items-center justify-between">
//                 <span>About Us</span>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     mobileAboutOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>
//             </li>
//             {mobileAboutOpen && (
//               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
//                 {aboutItems.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={item.link}
//                       className="flex items-center space-x-2"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <span>{item.icon}</span>
//                       <span>{item.label}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <li
//               className="cursor-pointer"
//               onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//             >
//               <div className="flex items-center justify-between">
//                 <span>Services</span>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     mobileServicesOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>
//             </li>
//             {mobileServicesOpen && (
//               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
//                 {services.map((service, index) => (
//                   <li key={index}>
//                     <a
//                       href={service.link}
//                       className="flex items-center space-x-2"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <span>{service.icon}</span>
//                       <span>{service.label}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <li
//               className="cursor-pointer"
//               onClick={() => setMobileVerticlesOpen(!mobileVerticlesOpen)}
//             >
//               <div className="flex items-center justify-between">
//                 <span>Solutions</span>
//                 <ChevronDown
//                   className={`w-5 h-5 transition-transform ${
//                     mobileVerticlesOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </div>
//             </li>

//             {mobileVerticlesOpen && (
//               <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
//                 {verticles.map((item, index) => (
//                   <li key={index}>
//                     <a
//                       href={item.link}
//                       className="flex items-center space-x-2"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <span>{item.icon}</span>
//                       <span>{item.label}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}

//             <li>
//               <a href="/ourprojects1" onClick={() => setMobileMenuOpen(false)}>
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="/contactus" onClick={() => setMobileMenuOpen(false)}>
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-16 right-6 z-50 text-center">
//         <p
//           className={`text-sm font-semibold transition-colors duration-300 ${
//             scrolled ? "text-black" : "text-white"
//           } mr-2`}
//         >
//           <span>Need Help?</span>
//         </p>
//         <a
//           href="https://wa.me/+971526965307?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block mt-1"
//         >
//           <img
//             src="/assets/watsapp-1.png"
//             alt="WhatsApp"
//             className="w-12 h-12"
//           />
//         </a>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import {
  User,
  Server,
  ShieldCheck,
  ShieldHalf,
  Code2,
  MonitorSmartphone,
  Lock,
  Globe2,
  BatteryCharging,
  Laptop,
  LayoutTemplate,
  Database,
  Menu,
  Phone,
  X,
  ChevronDown,
  FolderKanban,
  Users,
  Plug,
  Bolt,
  Network,
  Building,
  Package,
  Globe,
} from "lucide-react";
import { FaFolderOpen } from "react-icons/fa";
import { Zap } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services', 'about', or null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileVerticlesOpen, setMobileVerticlesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Close all dropdowns when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDropdown]);

  // Helper functions for dropdown management
  const handleDropdownEnter = (dropdownType) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdownType);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay to allow moving to dropdown
    setHoverTimeout(timeout);
  };

  const handleDropdownContentEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownContentLeave = () => {
    setActiveDropdown(null);
  };

  const services = [
    {
      icon: <Server />,
      label: "Data Center",
      link: "/Datacenter",
    },
    {
      icon: <Globe />,
      label: "Enterprise Systems Group",
      link: "/enterprise-systems-group",
    },
    {
      icon: <Database />,
      label: "Infrastructure Systems Group",
      link: "/infrastructuresystemgroup",
    },
    {
      icon: <Lock />,
      label: "Security Systems",
      link: "/securitysystems",
    },
    {
      icon: <MonitorSmartphone />,
      label: "AV Solutions",
      link: "/avsolutions",
    },
    {
      icon: <Zap />,
      label: "Power Solutions",
      link: "/powersolutions",
    },
  ];

  const aboutItems = [
    {
      icon: <Building />,
      label: "Who We Are",
      link: "/aboutus",
    },
    {
      icon: <Users />,
      label: "Our Leadership",
      link: "/why-choose-us",
    },
  ];

  const verticles = [
    { icon: <Package />, label: "Chainex", link: "/Verticles2" },
    { icon: <Plug />, label: "Power Solutions", link: "/Verticles3" },
    {
      icon: <ShieldHalf />,
      label: "Cyber Security Services",
      link: "/cybersecurityservices",
    },
    {
      icon: <Globe2 />,
      label: "IoT Services",
      link: "/iotservices",
    },
    { icon: <Bolt />, label: "Lightning Solutions", link: "/Verticles" },
    {
      icon: <Laptop />,
      label: "Software Development",
      link: "/softwaredevelopment",
    },
    {
      icon: <Code2 />,
      label: "Professional IT Services",
      link: "/professionalitservices",
    },
    {
      icon: <ShieldCheck />,
      label: "Information Security",
      link: "/informationsecurity",
    },
    {
      icon: <LayoutTemplate />,
      label: "Website Development",
      link: "/websitedevelopment",
    },
  ];

  return (
    <div className="relative font-['Lato']">
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
          scrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        <a href="/">
          <img
            src="/assets/logo-newone.png"
            alt="COMMNET Logo"
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-16 text-lg font-medium text-inherit">
          <li onMouseEnter={() => setActiveDropdown(null)}>
            <a href="/" className="hover:text-red-500">
              Home
            </a>
          </li>

          <li
            onMouseEnter={() => handleDropdownEnter("about")}
            onMouseLeave={handleDropdownLeave}
            className="relative cursor-pointer hover:text-red-500"
          >
            <span>About Us</span>
          </li>

          <li
            onMouseEnter={() => handleDropdownEnter("services")}
            onMouseLeave={handleDropdownLeave}
            className="relative cursor-pointer hover:text-red-500"
          >
            <span>Services</span>
          </li>

          <li
            onMouseEnter={() => handleDropdownEnter("verticles")}
            onMouseLeave={handleDropdownLeave}
            className="relative cursor-pointer hover:text-red-500"
          >
            <span>Solutions</span>
          </li>

          <li onMouseEnter={() => setActiveDropdown(null)}>
            <a href="/ourprojects1" className="hover:text-red-500">
              Projects
            </a>
          </li>

          <li onMouseEnter={() => setActiveDropdown(null)}>
            <a href="/contactus" className="hover:text-red-500">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Buttons removed as per original */}
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex space-x-2">
          <div
            onClick={() => setMobileMenuOpen(true)}
            className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Desktop Services Dropdown */}
      {activeDropdown === "services" && (
        <div
          data-dropdown="services"
          onMouseEnter={handleDropdownContentEnter}
          onMouseLeave={handleDropdownContentLeave}
          className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-white text-black grid-cols-12 gap-6 shadow-lg"
          data-aos="fade-down"
        >
          <div className="col-span-3 border-r pr-6">
            {/* Left column content removed as per original */}
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
            {services.map((service, index) => (
              <NavLink
                key={index}
                to={service.link}
                onClick={() => setActiveDropdown(null)}
                className="flex items-center space-x-3"
              >
                <div className="text-black hover:text-red-500 transition-colors duration-200">
                  {service.icon}
                </div>
                <div className="text-sm font-medium text-black hover:text-red-600 transition-colors duration-200">
                  {service.label}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Verticles Dropdown */}
      {activeDropdown === "verticles" && (
        <div
          data-dropdown="verticles"
          onMouseEnter={handleDropdownContentEnter}
          onMouseLeave={handleDropdownContentLeave}
          className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-white text-black grid-cols-12 gap-6 shadow-lg"
          data-aos="fade-down"
        >
          <div className="col-span-3 border-r pr-6">
            {/* Left column content removed as per original */}
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
            {verticles.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                onClick={() => setActiveDropdown(null)}
                className="flex items-center space-x-3 transition-colors duration-200"
              >
                <div className="text-black hover:text-red-500 transition-colors duration-200">
                  {item.icon}
                </div>
                <div className="text-sm font-medium text-black hover:text-red-600 transition-colors duration-200">
                  {item.label}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Desktop About Us Dropdown */}
      {activeDropdown === "about" && (
        <div
          data-dropdown="about"
          onMouseEnter={handleDropdownContentEnter}
          onMouseLeave={handleDropdownContentLeave}
          className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-transparent text-black grid-cols-12 gap-6"
          data-aos="fade-down"
        >
          <div className="col-span-4 pr-6">
            {/* Left column content removed as per original */}
          </div>
          <div className="col-span-2 bg-white px-6 p-6">
            <div className="flex flex-col items-center justify-center gap-6 h-full">
              {aboutItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center space-x-3 hover:text-red-500 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 text-black hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            {/* Right column content removed as per original */}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="space-y-6 text-lg font-semibold">
            <li>
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              <div className="flex items-center justify-between">
                <span>About Us</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </li>
            {mobileAboutOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <li
              className="cursor-pointer"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <div className="flex items-center justify-between">
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </li>
            {mobileServicesOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{service.icon}</span>
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <li
              className="cursor-pointer"
              onClick={() => setMobileVerticlesOpen(!mobileVerticlesOpen)}
            >
              <div className="flex items-center justify-between">
                <span>Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileVerticlesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </li>

            {mobileVerticlesOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
                {verticles.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <li>
              <a href="/ourprojects1" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="/contactus" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-16 right-6 z-50 text-center">
        <p
          className={`text-sm font-semibold transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          } mr-2`}
        >
          <span>Need Help?</span>
        </p>
        <a
          href="https://wa.me/+971526965307?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-1"
        >
          <img
            src="/assets/watsapp-1.png"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
}
