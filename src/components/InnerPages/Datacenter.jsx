import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Database, Workflow, Star, Settings, Users } from "lucide-react";

export default function RNCShowcasePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const processPoints = [
    "Providing comprehensive data center solutions, including design, product selection, and customized implementations.",
    "Focusing on security, storage, and disaster recovery for military, commercial, and industrial sectors.",
    "Integration of new technology with existing IT infrastructure to enhance performance.",
    "Creation of efficient, service-driven data centers tailored to client needs.",
    "Solutions that reduce costs, simplify management, and mitigate operational risks."
  ];

  const chooseUs = [
    { icon: <Workflow size={28} />, text: "End-to-End Data Center Architecture" },
    { icon: <Settings size={28} />, text: "Focus on Disaster Recovery & Security" },
    { icon: <Users size={28} />, text: "Trusted by Defense and Commercial Sectors" },
    { icon: <Database size={28} />, text: "Modern IT Infrastructure Integration" },
    { icon: <Star size={28} />, text: "Efficiency, Productivity, and Cost-Saving Focus" }
  ];

  const verticals = [
  "Medium Voltage Package",
  "Diesel Generators, Power Distribution, Busways and UPS",
  "Energy Storage, Solar, and Energy management",
  "Cooling (Chillers, Fan Wall Units, CRAH, INROW, INRACK, Liquid Cooling, Immersion Cooling and CPM)",
  "IT Cabinets, Rack PDU, Aisle",
  "Containment, Structured Cabling",
  "Structural Ceiling and Raised Floor"
];


  return (
    <div className="bg-white font-sans text-gray-800">
      <header
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center"
        style={{ backgroundImage: "url('/assets/sample-5.jpg')" }} // Replace with your banner path
        data-aos="fade-in"
      >
        <div className="bg-black/40 absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
            Data Center Products and Solutions
          </h1>
          <p className="mt-10 text-base sm:text-lg md:text-xl font-light">
            Secure. Scalable. Service-Driven.
          </p>
        </div>
      </header>

      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6">About Our Data Center Solutions</h2>
        <img src="/assets/About.jpg" className="rounded-xl w-full mb-8 shadow-xl" alt="Data Center Room" />
        <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base sm:text-lg">
          Providing comprehensive data center solutions, including design, product selection, and customized implementations focusing on security, storage, and disaster recovery. Serving military, commercial, and industrial sectors, we integrate new technology with existing IT infrastructure to create efficient, service-driven data centers. Our solutions reduce costs, simplify management, improve productivity, and mitigate risks.
        </p>
      </section>

      <section className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-32 font-['Lato']">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold tracking-wide text-sky-800 uppercase" data-aos="fade-up">
      Our Process
    </h2>
    <p
      className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      From design to deployment, our structured approach ensures operational excellence.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {processPoints.map((item, idx) => (
      <div
        key={idx}
        className="bg-white border-t-4 border-sky-600 rounded-md shadow-sm p-6 hover:shadow-md transition-all"
        data-aos="fade-up"
        data-aos-delay={idx * 100}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
            {idx + 1}
          </div>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed">{item}</p>
      </div>
    ))}
  </div>

  <div className="mt-20 text-center">
    <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
      {processPoints.length} Structured Steps – Executed with Excellence
    </span>
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
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase">Key Focus Areas</h2>
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
