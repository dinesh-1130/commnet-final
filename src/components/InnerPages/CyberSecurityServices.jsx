// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import HeroBg from "/assets/ES-1.jpg";
// import OverviewImg from "/assets/ES-2.jpg";

// const TechnologyData = [
//   {
//     id: "01",
//     image: "/assets/sample-1.jpg",
//     title: "Enterprise Systems Group",
//     description:
//       "Delivering agility and innovation through optimized enterprise IT infrastructure.",
//     link: "/enterprise-systems-group",
//   },
//   {
//     id: "02",
//     image: "/assets/swiper/cyber-security.jpg",
//     title: "Information Security",
//     description:
//       "Protect your business with proactive strategies against cyber threats and data breaches.",
//     link: "/informationsecurity",
//   },
//   {
//     id: "03",
//     image: "/assets/swiper/Iot.jpg",
//     title: "IoT Services",
//     description:
//       "Integrate smart IoT solutions to drive automation and intelligent decision-making.",
//     link: "/iotservices",
//   },
//   {
//     id: "04",
//     image: "/assets/swiper/power.jpg",
//     title: "Power Solutions",
//     description:
//       "Reliable and efficient power backup and distribution systems for critical operations.",
//     link: "/powersolutions",
//   },
//   {
//     id: "05",
//     image: "/assets/swiper/av.jpg",
//     title: "AV Solutions",
//     description:
//       "Engaging audio-visual systems for modern conference, training, and collaboration needs.",
//     link: "/avsolutions",
//   },
//   {
//     id: "06",
//     image: "/assets/swiper/it.jpg",
//     title: "Professional IT Services",
//     description:
//       "Expert consulting, deployment, and managed services to support your IT landscape.",
//     link: "/professionalitservices",
//   },
//   {
//     id: "07",
//     image: "/assets/swiper/infra-2.jpg",
//     title: "Infrastructure Systems Group",
//     description:
//       "Build and scale IT infrastructure aligned with your enterprise growth strategy.",
//     link: "/infrastructuresystemgroup",
//   },
//   {
//     id: "08",
//     image: "/assets/swiper/program.jpg",
//     title: "Website Development",
//     description:
//       "Crafting responsive, secure, and scalable websites tailored to your business goals.",
//     link: "/websitedevelopment",
//   },
//   {
//     id: "09",
//     image: "/assets/swiper/software.jpg",
//     title: "Software Development",
//     description:
//       "End-to-end software solutions from concept to deployment and support.",
//     link: "/softwaredevelopment",
//   },
//   {
//     id: "10",
//     image: "/assets/swiper/security.jpg",
//     title: "Security Systems",
//     description:
//       "Comprehensive physical and digital security solutions for businesses of all sizes.",
//     link: "/securitysystems",
//   },
//   {
//     id: "11",
//     image: "/assets/swiper/cyber.jpg",
//     title: "Cyber Security Services",
//     description:
//       "Advanced protection strategies to secure networks, endpoints, and data assets.",
//     link: "/cybersecurityservices",
//   },
// ];

// export default function EnterpriseSystemsGroup() {
//   const NavigationRef = useRef(null);

//   return (
//     <div className="w-full font-sans text-black">
//       {/* Hero Section */}
//       <section
//         className="w-full min-h-[90vh] bg-cover bg-center relative flex items-start justify-start"
//         style={{ backgroundImage: `url(${HeroBg})` }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10 px-4 md:px-10 pt-[250px] text-white w-full max-w-7xl">
//           <div className="space-y-4 max-w-xl">
//             <p className="inline-block border border-white px-4 py-1 rounded-full text-sm font-medium">
//               Solutions
//             </p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//            Cyber Security Services
//             </h1>
//             {/* <p className="text-base sm:text-lg md:text-xl">
//               Delivering agility and innovation through optimized IT systems.
//             </p> */}
//             <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full text-sm">
//               Get in touch
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section
//         className="w-full py-16 px-4 md:px-6 bg-cover bg-center relative"
//         style={{ backgroundImage: "url('/assets/bg-8.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-white/80"></div>

//         <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise Systems Group</h2>
//             <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
//               <p>In today’s hyper-connected world, cybersecurity is no longer an option—it is a necessity. As businesses undergo digital transformation, the attack surface expands, leaving organizations vulnerable to ever-evolving cyber threats. At Commnet, we understand the critical need for a comprehensive cybersecurity strategy that protects your digital assets while enabling growth and innovation</p>
//              <p>Our Cyber Security Services are designed to provide complete visibility, proactive defense, and rapid response across your enterprise. From securing endpoints and networks to safeguarding sensitive data and cloud environments, we deliver solutions that ensure business continuity and regulatory compliance.

// </p>
// <p>. With the rise of ransomware, phishing, insider threats, and sophisticated malware, traditional security measures are no longer sufficient. We employ a layered defense approach, integrating advanced tools such as AI-driven threat detection, behavioral analytics, and real-time monitoring to counter both known and emerging threats.</p>
//             </div>
//           </div>

//           <div className="w-full">
//             <img
//               src={OverviewImg}
//               alt="Enterprise Overview"
//               className="rounded-2xl shadow-lg w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Swiper Section */}
//       <div className="relative px-4 py-16 bg-gray-100">
//         <Swiper
//           effect="coverflow"
//           coverflowEffect={{
//             scale: 0.8,
//             slideShadows: false,
//             depth: 100,
//             modifier: 1,
//           }}
//           spaceBetween={10}
//           breakpoints={{
//             320: { slidesPerView: 1.1 },
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 2.5 },
//             1280: { slidesPerView: 3 },
//           }}
//           modules={[Navigation, EffectCoverflow, Autoplay]}
//           centeredSlides={true}
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           onSwiper={(swiper) => {
//             NavigationRef.current = swiper;
//           }}
//         >
//           {TechnologyData.map((technology) => (
//             <SwiperSlide key={technology.id}>
//               <div
//                 className="bg-neutral-50 p-10 rounded-4xl text-white flex flex-col justify-end items-center h-[500px] bg-no-repeat bg-center bg-cover"
//                 style={{ backgroundImage: `url(${technology.image})` }}
//               >
//                 <div className="h-[100px]"></div>
//                 <h1 className="text-4xl font-semibold mb-4">
//                   {technology.title}
//                 </h1>
//                 <p className="text-center text-base font-medium mb-8">
//                   {technology.description}
//                 </p>
//                 <a
//                   href={technology.link}
//                   className="bg-blue-600 px-5 py-2 rounded-xl"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <button
//           className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 text-black"
//           onClick={() => NavigationRef.current?.slidePrev()}
//         >
//           <FaChevronLeft size={20} />
//         </button>

//         <button
//           className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 text-black"
//           onClick={() => NavigationRef.current?.slideNext()}
//         >
//           <FaChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import HeroBg from "/assets/ES-1.jpg";
import OverviewImg from "/assets/IS-3.jpg";

const TechnologyData = [
  {
    id: "01",
    image: "/assets/sample-1.jpg",
    title: "Enterprise Systems Group",
    description:
      "Delivering agility and innovation through optimized enterprise IT infrastructure.",
    link: "/enterprise-systems-group",
  },
  {
    id: "02",
    image: "/assets/swiper/cyber-security.jpg",
    title: "Information Security",
    description:
      "Protect your business with proactive strategies against cyber threats and data breaches.",
    link: "/informationsecurity",
  },
  {
    id: "03",
    image: "/assets/swiper/Iot.jpg",
    title: "IoT Services",
    description:
      "Integrate smart IoT solutions to drive automation and intelligent decision-making.",
    link: "/iotservices",
  },
  {
    id: "04",
    image: "/assets/swiper/power.jpg",
    title: "Power Solutions",
    description:
      "Reliable and efficient power backup and distribution systems for critical operations.",
    link: "/powersolutions",
  },
  {
    id: "05",
    image: "/assets/swiper/av.jpg",
    title: "AV Solutions",
    description:
      "Engaging audio-visual systems for modern conference, training, and collaboration needs.",
    link: "/avsolutions",
  },
  {
    id: "06",
    image: "/assets/swiper/it.jpg",
    title: "Professional IT Services",
    description:
      "Expert consulting, deployment, and managed services to support your IT landscape.",
    link: "/professionalitservices",
  },
  {
    id: "07",
    image: "/assets/swiper/infra-2.jpg",
    title: "Infrastructure Systems Group",
    description:
      "Build and scale IT infrastructure aligned with your enterprise growth strategy.",
    link: "/infrastructuresystemgroup",
  },
  {
    id: "08",
    image: "/assets/swiper/program.jpg",
    title: "Website Development",
    description:
      "Crafting responsive, secure, and scalable websites tailored to your business goals.",
    link: "/websitedevelopment",
  },
  {
    id: "09",
    image: "/assets/swiper/software.jpg",
    title: "Software Development",
    description:
      "End-to-end software solutions from concept to deployment and support.",
    link: "/softwaredevelopment",
  },
  {
    id: "10",
    image: "/assets/swiper/security.jpg",
    title: "Security Systems",
    description:
      "Comprehensive physical and digital security solutions for businesses of all sizes.",
    link: "/securitysystems",
  },
  {
    id: "11",
    image: "/assets/swiper/cyber.jpg",
    title: "Cyber Security Services",
    description:
      "Advanced protection strategies to secure networks, endpoints, and data assets.",
    link: "/cybersecurityservices",
  },
];

export default function EnterpriseSystemsGroup() {
  const NavigationRef = useRef(null);

  return (
    <div className="w-full font-sans text-black">
      {/* Hero Section */}
      <section
        className="w-full min-h-[90vh] bg-cover bg-center relative flex items-start justify-start"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div
          className="relative z-10 px-4 md:px-10 pt-[250px] text-white w-full max-w-7xl"
          data-aos="fade-up"
        >
          <div className="space-y-4 max-w-xl">
            <p className="inline-block border border-white px-4 py-1 rounded-full text-sm font-medium">
              Solutions
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Cyber Security Services
            </h1>
            {/* <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-full text-sm">
              Get in touch
            </button> */}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        className="w-full py-16 px-4 md:px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/bg-8.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6  text-sky-600">
         Cyber Security
            </h2>
            <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
              <p>
                In today’s hyper-connected world, cybersecurity is no longer an
                option—it is a necessity. As businesses undergo digital
                transformation, the attack surface expands, leaving
                organizations vulnerable to ever-evolving cyber threats. At
                Commnet, we understand the critical need for a comprehensive
                cybersecurity strategy that protects your digital assets while
                enabling growth and innovation.
              </p>
              <p>
                Our Cyber Security Services are designed to provide complete
                visibility, proactive defense, and rapid response across your
                enterprise. From securing endpoints and networks to safeguarding
                sensitive data and cloud environments, we deliver solutions that
                ensure business continuity and regulatory compliance.
              </p>
              <p>
                With the rise of ransomware, phishing, insider threats, and
                sophisticated malware, traditional security measures are no
                longer sufficient. We employ a layered defense approach,
                integrating advanced tools such as AI-driven threat detection,
                behavioral analytics, and real-time monitoring to counter both
                known and emerging threats.
              </p>
            </div>
          </div>

          <div className="w-full">
            <img
              src={OverviewImg}
              alt="Enterprise Overview"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Swiper Section */}
      <div className="relative px-4 py-16 bg-gray-100">
        <Swiper
          effect="coverflow"
          coverflowEffect={{
            scale: 0.8,
            slideShadows: false,
            depth: 100,
            modifier: 1,
          }}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
          }}
          modules={[Navigation, EffectCoverflow, Autoplay]}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            NavigationRef.current = swiper;
          }}
        >
          {TechnologyData.map((technology) => (
            <SwiperSlide key={technology.id}>
              <div
                className="bg-neutral-50 p-10 rounded-4xl text-white flex flex-col justify-end items-center h-[500px] bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${technology.image})` }}
              >
                <div className="h-[100px]"></div>
                <h1 className="text-4xl font-semibold mb-4">
                  {technology.title}
                </h1>
                <p className="text-center text-base font-medium mb-8">
                  {technology.description}
                </p>
                <a
                  href={technology.link}
                  className="bg-blue-600 px-5 py-2 rounded-xl"
                >
                  Read More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 text-black"
          onClick={() => NavigationRef.current?.slidePrev()}
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 text-black"
          onClick={() => NavigationRef.current?.slideNext()}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
