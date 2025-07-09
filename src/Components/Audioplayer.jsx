import React from "react";
import './App.css'

const AudioPlayer = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-12 px-6 md:px-16 rounded-3xl my-12 shadow-2xl overflow-hidden text-center text-white"
      data-aos="zoom-in"
    >
      {/* Neon Background Glow Effects */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500 blur-2xl opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-600 blur-3xl opacity-30 rounded-full animate-pulse"></div>

      {/* Neon Header */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide neon-text neon-animate text-orange-400">
  🔊 Sacred Sounds of Varanasi
</h2>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-purple-200 mb-6">
        Listen to the divine <span className="italic text-pink-300">temple bells</span> from the holy ghats 🌊
      </p>

      {/* Neon Audio Player */}
      <audio
        controls
        autoPlay
        loop
        
        className="w-full md:w-2/3 mx-auto rounded-lg border-2 border-orange-400 shadow-[0_0_20px_#ffa500] bg-white/10 backdrop-blur-lg transition-all duration-300"
      >
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Footer Text */}
      <p className="text-sm text-purple-300 mt-4 italic">
        A divine harmony that echoes through eternity 🕉️
      </p>
    </div>
  );
};

export default AudioPlayer;
