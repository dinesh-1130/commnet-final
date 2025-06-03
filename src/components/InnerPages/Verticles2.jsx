// import React from "react";
// import { CheckCircle, LayoutTemplate, Workflow, Star, Settings, Users } from "lucide-react";

// export default function DevinkShowcasePage() {
//   const processLeft = [
//     "Our Intelligent B2B Supply Chain Platform is a strategic extension of business.",
//     "Seamless orchestration from procurement to fulfillment.",
//     "Optimizes vendor networks and responds to volatile demand.",
//     "Catalyst for secure, integrated, and insight-driven supply chain transformation.",
//     "SMB-scalable and built to adapt across sectors.",
//     "KYC-Onboarded Supplier & Vendor Network.",
//     "Enterprise-Grade Security with MFA and encryption."
//   ];

//   const processRight = [
//     "Live Dashboards & Insights with real-time visibility.",
//     "Predictive & Intuitive AI Assistant for proactive planning.",
//     "Seamless Integrations via low-code APIs.",
//     "Break silos across procurement, logistics, finance, and service.",
//     "Empower decision-making from one command center.",
//     "Redefine conventional supply chain dynamics.",
//     "Adaptable ecosystems that drive continuous improvement."
//   ];

//   const chooseUs = [
//     { icon: <Workflow size={28} />, text: "Built to adapt across industries—retail, manufacturing, services." },
//     { icon: <Settings size={28} />, text: "Frictionless supplier onboarding with built-in checks." },
//     { icon: <Users size={28} />, text: "Multi-Factor Authentication and secure access." },
//     { icon: <LayoutTemplate size={28} />, text: "AI-powered assistant for alerts and smart decisions." },
//     { icon: <Star size={28} />, text: "Ready integrations with ERPs and legacy systems." }
//   ];

//   const verticals = [
//     "Commercial", "Residential", "Shopping Malls", "Hospitality", "Sports Facilities",
//     "Facade", "Healthcare Facilities", "Schools & Educational Facilities", "Cultural & Heritage Sites"
//   ];

//   return (
//     <div className="bg-white font-sans text-gray-800">
//        <header className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center" style={{ backgroundImage: "url(/assets/sample-5.jpg)" }}>
//   <div className="bg-black/40 absolute inset-0 z-0"></div>
//   <div className="relative z-10 max-w-4xl mx-auto">
//     <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">Chainex</h1>
//     {/* <p className="mt-8 text-base sm:text-lg md:text-xl font-light">Engineering Elegance with Power</p> */}
//   </div>
// </header>

//       {/* About Us */}
//       <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6">About Us</h2>
//         <img src="/assets/sample-1.jpg" className="rounded-xl w-full mb-8 shadow-xl" alt="About" />
//         <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
//           Chainex, a flagship platform of Thinkinfinity Inc., is a global boutique product engineering firm at the forefront of deep-tech innovation and embedded product architecture. In strategic partnership with Commnet System Consulting, it blends domain expertise with next-gen engineering.
//         </p>
//       </section>

//       {/* Our Process */}
//      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-24">
//   <div className="text-center mb-16">
//     <h2 className="text-4xl font-extrabold tracking-wide text-sky-800 uppercase">Our Process</h2>
//     <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
//       From diagnostics to implementation, each step is executed with care and precision.
//     </p>
//   </div>

//   <div className="relative max-w-5xl mx-auto">
//     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-200"></div>

//     {[...processLeft, ...processRight].map((item, idx) => {
//       const isLeft = idx % 2 === 0;
//       return (
//         <div
//           key={idx}
//           className={`relative mb-12 flex flex-col sm:flex-row items-center ${
//             isLeft ? 'sm:justify-start' : 'sm:justify-end'
//           }`}
//         >
//           <div className={`w-full sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:pl-10'}`}>
//             <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="text-white bg-sky-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
//                   {idx + 1}
//                 </div>
//                 <span className="text-sky-700 font-medium text-sm">Step {idx + 1}</span>
//               </div>
//               <p className="text-gray-700 text-base">{item}</p>
//             </div>
//           </div>
//           <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-sky-600 w-5 h-5 rounded-full z-10"></div>
//         </div>
//       );
//     })}
//   </div>
// </section>

//       {/* Why Choose Us */}
// <section className="px-4 sm:px-6 lg:px-20 py-20 bg-white border-t border-b">
//   <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Why Choose Us</h2>
//   <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
//     {chooseUs.map(({ icon, text }, idx) => (
//       <div
//         key={idx}
//         className="w-full sm:w-[45%] lg:w-[30%] flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow hover:shadow-md hover:bg-sky-50 transition-all duration-300 cursor-pointer"
//       >
//         <div className="text-sky-600 flex-shrink-0">{icon}</div>
//         <p className="text-sm sm:text-base">{text}</p>
//       </div>
//     ))}
//   </div>
// </section>


//       {/* Our Project Verticals */}
//       <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-20">
//         <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Our Project Verticals</h2>
//         <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
//           {verticals.map((v, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 bg-white rounded-full border border-sky-600 text-sky-700 text-sm font-medium shadow hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
//             >
//               {v}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
      
//     </div>
//   );
// }
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, LayoutTemplate, Workflow, Star, Settings, Users } from "lucide-react";

export default function DevinkShowcasePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const processLeft = [
    "Our Intelligent B2B Supply Chain Platform is a strategic extension of business.",
    "Seamless orchestration from procurement to fulfillment.",
    "Optimizes vendor networks and responds to volatile demand.",
    "Catalyst for secure, integrated, and insight-driven supply chain transformation.",
    "SMB-scalable and built to adapt across sectors.",
    "KYC-Onboarded Supplier & Vendor Network.",
    "Enterprise-Grade Security with MFA and encryption."
  ];

  const processRight = [
    "Live Dashboards & Insights with real-time visibility.",
    "Predictive & Intuitive AI Assistant for proactive planning.",
    "Seamless Integrations via low-code APIs.",
    "Break silos across procurement, logistics, finance, and service.",
    "Empower decision-making from one command center.",
    "Redefine conventional supply chain dynamics.",
    "Adaptable ecosystems that drive continuous improvement."
  ];

  const chooseUs = [
    { icon: <Workflow size={28} />, text: "Built to adapt across industries—retail, manufacturing, services." },
    { icon: <Settings size={28} />, text: "Frictionless supplier onboarding with built-in checks." },
    { icon: <Users size={28} />, text: "Multi-Factor Authentication and secure access." },
    { icon: <LayoutTemplate size={28} />, text: "AI-powered assistant for alerts and smart decisions." },
    { icon: <Star size={28} />, text: "Ready integrations with ERPs and legacy systems." }
  ];

  const verticals = [
    "Commercial", "Residential", "Shopping Malls", "Hospitality", "Sports Facilities",
    "Facade", "Healthcare Facilities", "Schools & Educational Facilities", "Cultural & Heritage Sites"
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
      <header
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center"
        style={{ backgroundImage: "url(/assets/sample-5.jpg)" }}
        data-aos="fade-in"
      >
        <div className="bg-black/40 absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">Chainex</h1>
        </div>
      </header>

      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6">About Us</h2>
        <img src="/assets/sample-1.jpg" className="rounded-xl w-full mb-8 shadow-xl" alt="About" />
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Chainex, a flagship platform of Thinkinfinity Inc., is a global boutique product engineering firm at the forefront of deep-tech innovation and embedded product architecture. In strategic partnership with Commnet System Consulting, it blends domain expertise with next-gen engineering.
        </p>
      </section>

      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-24" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-wide text-sky-800 uppercase">Our Process</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            From diagnostics to implementation, each step is executed with care and precision.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-200"></div>
          {[...processLeft, ...processRight].map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative mb-12 flex flex-col sm:flex-row items-center ${
                  isLeft ? 'sm:justify-start' : 'sm:justify-end'
                }`}
                data-aos="fade-up"
              >
                <div className={`w-full sm:w-1/2 ${isLeft ? 'sm:pr-10' : 'sm:pl-10'}`}>
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-white bg-sky-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                        {idx + 1}
                      </div>
                      <span className="text-sky-700 font-medium text-sm">Step {idx + 1}</span>
                    </div>
                    <p className="text-gray-700 text-base">{item}</p>
                  </div>
                </div>
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-sky-600 w-5 h-5 rounded-full z-10"></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-20 py-20 bg-white border-t border-b" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {chooseUs.map(({ icon, text }, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[45%] lg:w-[30%] flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow hover:shadow-md hover:bg-sky-50 transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
            >
              <div className="text-sky-600 flex-shrink-0">{icon}</div>
              <p className="text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Our Project Verticals</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {verticals.map((v, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white rounded-full border border-sky-600 text-sky-700 text-sm font-medium shadow hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              data-aos="zoom-in"
            >
              {v}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
