import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const quotes = [
  {
    text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Simon Sinek",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    author: "Bill Gates",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "As we look ahead into the next century, leaders will be those who empower others.",
    author: "Bill Gates",
  },
];

const QuoteCarousel = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-100 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Inspirational Leadership Quotes
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {quotes.map((quote, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 transition-transform transform hover:scale-[1.015] duration-300">
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  “{quote.text}”
                </p>
                <p className="text-right font-semibold text-indigo-600 text-lg">
                  — {quote.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default QuoteCarousel;
