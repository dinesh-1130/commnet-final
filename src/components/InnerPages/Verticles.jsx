

import React, { useEffect } from "react";
import { CheckCircle, LayoutTemplate, Workflow, Star, Settings, Users } from "lucide-react";

export default function DevinkShowcasePage() {
  useEffect(() => {
    // Initialize AOS
    const initAOS = () => {
      if (typeof window !== 'undefined') {
        // Create and inject AOS CSS
        const aosCSS = document.createElement('link');
        aosCSS.rel = 'stylesheet';
        aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
        document.head.appendChild(aosCSS);

        // Create and inject AOS JS
        const aosJS = document.createElement('script');
        aosJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
        aosJS.onload = () => {
          window.AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
          });
        };
        document.body.appendChild(aosJS);
      }
    };

    initAOS();

    return () => {
      // Cleanup AOS elements if needed
      const aosElements = document.querySelectorAll('link[href*="aos"], script[src*="aos"]');
      aosElements.forEach(el => el.remove());
    };
  }, []);

  const processLeft = [
    "Project Base Informations.",
    "Architectural Base Designs.",
    "Electrical Base Designs.",
    "Project Completion plan and milestone activity schedule.",
    "Estimated budget.",
    "Interior Designs with Lighting, Furniture and other Equipment.",
    "Lighting Dialux Calculations Reports."
  ];
  
  const processRight = [
    "AUTO CAD and PDF Lighting Layout.",
    "Individual Luminaire Specifications.",
    "General Lighting Technical Specifications.",
    "Project duration Milestone Charts.",
    "3D Rendering.",
    "Tender Documentations.",
    "Project Budgeting with actual and value engineering as per needs.",
    "Product sourcing and manufacturer details to customer for direct purchase.",
    "Installation Methodology.",
    "Walk Through Videos."
  ];
  
  const chooseUs = [
    { icon: <Workflow size={28} />, text: "One stop for all your lighting design solutions" },
    { icon: <Settings size={28} />, text: "Strong source base" },
    { icon: <Users size={28} />, text: "Experience in multi-culture projects" },
    { icon: <LayoutTemplate size={28} />, text: "Faster design completion schedule" },
    { icon: <Star size={28} />, text: "Value for money" }
  ];
  
  const verticals = [
    "Commercial", "Residential", "Shopping Malls", "Hospitality", "Sports Facilities",
    "Facade", "Healthcare Facilities", "Schools & Educational Facilities", "Cultural & Heritage Sites"
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
      <header className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center" style={{ backgroundImage: "url(/assets/sample-5.jpg)" }}>
        <div className="bg-black/40 absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
<h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide" data-aos="fade-up">
  Lightning Solutions
</h1>
<p className="mt-10 text-base sm:text-lg md:text-xl font-light" data-aos="fade-up" data-aos-delay="200">
  Engineering Elegance with Light
</p>

        </div>
      </header>

      {/* About Us */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6" data-aos="fade-up">About Us</h2>
        <img src="/assets/pw-1.jpg" className="rounded-xl w-full mb-8 shadow-xl" alt="About" data-aos="fade-up" data-aos-delay="200" />
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          Lighting solutions play a crucial role in shaping the ambiance, functionality, and energy efficiency of any space. From architectural highlights to task-specific illumination, modern lighting design focuses on enhancing comfort, aesthetics, and sustainability. With the right strategy, lighting transforms environments—improving productivity in workplaces, adding warmth to homes, and elevating the experience in commercial and public spaces.
        </p>
      </section>

   <section className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-32 font-['Lato']">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase" data-aos="fade-up">
      Our Process
    </h2>
    <p
      className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      A calm, clear sequence of steps that shape results with consistency and care.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[...processLeft, ...processRight].map((item, idx) => (
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
    <span className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
      {[...processLeft, ...processRight].length} Refined Steps – Thoughtfully Executed
    </span>
  </div>
</section>



      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-20 py-20 bg-white border-t border-b">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase" data-aos="fade-up">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {chooseUs.map(({ icon, text }, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[45%] lg:w-[30%] flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow hover:shadow-md hover:bg-sky-50 transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="text-sky-600 flex-shrink-0">{icon}</div>
              <p className="text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Project Verticals */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-20">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase" data-aos="fade-up">Our Project Verticals</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {verticals.map((v, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white rounded-full border border-sky-600 text-sky-700 text-sm font-medium shadow hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              {v}
            </span>
          ))}
        </div>
      </section>

      {/* Project Verticals with Content */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-3">Work Place Lighting</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Lighting your office efficiently and effectively makes sound business sense. The ideal office lighting solution will have a considerable impact on the office environment and, in turn, your workforce.
              Good lighting helps us to see and to recognise hazards, reduce visual strain and discomfort. While poor lighting may affect workers' output, performance and health leading to less than desired levels of quality and service.
            </p>
          </div>
          <img src="/assets/verticle/v1.jpg" className="rounded-xl shadow-xl w-full" alt="Workplace Lighting" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img src="/assets/verticle/v2.jpg" className="rounded-xl shadow-xl w-full" alt="Home Lighting" data-aos="fade-up" />
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-3">Home Lighting</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Light is one of the most overlooked and yet important elements of good interior design. Lighting is essential to create the mood and ambience of a living space. Professional lighting design can help illuminate a room, create a safe and comfortable environment, and strike a perfect balance between style, comfort, and practicality.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-3">Hospital Lighting</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Lighting has a positive impact on patients and is one of the factors that contribute to a well-designed hospital facility. Great hospital lighting is both aesthetic and useful, making a positive and impactful statement.
              Lighting design has the potential to transform a space for the betterment of all.
            </p>
          </div>
          <img src="/assets/verticle/v3.jpg" className="rounded-xl shadow-xl w-full" alt="Hospital Lighting" data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img src="/assets/verticle/v5.jpg" className="rounded-xl shadow-xl w-full" alt="Hotel Lighting" data-aos="fade-up" />
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-3">Hotel Lighting</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Lighting is not something to take lightly when planning the design of a hotel room. It can make or break the ambiance, which in turn affects guest satisfaction. Whether cozy and warm or bright and luxurious, lighting defines the hotel's identity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-3">Facade Lighting</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              The facade of a building—modern or historic—is key to first impressions. In the architectural world, facades have become an important showcase of branding, identity, and technology. Our lighting designs elevate that impression.
            </p>
          </div>
          <img src="/assets/verticle/v4.jpg" className="rounded-xl shadow-xl w-full" alt="Facade Lighting" data-aos="fade-up" data-aos-delay="200" />
        </div>
      </section>

      {/* Lighting and Human Health */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 text-center mb-12" data-aos="fade-up">Lighting & Human Health</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/assets/verticle/v6.jpg" className="rounded-xl shadow-xl w-full" alt="Health Lighting" data-aos="fade-up" />
          <p className="text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Light plays a crucial role in regulating our circadian rhythms, impacting sleep, mood, and productivity. Our smart lighting designs adapt throughout the day to support physical and mental wellbeing naturally.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-10" data-aos="fade-up">Let's Build Brilliance Together</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
          Whether it's commercial, residential, or industrial – lighting design begins with purpose. 
        </p>
        {/* <img src="/assets/verticle/v8.jpg" className="rounded-xl shadow-xl mx-auto" alt="CTA" data-aos="fade-up" data-aos-delay="400" /> */}
      </section>
    </div>
  );
}