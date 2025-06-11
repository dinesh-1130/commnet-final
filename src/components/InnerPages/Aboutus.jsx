
import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "/assets/Commnet.pdf";
import flipSound from "/assets/flip.mp3";
import { FaEye } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Aboutus() {
  const [showFlipbook, setShowFlipbook] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [actionType, setActionType] = useState(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Commnet_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const handleEmailSubmit = () => {
  if (email.trim() === '') {
    alert("Please enter a valid email address.");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbwoC0IQMwf0W_wghvxS7UNLFly0x0K5hEruku1q1TKTF3vVVxrS5XyPtNw569G13zEg/exec", {
    method: "POST",
     mode: "no-cors",
    headers: {
        "Content-Type": "application/x-form-urlencoded",
      },
    body: JSON.stringify({
      type: "subscribe",
      email: email
    })
  })
    // .then((res) => res.json())
    .then((res) => {
      // if (res.status === "302") {
        setShowEmailModal(false);
        if (actionType === 'view') {
          setShowFlipbook(true);
        } else if (actionType === 'download') {
          handleDownload();
        }
      // } else {
      //   alert("Failed to save email. Please try again.");
      // }
      setEmail("")
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong while submitting the email.");
    });
};


  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div
          className="h-[70vh] bg-gray-50 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/circuit-board-neon-background_23-2148335792.jpg')",
          }}
        >
          <div className="h-full flex justify-center items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white uppercase">
              Who WE ARE
            </div>
          </div>
        </div>

        <div className="min-h-screen flex max-w-[1440px] mx-auto py-[6.25em] flex-col gap-6 xl:gap-20 lg:px-10 px-5 font-sans">
          <AboutDetails />
          <MissionAndVision />
          <AboutCards />
          <OurJourney />

          <div className="w-full flex justify-center items-center gap-4">
            <div className="relative">
              <button
                onClick={() => {
                  setActionType("view");
                  setShowEmailModal(true);
                }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="flex items-center gap-2 px-6 py-2 mt-6 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
              >
                <FaEye className="w-4 h-4" />
                View Brochure
              </button>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-black text-white text-sm rounded p-2 shadow-lg">
                  <p>Click and drag the corners to flip pages. Use mouse wheel to zoom.</p>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setActionType("download");
                setShowEmailModal(true);
              }}
              className="px-6 py-2 mt-6 bg-red-600 text-white rounded-lg transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {showFlipbook && <PDFFlipbook onClose={() => setShowFlipbook(false)} />}

      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Enter your Email</h2>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 mb-4"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowEmailModal(false)}
                className="w-full py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEmailSubmit}
                className="w-full py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Aboutus;

const AboutDetails = () => (
<div className="px-4 sm:px-6 lg:px-20 py-10 font-sans">
  <div className="flex flex-col gap-6 text-left">
    <h2 className="text-[1.8em] sm:text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold leading-[1.14]">
      Who We Are
    </h2>
    <p className="text-base sm:text-lg lg:text-2xl tracking-tight text-justify text-gray-800">
      At <span className="text-sky-600 font-semibold">Commnet</span>, we strive to deliver value through the combination of the right people, processes, technologies, and program management solutions. Our methods include applying domain expertise in specific industry segments, utilizing a highly-skilled workforce, leveraging a proven global delivery model, implementing structured and scalable quality processes and methodologies, and yet, staying cost-effective.
    </p>
  </div>
</div>



);

const MissionAndVision = () => (
  <div className="h-full text-black flex flex-col lg:flex-row gap-6">
    <div className="h-full w-full flex flex-col ">
      <div className="p-8 flex flex-col gap-4 hover:bg-sky-100 rounded-2xl ">
        <h3 className="text-3xl font-bold">Our Mission</h3>
        <p className="text-xl font-medium">
          Advancing our vision through strategy, <br /> innovation, and purposeful execution.
        </p>
      </div>
      <div className="p-8 flex flex-col gap-4 hover:bg-sky-100 rounded-2xl">
        <h3 className="text-3xl font-bold">Our Vision</h3>
        <p className="text-xl">
          Inspiring lasting impact through purpose, <br /> passion, and unwavering commitment.
        </p>
      </div>
    </div>
    <div className="bg-green-50 w-full">
      <video
        src="https://www.commnetsysconsult.com/wp-content/uploads/2023/02/Commnet-LLC-Video-Whatsapp.mp4"
        className="min-w-full h-[400px] object-cover rounded-xl"
        width="100%"
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

const AboutCards = () => {
  const CardDatas = [
    {
      id: "01",
      title: "Industry-Specific Expertise",
      description: "Applying deep domain knowledge across various industry sectors.",
    },
    {
      id: "02",
      title: "Skilled Workforce",
      description: "Leveraging a team of highly experienced professionals to drive innovation.",
    },
    {
      id: "03",
      title: "Structured & Scalable Processes",
      description: "Implementing best practices to maintain efficiency and quality.",
    },
    {
      id: "04",
      title: "Cost-Effective Solutions",
      description: "Delivering high-value outcomes without compromising on quality.",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CardDatas.map((data, index) => (
        <div
          className="p-10 flex flex-col gap-8 hover:bg-blue-100 rounded-lg shadow-lg hover:shadow-blue-100"
          key={index}
        >
          <p className="text-5xl font-sans font-bold text-neutral-800">{data.id}</p>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold tracking-tight capitalize leading-7 mt-6 text-sky-600">
              {data.title}
            </p>
            <p className="text-lg leading-6 line-clamp-3">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const OurJourney = () => {
  const Datas = [
    {
      count: "25+ Years",
      description: "Started in the early 2000s as a 2-member consulting team.",
      title: "Years of Experience",
    },
    {
      count: "200%",
      description: "Achieved rapid growth and became a well-known IT consulting firm.",
      title: "Consistent Growth",
    },
    {
      count: " Countries",
      description: "Headquartered in Dubai with branches in India.",
      title: "Global Reach",
    },
  ];

  return (
    <section
      className="min-h-screen h-full bg-cover bg-no-repeat bg-bottom rounded-3xl flex flex-col bg-blend-saturation"
      style={{ backgroundImage: "url('/assets/futuristic-computer-lab-equipment-row-generated-by-ai.jpg')" }}
    >
      <div className="h-[200px] lg:h-[500px] "></div>
      <div className="p-6 lg:p-12 flex flex-col lg:flex-row gap-8 h-full justify-between max-w-screen-xl mx-auto ">
        <header className="text-white">
          <h1 className="text-4xl font-bold mb-4 ">Our Journey</h1>
          <p className="text font-medium font-sans max-w-2xl text-justify ">
            Commnet started in the early 2000s as a two-member IT consulting firm and rapidly grew into a well-known company with offices in Dubai and India.
          </p>
        </header>

        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 w-full">
          {Datas.map((data, index) => (
            <div
              key={index}
              className="p-6 bg-blue-600/10 backdrop-blur-md text-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl font-bold">{data.count}</p>
              <p className="text-xl font-medium">{data.title}</p>
              <p className="text-sm opacity-80 mt-2">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref} style={{ margin: 0, padding: 0, boxSizing: "border-box", borderWidth: 0 }}>
      <div style={{ margin: 0, padding: 0 }}>{props.children}</div>
    </div>
  );
});
Pages.displayName = "Pages";

function PDFFlipbook({ onClose }) {
  const [numPages, setNumPages] = useState(0);
  const [flipBookKey, setFlipBookKey] = useState(Date.now());
  const isMobile = window.innerWidth < 768;
  const audioRef = React.useRef(null);
  const [showUsageTip, setShowUsageTip] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(flipSound);
    audioRef.current.preload = "auto";
    
    // Hide usage tip after 5 seconds
    const timer = setTimeout(() => {
      setShowUsageTip(false);
    }, 5000);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      clearTimeout(timer);
    };
  }, []);

  const playFlipSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setFlipBookKey(Date.now());
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-start">
        <div className="absolute top-4 right-4 flex gap-2 z-50">
          {showUsageTip && (
            <div className="bg-white text-black p-3 rounded-lg shadow-lg mr-2 max-w-xs">
              <p className="font-medium">How to use:</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Click and drag corners to flip pages</li>
                <li>Use mouse wheel to zoom in/out</li>
                <li>Click arrows on sides to navigate</li>
              </ul>
            </div>
          )}
          <button
            onClick={onClose}
            className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
        
        <div className="w-screen h-screen flex justify-center items-center">
          {numPages > 0 && (
            <div className="w-full pl-8 my-auto flex items-center justify-center overflow-hidden">
              <HTMLFlipBook
                key={flipBookKey}
                width={isMobile ? 300 : 550}
                height={isMobile ? 300 : 700}
                size="stretch"
                minWidth={315}
                maxWidth={550}
                minHeight={500}
                maxHeight={1100}
                showCover={true}
                drawShadow={false}
                mobileScrollSupport={false}
                startPage={0}
                usePortrait={isMobile}
                flippingTime={1000}
                maxShadowOpacity={0.5}
                className="flipbook-container"
                style={{ backgroundColor: "transparent" }}
                onFlip={playFlipSound}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <Pages key={index}>
                    <Document file={pdfFile}>
                      <Page
                        pageNumber={index + 1}
                        width={isMobile ? 330 : 550}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        className="pdf-page"
                      />
                    </Document>
                  </Pages>
                ))}
              </HTMLFlipBook>
            </div>
          )}
        </div>

        <div style={{ display: "none" }}>
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} width={100} />
          </Document>
        </div>
      </div>
    </div>
  );
}