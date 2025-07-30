import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const partners = [
  { name: "UNICEF", logo: "https://cdn.freebiesupply.com/logos/large/2x/unicef-2-logo-png-transparent.png" },
  { name: "NCERT", logo: "https://yt3.googleusercontent.com/ytc/AIdro_l51D3wUpyKyQKSO0LeVdpiaMIubg7ORRsisuJhMM1bKrQ=s900-c-k-c0x00ffffff-no-rj" },
  { name: "BYJU'S", logo: "https://images.seeklogo.com/logo-png/36/1/byjus-logo-png_seeklogo-364776.png" },
  { name: "Khan Academy", logo: "/images/partners/khan.png" },
  { name: "Coursera", logo: "/images/partners/coursera.png" },
  { name: "EdX", logo: "/images/partners/edx.png" },
  { name: "Google for Education", logo: "/images/partners/googleedu.png" },
];

const PartnershipsCarousel = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our <span className="text-blue-600">Partners</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PartnershipsCarousel;
