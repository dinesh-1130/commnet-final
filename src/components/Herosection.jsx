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
// // import { useState, useRef } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // export default function HeroSection() {
// //   const [activeCard, setActiveCard] = useState(0);
// //   const scrollRef = useRef(null);

// //   const handleNext = () => {
// //     setActiveCard((prev) => (prev + 1) % cards.length);
// //   };

// //   const handlePrev = () => {
// //     setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
// //   };

// //   const scrollToNext = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
// //       {/* Static Background Image */}
// //       <video
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// //       >
// //         <source src="/assets/web-2.mp4" type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/40 z-10" />

// //       {/*
// //       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex-col items-end space-y-2 leading-5 hidden md:flex">
// //         <a href="#">Home</a>
// //         <a href="#">About Us</a>
// //         <a href="#">Services</a>
// //         <a href="#">Industries</a>
// //         <a href="#">Partnership</a>
// //         <a href="#">Projects</a>
// //         <a href="#">Contact Us</a>
// //       </div>
// //       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20 hidden md:block" /> */}

// //       {/* Left-Aligned Heading */}
// //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// //           Integration Simplified Your{" "}
// //           <span className="text-red-600">Communication </span>& Networking
// //           Partner
// //         </h1>
// //         {/* <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// //           Learn More
// //         </button> */}

// //         <a href="/aboutus">
// //           <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// //             Learn More
// //           </button>
// //         </a>
// //       </div>

// //       {/* Scroll Button (hidden on mobile) */}
// //       {/* <button
// //   onClick={scrollToNext}
// //   className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full items-center justify-center font-medium hidden md:flex"
// // >
// //   Scroll
// // </button> */}

// //       {/* Target for scroll button */}
// //       <div ref={scrollRef} className="h-[1px]" />
// //     </section>
// //   );
// // }
// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroSection() {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isIOS, setIsIOS] = useState(false);
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const scrollRef = useRef(null);
//   const videoRef = useRef(null);

//   // Detect iOS devices
//   useEffect(() => {
//     const detectIOS = () => {
//       return (
//         /iPad|iPhone|iPod/.test(navigator.userAgent) ||
//         (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
//       );
//     };
//     setIsIOS(detectIOS());
//   }, []);

//   // Handle video load
//   const handleVideoLoad = () => {
//     setVideoLoaded(true);
//     if (videoRef.current && isIOS) {
//       // Force play on iOS after user interaction
//       videoRef.current
//         .play()
//         .catch((e) => console.log("Video autoplay prevented:", e));
//     }
//   };

//   // Handle user interaction to start video on iOS
//   const handleUserInteraction = () => {
//     if (videoRef.current && isIOS && !videoLoaded) {
//       videoRef.current
//         .play()
//         .catch((e) => console.log("Video play failed:", e));
//     }
//   };

//   const handleNext = () => {
//     setActiveCard((prev) => (prev + 1) % 3); // Assuming 3 cards
//   };

//   const handlePrev = () => {
//     setActiveCard((prev) => (prev - 1 + 3) % 3);
//   };

//   const scrollToNext = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       className="relative w-screen h-screen overflow-hidden font-['Lato']"
//       onClick={handleUserInteraction}
//     >
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         onLoadedData={handleVideoLoad}
//         onCanPlay={handleVideoLoad}
//         style={{
//           // iOS-specific optimizations
//           WebkitPlaysinline: true,
//           objectFit: "cover",
//         }}
//       >
//         <source src="/assets/web-2.mp4" type="video/mp4" />
//         {/* Fallback image for when video fails */}
//       </video>

//       {/* Fallback background image for iOS or when video fails */}
//       {isIOS && !videoLoaded && (
//         <div
//           className="absolute top-0 left-0 w-full h-full z-0"
//           style={{
//             backgroundImage: "url('/assets/hero-fallback.jpg')", // Add a fallback image
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />
//       )}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* iOS Video Play Hint (shows briefly on iOS) */}
//       {isIOS && !videoLoaded && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
//           Tap to play video
//         </div>
//       )}

//       {/* Left-Aligned Heading */}
//       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
//         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
//           Integration Simplified Your{" "}
//           <span className="text-red-600">Communication </span>& Networking
//           Partner
//         </h1>

//         <a href="/aboutus">
//           <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
//             Learn More
//           </button>
//         </a>
//       </div>

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

  // Force video autoplay on all devices
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        // If autoplay fails, try again with user interaction
        const playVideo = () => {
          videoRef.current.play();
          document.removeEventListener("touchstart", playVideo);
          document.removeEventListener("click", playVideo);
        };
        document.addEventListener("touchstart", playVideo, { once: true });
        document.addEventListener("click", playVideo, { once: true });
      });
    }
  }, []);

  const handleNext = () => {
    setActiveCard((prev) => (prev + 1) % 3); // Assuming 3 cards
  };

  const handlePrev = () => {
    setActiveCard((prev) => (prev - 1 + 3) % 3);
  };

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{
          objectFit: "cover",
        }}
      >
        <source src="/assets/web-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
