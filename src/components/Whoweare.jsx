import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="who-we-are" className="relative bg-sky-50 text-gray-800 py-20 font-['Lato']">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
        {/* Text Section */}
        <div data-aos="fade-right">
          <p className="text-red-600 text-sm font-semibold uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-600 mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            At Commnet, we strive to deliver value through the combination of right people, processes, technologies
            and program management solutions. Our methods include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-sm leading-relaxed">
            <li>Applying domain expertise in specific industry segments</li>
            <li>Utilizing a highly-skilled workforce</li>
            <li>Leveraging a proven global delivery model</li>
            <li>Implementing structured and scalable quality processes and methodologies</li>
            <li>Staying cost-effective</li>
          </ul>
          <a
            href="/why-choose-us"
            className="inline-block mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          >
            Explore More
          </a>
        </div>

  {/* Image Section */}
<div className="relative" data-aos="fade-left">
  <div className="rounded-xl overflow-hidden shadow-xl w-full">
    <img
      src="/assets/press-4.jpg"
      alt="Team"
      className="w-full h-[360px] object-cover rounded-xl"
    />
  </div>

  {/* Overlapping Image - adjusted for mobile */}
  <div className="absolute bottom-[-30px] left-[-20px] md:bottom-[-40px] md:left-[-40px] w-32 md:w-48 rounded-lg overflow-hidden border-4 border-white shadow-lg">
    <img
      src="/assets/press-2.jpg"
      alt="Inset"
      className="w-full h-24 md:h-36 object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
}
