
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ourclients = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="relative py-[3em] bg-cover bg-center overflow-hidden shadow-inner"
      style={{ backgroundImage: "url('./assets/bg-9.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      <div
        className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col items-start gap-6 xl:gap-20 lg:px-10 px-5"
        data-aos="fade-up"
      >
        <div className="border px-4 py-2 rounded-xl font-medium lg:text-2xl bg-white bg-opacity-80">
         <span className="text-sky-600">Our </span> <span className="text-red-600">Clients</span>
        </div>

        {/* Infinite Edge-to-Edge Scrolling Logos */}
        <div className="relative overflow-hidden w-full -mt-6">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[
              "Client-12.jpg",
              "Client-13.jpg",
              "Client-14.jpg",
              "Client-15.jpg",
              "Client-16.jpg",
              "Client-18.jpg",
              "Client-23.jpg",
              "Client-24.jpg",
              "Client-26.jpg",
            ]
              .concat([
                "Client-12.jpg",
                "Client-13.jpg",
                "Client-14.jpg",
                "Client-15.jpg",
                "Client-16.jpg",
                "Client-18.jpg",
                "Client-23.jpg",
                "Client-24.jpg",
                "Client-26.jpg",
              ])
              .map((logo, idx) => (
                <img
                  key={idx}
                  src={`./assets/${logo}`}
                  alt=""
                  className="w-[140px] mx-12 inline-block"
                />
              ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ourclients;
