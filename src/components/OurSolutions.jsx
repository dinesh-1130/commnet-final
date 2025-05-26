
// import { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const solutionsWithContent = [
//    {
//     title: "Infrastructure Systems Group",
//     description:
//       "Commnet has a specialized team of cabling professionals trained and experienced on various low current solutions. We undertake turnkey ELV projects from scratch and commission them to best industry standards.\n\nBe it coaxial cabling for traditional analog video, CCTV, latest technology enhanced IP-based CCTV/IPTV, UTP & Fiber cabling for high-speed data needs.",
//     link: "/infrastructuresystemgroup",
//   },
//    {
//     title: "Cyber Security Services",
//     description:
//       "In today’s hyper-connected world, cybersecurity is no longer an option—it is a necessity. As businesses undergo digital transformation, the attack surface expands, leaving organizations vulnerable to ever-evolving cyber threats. At Commnet, we understand the critical need for a comprehensive cybersecurity strategy that protects your digital assets while enabling growth and innovation.",
//     link: "/cybersecurityservices",
//   },
//   {
//     title: "Enterprise Systems Group",
//     description:
//       "Organizations are looking at ways to meet the IT demands of business while providing innovative services that give them business agility and competitive advantage. One of the key focuses of commnet DC Transformation and Operation services is the dynamic alignment of business requirements and IT systems that deliver efficiencies that drive down costs, optimize resources, and enable innovation. Enterprises are witnessing exponential growths, with innovation in supply chain, multiple delivery channels for customers and their relationships with global spread.",
//     link: "/enterprise-systems-group",
//   },

//     {
//     title: "Professional IT Services",
//     description:
//       "Expert technical solutions customized to enterprise needs across infrastructure, development, and deployment.These services are tailored to align with an organization’s goals, improve efficiency, ensure data security, and support digital transformation.",
//     link: "/professionalitservices",
//   },
//     {
//     title: "Security Systems",
//     description:
//       "We are dedicated to build positive relationships with our customers by understanding our client’s business needs and provide them with the most professional and high quality services that fulfill them, whether its Residential, Retail, Commercial, Industrial or Governmental.",
//     link: "/securitysystems",
//   },
//     {
//     title: "Power Solutions",
//     description:
//       "Our goal is ensure a secure supply of energy and cooling for you.\n\nAREAS OF EXPERTISE:\n- UPS and Power Distribution Systems\n- Security, Real Time Monitoring, Management & Control Systems\n- Emergency Diesel Generators\n- Cooling Systems",
//     link: "/powersolutions",
//   },
//    {
//     title: "Internet of Things (IoT)",
//     description:
//       "The Internet of Things is here and information access to the network is even more profound as homes, buildings, offices and even the whole city begins to connect to each other, providing a whole new experience of a connected world and a seamless virtual reality which can only be made possible through strong connectivity.",
//     link: "/iotservices",
//   },

//     {
//     title: "AV Solutions",
//     description:
//       "Commnet deploy our design talents and engineering capabilities to deliver customized user-friendly AV solutions that meet client expectations, budgets and timeframes.\n\nAREAS OF EXPERTISE:\n- Intelligent Video Solutions for Educational, Medical and Law Enforcement\n- Command & Control Centers and Crisis Management Centers\n- Theaters, Auditoriums and Multi-purpose Halls\n- Smart Meeting Rooms, and Innovation Centers",
//     link: "/avsolutions",
//   },
//   {
//     title: "Website Development",
//     description:
//       "Creative website development tailored for optimal UX, responsiveness, and business growth.Static Website, Dynamic and ResponsiveWordPress, SitesE-commerce, SitesLMS ,SiteCRM ,SitesLearning Management.",
//     link: "/websitedevelopment",
//   },
//   {
//     title: "Software Development",
//     description:
//       "We are Developing Best Website and Customized Softwares with cutting edge technology applications.\n\nWe are the most experienced and highly trusted Website and Software Development Company in Dubai. Our best professional team design both Software and Websites starting from small startups to large enterprises.",
//     link: "/softwaredevelopment",
//   },
 
//   {
//     title: "Information Security",
//     description:
//       "ISO/IEC 27001 is a standard designed to ensure the selection of adequate and proportionate security controls to help you manage and protect your valuable information assets. Our security consultants evaluate your organisation's security policies, procedures, standards and organisation structure against the ISO27001 standard.",
//     link: "/informationsecurity",
//   },
 



 
  

// ];

// const OurSolutions = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (

//   <div className="relative overflow-hidden bg-white">
//     <img
//       src="/assets/bg-7.jpg"
//       alt="bg"
//       className="absolute inset-0 w-full h-full object-cover z-0"
//     />
//     <div className="absolute inset-0 bg-white/80 z-0" />

//     <div className="relative z-10 max-w-[1440px] mx-auto py-20 px-5 lg:px-10">
//       <div className="flex flex-col md:flex-row gap-6 mb-10" data-aos="fade-up">
//         <div>
//           <div className="border px-4 py-2 rounded-xl font-medium text-xl lg:text-2xl bg-white/80 w-fit">
//             Our Solutions
//           </div>
//         </div>
//         <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight leading-snug text-sky-600">
//           Turn your business vision into reality with{" "}
//           <span className="text-red-600">end-to-end IT Solutions</span>
//         </h2>
//       </div>

//       {/* For mobile: show all cards in a single swiper */}
//       <div className="lg:hidden">
//         <Swiper
//           modules={[Pagination]}
//           pagination={{ clickable: true }}
//           spaceBetween={24}
//           breakpoints={{
//             320: { slidesPerView: 1.1, spaceBetween: 20 },
//             640: { slidesPerView: 1.5, spaceBetween: 24 },
//             768: { slidesPerView: 2, spaceBetween: 24 },
//           }}
//           className="!pb-10"
//         >
//           {solutionsWithContent.map((solution, index) => (
//             <SwiperSlide key={index} className="!ml-2 !mr-2">
//               <div
//                 className="bg-white rounded-2xl shadow-md p-6 h-[360px] w-[320px] mx-auto flex flex-col justify-between overflow-hidden"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     {String(index + 1).padStart(2, "0")}
//                   </p>
//                   <h3 className="text-lg font-semibold mb-2">
//                     {solution.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-[8]">
//                     {solution.description}
//                   </p>
//                 </div>
//                 <a
//                   href={solution.link}
//                   className="text-sky-600 text-sm font-medium mt-4 hover:underline"
//                 >
//                   Find More
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop row 1: first 6 cards in swiper */}
//       <div className="hidden lg:block mb-10">
//         <Swiper
//   modules={[]}
//   pagination={false}
//   spaceBetween={24}
//   slidesPerView={4}
//   className="!pb-10"
// >
//           {solutionsWithContent.slice(0, 6).map((solution, index) => (
//             <SwiperSlide key={index} className="!ml-2 !mr-2">
//               <div
//                 className="bg-white rounded-2xl shadow-md p-6 h-[360px] w-[320px] mx-auto flex flex-col justify-between overflow-hidden"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     {String(index + 1).padStart(2, "0")}
//                   </p>
//                   <h3 className="text-lg font-semibold mb-2">
//                     {solution.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-[8]">
//                     {solution.description}
//                   </p>
//                 </div>
//                 <a
//                   href={solution.link}
//                   className="text-sky-600 text-sm font-medium mt-4 hover:underline"
//                 >
//                   Find More
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop row 2: remaining 5 cards in swiper */}
//       <div className="hidden lg:block">
//        <Swiper
//   modules={[]}
//   pagination={false}
//   spaceBetween={24}
//   slidesPerView={4}
//   className="!pb-10"
// >
//           {solutionsWithContent.slice(6).map((solution, index) => (
//             <SwiperSlide key={index + 6} className="!ml-2 !mr-2">
//               <div
//                 className="bg-white rounded-2xl shadow-md p-6 h-[360px] w-[320px] mx-auto flex flex-col justify-between overflow-hidden"
//                 data-aos="fade-up"
//                 data-aos-delay={(index + 6) * 100}
//               >
//                 <div>
//                   <p className="text-sm text-gray-500 mb-1">
//                     {String(index + 7).padStart(2, "0")}
//                   </p>
//                   <h3 className="text-lg font-semibold mb-2">
//                     {solution.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-[8]">
//                     {solution.description}
//                   </p>
//                 </div>
//                 <a
//                   href={solution.link}
//                   className="text-sky-600 text-sm font-medium mt-4 hover:underline"
//                 >
//                   Find More
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   </div>
// );
// }
// export default OurSolutions;
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const solutionsWithContent = [
  {
    title: "Infrastructure Systems Group",
    description:
      "Commnet has a specialized team of cabling professionals trained and experienced on various low current solutions. We undertake turnkey ELV projects from scratch and commission them to best industry standards.\n\nBe it coaxial cabling for traditional analog video, CCTV, latest technology enhanced IP-based CCTV/IPTV, UTP & Fiber cabling for high-speed data needs.",
    link: "/infrastructuresystemgroup",
  },
  {
    title: "Cyber Security Services",
    description:
      "In today’s hyper-connected world, cybersecurity is no longer an option—it is a necessity. As businesses undergo digital transformation, the attack surface expands, leaving organizations vulnerable to ever-evolving cyber threats. At Commnet, we understand the critical need for a comprehensive cybersecurity strategy that protects your digital assets while enabling growth and innovation.",
    link: "/cybersecurityservices",
  },
  {
    title: "Enterprise Systems Group",
    description:
      "Organizations are looking at ways to meet the IT demands of business while providing innovative services that give them business agility and competitive advantage. One of the key focuses of commnet DC Transformation and Operation services is the dynamic alignment of business requirements and IT systems that deliver efficiencies that drive down costs, optimize resources, and enable innovation. Enterprises are witnessing exponential growths, with innovation in supply chain, multiple delivery channels for customers and their relationships with global spread.",
    link: "/enterprise-systems-group",
  },
  {
    title: "Professional IT Services",
    description:
      "Expert technical solutions customized to enterprise needs across infrastructure, development, and deployment.These services are tailored to align with an organization’s goals, improve efficiency, ensure data security, and support digital transformation.",
    link: "/professionalitservices",
  },
  {
    title: "Security Systems",
    description:
      "We are dedicated to build positive relationships with our customers by understanding our client’s business needs and provide them with the most professional and high quality services that fulfill them, whether its Residential, Retail, Commercial, Industrial or Governmental.",
    link: "/securitysystems",
  },
  {
    title: "Power Solutions",
    description:
      "Our goal is ensure a secure supply of energy and cooling for you.\n\nAREAS OF EXPERTISE:\n- UPS and Power Distribution Systems\n- Security, Real Time Monitoring, Management & Control Systems\n- Emergency Diesel Generators\n- Cooling Systems",
    link: "/powersolutions",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "The Internet of Things is here and information access to the network is even more profound as homes, buildings, offices and even the whole city begins to connect to each other, providing a whole new experience of a connected world and a seamless virtual reality which can only be made possible through strong connectivity.",
    link: "/iotservices",
  },
  {
    title: "AV Solutions",
    description:
      "Commnet deploy our design talents and engineering capabilities to deliver customized user-friendly AV solutions that meet client expectations, budgets and timeframes.\n\nAREAS OF EXPERTISE:\n- Intelligent Video Solutions for Educational, Medical and Law Enforcement\n- Command & Control Centers and Crisis Management Centers\n- Theaters, Auditoriums and Multi-purpose Halls\n- Smart Meeting Rooms, and Innovation Centers",
    link: "/avsolutions",
  },
  {
    title: "Website Development",
    description:
      "Creative website development tailored for optimal UX, responsiveness, and business growth.Static Website, Dynamic and ResponsiveWordPress, SitesE-commerce, SitesLMS ,SiteCRM ,SitesLearning Management.",
    link: "/websitedevelopment",
  },
  {
    title: "Software Development",
    description:
      "We are Developing Best Website and Customized Softwares with cutting edge technology applications.\n\nWe are the most experienced and highly trusted Website and Software Development Company in Dubai. Our best professional team design both Software and Websites starting from small startups to large enterprises.",
    link: "/softwaredevelopment",
  },
  {
    title: "Information Security",
    description:
      "ISO/IEC 27001 is a standard designed to ensure the selection of adequate and proportionate security controls to help you manage and protect your valuable information assets. Our security consultants evaluate your organisation's security policies, procedures, standards and organisation structure against the ISO27001 standard.",
    link: "/informationsecurity",
  },
];

const OurSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <img
        src="/assets/bg-7.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-white/80 z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto py-20 px-5 lg:px-10">
        <div className="flex flex-col md:flex-row gap-6 mb-10" data-aos="fade-up">
          <div>
            <div className="border px-4 py-2 rounded-xl font-medium text-xl lg:text-2xl bg-white/80 w-fit">
              Our Solutions
            </div>
          </div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight leading-snug text-sky-600">
            Turn your business vision into reality with{" "}
            <span className="text-red-600">end-to-end IT Solutions</span>
          </h2>
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="!pb-10"
          >
            {solutionsWithContent.map((solution, index) => (
              <SwiperSlide key={index} className="!ml-2 !mr-2">
                <div
                  className="bg-white rounded-2xl shadow-md p-6 h-[360px] w-[320px] mx-auto flex flex-col justify-between overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-[8]">
                      {solution.description}
                    </p>
                  </div>
                  <a
                    href={solution.link}
                    className="text-sky-600 text-sm font-medium mt-4 hover:underline"
                  >
                    Find More
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Swiper Row 1 */}
        <div className="hidden lg:block mb-10">
          <Swiper modules={[]} pagination={false} spaceBetween={24} slidesPerView={4} className="!pb-10">
            {solutionsWithContent.slice(0, 6).map((solution, index) => (
              <SwiperSlide key={index} className="!ml-2 !mr-2">
                <div
                  className="bg-white rounded-2xl shadow-md p-6 h-[360px] w-[320px] mx-auto flex flex-col justify-between overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-[8]">
                      {solution.description}
                    </p>
                  </div>
                  <a
                    href={solution.link}
                    className="text-sky-600 text-sm font-medium mt-4 hover:underline"
                  >
                    Find More
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Swiper Row 2 */}
        <div className="hidden lg:block">
          <Swiper modules={[]} pagination={false} spaceBetween={24} slidesPerView={4} className="!pb-10">
            {solutionsWithContent.slice(6).map((solution, index) => (
              <SwiperSlide key={index + 6} className="!ml-2 !mr-2">
                <div
                  className="bg-white rounded-2xl shadow-md p-6 h-[360px] w-[320px] mx-auto flex flex-col justify-between overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={(index + 6) * 100}
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-700 text-sm whitespace-pre-line line-clamp-[8]">
                      {solution.description}
                    </p>
                  </div>
                  <a
                    href={solution.link}
                    className="text-sky-600 text-sm font-medium mt-4 hover:underline"
                  >
                    Find More
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
