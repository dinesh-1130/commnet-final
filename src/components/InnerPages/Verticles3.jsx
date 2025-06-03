
// import React from "react";
// import { CheckCircle, LayoutTemplate, Workflow, Star, Settings, Users } from "lucide-react";

// export default function RNCShowcasePage() {
//   const processLeft = [
//     "Expertise with all types of UPS systems and battery technologies.",
//     "Use of state-of-the-art diagnostic tools.",
//     "Certified technicians for installation & maintenance.",
//     "Custom design and retrofit engineering.",
//     "Quick fault diagnostics and recovery service.",
//     "In-house repair services for all major brands.",
//     "Power quality audit services and consultations."
//   ];

//   const processRight = [
//     "Comprehensive Services tailored for industries.",
//     "Battery Monitoring and Control Systems.",
//     "UPS Control Transformers and PFC Chokes.",
//     "Power Panels, Diode Panels, and Rectifiers.",
//     "Transformer Testing and Diagnostics.",
//     "IT infrastructure and Security System solutions.",
//     "24/7 hotline emergency support services.",
//     "Rental UPS and Power Equipment fleet.",
//     "Operator Training Programs and Certification.",
//     "Fully integrated design with customer systems."
//   ];

//   const chooseUs = [
//     { icon: <Workflow size={28} />, text: "Certified experience with UPS & battery technologies" },
//     { icon: <Settings size={28} />, text: "State-of-the-art diagnostic tools" },
//     { icon: <Users size={28} />, text: "Customer-Centric Personalized Approach" },
//     { icon: <LayoutTemplate size={28} />, text: "Rapid 24/7 fault response and recovery" },
//     { icon: <Star size={28} />, text: "Quality assurance with every solution" }
//   ];

//   const verticals = [
//     "Industrial Power", "Battery Monitoring", "Transformer Systems", "Rectifiers & Inverters",
//     "Control Panels", "Rental Services", "Emergency Hotline", "Training Programs", "IT Solutions"
//   ];

//   return (
//     <div className="bg-white font-sans text-gray-800">
//       {/* Header */}
//           <header className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center" style={{ backgroundImage: "url(/assets/sample-5.jpg)" }}>
//   <div className="bg-black/40 absolute inset-0 z-0"></div>
//   <div className="relative z-10 max-w-4xl mx-auto">
//     <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">Power Solutions</h1>
//     <p className="mt-8 text-base sm:text-lg md:text-xl font-light">Engineering Elegance with Power</p>
//   </div>
// </header>

//       {/* About Us */}
//       <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6">About Us</h2>
//         <img src="/assets/verticle/Ver-1.jpg" className="rounded-xl w-full mb-8 shadow-xl" alt="About" />
//        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
//   Our Power Solutions are designed to deliver reliability, efficiency, and sustainability. From energy audits and load assessments to implementation and long-term maintenance, each step is executed with precision to ensure optimal performance and safety across residential, commercial, and industrial projects.
// </p>

//       </section>

//       {/* Our Process - Updated with Devink Style */}
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


//       {/* Specializations */}
//       <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-20">
//         <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Our Specializations</h2>
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

//       {/* Three Key Service Sections */}
//       <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//           <div>
//             <h3 className="text-xl font-semibold mb-3">24/7 Hotline Support</h3>
//             <p className="text-sm sm:text-base leading-relaxed">
//               Our dedicated support team is always available to offer expert advice, troubleshoot issues, and provide emergency solutions to power problems anytime, anywhere.
//             </p>
//           </div>
//           <img src="/assets/verticle/Ver-2.jpg" className="rounded-xl shadow-xl w-full" alt="Hotline" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//           <img src="/assets/verticle/Ver-3.jpg" className="rounded-xl shadow-xl w-full" alt="Training" />
//           <div>
//             <h3 className="text-xl font-semibold mb-3">Specialized Training</h3>
//             <p className="text-sm sm:text-base leading-relaxed">
//               We offer specialized training programs designed to equip your team with the knowledge and skills needed to operate and maintain AC/DC power systems effectively.
//             </p>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-xl font-semibold mb-3">Integrated IT Solutions</h3>
//             <p className="text-sm sm:text-base leading-relaxed">
//               RNC Electrical Solutions provides a complete range of IT hardware, networking, and security solutions tailored to your business needs, all under one trusted roof.
//             </p>
//           </div>
//           <img src="/assets/verticle/Ver-4.jpg" className="rounded-xl shadow-xl w-full" alt="IT Solutions" />
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-10">Reliable Power. Always.</h2>
//         <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8">
//           From industrial UPS systems to customized control panels and real-time battery monitoring, RNC delivers engineering-backed excellence. Let’s keep your power running.
//         </p>
//         <img src="/assets/verticle/Ver-5.jpg" className="rounded-xl shadow-xl mx-auto" alt="Reliable Power" />
//       </section>

     
//     </div>
//   );
// }
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle, LayoutTemplate, Workflow, Star, Settings, Users } from "lucide-react";

export default function RNCShowcasePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const processLeft = [
    "Expertise with all types of UPS systems and battery technologies.",
    "Use of state-of-the-art diagnostic tools.",
    "Certified technicians for installation & maintenance.",
    "Custom design and retrofit engineering.",
    "Quick fault diagnostics and recovery service.",
    "In-house repair services for all major brands.",
    "Power quality audit services and consultations."
  ];

  const processRight = [
    "Comprehensive Services tailored for industries.",
    "Battery Monitoring and Control Systems.",
    "UPS Control Transformers and PFC Chokes.",
    "Power Panels, Diode Panels, and Rectifiers.",
    "Transformer Testing and Diagnostics.",
    "IT infrastructure and Security System solutions.",
    "24/7 hotline emergency support services.",
    "Rental UPS and Power Equipment fleet.",
    "Operator Training Programs and Certification.",
    "Fully integrated design with customer systems."
  ];

  const chooseUs = [
    { icon: <Workflow size={28} />, text: "Certified experience with UPS & battery technologies" },
    { icon: <Settings size={28} />, text: "State-of-the-art diagnostic tools" },
    { icon: <Users size={28} />, text: "Customer-Centric Personalized Approach" },
    { icon: <LayoutTemplate size={28} />, text: "Rapid 24/7 fault response and recovery" },
    { icon: <Star size={28} />, text: "Quality assurance with every solution" }
  ];

  const verticals = [
    "Industrial Power", "Battery Monitoring", "Transformer Systems", "Rectifiers & Inverters",
    "Control Panels", "Rental Services", "Emergency Hotline", "Training Programs", "IT Solutions"
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
      <header className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center" style={{ backgroundImage: "url(/assets/sample-5.jpg)" }} data-aos="fade-in">
        <div className="bg-black/40 absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
         <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
  Power Solutions
</h1>
<p className="mt-10 text-base sm:text-lg md:text-xl font-light">
  Engineering Elegance with Power
</p>

        </div>
      </header>

      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6">About Us</h2>
        <img src="/assets/verticle/Ver-1.jpg" className="rounded-xl w-full mb-8 shadow-xl" alt="About" />
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
          Our Power Solutions are designed to deliver reliability, efficiency, and sustainability. From energy audits and load assessments to implementation and long-term maintenance, each step is executed with precision to ensure optimal performance and safety across residential, commercial, and industrial projects.
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
                      {/* <span className="text-sky-700 font-medium text-sm">Step {idx + 1}</span> */}
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
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Our Specializations</h2>
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

      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-right">
          <div>
            <h3 className="text-xl font-semibold mb-3">24/7 Hotline Support</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Our dedicated support team is always available to offer expert advice, troubleshoot issues, and provide emergency solutions to power problems anytime, anywhere.
            </p>
          </div>
          <img src="/assets/verticle/Ver-2.jpg" className="rounded-xl shadow-xl w-full" alt="Hotline" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-left">
          <img src="/assets/verticle/Ver-3.jpg" className="rounded-xl shadow-xl w-full" alt="Training" />
          <div>
            <h3 className="text-xl font-semibold mb-3">Specialized Training</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              We offer specialized training programs designed to equip your team with the knowledge and skills needed to operate and maintain AC/DC power systems effectively.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
          <div>
            <h3 className="text-xl font-semibold mb-3">Integrated IT Solutions</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              RNC Electrical Solutions provides a complete range of IT hardware, networking, and security solutions tailored to your business needs, all under one trusted roof.
            </p>
          </div>
          <img src="/assets/verticle/Ver-4.jpg" className="rounded-xl shadow-xl w-full" alt="IT Solutions" />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 text-center" data-aos="zoom-in-up">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-10">Reliable Power. Always.</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8">
          From industrial UPS systems to customized control panels and real-time battery monitoring, RNC delivers engineering-backed excellence. Let’s keep your power running.
        </p>
        {/* <img src="/assets/verticle/Ver-5.jpg" className="rounded-xl shadow-xl mx-auto" alt="Reliable Power" /> */}
      </section>
    </div>
  );
}
