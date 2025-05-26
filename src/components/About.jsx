// import { ArrowRight } from "lucide-react";
// import BannerBg from "/assets/press-2.jpg";
// const About = () => {
//   return (
//     <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col lg:flex-row gap-6 xl:gap-20 lg:px-10 px-5">
//       <div className="flex items-start flex-col gap-6 max-w-[300px] w-full">
//         <div className="border px-4 py-2 rounded-xl font-medium lg:text-2xl">
//           About GBM
//         </div>
//         <div className="h-full max-w-[300px] w-full hidden lg:block rounded-xl overflow-hidden">
//           <img
//             src={BannerBg}
//             alt="Banner bg"
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>
//       <div className="flex-1 flex flex-col items-start gap-[2em]">
//         <h2 className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0">
//           With more than 35 years of experience, 7 offices and over 1500
//           employees across the region -
//           <span className="text-purple-700">Gulf Business Machines (GBM) </span>
//           is a leading end-to-end digital solutions provider.
//         </h2>
//         <div className="mb-[1.25em] hidden md:flex">
//           <p className="font-light leading-[1.45] text-base tracking-tight">
//             We offer the region’s broadest and most comprehensive portfolio of
//             cutting-edge digital infrastructure, and a wide range of services,
//             all meticulously designed to empower and support your organizations
//             growth and success.
//           </p>
//           <p className="font-light leading-[1.45] text-base tracking-tight">
//             We have nurtured partnerships with the world’s leading technology
//             companies and invested in a talented, skilled workforce to implement
//             solutions that cater to customer’s specific, complex and diverse
//             business needs.
//           </p>
//         </div>
//         <div className="flex justify-between items-start w-full flex-col lg:flex-row gap-8">
//           <button className="rounded-xl bg-purple-700 text-white px-4 py-2">
//             Read More
//           </button>
//           <div className="flex-1 max-w-[400px] w-full">
//             <div className="flex justify-between mb-2 font-medium text-base tracking-tight">
//               <p>Mission & Vision</p>
//               <ArrowRight />
//             </div>
//             <div className="h-px w-full bg-black"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import { ArrowRight } from "lucide-react";
import BannerBg from "/assets/press-2.jpg";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-[1440px] mx-auto py-[6.25em] flex-col lg:flex-row gap-6 xl:gap-20 lg:px-10 px-5">
      <div className="flex items-start flex-col gap-6 max-w-[300px] w-full">
        <div
          data-aos="fade-right"
          className="border px-4 py-2 rounded-xl font-medium lg:text-2xl "
        >
          About Commnet
        </div>
        <div
          className="h-full max-w-[300px] w-full hidden lg:block rounded-xl overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={BannerBg}
            loading="lazy"
            alt="Banner bg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="flex-1 flex flex-col items-start gap-[2em]"
      >
        <h2
          data-aos="fade-up"
          className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
        >
          At <span className="text-sky-600">Commnet, </span>
          we deliver value by combining the right people, processes,
          technologies, and proven methodologies to offer scalable,
          cost-effective solutions tailored to client needs
        </h2>
        <div className="mb-[1.25em] hidden md:flex">
          <p
            data-aos="fade-up"
            className="font-light leading-[1.45] text-base tracking-tight"
          >
            We offer the region’s broadest and most comprehensive portfolio of
            cutting-edge digital infrastructure, and a wide range of services,
            all meticulously designed to empower and support your organizations
            growth and success.
          </p>
          <p
            data-aos="fade-up"
            className="font-light leading-[1.45] text-base tracking-tight"
          >
            We have nurtured partnerships with the world’s leading technology
            companies and invested in a talented, skilled workforce to implement
            solutions that cater to customer’s specific, complex and diverse
            business needs.
          </p>
        </div>
        <div className="flex justify-between items-start w-full flex-col lg:flex-row gap-8">
          <button
            data-aos="fade-up"
            className="rounded-xl bg-sky-600 text-white px-4 py-2"
            onClick={() => navigate("/aboutus")}
          >
            Read More
          </button>
          {/* <div data-aos="fade-up" className="flex-1 max-w-[400px] w-full">
            <div className="flex justify-between mb-2 font-medium text-base tracking-tight">
              <p>Mission & Vision</p>
              <ArrowRight />
            </div>
            <div className="h-px w-full bg-black"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
