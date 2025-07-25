// // // // import { useState, useRef } from "react";
// // // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // // export default function HeroSection() {
// // // //   const [activeCard, setActiveCard] = useState(0);
// // // //   const scrollRef = useRef(null);

// // // //   const handleNext = () => {
// // // //     setActiveCard((prev) => (prev + 1) % cards.length);
// // // //   };

// // // //   const handlePrev = () => {
// // // //     setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
// // // //   };

// // // //   const scrollToNext = () => {
// // // //     if (scrollRef.current) {
// // // //       scrollRef.current.scrollIntoView({ behavior: "smooth" });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
// // // //       {/* Static Background Image */}
// // // //       <img
// // // //         src="/assets/hero.jpg"
// // // //         alt="Hero Background"
// // // //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// // // //       />

// // // //       {/* Overlay */}
// // // //       <div className="absolute inset-0 bg-black/40 z-10" />

// // // //       {/* Right-side Nav Links */}
// // // //       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex flex-col items-end space-y-2 leading-5">
// // // //         <a href="#">Home</a>
// // // //         <a href="#">About Us</a>
// // // //         <a href="#">Services</a>
// // // //         <a href="#">Industries</a>
// // // //         <a href="#">Partnership</a>
// // // //         <a href="#">Projects</a>
// // // //         <a href="#">Contact Us</a>
// // // //       </div>
// // // //       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20" />

// // // //       {/* Left-Aligned Heading */}
// // // //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// // // //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// // // //           Integration Simplified Your Communication & Networking Partner
// // // //         </h1>
// // // //         <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// // // //           Learn More
// // // //         </button>
// // // //       </div>

// // // //       {/* Scroll Button */}
// // // //       <button
// // // //         onClick={scrollToNext}
// // // //         className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full flex items-center justify-center font-medium"
// // // //       >
// // // //         Scroll
// // // //       </button>

// // // //       {/* Target for scroll button */}
// // // //       <div ref={scrollRef} className="h-[1px]" />
// // // //     </section>
// // // //   );
// // // // }
// import { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroSection() {
//   const [activeCard, setActiveCard] = useState(0);
//   const scrollRef = useRef(null);

//   const handleNext = () => {
//     setActiveCard((prev) => (prev + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   const scrollToNext = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
//       {/* Static Background Image */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/assets/web-2.mp4" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/*
//       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex-col items-end space-y-2 leading-5 hidden md:flex">
//         <a href="#">Home</a>
//         <a href="#">About Us</a>
//         <a href="#">Services</a>
//         <a href="#">Industries</a>
//         <a href="#">Partnership</a>
//         <a href="#">Projects</a>
//         <a href="#">Contact Us</a>
//       </div>
//       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20 hidden md:block" /> */}

//       {/* Left-Aligned Heading */}
//       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
//         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
//           Integration Simplified Your{" "}
//           <span className="text-red-600">Communication </span>& Networking
//           Partner
//         </h1>
//         {/* <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
//           Learn More
//         </button> */}

//         <a href="/aboutus">
//           <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
//             Learn More
//           </button>
//         </a>
//       </div>

//       {/* Scroll Button (hidden on mobile) */}
//       {/* <button
//   onClick={scrollToNext}
//   className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full items-center justify-center font-medium hidden md:flex"
// >
//   Scroll
// </button> */}

//       {/* Target for scroll button */}
//       <div ref={scrollRef} className="h-[1px]" />
//     </section>
//   );
// }
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef(null);
  const videoRef = useRef(null);

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Force video play on iOS
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties for iOS compatibility
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("playsinline", "true");
      video.muted = true;
      video.defaultMuted = true;

      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      }
    }
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Background Video with iOS optimization */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <source src="/assets/web-6.mp4" type="video/mp4" />
        <source src="/assets/web-2.webm" type="video/webm" />
        {/* Fallback image for devices that don't support video */}
        <img
          src="/assets/fallback-bg.jpg"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Left-Aligned Heading */}
      <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Integration Simplified Your{" "}
          <span className="text-red-600">Communication </span>& Networking
          Partner
        </h1>

        <a href="/aboutus">
          <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Learn More
          </button>
        </a>
      </div>

      {/* Target for scroll button */}
      <div ref={scrollRef} className="h-[1px]" />
    </section>
  );
}
