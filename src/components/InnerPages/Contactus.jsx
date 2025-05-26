
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-['Lato'] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-start px-10 bg-[url('/assets/pic-2.jpg')]"
        data-aos="fade"
      >
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 max-w-2xl space-y-6" data-aos="fade-up">
          {/* <button
            onClick={scrollToContact}
            className="border border-white px-4 py-1 rounded-full text-white text-sm"
          >
            Contact Us
          </button> */}
          <h1 className="text-white text-5xl font-bold leading-tight">
            Get in Touch for Expert Assistance
          </h1>
          <p className="text-white text-lg">
            Connect with our team of experts for personalized support and
            solutions tailored to your needs.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Request For A Meeting
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="px-6 md:px-20 py-16 bg-white">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/3 space-y-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-red-600">
              Contact <span className="text-sky-600">Details</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building2 className="text-sky-600 mt-1" />
                <div>
                  <p className="font-semibold">Global Head Office</p>
                  <p>Commnet System Consultancy LLC</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-sky-600 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+971 4 295 5299</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-sky-600 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@commnetsysconsult.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-sky-600 mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>
                    Office No.301, Centurion Star Building Tower A,<br />
                    Port Saeed Dubai, UAE, PO Box 117133
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full md:w-2/3" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6">Enquire Now</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <input
                placeholder="Select Enquiry Subject"
                className="border-b p-2 outline-none"
              /> */}
              {/* <input placeholder="Title" className="border-b p-2 outline-none" /> */}
              <input
                placeholder="Your Name"
                className="border-b p-2 outline-none"
              />
              <input placeholder="Phone" className="border-b p-2 outline-none" />
              <input placeholder="Email" className="border-b p-2 outline-none" />
              {/* <input
                placeholder="Job Title"
                className="border-b p-2 outline-none"
              /> */}
              <input
                placeholder="Company Name"
                className="border-b p-2 outline-none"
              />
              {/* <input
                placeholder="Industry"
                className="border-b p-2 outline-none"
              /> */}
              <input
                placeholder="Country"
                className="border-b p-2 outline-none"
              />
              <input placeholder="City" className="border-b p-2 outline-none" />
              <textarea
                placeholder="Your Message"
                className="border-b p-2 outline-none col-span-1 md:col-span-2"
              ></textarea>
              <button
                type="submit"
                className="bg-sky-600 text-white px-6 py-2 rounded-lg w-32 hover:bg-sky-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
