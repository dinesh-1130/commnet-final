// import { FaLinkedin } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Link } from "react-router-dom";

// const SocialMediaSection = () => {
//   const posts = [
//     {
//       logo: "/assets/logo.png",
//       time: "3mo",
//       text: "We are thrilled to announce that we have received the prestigious *Certificate of Service Performance Award* from *Huawei Data Centre Facility*! This recognition reflects our unwavering commitment to excellence and our dedication to providing top-notch services to our clients.",
//       image: "/assets/post1.jpeg",
//       likes: 23,
//       link: "https://www.linkedin.com/posts/commnet-systems-consultancy_we-are-thrilled-to-announce-that-we-have-activity-7288553275979624449-Ftu5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-WAgoB3GCY10JeNyT20uKr02lT8-G01yk",
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "4mo",
//       text: "🌟 2024 Achievement Spotlight 🌟 *We are thrilled to announce the incredible success of FIFA BEACH SOCCER WORLD CUP UAE 2024 DUBAI*",
//       image:
//         "https://media.licdn.com/dms/image/v2/D4D22AQGrlCd4HYJHTQ/feedshare-shrink_1280/B4DZRAafbcGkAk-/0/1736247474520?e=1750291200&v=beta&t=mCKCqUYvyxzAOW8Pf6UgkZjRF8F2r51DD3sEAPyW-AI",
//       likes: 11,
//       link: "https://www.linkedin.com/posts/commnet-systems-consultancy_2024success-it-digitaltransformation-activity-7282349738669039617-sTa7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-WAgoB3GCY10JeNyT20uKr02lT8-G01yk",
//     },
//     {
//       logo: "/assets/logo.png",
//       time: "4mo",
//       text: "🎉 Biggest Achievement of 2024-FIFA BEACH SOCCER WORLD CUP UAE 2024 DUBAI 🎉 Askar Basha M N karthikeyan Narayanasamy Gopi Commnet swathi dumpala ",
//       image:
//         "https://cdn.plus.fifa.com/images/public/cms/56/13/e3/87/5613e387-bd41-49eb-81f1-9345259a281a.jpg?width=1200&height=630",
//       likes: 9,
//       link: "https://www.linkedin.com/posts/commnet-systems-consultancy_uae-activity-7282347829472227329-pI_G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-WAgoB3GCY10JeNyT20uKr02lT8-G01yk",
//     },
//   ];
//   return (
//     <section className="bg-sky-50 py-16 font-['Lato'] relative overflow-hidden px-6 md:px-16">
//       <div className="container mx-auto" data-aos="fade-up">
//         <h2 className="text-left sm:text-center text-xl sm:text-2xl md:text-3xl font-semibold font-['Plus Jakarta Sans'] text-sky-600 leading-snug px-4 mb-10 break-words">
//           <span className="text-sky-600 block sm:inline">Connect</span> and
//           follow us on
//           <span className="text-sky-600 block sm:inline">social media</span>
//         </h2>
//       </div>

//       <div className="">
//         <Swiper
//           spaceBetween={24}
//           breakpoints={{
//             320: { slidesPerView: 1.5 },
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 4 },
//             1280: { slidesPerView: 3 },
//           }}
//         >
//           {posts.map((post, index) => (
//             <SwiperSlide key={index} className="">
//               <div
//                 key={index}
//                 className=" bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="p-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={post.logo}
//                         alt="COMMNET"
//                         className="w-10 h-10 object-contain rounded-full"
//                       />
//                       <span className="font-semibold text-sm text-sky-600">
//                         COMMNET
//                       </span>
//                     </div>
//                     <FaLinkedin className="text-[#0A66C2]" size={20} />
//                   </div>
//                   <div className="text-xs text-gray-500 mt-1">{post.time}</div>
//                   <p className="text-sm text-gray-800 mt-2 leading-snug line-clamp-3">
//                     {post.text}
//                   </p>
//                   <Link
//                     to={post.link}
//                     className="text-sm text-[#666] mt-2 underline cursor-pointer"
//                   >
//                     Read more
//                   </Link>
//                 </div>

//                 <img
//                   src={post.image}
//                   alt="post"
//                   className="w-full h-[250px] object-cover object-top border-t"
//                 />

//                 <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">❤️ {post.likes}</div>
//                   <div className="cursor-pointer">🔁 Share</div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default SocialMediaSection;
import { FaLinkedin } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SocialMediaSection = () => {
  const posts = [
    {
      logo: "/assets/logo.png",
      time: "3mo",
      text: "We are thrilled to announce that we have received the prestigious *Certificate of Service Performance Award* from *Huawei Data Centre Facility*! This recognition reflects our unwavering commitment to excellence and our dedication to providing top-notch services to our clients.",
      image: "/assets/post1.jpeg",
      likes: 23,
      link: "https://www.linkedin.com/posts/commnet-systems-consultancy_we-are-thrilled-to-announce-that-we-have-activity-7288553275979624449-Ftu5",
    },
    {
      logo: "/assets/logo.png",
      time: "4mo",
      text: "🌟 2024 Achievement Spotlight 🌟 *We are thrilled to announce the incredible success of FIFA BEACH SOCCER WORLD CUP UAE 2024 DUBAI*",
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQGrlCd4HYJHTQ/feedshare-shrink_1280/B4DZRAafbcGkAk-/0/1736247474520?e=1750291200&v=beta&t=mCKCqUYvyxzAOW8Pf6UgkZjRF8F2r51DD3sEAPyW-AI",
      likes: 11,
      link: "https://www.linkedin.com/posts/commnet-systems-consultancy_2024success-it-digitaltransformation-activity-7282349738669039617-sTa7",
    },
    {
      logo: "/assets/logo.png",
      time: "4mo",
      text: "🎉 Biggest Achievement of 2024-FIFA BEACH SOCCER WORLD CUP UAE 2024 DUBAI 🎉 Askar Basha M N karthikeyan Narayanasamy Gopi Commnet swathi dumpala ",
      image:
        "https://cdn.plus.fifa.com/images/public/cms/56/13/e3/87/5613e387-bd41-49eb-81f1-9345259a281a.jpg?width=1200&height=630",
      likes: 9,
      link: "https://www.linkedin.com/posts/commnet-systems-consultancy_uae-activity-7282347829472227329-pI_G",
    },
  ];

  return (
    <section className="bg-sky-50 py-16 font-['Lato'] px-4 md:px-10">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-['Plus Jakarta Sans'] text-sky-600 leading-snug">
          <span className="text-sky-600 block sm:inline"></span> Follow us on{" "}
          <span className="text-sky-600 block sm:inline">social media</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={12}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="!pb-10 "
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 max-w-[330px] mx-auto h-[400px] flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.logo}
                        alt="COMMNET"
                        className="w-8 h-8 object-contain rounded-full"
                      />
                      <span className="font-semibold text-sm text-sky-600">
                        COMMNET
                      </span>
                    </div>
                    <FaLinkedin className="text-[#0A66C2]" size={18} />
                  </div>
                  <div className="text-xs text-gray-500">{post.time}</div>
                  <p className="text-sm text-gray-800 mt-2 leading-snug line-clamp-3">
                    {post.text}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#666] mt-2 underline inline-block"
                  >
                    Read more
                  </a>
                </div>

                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-[160px] object-cover object-top border-t"
                />

                <div className="flex justify-between items-center px-4 py-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1">❤️ {post.likes}</div>
                  <div className="cursor-pointer">🔁 Share</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SocialMediaSection;
