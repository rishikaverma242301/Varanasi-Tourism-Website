import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaPlaceOfWorship, FaPlay, FaPause } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Particles from "react-tsparticles";

const MysticPlaces = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const places = [
    {
      title: "Manikarnika Ghat",
      desc: "One of the oldest and most sacred cremation ghats. Believed to grant moksha.",
      img: "/Images/mystic/mani.jpeg",
    },
    {
      title: "Kaal Bhairav Temple",
      desc: "Guardian deity of Varanasi. Said no one can stay in the city without his permission.",
      img: "/Images/mystic/kal.jpeg",
    },
    {
      title: "Sankata Devi Temple",
      desc: "Famous for warding off fear and danger. Especially crowded during Navratri.",
      img: "/Images/mystic/sankta.jpeg",
    },
    {
      title: "Rana Mahal Ghat",
      desc: "Quiet ghat with Maratha architecture and hidden stories.",
      img: "/Images/mystic/rana.jpeg",
    },
    {
      title: "Bankhandi Mahadev temple",
      desc: "Quiet ghat with Maratha architecture and hidden stories.",
      img: "/Images/mystic/assi.jpeg",
    },
  ];

  const ghats = [
    { name: "Manikarnika Ghat", coords: [25.3109, 83.0107] },
    { name: "Kaal Bhairav Temple", coords: [25.3191, 83.0106] },
  ];

  const chantURL = "/audio/chant.mp3"; // Make sure to place this in your public/audio folder

  return (
    <div className="relative bg-gradient-to-b from-orange-100 via-orange-200 to-black text-orange-600 min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <Particles
        options={{
          background: { color: "#0f0c29" },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.1 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Hero */}
      <div className="relative h-[80vh] flex items-center justify-center text-center px-4">
        <img
          src="https://source.unsplash.com/1600x900/?varanasi,spiritual"
          className="absolute w-full h-full object-cover opacity-30"
          alt="Mystic Varanasi"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-6xl font-semibold font-roboto text-orange-600 drop-shadow-lg">
            Mystic Varanasi
          </h1>
          <p className="mt-4 text-lg md:text-xl text-orange-500 max-w-2xl mx-auto">
            Where spirituality meets mystery – uncover the sacred, the silent, and the timeless.
          </p>
        </motion.div>
      </div>

      {/* Mystic Places */}
      <div className="py-20 px-6 md:px-16 space-y-16">
        {places.map((place, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
          >
            <img
              src={place.img}
              alt={place.title}
              className="w-full md:w-1/2 rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4 flex items-center gap-3">
                <FaPlaceOfWorship className="text-pink-400" />
                {place.title}
              </h2>
              <p className="text-lg text-gray-200">{place.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Spiritual Carousel */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          Spiritual Experiences
        </h2>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {[
            {
              title: "Ganga Aarti at Dashashwamedh Ghat",
              img: "https://source.unsplash.com/1000x600/?ganga,aarti,varanasi",
            },
            {
              title: "Meditation near the Ghats",
              img: "https://source.unsplash.com/1000x600/?meditation,varanasi",
            },
            {
              title: "Temple Prayers at Sunrise",
              img: "https://source.unsplash.com/1000x600/?sunrise,temple",
            },
          ].map((item, i) => (
            <div key={i}>
              <img src={item.img} className="rounded-xl" />
              <p className="legend text-lg">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Mystic Map */}
    <div className="p-6 bg-orange-100">
      <h2 className="text-2xl font-bold text-center text-yellow-500 mb-4">
        Explore the Mystic Map
      </h2>

      <div className="w-full max-w-4xl mx-auto mb-6">
        <MapContainer
          center={[25.3176, 83.0056]}
          zoom={13}
          className="h-[400px] w-full rounded-md"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          
          <Marker position={[25.3062, 83.0095]}>
            <Popup>Dashashwamedh Ghat</Popup>
          </Marker>

          <Marker position={[25.2820, 83.0095]}>
            <Popup>Assi Ghat</Popup>
          </Marker>

          <Marker position={[25.3111, 83.0108]}>
            <Popup>Manikarnika Ghat</Popup>
          </Marker>

          <Marker position={[25.3164, 83.0046]}>
            <Popup>Sankata Devi Temple</Popup>
          </Marker>

          <Marker position={[25.3090, 83.0076]}>
            <Popup>Ratneshwar Mahadev Temple</Popup>
          </Marker>

          <Marker position={[25.3264, 83.0055]}>
            <Popup>Mrityunjay Mahadev Mandir</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="text-sm text-gray-800 max-w-3xl mx-auto">
        <p className="mb-2">
          This map shows some of the most famous temples and ghats of Varanasi. Click on the red markers to know the place.
        </p>
        <ul className="list-disc list-inside">
          <li>Dashashwamedh Ghat – Main ghat for Ganga Aarti</li>
          <li>Assi Ghat – Popular among youth and tourists</li>
          <li>Manikarnika Ghat – Sacred cremation ground</li>
          <li>Sankata Devi Temple – Goddess who removes troubles</li>
          <li>Ratneshwar Mahadev – The leaning Shiva temple</li>
          <li>Mrityunjay Mandir – Lord Shiva as conqueror of death</li>
        </ul>
      </div>
    </div> 
      {/* Background Chant Button */}
      <div className="fixed bottom-6 right-6 z-50 bg-orange-800 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-600">
        <button onClick={togglePlay}>
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <audio ref={audioRef} loop>
          <source src={chantURL} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default MysticPlaces;