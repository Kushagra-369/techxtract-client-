import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './contact.css'; 

export default function Contact() {
  const contactData = [
    {
      type: "Instagram",
      icon: <FaInstagram className="text-cyan-400 text-4xl mb-4" />,
      info: "@techxtract_official",
      description: "Follow us on Instagram for the latest updates and posts."
    },
    {
      type: "LinkedIn",
      icon: <FaLinkedin className="text-cyan-400 text-4xl mb-4" />,
      info: "TechXtract CST Department",
      description: "Connect with us professionally on LinkedIn to know our projects."
    },
    {
      type: "Phone",
      icon: <FaPhoneAlt className="text-cyan-400 text-4xl mb-4" />,
      info: "+91 98765 43210",
      description: "Call us for any queries or support regarding our society events."
    },
    {
      type: "Email",
      icon: <FaEnvelope className="text-cyan-400 text-4xl mb-4" />,
      info: "contact@techxtract.com",
      description: "Send us an email for collaboration, queries, or feedback."
    }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-start px-6 py-16 
                    pt-[220px] sm:pt-[240px] relative">
      {/* pt-[220px] ensures spacing below fixed navbar */}

      <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-12 animate-fade-in">
        Contact Us
      </h1>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {contactData.map((contact, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center text-center border-2 border-cyan-400 hover:scale-105 transition-transform cursor-pointer animate-border-glow"
            onClick={() => setSelected(contact)}
          >
            {contact.icon}
            <h2 className="text-xl font-bold text-white mb-2">{contact.type}</h2>
            <p className="text-gray-300">{contact.info}</p>
          </div>
        ))}
      </div>

      {/* Modal / Big Box */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 p-8 rounded-3xl w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 text-center border-4 border-cyan-400 animate-border-glow relative"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-4 right-4 text-cyan-400 text-2xl font-bold"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>

            <div className="flex flex-col items-center">
              <div className="mb-4">{selected.icon}</div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-2">{selected.type}</h2>
              <p className="text-white text-lg mb-4">{selected.info}</p>
              <p className="text-gray-300">{selected.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
