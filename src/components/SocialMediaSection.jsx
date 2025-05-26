
// import { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaQuoteLeft, FaQuoteRight, FaUserTie, FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Mr. Kamel Abdullah",
//     position: "Group Director - IT, NAFFCO",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "Commnet has proven their commitment to be a reliable and consistent contractor. Their expertise and responsiveness give them an edge in project execution.",
//   },
//   {
//     name: "Biju Alex",
//     position: "Regional IT Manager, Aptec - Ingram Micro",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "We engaged Commnet for multiple IT projects including structured cabling and data centers. Their execution and professionalism exceeded expectations.",
//   },
//   {
//     name: "Mohammad Raffi. A",
//     position: "Senior IT Consultant, Jotun UAE",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "Commnet is our trusted partner in Enterprise Network. They ensure high availability and timely delivery with top-notch service quality.",
//   },
//   {
//     name: "Ahmad Abou Dakka",
//     position: "Head of Infrastructure & Information Security, UAEFA (Dubai)",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "Commnet is very Agile to our IT requirements. Commnet works the best possible IT solutions while reducing the down time and cost. Commnet manages our complete IT Infrastructure including servers, storage, cybersecurity, networks and computers. We are working together for years and would recommend Commnet anytime.",
//   },
//   {
//     name: "Paranth.L",
//     position: "Group IT Manager - Das Holding",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "We would like to express our sincere appreciation for your service to us as one of our most reliable regular suppliers since 2008. You have provided the highest level of support and quality of work & products with even better customer service. Deliveries are often received earlier than expected, and you are quick to resolve any issues that arise. We look forward to extending our contract with you for years to come and hope you will continue to provide such excellent service to us.",
//   },
//   {
//     name: "Sandiip Chhabra",
//     position: "Founder – Goodlife Technologies",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "Commnet accepted the challenge and worked as a team player, owing responsibilities even beyond their scope. Their professionalism and commitment to successful project delivery is outstanding.",
//   },
//   {
//     name: "Mohammed Aleemuddin",
//     position: "IT Administrator, Al Rawabi Dairy Co. L.L.C.",
//     icon: <FaUserTie className="text-white text-3xl" />,
//     feedback:
//       "They do an excellent job and are always punctual. We’ve collaborated on numerous projects and they never compromise on quality. Their client dedication surpasses the competition.",
//   },
// ];

// export default function TestimonialsSection() {
//   useEffect(() => {
//     AOS.init({ duration: 650, once: true });
//   }, []);

//   return (
//     <section
//       className="bg-gradient-to-r from-gray-50 to-white py-20 px-4 md:px-20 font-sans"
//       data-aos="fade-up"
//     >
//       <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-down">
//         <span className="text-sky-600">Our</span> <span className="text-red-600">Client Says</span>
//       </h2>
//       <p
//         className="text-center text-gray-500 mb-12 max-w-2xl mx-auto"
//         data-aos="fade-up"
//         data-aos-delay="200"
//       >
//         Words from our trusted partners and clients who've walked the journey with us.
//       </p>

//       <Swiper
//         modules={[Pagination]}
//         pagination={{ clickable: true }}
//         spaceBetween={30}
//         slidesPerView={1}
//          className="!pb-10 "
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1280: { slidesPerView: 3 },
          
//         }}
//       >
//         {testimonials.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="h-full flex" data-aos="zoom-in" data-aos-delay={index * 100}>
//               <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[400px] w-full">
//                 <FaQuoteLeft className="text-sky-600 text-2xl absolute top-4 left-4" />
//                 <div>
//                   <div className="flex justify-center mb-4">
//                     <div className="bg-sky-600 w-14 h-14 flex items-center justify-center rounded-full shadow-md">
//                       {item.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-center text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h4>
//                   <p className="text-center text-sm text-gray-500 mb-3">
//                     {item.position}
//                   </p>
//                   <div className="flex justify-center text-yellow-500 mb-3">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed text-center overflow-y-auto max-h-[120px] px-2 scrollbar-thin scrollbar-thumb-gray-300">
//                     {item.feedback}
//                   </p>
//                 </div>
//                 <FaQuoteRight className="text-sky-600 text-2xl absolute bottom-4 right-4" />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
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
import { FaQuoteLeft, FaQuoteRight, FaUserTie, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mr. Kamel Abdullah",
    position: "Group Director - IT, NAFFCO",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet has proven their commitment to be a reliable and consistent contractor. Their expertise and responsiveness give them an edge in project execution.",
  },
  {
    name: "Biju Alex",
    position: "Regional IT Manager, Aptec - Ingram Micro",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "We engaged Commnet for multiple IT projects including structured cabling and data centers. Their execution and professionalism exceeded expectations.",
  },
  {
    name: "Mohammad Raffi. A",
    position: "Senior IT Consultant, Jotun UAE",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet is our trusted partner in Enterprise Network. They ensure high availability and timely delivery with top-notch service quality.",
  },
  {
    name: "Ahmad Abou Dakka",
    position: "Head of Infrastructure & Information Security, UAEFA (Dubai)",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet is very Agile to our IT requirements. Commnet works the best possible IT solutions while reducing the down time and cost. Commnet manages our complete IT Infrastructure including servers, storage, cybersecurity, networks and computers. We are working together for years and would recommend Commnet anytime.",
  },
  {
    name: "Paranth.L",
    position: "Group IT Manager - Das Holding",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "We would like to express our sincere appreciation for your service to us as one of our most reliable regular suppliers since 2008. You have provided the highest level of support and quality of work & products with even better customer service. Deliveries are often received earlier than expected, and you are quick to resolve any issues that arise. We look forward to extending our contract with you for years to come and hope you will continue to provide such excellent service to us.",
  },
  {
    name: "Sandiip Chhabra",
    position: "Founder – Goodlife Technologies",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "Commnet accepted the challenge and worked as a team player, owing responsibilities even beyond their scope. Their professionalism and commitment to successful project delivery is outstanding.",
  },
  {
    name: "Mohammed Aleemuddin",
    position: "IT Administrator, Al Rawabi Dairy Co. L.L.C.",
    icon: <FaUserTie className="text-white text-3xl" />,
    feedback:
      "They do an excellent job and are always punctual. We’ve collaborated on numerous projects and they never compromise on quality. Their client dedication surpasses the competition.",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 650, once: true });
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-gray-50 to-white py-20 px-4 md:px-20 font-sans"
      data-aos="fade-up"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-800" data-aos="fade-down">
        <span className="text-sky-600">Our</span> <span className="text-red-600">Client Says</span>
      </h2>
      <p
        className="text-center text-gray-500 mb-12 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Words from our trusted partners and clients who've walked the journey with us.
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="!pb-10"
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[400px] w-full">
                <FaQuoteLeft className="text-sky-600 text-2xl absolute top-4 left-4" />
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="bg-sky-600 w-14 h-14 flex items-center justify-center rounded-full shadow-md">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-center text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-center text-sm text-gray-500 mb-3">
                    {item.position}
                  </p>
                  <div className="flex justify-center text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-left overflow-y-auto max-h-[120px] px-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {item.feedback}
                  </p>
                </div>
                <FaQuoteRight className="text-sky-600 text-2xl absolute bottom-4 right-4" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
