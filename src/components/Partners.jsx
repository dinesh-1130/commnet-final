
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const TrustedBy = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const logos = [
//     "Picture1.png",
//     "Picture2.png",
//     "Picture3.png",
//     "Picture4.png",
//     "Picture5.png",
//     "Picture6.png",
//     "Picture7.png",
//     "Picture8.png",
//     "Picture9.png",
//     "Picture10.png",
//     "Picture11.png",
//     "Picture12.png",
//     "Picture13.png",
//     "Picture14.png",
//     "Picture15.png",
//   ];

//   const repeatedLogos = [...logos, ...logos]; // Duplicate for seamless loop

//   return (
//     <div className="relative py-10 bg-white overflow-hidden" data-aos="fade-up">
//       <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-0"></div>

//       <div className="relative z-10 w-full px-4">
//         <h2 className="text-center text-xl font-semibold text-sky-700 mb-8">
//           Trusted By 
//         </h2>

//         {/* Continuous Marquee */}
//         <div className="overflow-hidden w-full">
//           <div className="flex w-max animate-continuous-marquee gap-16">
//             {repeatedLogos.map((logo, index) => (
//               <img
//                 key={index}
//                 src={`./assets/${logo}`}
//                 alt={`Client ${index}`}
//                 className="h-[40px] w-auto grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes continuous-marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }

//           .animate-continuous-marquee {
//             animation: continuous-marquee 40s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TrustedBy;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TrustedBy = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const logos = [
    "Picture1.png",
    "Picture2.png",
    "Picture3.png",
    "Picture4.png",
    "Picture5.png",
    "Picture6.png",
    "Picture7.png",
    "Picture8.png",
    "Picture9.png",
    "Picture10.png",
    "Picture11.png",
    "Picture12.png",
    "Picture13.png",
    "Picture14.png",
    "Picture15.png",
  ];

  const repeatedLogos = [...logos, ...logos]; // Duplicate for seamless loop

  return (
  <div className="relative min-h-[200px] py-10 bg-white overflow-hidden" data-aos="fade-up">
  <div className="relative z-10 w-full px-4">
    <h2 className="text-center text-xl font-semibold text-sky-700 mb-8">
      Trusted By 
    </h2>

    {/* Centered Marquee */}
    <div className="flex items-center justify-center h-[100px] overflow-hidden w-full">
      <div className="flex w-max animate-continuous-marquee gap-16">
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={`./assets/${logo}`}
            alt={`Client ${index}`}
            className="h-[40px] w-auto transition duration-300"
          />
        ))}
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes continuous-marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-continuous-marquee {
        animation: continuous-marquee 20s linear infinite;
      }
    `}
  </style>
</div>

  );
};

export default TrustedBy;