
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FiBriefcase,
//   FiZap,
//   FiShield,
//   FiShoppingCart,
//   FiCpu,
//   FiHardDrive,
// } from "react-icons/fi";

// const industries = [
//   {
//     icon: FiBriefcase,
//     title: "Banking & Financial",
//     description:
//       "Helping financial institutions digitize, secure, and scale with modern cloud-native solutions.",
//   },
//   {
//     icon: FiZap,
//     title: "Energy & Utilities",
//     description:
//       "Empowering clean energy and sustainable tech with smart monitoring systems.",
//   },
//   {
//     icon: FiShield,
//     title: "Public Sector",
//     description:
//       "Enabling secure, citizen-focused digital services for government bodies.",
//   },
//   {
//     icon: FiShoppingCart,
//     title: "Retail & eCommerce",
//     description:
//       "Modern platforms for personalization, security, and omnichannel fulfillment.",
//   },
//   {
//     icon: FiCpu,
//     title: "Technology Providers",
//     description:
//       "Supporting SaaS, platform teams, and tech innovators with robust infrastructure.",
//   },
//   {
//     icon: FiHardDrive,
//     title: "Private Workstations",
//     description:
//       "Accelerating performance with isolated, secure, high-speed environments.",
//   },
// ];

// export default function IndustriesModern() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   return (
//     <section
//       className="relative py-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat font-sans overflow-hidden"
//       style={{ backgroundImage: "url('/assets/bg-8.jpg')" }}
//     >
//       {/* White overlay for readability */}
//       <div className="absolute inset-0 bg-white/50  z-0"></div>

//       <div className="relative z-10">
//         <h2
//           className="text-4xl font-bold text-center mb-16"
//           data-aos="fade-down"
//         >
//           <span className="text-sky-600">Industries</span> <span className="text-red-600">We Work</span>
//         </h2>

//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//           data-aos="fade-up"
//         >
//           {industries.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/80 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition rounded-2xl p-6 flex flex-col justify-between h-full"
//             >
//               {/* Icon Badge */}
//               <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-xl border border-sky-200 mb-4">
//                 <item.icon size={24} className="text-sky-600" />
//               </div>

//               {/* Content */}
//               <div className="flex-grow">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>

//               {/* Read More */}
//               <div className="pt-5">
//                 <a
//                   href="#"
//                   className="inline-block px-4 py-1 text-sm bg-sky-50 text-sky-700 rounded-full font-medium hover:bg-sky-100 transition"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiBriefcase,
  FiZap,
  FiShield,
  FiShoppingCart,
  FiCpu,
  FiHardDrive,
} from "react-icons/fi";

const industries = [
  {
    icon: FiBriefcase,
    title: "Banking & Financial",
    description:
      "Helping financial institutions digitize, secure, and scale with modern cloud-native solutions.",
  },
  {
    icon: FiZap,
    title: "Energy & Utilities",
    description:
      "Empowering clean energy and sustainable tech with smart monitoring systems.",
  },
  {
    icon: FiShield,
    title: "Public Sector",
    description:
      "Enabling secure, citizen-focused digital services for government bodies.",
  },
  {
    icon: FiShoppingCart,
    title: "Retail & eCommerce",
    description:
      "Modern platforms for personalization, security, and omnichannel fulfillment.",
  },
  {
    icon: FiCpu,
    title: "Technology Providers",
    description:
      "Supporting SaaS, platform teams, and tech innovators with robust infrastructure.",
  },
  {
    icon: FiHardDrive,
    title: "Private Workstations",
    description:
      "Accelerating performance with isolated, secure, high-speed environments.",
  },
];

export default function IndustriesModern() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      className="relative py-20 px-6 md:px-20 bg-cover bg-center bg-no-repeat font-sans overflow-hidden"
      style={{ backgroundImage: "url('/assets/bg-8.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/50 z-0"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-down">
          <span className="text-sky-600">Industries</span>{" "}
          <span className="text-red-600">We Work</span>
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade-up">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition rounded-2xl p-6 flex flex-col justify-between h-full"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-xl border border-sky-200 mb-4">
                <item.icon size={24} className="text-sky-600" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-5">
                {/* <a
                  href="#"
                  className="inline-block px-4 py-1 text-sm bg-sky-50 text-sky-700 rounded-full font-medium hover:bg-sky-100 transition"
                >
                  Read More →
                </a> */}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="block md:hidden" data-aos="fade-up">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="!pb-10 " // Add bottom space for dots
          >
            {industries.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/80 backdrop-blur-lg border border-gray-200 hover:shadow-xl transition rounded-2xl p-6 flex flex-col justify-between h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-xl border border-sky-200 mb-4">
                    <item.icon size={24} className="text-sky-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="pt-5">
                    {/* <a
                      href="#"
                      className="inline-block px-4 py-1 text-sm bg-sky-50 text-sky-700 rounded-full font-medium hover:bg-sky-100 transition"
                    >
                      Read More →
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
