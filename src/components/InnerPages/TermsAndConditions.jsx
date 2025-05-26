import React from "react";

export default function TermsAndConditions() {
  const sections = [
    'Introduction',
    'Eligibility',
    'Account Registration',
    'Product Info & Pricing',
    'Order & Payment',
    'Shipping & Delivery',
    'Cancellations & Refunds',
    'Intellectual Property',
    'Limitation of Liability',
    'Privacy Clause',
    'Modifications',
    'Governing Law',
    'Contact',
  ];

  const content = [
    "These Terms and Conditions govern your use of Commnet Systems Consultancy LLC's services and website. By accessing or using our services, you agree to be bound by these Terms.",
    "Our services are intended for businesses and individuals who are legally capable of entering into binding contracts.",
    "To access certain services, you may be required to register an account. You agree to provide accurate information and maintain the confidentiality of your account credentials.",
    "We strive to ensure that all product descriptions and pricing are accurate. However, errors may occur, and we reserve the right to correct any inaccuracies.",
    "All orders are subject to acceptance and availability. Payment terms will be specified at the time of order and must be adhered to as agreed.",
    "Delivery timelines are estimates and may vary based on location and other factors. We are not liable for delays beyond our control.",
    "Cancellation and refund policies will be outlined in individual service agreements. Please refer to your specific contract for details.",
    "All content, trademarks, and intellectual property on our website and services are owned by or licensed to Commnet. Unauthorized use is prohibited.",
    "Commnet shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the maximum extent permitted by law.",
    "Your use of our services is also governed by our Privacy Policy, which outlines how we handle your personal information.",
    "We reserve the right to modify these Terms at any time. Changes will be effective upon posting on our website. Continued use of our services constitutes acceptance of the updated Terms.",
    "These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai.",
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
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="mt-2 text-lg">Commnet System Consultancy LLC – ICT & ELV Solutions</p>
        </div>
      </div>

      <div className="bg-[#f9fbfd] py-12 px-4 lg:px-0">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-8 py-12">
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
