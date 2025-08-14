// // // // // // import { useState, useRef } from "react";
// // // // // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // // // // export default function HeroSection() {
// // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // //   const scrollRef = useRef(null);

// // // // // //   const handleNext = () => {
// // // // // //     setActiveCard((prev) => (prev + 1) % cards.length);
// // // // // //   };

// // // // // //   const handlePrev = () => {
// // // // // //     setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
// // // // // //   };

// // // // // //   const scrollToNext = () => {
// // // // // //     if (scrollRef.current) {
// // // // // //       scrollRef.current.scrollIntoView({ behavior: "smooth" });
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
// // // // // //       {/* Static Background Image */}
// // // // // //       <img
// // // // // //         src="/assets/hero.jpg"
// // // // // //         alt="Hero Background"
// // // // // //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// // // // // //       />

// // // // // //       {/* Overlay */}
// // // // // //       <div className="absolute inset-0 bg-black/40 z-10" />

// // // // // //       {/* Right-side Nav Links */}
// // // // // //       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex flex-col items-end space-y-2 leading-5">
// // // // // //         <a href="#">Home</a>
// // // // // //         <a href="#">About Us</a>
// // // // // //         <a href="#">Services</a>
// // // // // //         <a href="#">Industries</a>
// // // // // //         <a href="#">Partnership</a>
// // // // // //         <a href="#">Projects</a>
// // // // // //         <a href="#">Contact Us</a>
// // // // // //       </div>
// // // // // //       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20" />

// // // // // //       {/* Left-Aligned Heading */}
// // // // // //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// // // // // //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// // // // // //           Integration Simplified Your Communication & Networking Partner
// // // // // //         </h1>
// // // // // //         <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// // // // // //           Learn More
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Scroll Button */}
// // // // // //       <button
// // // // // //         onClick={scrollToNext}
// // // // // //         className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full flex items-center justify-center font-medium"
// // // // // //       >
// // // // // //         Scroll
// // // // // //       </button>

// // // // // //       {/* Target for scroll button */}
// // // // // //       <div ref={scrollRef} className="h-[1px]" />
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // import { useState, useRef } from "react";
// // // import { ChevronLeft, ChevronRight } from "lucide-react";

// // // export default function HeroSection() {
// // //   const [activeCard, setActiveCard] = useState(0);
// // //   const scrollRef = useRef(null);

// // //   const handleNext = () => {
// // //     setActiveCard((prev) => (prev + 1) % cards.length);
// // //   };

// // //   const handlePrev = () => {
// // //     setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
// // //   };

// // //   const scrollToNext = () => {
// // //     if (scrollRef.current) {
// // //       scrollRef.current.scrollIntoView({ behavior: "smooth" });
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
// // //       {/* Static Background Image */}
// // //       <video
// // //         autoPlay
// // //         muted
// // //         loop
// // //         playsInline
// // //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// // //       >
// // //         <source src="/assets/web-2.mp4" type="video/webm" />
// // //         Your browser does not support the video tag.
// // //       </video>

// // //       {/* Overlay */}
// // //       <div className="absolute inset-0 bg-black/40 z-10" />

// // //       {/*
// // //       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex-col items-end space-y-2 leading-5 hidden md:flex">
// // //         <a href="#">Home</a>
// // //         <a href="#">About Us</a>
// // //         <a href="#">Services</a>
// // //         <a href="#">Industries</a>
// // //         <a href="#">Partnership</a>
// // //         <a href="#">Projects</a>
// // //         <a href="#">Contact Us</a>
// // //       </div>
// // //       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20 hidden md:block" /> */}

// // //       {/* Left-Aligned Heading */}
// // //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// // //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// // //           Integration Simplified Your{" "}
// // //           <span className="text-red-600">Communication </span>& Networking
// // //           Partner
// // //         </h1>
// // //         {/* <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// // //           Learn More
// // //         </button> */}

// // //         <a href="/aboutus">
// // //           <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// // //             Learn More
// // //           </button>
// // //         </a>
// // //       </div>

// // //       {/* Scroll Button (hidden on mobile) */}
// // //       {/* <button
// // //   onClick={scrollToNext}
// // //   className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full items-center justify-center font-medium hidden md:flex"
// // // >
// // //   Scroll
// // // </button> */}

// // //       {/* Target for scroll button */}
// // //       <div ref={scrollRef} className="h-[1px]" />
// // //     </section>
// // //   );
// // // }
// // import { useState, useRef, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // export default function HeroSection() {
// //   const [activeCard, setActiveCard] = useState(0);
// //   const scrollRef = useRef(null);
// //   const videoRef = useRef(null);

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

// //   // Force video play on iOS
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (video) {
// //       // Set video properties for iOS compatibility
// //       video.setAttribute("webkit-playsinline", "true");
// //       video.setAttribute("playsinline", "true");
// //       video.muted = true;
// //       video.defaultMuted = true;

// //       // Try to play the video
// //       const playPromise = video.play();
// //       if (playPromise !== undefined) {
// //         playPromise.catch((error) => {
// //           console.log("Video autoplay failed:", error);
// //         });
// //       }
// //     }
// //   }, []);

// //   return (
// //     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
// //       {/* Background Video with iOS optimization */}
// //       <video
// //         ref={videoRef}
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //         webkit-playsinline="true"
// //         preload="metadata"
// //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// //         style={{
// //           objectFit: "cover",
// //           width: "100%",
// //           height: "100%",
// //         }}
// //       >
// //         <source src="/assets/web-6.mp4" type="video/mp4" />

// //         {/* Fallback image for devices that don't support video */}
// //         <img
// //           src="/assets/fallback-bg.jpg"
// //           alt="Background"
// //           className="absolute top-0 left-0 w-full h-full object-cover"
// //         />
// //       </video>

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/40 z-10" />

// //       {/* Left-Aligned Heading */}
// //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// //           Integration Simplified Your{" "}
// //           <span className="text-red-600">Communication </span>& Networking
// //           Partner
// //         </h1>

// //         <a href="/aboutus">
// //           <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// //             Learn More
// //           </button>
// //         </a>
// //       </div>

// //       {/* Target for scroll button */}
// //       <div ref={scrollRef} className="h-[1px]" />
// //     </section>
// //   );
// // }
// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroSection() {
//   const [activeCard, setActiveCard] = useState(0);
//   const scrollRef = useRef(null);
//   const videoRef = useRef(null);

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

//   // Enhanced video setup for all devices including iOS
//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       // Set all necessary attributes for cross-device compatibility
//       video.setAttribute("webkit-playsinline", "true");
//       video.setAttribute("playsinline", "true");
//       video.setAttribute("x-webkit-airplay", "allow");
//       video.muted = true;
//       video.defaultMuted = true;
//       video.autoplay = true;
//       video.loop = true;
//       video.controls = false;
//       video.disablePictureInPicture = true;

//       // Additional iOS-specific settings
//       video.setAttribute("preload", "auto");
//       video.setAttribute("poster", ""); // Empty poster to prevent thumbnail

//       // Remove any potential controls or UI elements
//       video.removeAttribute("controls");
//       video.style.pointerEvents = "none"; // Prevent tap to show controls

//       // Force play with error handling
//       const attemptPlay = async () => {
//         try {
//           await video.play();
//           console.log("Video playing successfully");
//         } catch (error) {
//           console.log("Initial autoplay failed, retrying...", error);
//           // Retry after a short delay
//           setTimeout(async () => {
//             try {
//               await video.play();
//             } catch (retryError) {
//               console.log("Video autoplay failed after retry:", retryError);
//             }
//           }, 100);
//         }
//       };

//       // Start playback
//       if (video.readyState >= 2) {
//         attemptPlay();
//       } else {
//         video.addEventListener("loadeddata", attemptPlay, { once: true });
//       }

//       // Handle visibility changes (when user switches tabs)
//       const handleVisibilityChange = () => {
//         if (!document.hidden && video.paused) {
//           video.play().catch(console.log);
//         }
//       };

//       document.addEventListener("visibilitychange", handleVisibilityChange);

//       // Cleanup
//       return () => {
//         document.removeEventListener(
//           "visibilitychange",
//           handleVisibilityChange
//         );
//       };
//     }
//   }, []);

//   return (
//     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
//       {/* Background Video optimized for all devices */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         webkit-playsinline="true"
//         x-webkit-airplay="allow"
//         preload="auto"
//         disablePictureInPicture
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         style={{
//           objectFit: "cover",
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none", // Prevents tap interactions that might show controls
//         }}
//         onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
//         onLoadedData={(e) => {
//           // Ensure video plays when loaded
//           e.target.play().catch(console.log);
//         }}
//       >
//         <source src="/assets/web-6.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle video interaction for mobile
  const handleVideoClick = async () => {
    const video = videoRef.current;
    if (video && !isVideoPlaying) {
      try {
        video.muted = true;
        await video.play();
        setIsVideoPlaying(true);
      } catch (error) {
        console.log("Video play failed:", error);
      }
    }
  };

  // Enhanced video setup
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set all necessary attributes
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("playsinline", "true");
      video.setAttribute("x-webkit-airplay", "allow");
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.preload = "metadata";
      video.disablePictureInPicture = true;

      // Remove controls completely
      video.controls = false;
      video.removeAttribute("controls");

      const attemptAutoplay = async () => {
        try {
          await video.play();
          setIsVideoPlaying(true);
          console.log("Video autoplaying successfully");
        } catch (error) {
          console.log("Autoplay blocked:", error);
          setIsVideoPlaying(false);
        }
      };

      // Event listeners
      const onLoadedMetadata = () => {
        if (!isMobile) {
          attemptAutoplay();
        }
      };

      const onCanPlay = () => {
        if (!isMobile) {
          attemptAutoplay();
        }
      };

      const onPlay = () => {
        setIsVideoPlaying(true);
      };

      const onPause = () => {
        setIsVideoPlaying(false);
      };

      video.addEventListener("loadedmetadata", onLoadedMetadata);
      video.addEventListener("canplay", onCanPlay);
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);

      // For desktop, try to play immediately
      if (!isMobile && video.readyState >= 2) {
        attemptAutoplay();
      }

      // Handle visibility changes
      const handleVisibilityChange = () => {
        if (!document.hidden && isVideoPlaying && video.paused) {
          video.play().catch(console.log);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Cleanup
      return () => {
        video.removeEventListener("loadedmetadata", onLoadedMetadata);
        video.removeEventListener("canplay", onCanPlay);
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }
  }, [isMobile, isVideoPlaying]);

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Video Container with Click Handler for Mobile */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        onClick={isMobile && !isVideoPlaying ? handleVideoClick : undefined}
        style={{ cursor: isMobile && !isVideoPlaying ? "pointer" : "default" }}
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          preload="metadata"
          disablePictureInPicture
          className="w-full h-full object-cover"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/assets/web-6.mp4" type="video/mp4" />
        </video>
      </div>

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
