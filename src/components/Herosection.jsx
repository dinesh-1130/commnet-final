// import { useState, useRef, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroSection() {
//   // State is no longer needed to track video playback, but can be kept for other UI elements if necessary.
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const scrollRef = useRef(null);
//   const videoRef = useRef(null);

//   // Set up the video to autoplay on all devices
//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       // The .play() method returns a promise. We'll try to play and catch errors.
//       const playPromise = video.play();

//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => {
//             // Autoplay started successfully.
//             setIsVideoPlaying(true);
//           })
//           .catch((error) => {
//             // Autoplay was prevented by the browser.
//             setIsVideoPlaying(false);
//             console.log("Autoplay blocked by browser:", error);
//           });
//       }

//       // Handlers to keep the state in sync with the video's status
//       const onPlay = () => setIsVideoPlaying(true);
//       const onPause = () => setIsVideoPlaying(false);

//       video.addEventListener("play", onPlay);
//       video.addEventListener("pause", onPause);

//       // Cleanup event listeners when the component unmounts
//       return () => {
//         video.removeEventListener("play", onPlay);
//         video.removeEventListener("pause", onPause);
//       };
//     }
//   }, []); // The empty dependency array ensures this runs only once on mount.

//   return (
//     <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
//       {/* Video Container */}
//       <div className="absolute top-0 left-0 w-full h-full z-0">
//         <video
//           ref={videoRef}
//           muted
//           loop
//           playsInline
//           // Non-standard attributes for full compatibility
//           webkit-playsinline="true"
//           x-webkit-airplay="allow"
//           preload="auto"
//           disablePictureInPicture
//           className="w-full h-full object-cover"
//           onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
//         >
//           <source src="/assets/web-6.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const scrollRef = useRef(null);
  const videoRef = useRef(null);

  // Set up the video to autoplay on all devices and handle loading
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Handle video loading events to prevent gray background
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        // Try to play the video once it's ready
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
            })
            .catch((error) => {
              setIsVideoPlaying(false);
              console.log("Autoplay blocked by browser:", error);
            });
        }
      };

      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      // Handlers to keep the state in sync with the video's status
      const onPlay = () => setIsVideoPlaying(true);
      const onPause = () => setIsVideoPlaying(false);

      // Add all event listeners
      video.addEventListener("canplaythrough", handleCanPlay);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);

      // Cleanup event listeners when the component unmounts
      return () => {
        video.removeEventListener("canplaythrough", handleCanPlay);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
      };
    }
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato'] bg-black">
      {/* Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          preload="metadata"
          disablePictureInPicture
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onContextMenu={(e) => e.preventDefault()}
          style={{ backgroundColor: "transparent" }}
        >
          <source src="/assets/web-6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading overlay - only shows while video is loading */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-5">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
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
