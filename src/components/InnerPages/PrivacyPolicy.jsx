import React from "react";

export default function PrivacyPolicy() {
  const sections = [
    'Introduction',
    'Information We Collect',
    'Use of Information',
    'Data Protection',
    'Third-Party Links',
    'Your Rights',
    'Policy Updates',
    'Contact',
  ];

  const content = [
    "Commnet Systems Consultancy LLC is committed to safeguarding the privacy of our clients and visitors. This Privacy Policy outlines how we collect, use, disclose, and protect your information in accordance with traditional practices and applicable laws.",
    "We may collect personal details like your name, email, phone number, and company info, as well as technical data such as IP address, browser type, and device information via cookies.",
    "The information is used to provide and manage services, respond to queries, improve website experience, and comply with legal requirements.",
    "We implement robust security measures to protect your data from unauthorized access or misuse in line with standard business practices.",
    "Our website may include links to third-party websites. We are not responsible for their content or privacy practices.",
    "You have the right to access, correct, or delete your data, and to restrict or object to certain processing activities.",
    "We may update this Privacy Policy from time to time. All updates will be posted here with a revised effective date.",
    <>
      Email: info@commnetsysconsult.com <br />
      Phone: +971 4 295 5299 <br />
      Address: Office No.301, Centurion Star Building Tower A, Port Saeed Dubai, UAE, PO Box 117133
    </>
  ];

  return (
    <div className="bg-white font-['Lato']">
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/assets/sample-5.jpg')" }}
      >
        <div className="bg-black/60 p-8 rounded-xl">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-lg">Commnet System Consultancy LLC – ICT & ELV Solutions</p>
        </div>
      </div>

      <div className=" py-12 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto  rounded-xl shadow-lg px-8 py-12">
          <h2 className="text-2xl font-semibold text-sky-600 mb-6 text-center">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {sections.map((title, i) => (
              <a key={i} href={`#section-${i}`} className="block p-3 bg-sky-50 hover:bg-sky-100 rounded border border-sky-200 text-sky-700 font-medium">
                {i + 1}. {title}
              </a>
            ))}
          </div>

          {sections.map((title, i) => (
            <div key={i} id={`section-${i}`} className="mb-10">
              <h3 className="text-xl font-semibold text-sky-600 mb-2">{i + 1}. {title}</h3>
              <p className="text-gray-700 leading-relaxed">{content[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
