import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const TeamMemberCard = ({ member }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white rounded-xl shadow-lg p-4 text-center cursor-pointer hover:shadow-2xl transition"
      >
        <img
          src={member.photo}
          alt={member.name}
          className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-gray-600 text-sm">{member.role}</p>
        <p className="text-xs text-gray-400">{member.country}</p>
        <div className="flex justify-center flex-wrap gap-2 mt-2">
          {member.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 inline-block"
          >
            <FaLinkedin size={20} className="mx-auto mt-2" />
          </a>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-center">{member.name}</h2>
            <p className="text-center text-gray-600 mb-2">{member.role}</p>
            <p className="text-sm text-center text-gray-400">{member.country}</p>
            <div className="mt-4 text-sm text-gray-700">{member.bio}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMemberCard;
