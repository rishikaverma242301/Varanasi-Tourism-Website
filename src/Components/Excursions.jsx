import React, { useEffect, useState } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { Dialog } from "@headlessui/react";

const excursions = [
  // ... [excursion list remains unchanged for brevity]
  {
    name: "Kashi Vishwanath Temple",
    image:
      "/Images/temple/images.jpeg",
    description:
      "One of the 12 Jyotirlingas, Kashi Vishwanath is the spiritual heart of Varanasi and draws millions of devotees every year.",
    distance: "Central Varanasi",
    highlights: ["Jyotirlinga", "Spiritual Hub", "Temple Corridor"],
  },
  {
    name: "Ganga Aarti at Dashashwamedh Ghat",
    image:
      "/Images/temple/arti.jpeg",
    description:
      "A divine fire ritual performed every evening with chants, lamps, and bells, offering a soulful experience.",
    distance: "Main Ghat, Varanasi",
    highlights: ["Evening Ritual", "Spiritual", "Cultural Show"],
  },
  {
    name: "Sunrise Boat Ride",
    image:
      "/Images/temple/ride.jpeg",
    description:
      "A peaceful boat ride at dawn showcasing the sacred ghats and temple silhouettes in golden light.",
    distance: "Ganges River, Varanasi",
    highlights: ["Sunrise", "Ghat Views", "Peaceful Ride"],
  },
  {
    name: "Sarnath",
    image:
      "/Images/temple/sar.jpeg",
    description:
      "Sacred Buddhist site where Buddha gave his first sermon. Home to stupas, museums, and serene gardens.",
    distance: "10 km from Varanasi",
    highlights: ["Dhamek Stupa", "Ashoka Pillar", "Buddhist Temples"],
  },
  {
    name: "Ramnagar Fort",
    image:
      "/Images/temple/ram.jpeg",
    description:
      "A riverside sandstone fort with royal museums, vintage collections, and scenic views.",
    distance: "Across Ganges, Varanasi",
    highlights: ["Vintage Museum", "River View", "Royal Palace"],
  },
  {
    name: "Weaver’s Village – Sarai Mohana",
    image:
      "/Images/temple/sar.jpeg",
    description:
      "Explore the handloom heritage of Varanasi by meeting local weavers creating world-famous Banarasi sarees.",
    distance: "8 km from Varanasi",
    highlights: ["Banarasi Sarees", "Handloom", "Artisan Culture"],
  },
  {
    name: "Durga Temple",
    image:
      "/Images/temple/four.jpeg",
    description:
      "A red-colored temple dedicated to Goddess Durga, known for its resident monkeys and sacred pond.",
    distance: "Near Assi Ghat, Varanasi",
    highlights: ["Shakti Temple", "Monkey Temple", "Heritage Site"],
  },
  {
    name: "Tulsi Manas Mandir",
    image:
      "/Images/temple/manas.jpeg",
    description:
      "Temple where Tulsidas wrote Ramcharitmanas. White marble structure with verses inscribed.",
    distance: "Varanasi",
    highlights: ["Ramcharitmanas", "Cultural", "Poetic Inscriptions"],
  },
  {
    name: "Sankat Mochan Temple",
    image:
      "/Images/temple/three.jpeg",
    description:
      "Devoted to Lord Hanuman, this temple is famous for its peaceful aura and spiritual importance.",
    distance: "Varanasi",
    highlights: ["Hanuman Temple", "Peaceful", "Popular Among Locals"],
  },
  {
    name: "Chunar Fort",
    image:
      "/Images/temple/fort.jpeg",
    description:
      "Historic riverside fort linked to Sher Shah Suri and the British. Scenic views and tales of valor await.",
    distance: "35 km from Varanasi",
    highlights: ["Hilltop Fort", "Tunnels", "River Views"],
  },
  {
    name: "Vindhyachal",
    image:
      "/Images/temple/vindhyachal.jpeg",
    description:
      "Famous Shakti Peeth with temples like Vindhyavasini, Ashtabhuja, and Kali Khoh in a scenic hill setting.",
    distance: "70 km from Varanasi",
    highlights: ["Navratri", "Hill Temples", "Shakti Peeth"],
  },
  {
    name: "Rajdari & Devdari Waterfalls",
    image:
      "/Images/temple/water.jpeg",
    description:
      "Twin waterfalls surrounded by forests. Ideal for trekking, nature walks, and monsoon getaways.",
    distance: "60 km from Varanasi",
    highlights: ["Nature Escape", "Hiking", "Scenic Beauty"],
  },
];

const ExcursionPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openDialog = (place) => {
    setSelectedPlace(place);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setSelectedPlace(null);
  };

  return (
    <div>
  
      <div id="excursions" className="min-h-screen bg-gradient-to-b from-orange-50 via-purple-50 to-white px-4 md:px-16 py-14 text-gray-800 font-sans">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-14 font-roboto"
        >
          ✨ Top Excursions Near Varanasi ✨
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {excursions.map((place, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => openDialog(place)}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-3 font-roboto">
                <h2 className="text-2xl font-semibold text-orange-600">{place.name}</h2>
                <p className="text-gray-600 line-clamp-3">{place.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {place.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="bg-orange-100 text-orange-700 px-3 py-1 text-xs rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm mt-2 text-gray-500 font-medium">📍 {place.distance}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center mt-16 text-gray-600 text-sm"
        >
          Discover the rich heritage, scenic beauty, and spiritual energy around Kashi.
        </motion.p>
      </div>

      <Dialog open={isOpen} onClose={closeDialog} className="relative z-50">
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-xl">
            {selectedPlace && (
              <>
                <Dialog.Title className="text-2xl font-semibold text-orange-600 mb-2">
                  {selectedPlace.name}
                </Dialog.Title>
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700 mb-4">{selectedPlace.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {selectedPlace.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="bg-orange-100 text-orange-700 px-3 py-1 text-xs rounded-full"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 font-medium">
                  📍 {selectedPlace.distance}
                </p>
                <button
                  onClick={closeDialog}
                  className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-300"
                >
                  Close
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ExcursionPage;
