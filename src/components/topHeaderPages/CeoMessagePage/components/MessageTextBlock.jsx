import React from "react";

const MessageTextBlock = () => {
  const ceoName = "John Doe";
  const designation = "Founder & CEO";
  const message = `Dear Team,\n\nAt our core, we believe in compassion, innovation, and impact. Every effort you make contributes to a brighter future for the voiceless.\n\nThank you for standing with us in our mission.\n\nLet's continue to lead with purpose and heart.`;
  const signature = "With gratitude,";
  // const ceoImage = "/images/ceo.jpg"; // 👈 your image path here

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        A Message from the CEO
      </h2>

      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden">
        {/* Image section */}
        <div className="md:w-1/3 w-full h-72 md:h-auto">
          <img
            src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="CEO"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Message section */}
        <div className="md:w-2/3 w-full p-6 md:p-10 leading-relaxed space-y-5 text-justify">
          {message.split("\n").map((para, idx) => (
            <p key={idx} className="text-lg text-gray-700">{para.trim()}</p>
          ))}

          {/* Signature */}
          {signature && (
            <div className="mt-6 text-right italic text-gray-600">
              {signature}
            </div>
          )}

          {/* CEO Info */}
          <div className="mt-4 text-right">
            <p className="text-xl font-semibold text-gray-900">{ceoName}</p>
            <p className="text-gray-600">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTextBlock;
