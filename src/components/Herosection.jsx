// // import { useState, useRef, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // export default function HeroSection() {
// //   // State is no longer needed to track video playback, but can be kept for other UI elements if necessary.
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
// //   const scrollRef = useRef(null);
// //   const videoRef = useRef(null);

// //   // Set up the video to autoplay on all devices
// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (video) {
// //       // The .play() method returns a promise. We'll try to play and catch errors.
// //       const playPromise = video.play();

// //       if (playPromise !== undefined) {
// //         playPromise
// //           .then(() => {
// //             // Autoplay started successfully.
// //             setIsVideoPlaying(true);
// //           })
// //           .catch((error) => {
// //             // Autoplay was prevented by the browser.
// //             setIsVideoPlaying(false);
// //             console.log("Autoplay blocked by browser:", error);
// //           });
// //       }

// //       // Handlers to keep the state in sync with the video's status
// //       const onPlay = () => setIsVideoPlaying(true);
// //       const onPause = () => setIsVideoPlaying(false);

// //       video.addEventListener("play", onPlay);
// //       video.addEventListener("pause", onPause);

// //       // Cleanup event listeners when the component unmounts
// //       return () => {
// //         video.removeEventListener("play", onPlay);
// //         video.removeEventListener("pause", onPause);
// //       };
// //     }
// //   }, []); // The empty dependency array ensures this runs only once on mount.

// //   return (
// //     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
// //       {/* Video Container */}
// //       <div className="absolute top-0 left-0 w-full h-full z-0">
// //         <video
// //           ref={videoRef}
// //           muted
// //           loop
// //           playsInline
// //           // Non-standard attributes for full compatibility
// //           webkit-playsinline="true"
// //           x-webkit-airplay="allow"
// //           preload="auto"
// //           disablePictureInPicture
// //           className="w-full h-full object-cover"
// //           onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
// //         >
// //           <source src="/assets/web-6.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       </div>

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
// import { useRef, useEffect } from "react";

// export default function HeroSection() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // This effect ensures playback is attempted even if autoplay is blocked initially.
//     const video = videoRef.current;
//     if (video) {
//       video.play().catch((error) => {
//         console.error("Video autoplay was prevented:", error);
//       });
//     }
//   }, []);

//   return (
//     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
//       {/* Video Container */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <video
//           ref={videoRef}
//           loop
//           muted // MUST be muted for autoplay
//           // CRITICAL for preventing fullscreen on iOS
//           autoPlay // Tells the browser to attempt playing immediately
//           controls={false} // Explicitly hides default browser controls
//           className="w-full h-full object-cover"
//           poster="/path/to/your/fallback-image.jpg" // A fallback image is highly recommended
//         >
//           <source src="/assets/web-6.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

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
//     </section>
//   );
// }
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    // This effect ensures playback is attempted even if autoplay is blocked initially.
    const video = videoRef.current;
    if (video) {
      // We ensure the video is ready to play before calling play()
      video.play().catch((error) => {
        console.error("Video autoplay was prevented:", error);
        // You could add logic here to show a play button if autoplay fails.
      });
    }
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          loop
          muted // Essential for autoplay in most browsers
          autoPlay // Tells the browser to attempt playing immediately
          playsInline // ✅ CRITICAL FIX for iOS: prevents fullscreen takeover
          controls={false}
          className="w-full h-full object-cover"
          poster="/path/to/your/fallback-image.jpg" // Good practice for load/fail states
        >
          <source src="/assets/web-6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

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
    </section>
  );
}
