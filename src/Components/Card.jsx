import React, { useState } from "react";

export default function ExcursionCard({ title, description, extendedDescription, image, icon, button }) {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-pink-600 mb-2">
          {icon} {title}
        </h3>

        <p
          className={`text-gray-700 text-sm mb-4 transition-all duration-300 ${
            showMore ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </p>

        {button?.text && (
          <button
            onClick={toggleDescription}
            className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition"
          >
            {showMore ? "Show Less" : button.text}
          </button>
        )}
      </div>
    </div>
  );
}