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
// // //       <img
// // //         src="/assets/hero.jpg"
// // //         alt="Hero Background"
// // //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// // //       />

// // //       {/* Overlay */}
// // //       <div className="absolute inset-0 bg-black/40 z-10" />

// // //       {/* Right-side Nav Links */}
// // //       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex flex-col items-end space-y-2 leading-5">
// // //         <a href="#">Home</a>
// // //         <a href="#">About Us</a>
// // //         <a href="#">Services</a>
// // //         <a href="#">Industries</a>
// // //         <a href="#">Partnership</a>
// // //         <a href="#">Projects</a>
// // //         <a href="#">Contact Us</a>
// // //       </div>
// // //       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20" />

// // //       {/* Left-Aligned Heading */}
// // //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// // //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// // //           Integration Simplified Your Communication & Networking Partner
// // //         </h1>
// // //         <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// // //           Learn More
// // //         </button>
// // //       </div>

// // //       {/* Scroll Button */}
// // //       <button
// // //         onClick={scrollToNext}
// // //         className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full flex items-center justify-center font-medium"
// // //       >
// // //         Scroll
// // //       </button>

// // //       {/* Target for scroll button */}
// // //       <div ref={scrollRef} className="h-[1px]" />
// // //     </section>
// // //   );
// // // }
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
// //         <source src="/assets/web-2.mp4" type="video/webm" />
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
// import { useRef } from "react";

// export default function HeroSection() {
//   const scrollRef = useRef(null);

//   const scrollToNext = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
//       {/* Background Video – iOS Friendly */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/assets/web-2.mp4" type="video/mp4" />
//         <source src="/assets/web-2.webm" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Content */}
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

//       <div ref={scrollRef} className="h-[1px]" />
//     </section>
//   );
// }
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const [isIOS, setIsIOS] = useState(false);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Detect iOS
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    setIsIOS(iOS);

    const video = videoRef.current;
    if (!video) return;

    // Multiple attempts to ensure autoplay works on iOS
    const forcePlay = async () => {
      try {
        // Set video properties before playing
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.loop = true;

        // Wait for video to be ready
        if (video.readyState >= 2) {
          await video.play();
        } else {
          video.addEventListener(
            "canplay",
            async () => {
              try {
                await video.play();
              } catch (error) {
                console.log("Canplay autoplay failed:", error);
              }
            },
            { once: true }
          );
        }
      } catch (error) {
        console.log("Initial autoplay failed:", error);

        // Fallback: try to play on any user interaction
        const playOnInteraction = async () => {
          try {
            video.muted = true;
            await video.play();
            // Remove listeners after successful play
            document.removeEventListener("touchstart", playOnInteraction);
            document.removeEventListener("click", playOnInteraction);
            document.removeEventListener("scroll", playOnInteraction);
          } catch (e) {
            console.log("Interaction play failed:", e);
          }
        };

        document.addEventListener("touchstart", playOnInteraction, {
          passive: true,
        });
        document.addEventListener("click", playOnInteraction);
        document.addEventListener("scroll", playOnInteraction, {
          passive: true,
        });
      }
    };

    // Multiple load attempts
    const handleLoadedData = () => {
      forcePlay();
    };

    const handleCanPlay = () => {
      forcePlay();
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);

    // Force load
    video.load();

    // Additional iOS-specific attempt after a short delay
    if (iOS) {
      setTimeout(() => {
        forcePlay();
      }, 500);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Background Video – Maximum iOS Compatibility */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        // All possible iOS compatibility attributes
        controls={false}
        disablePictureInPicture
        disableRemotePlaybook
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        // iOS specific attributes
        webkit-playsinline="true"
        playsinline="true"
        // Ensure muted for autoplay
        defaultMuted
        volume={0}
      >
        {/* 
          IMPORTANT: Your video MUST meet these requirements:
          - File size: Under 3MB (iOS limit for autoplay)
          - Codec: H.264 baseline profile, level 3.0
          - Container: MP4
          - Audio: None or AAC-LC
          - Resolution: Max 1920x1080
          - Frame rate: 30fps or lower
          - Pixel format: yuv420p
          
          Use this ffmpeg command to encode your video properly:
          ffmpeg -i input.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -an -movflags +faststart -b:v 500k output.mp4
        */}
        <source src="/assets/web-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
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

      {/* Debug info (remove in production) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 right-4 z-30 bg-black/80 text-white p-2 text-xs rounded">
          iOS: {isIOS ? "Yes" : "No"}
        </div>
      )}

      <div ref={scrollRef} className="h-[1px]" />
    </section>
  );
}
