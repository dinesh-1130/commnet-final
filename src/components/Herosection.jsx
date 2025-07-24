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
// //       <img
// //         src="/assets/hero.jpg"
// //         alt="Hero Background"
// //         className="absolute top-0 left-0 w-full h-full object-cover z-0"
// //       />

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/40 z-10" />

// //       {/* Right-side Nav Links */}
// //       <div className="absolute top-80 right-16 z-20 text-white font-medium text-sm flex flex-col items-end space-y-2 leading-5">
// //         <a href="#">Home</a>
// //         <a href="#">About Us</a>
// //         <a href="#">Services</a>
// //         <a href="#">Industries</a>
// //         <a href="#">Partnership</a>
// //         <a href="#">Projects</a>
// //         <a href="#">Contact Us</a>
// //       </div>
// //       <div className="absolute top-80 right-12 h-[190px] border-[2px] border-white z-20" />

// //       {/* Left-Aligned Heading */}
// //       <div className="relative z-20 flex top-20 flex-col items-start justify-center h-full px-6 text-white max-w-[90%] sm:max-w-[60%]">
// //         <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
// //           Integration Simplified Your Communication & Networking Partner
// //         </h1>
// //         <button className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
// //           Learn More
// //         </button>
// //       </div>

// //       {/* Scroll Button */}
// //       <button
// //         onClick={scrollToNext}
// //         className="absolute left-10 bottom-10 z-30 w-14 h-14 bg-white rounded-full flex items-center justify-center font-medium"
// //       >
// //         Scroll
// //       </button>

// //       {/* Target for scroll button */}
// //       <div ref={scrollRef} className="h-[1px]" />
// //     </section>
// //   );
// // }
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playAttempted, setPlayAttempted] = useState(false);
  const scrollRef = useRef(null);
  const videoRef = useRef(null);

  // Aggressive immediate video play on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video || playAttempted) return;

    setPlayAttempted(true);

    // Pre-configure video for maximum compatibility
    const configureVideo = () => {
      video.muted = true;
      video.volume = 0;
      video.playsInline = true;
      video.autoplay = true;
      video.controls = false;
      video.defaultMuted = true;

      // iOS specific attributes
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("playsinline", "true");
      video.setAttribute("x-webkit-airplay", "allow");
      video.setAttribute("preload", "auto");
    };

    // Multiple aggressive play attempts
    const attemptPlay = async (attemptNumber = 1) => {
      try {
        configureVideo();

        console.log(`Play attempt ${attemptNumber}`);

        // Force reload for fresh attempt
        if (attemptNumber > 1) {
          video.load();
          await new Promise((resolve) => setTimeout(resolve, 50));
        }

        const playPromise = video.play();

        if (playPromise !== undefined) {
          await playPromise;
          setVideoLoaded(true);
          console.log(`Video playing successfully on attempt ${attemptNumber}`);
          return true;
        }
      } catch (error) {
        console.log(`Play attempt ${attemptNumber} failed:`, error.message);

        if (attemptNumber < 5) {
          // Progressive delay for subsequent attempts
          const delay = attemptNumber * 100;
          setTimeout(() => attemptPlay(attemptNumber + 1), delay);
        } else {
          console.log("All autoplay attempts exhausted");
        }
      }
      return false;
    };

    // Immediate first attempt
    attemptPlay();

    // Event-based play attempts
    const playOnReady = () => attemptPlay();
    const playOnLoadedData = () => attemptPlay();
    const playOnCanPlayThrough = () => attemptPlay();

    video.addEventListener("loadedmetadata", playOnReady);
    video.addEventListener("loadeddata", playOnLoadedData);
    video.addEventListener("canplay", playOnReady);
    video.addEventListener("canplaythrough", playOnCanPlayThrough);

    // Force attempt after DOM is fully ready
    const forcePlayAfterDelay = () => {
      setTimeout(() => attemptPlay(), 10);
      setTimeout(() => attemptPlay(), 50);
      setTimeout(() => attemptPlay(), 150);
      setTimeout(() => attemptPlay(), 300);
    };

    if (document.readyState === "complete") {
      forcePlayAfterDelay();
    } else {
      window.addEventListener("load", forcePlayAfterDelay);
    }

    // Cleanup
    return () => {
      video.removeEventListener("loadedmetadata", playOnReady);
      video.removeEventListener("loadeddata", playOnLoadedData);
      video.removeEventListener("canplay", playOnReady);
      video.removeEventListener("canplaythrough", playOnCanPlayThrough);
      window.removeEventListener("load", forcePlayAfterDelay);
    };
  }, [playAttempted]);

  // Intersection Observer for when video becomes visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (video.paused || video.ended)) {
            video.play().catch(console.log);
          }
        });
      },
      { threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Comprehensive user interaction handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playOnInteraction = (event) => {
      if (video.paused || video.ended) {
        video.play().catch(() => {});
      }
    };

    // Multiple interaction events for maximum coverage
    const events = [
      "touchstart",
      "touchend",
      "click",
      "scroll",
      "mousemove",
      "keydown",
      "focus",
      "blur",
      "resize",
      "orientationchange",
    ];

    events.forEach((eventType) => {
      document.addEventListener(eventType, playOnInteraction, {
        once: true,
        passive: true,
        capture: true,
      });
    });

    // Special handling for mobile
    const handleVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        setTimeout(() => video.play().catch(() => {}), 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      events.forEach((eventType) => {
        document.removeEventListener(eventType, playOnInteraction, true);
      });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Page focus/visibility play attempts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleFocus = () => {
      setTimeout(() => {
        if (video.paused) {
          video.play().catch(() => {});
        }
      }, 100);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("pageshow", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("pageshow", handleFocus);
    };
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
      {/* Fallback Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        }}
      />

      {/* Ultra-Optimized Video for Universal Autoplay */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        crossOrigin="anonymous"
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        style={{
          WebkitTransform: "translate3d(0, 0, 0)",
          transform: "translate3d(0, 0, 0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
          WebkitOptimizeLegibility: "optimizeSpeed",
          WebkitFontSmoothing: "antialiased",
        }}
        // Additional iOS compatibility attributes
        volume={0}
        defaultMuted={true}
        data-object-fit="cover"
        // Force immediate play attributes
        onLoadedMetadata={(e) => {
          e.target.play().catch(() => {});
        }}
        onLoadedData={(e) => {
          e.target.play().catch(() => {});
        }}
        onCanPlay={(e) => {
          e.target.play().catch(() => {});
        }}
        onCanPlayThrough={(e) => {
          e.target.play().catch(() => {});
        }}
        // Error handling
        onError={(e) => {
          console.log("Video error:", e);
          // Retry loading
          setTimeout(() => {
            e.target.load();
            e.target.play().catch(() => {});
          }, 1000);
        }}
      >
        {/* Multiple source formats for maximum compatibility */}
        <source src="/assets/web-2.mp4" type="video/mp4" />
        <source src="/assets/web-2.webm" type="video/webm" />
        <source src="/assets/web-2.ogv" type="video/ogg" />
        Your browser does not support the video tag.
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
          <button
            className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            onClick={() => {
              // Trigger video play on button click as backup
              const video = videoRef.current;
              if (video && video.paused) {
                video.play().catch(() => {});
              }
            }}
          >
            Learn More
          </button>
        </a>
      </div>

      {/* Target for scroll button */}
      <div ref={scrollRef} className="h-[1px]" />

      {/* Hidden play trigger for iOS - invisible but can be tapped */}
      <button
        className="absolute top-0 left-0 w-full h-full opacity-0 z-5"
        onClick={() => {
          const video = videoRef.current;
          if (video) {
            video.play().catch(() => {});
          }
        }}
        tabIndex={-1}
        aria-hidden="true"
      />
    </section>
  );
}
