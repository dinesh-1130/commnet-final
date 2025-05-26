import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import brochurePDF from "/assets/Commnet.pdf";
import flipSound from "/assets/flip.mp3"; // Place in /public/assets

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Brochure() {
  const [numPages, setNumPages] = useState(null);
  const audioRef = useRef(new Audio(flipSound));

  const handleFlip = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={550}
        minHeight={420}
        maxHeight={633}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={handleFlip}
        className="shadow-xl"
      >
        {[...Array(numPages || 0).keys()].map((pg) => (
          <div key={pg} className="demoPage">
            <Document file={brochurePDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pg + 1} width={500} />
            </Document>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
