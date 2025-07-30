import React from "react";
import { motion } from "framer-motion";

const MessageCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] p-6 md:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden"
    >
      {/* Decorative Gradient Blur */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 blur-[100px] opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 blur-[100px] opacity-30 -z-10"></div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://avatars.githubusercontent.com/u/105572626?v=4" // Replace with your own image if needed
          alt="Bhupesh Joshi"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Bhupesh Joshi</h2>
          <p className="text-sm text-gray-200 mt-1">Lead Developer / Tech Head</p>
        </div>
      </div>

      {/* Message Content */}
      <div className="mt-6 text-base leading-7 text-white md:text-lg">
        <p>
          “Creating this platform wasn’t just about writing code — it was about solving real problems for real users. 
          From user-first design to optimizing every query and animation, our focus was always on impact and performance.
        </p>
        <p className="mt-3">
          Every section you interact with is a result of thoughtful collaboration, late nights, and a relentless drive 
          for innovation. We believe in building products that are scalable, beautiful, and accessible for all.”
        </p>
      </div>

      {/* Signature or Tagline */}
      <p className="mt-6 italic text-right text-pink-200 font-medium">
        — Bhupesh Joshi 💻 | Crafting Pixels & Logic
      </p>
    </motion.div>
  );
};

export default MessageCard;
