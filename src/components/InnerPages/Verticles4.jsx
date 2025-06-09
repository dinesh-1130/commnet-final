import React, { useEffect } from "react";
import { CheckCircle, LayoutTemplate, Workflow, Star, Settings, Users } from "lucide-react";

export default function TechServicesShowcase() {
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
    "Project Requirements Analysis & Documentation.",
    "System Architecture & Technical Design.",
    "Cloud Infrastructure Planning & Setup.",
    "Project Timeline & Milestone Development.",
    "Budget Estimation & Resource Planning.",
    "UI/UX Design with Modern Frameworks.",
    "Security Assessment & Implementation Reports."
  ];
  
  const processRight = [
    "Custom Software Development & Deployment.",
    "Individual Module Specifications & Documentation.",
    "Technical Architecture & API Documentation.",
    "Project Delivery Milestone Tracking.",
    "3D Prototyping & Visual Mockups.",
    "System Integration & Testing Documentation.",
    "Cost Optimization & Performance Engineering.",
    "Technology Stack Recommendations & Vendor Selection.",
    "Implementation & Deployment Methodology.",
    "Training Videos & System Walkthroughs."
  ];
  
  const chooseUs = [
    { icon: <Workflow size={28} />, text: "End-to-end technology solutions under one roof" },
    { icon: <Settings size={28} />, text: "Strong technical expertise across multiple domains" },
    { icon: <Users size={28} />, text: "Experience in global and multi-cultural projects" },
    { icon: <LayoutTemplate size={28} />, text: "Agile development with faster delivery schedules" },
    { icon: <Star size={28} />, text: "Cost-effective solutions with maximum ROI" }
  ];
  
  const verticals = [
    "US Healthcare", "Insurance", "Banking & Finance", "Compliance", "E-commerce",
    , "Manufacturing"
  ];

  return (
    <div className="bg-white font-sans text-gray-800">
     <header className="relative bg-cover bg-center bg-no-repeat text-white py-16 md:py-24 px-4 sm:px-6 lg:px-20 text-center" style={{ backgroundImage: "url(/assets/sample-5.jpg)" }}>
        <div className="bg-black/20 absolute inset-0 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
<h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide" data-aos="fade-up">
  Core services
</h1>
<p className="mt-10 text-base sm:text-lg md:text-xl font-light" data-aos="fade-up" data-aos-delay="200">
  Engineering Innovation with Intelligence
</p>

        </div>
      </header>

      {/* About Us */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-6" data-aos="fade-up">About Us</h2>
        <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Technology solutions play a crucial role in transforming businesses, enhancing efficiency, and driving innovation across industries. From AI-powered automation to cloud infrastructure, modern technology focuses on scalability, security, and user experience. With the right strategy, technology transforms operations—improving productivity in enterprises, streamlining processes, and creating competitive advantages in the digital marketplace.
        </p>
      </section>

      {/* Our Process */}
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
      From analysis to deployment, each step is executed with precision and expertise.
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
    <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
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

      {/* Our Domain Expertise */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-20">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12 tracking-wide uppercase" data-aos="fade-up">Our Domain Expertise</h2>
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

      {/* Core Services with Content */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20">
  <h2 className="text-4xl font-bold text-center text-sky-700 mb-16 tracking-wide uppercase" data-aos="fade-up">Core Services</h2>
  
  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <div data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        AI-driven solutions for business automation and predictive analytics, NLP and computer vision applications. Transform your business processes with intelligent automation that learns and adapts to your needs.
      </p>
    </div>
    <div className="rounded-xl p-8 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(assets/sample-3.jpg)'}} 
         data-aos="fade-up" data-aos-delay="200">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-sky-600/80 to-red-600/80"></div> */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
      <div className="relative z-10">
        <div className="text-4xl mb-4">🤖</div>
        <h4 className="text-lg font-semibold mb-2">Intelligent Systems</h4>
        {/* <p className="text-sm opacity-90">Advanced AI algorithms for predictive analytics and automated decision making</p> */}
      </div>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <div className="rounded-xl p-8 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(assets/sample-1.jpg)'}} 
         data-aos="fade-up">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-sky-600/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-red-500/20"></div> */}
      <div className="relative z-10">
        <div className="text-4xl mb-4">⚙️</div>
        <h4 className="text-lg font-semibold mb-2">Process Automation</h4>
        {/* <p className="text-sm opacity-90">RPA solutions for streamlined workflows and intelligent automation</p> */}
      </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        Robotic Process Automation (RPA) for streamlining workflows and intelligent automation for improved efficiency. Eliminate repetitive tasks and focus on strategic initiatives while our automation handles routine operations.
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <div data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        Native and cross-platform app development for Android & iOS. Scalable and user-friendly mobile solutions that deliver exceptional user experiences and drive business growth.
      </p>
    </div>
    <div className="rounded-xl p-8 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(assets/software.jpg)'}} 
         data-aos="fade-up" data-aos-delay="200">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-purple-800/80"></div> */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
      <div className="relative z-10">
        <div className="text-4xl mb-4">📱</div>
        <h4 className="text-lg font-semibold mb-2">Mobile Solutions</h4>
        {/* <p className="text-sm opacity-90">Cross-platform apps with native performance and modern UI</p> */}
      </div>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <div className="rounded-xl p-8 text-white bg-cover bg-center bg-no-repeat relative overflow-hidden" 
         style={{backgroundImage: 'url(assets/sample-2.jpg)'}} 
         data-aos="fade-up">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 to-red-700/80"></div> */}
      <div className="relative z-10">
        <div className="text-4xl mb-4">🏢</div>
        <h4 className="text-lg font-semibold mb-2">ERP Solutions</h4>
        {/* <p className="text-sm opacity-90">Custom ERP development with cloud-based architecture and real-time reporting</p> */}
      </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-semibold mb-3">ERP Solutions</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        Custom ERP development with cloud-based architecture and real-time reporting with dashboard insights. Integrate all your business processes into one comprehensive system for better visibility and control.
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-3">Cybersecurity Services</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        Network Security: Implementing firewalls, VPNs, and intrusion detection systems. Data Encryption: Protecting sensitive data in storage and transmission with compliance assurance and advanced threat protection.
      </p>
    </div>
    <div className="rounded-xl p-8 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: 'url(assets/IS-4.jpg)'}} 
         data-aos="fade-up" data-aos-delay="200">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 to-cyan-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div> */}
      <div className="relative z-10">
        <div className="text-4xl mb-4">🔒</div>
        <h4 className="text-lg font-semibold mb-2">Security Solutions</h4>
        {/* <p className="text-sm opacity-90">Advanced threat protection and compliance management</p> */}
      </div>
    </div>
  </div>
</section>
      {/* Technical Expertise */}
      <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 text-center mb-12" data-aos="fade-up">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg mb-2">Cloud Platforms</h4>
              <p className="text-gray-600">AWS, Azure, Google Cloud</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg mb-2">Programming Languages</h4>
              <p className="text-gray-600">Python, JavaScript, Flutter, Angular, Google Cloud</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg mb-2">DevOps & Automations</h4>
              <p className="text-gray-600">CI/CD Pipelines, Kubernetes, Docker</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 text-white relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
            <div className="text-6xl mb-4 opacity-20">⚡</div>
            <h4 className="text-2xl font-bold mb-4">Advanced Technologies</h4>
            <p className="text-lg opacity-90 mb-4">Machine Learning, Predictive Analytics, NLP</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl mb-1">☁️</div>
                <div className="text-xs">Cloud</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl mb-1">🧠</div>
                <div className="text-xs">AI/ML</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-xs">Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-sky-600 mb-10" data-aos="fade-up">Let's Build Innovation Together</h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
          Whether it's enterprise software, mobile applications, or AI solutions – technology development begins with understanding your vision. 
        </p>
      </section>
    </div>
  );
}