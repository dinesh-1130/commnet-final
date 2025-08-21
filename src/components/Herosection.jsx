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
  const [videoError, setVideoError] = useState(false);
  const scrollRef = useRef(null);
  const videoRef = useRef(null);

  // Set up the video to autoplay on all devices and handle loading
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Handle video loading events to prevent gray background
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        setVideoError(false);
        // Force the video to be ready for mobile
        video.currentTime = 0.1;

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
              // On mobile, user interaction might be required
              if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                // Set up click handler for mobile
                const handleUserInteraction = () => {
                  video
                    .play()
                    .then(() => {
                      setIsVideoPlaying(true);
                    })
                    .catch(console.error);
                  document.removeEventListener(
                    "touchstart",
                    handleUserInteraction
                  );
                  document.removeEventListener("click", handleUserInteraction);
                };
                document.addEventListener("touchstart", handleUserInteraction, {
                  once: true,
                });
                document.addEventListener("click", handleUserInteraction, {
                  once: true,
                });
              }
            });
        }
      };

      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        setVideoError(false);
      };

      const handleError = () => {
        setVideoError(true);
        setIsVideoLoaded(false);
        console.error("Video failed to load");
      };

      // Handlers to keep the state in sync with the video's status
      const onPlay = () => setIsVideoPlaying(true);
      const onPause = () => setIsVideoPlaying(false);

      // Add all event listeners
      video.addEventListener("canplaythrough", handleCanPlay);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("loadedmetadata", handleLoadedData);
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);
      video.addEventListener("error", handleError);

      // For iOS, try to load the video
      video.load();

      // Cleanup event listeners when the component unmounts
      return () => {
        video.removeEventListener("canplaythrough", handleCanPlay);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("loadedmetadata", handleLoadedData);
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden font-['Lato']">
      {/* Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          disablePictureInPicture
          controls={false}
          className={`w-full h-full object-cover`}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            objectFit: "cover",
          }}
          // iOS specific attributes
          webkit-playsinline="true"
          x-webkit-airplay="allow"
        >
          <source src="/assets/web-6.mp4" type="video/mp4" />
          <source src="/assets/web-6.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Error fallback - shows if video fails to load */}
        {videoError && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-5">
            <div className="text-center text-white">
              <p className="text-lg mb-2">Unable to load video</p>
              <button
                onClick={() => {
                  setVideoError(false);
                  setIsVideoLoaded(false);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Retry
              </button>
            </div>
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
