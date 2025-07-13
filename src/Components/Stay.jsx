import React from 'react';
import { BedDouble, Utensils, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


// ✅ Swiper Imports (MUST be added)
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


export default function VaranasiStay() {
  return (

  <div className="text-black bg-orange-100 font-roboto">
    
      <div className="bg-[url('/Images/maxres.jpg')] h-[60vh]  bg-cover relative">
        <div className="bg-black/30 backdrop-blur-none absolute inset-0"></div>
      </div>


     <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-8 text-center">
      Welcome to Varanasi Stay
    </h1>
    <p className="text-xl lg:text-2xl text-orange-600 text-center">
      Comfortable Stay & Traditional Food in the Spiritual City
    </p> 


 
      {/* Features Section */}
      <div className='bg-orange-100'>
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[{
            Icon: BedDouble, title: "Comfortable Rooms", desc: "AC & non-AC rooms with clean amenities and peaceful ambiance."
          }, {
            Icon: Utensils, title: "Authentic Food", desc: "Enjoy traditional Banarasi thalis and freshly cooked meals."
          }, {
            Icon: MapPin, title: "Prime Location", desc: "Just 5 minutes from Kashi Vishwanath Temple and Ganga Ghat."
          }, {
            Icon: Phone, title: "24/7 Support", desc: "Call anytime for assistance, bookings, or information."
          }].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border border-[#fbbf24]/30"
            >
              <Icon className="h-10 w-10 text-[#9d174d] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     <section className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">The Rooms</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        name: "AC Deluxe Room",
        image: "/Images/img1.jpeg"
      },
      {
        name: "Non-AC Budget Room",
        image: "/Images/img2.jpeg"
      },
      {
        name: "Family Suite",
        image: "/Images/img3.jpeg"
      },
      {
        name: "Heritage Room",
        image: "/Images/img4.jpeg"
      },
      {
        name: "Dormitory Beds",
        image: "/Images/img5.jpeg"
      },
      {
        name: "Premium Balcony Room",
        image: "/Images/img6.jpeg"
      },
    ].map((room, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg border border-purple-950">
        <img src={room.image} alt={room.name} className="rounded mb-4 w-full h-48 object-cover" />
        <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
        <p className="text-sm">Spacious and hygienic rooms with 24/7 service and Banarasi hospitality.</p>
      </div>
    ))}
  </div>
</section>
 </div>


      {/* Food Section */}

<div className='bg-orange-200'>
  <section className="py-16 px-6 bg-white">
    <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">Authentic Banarasi Food</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        {
          name: "Banarasi Thali",
          image: "/Images/food/thali.jpeg"
        },
        {
          name: "Kachori Sabzi",
          image: "/Images/food/sbji.jpeg"
        },
        {
          name: "Malaiyo",
          image: "/Images/food/seven.jpg"
        },
        {
          name: "Lassi",
          image: "/Images/food/five.jpg"
        },
        {
          name: "Gol gappa",
          image: "/Images/food/gol.jpeg"
        },
        {
          name: "Banarasi pan",
          image: "/Images/food/pan.jpg"
        },
        {
          name: "Tamatar Chaat",
          image: "/Images/food/chat.jpeg"
        },
        {
          name: "Baati Chokha",
          image: "/Images/food/four.jpg"
        },
        {
          name: "Rabri",
          image: "/Images/food/rabdi.jpeg"
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow text-center">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <h4 className="font-semibold text-lg text-[#9d174d]">{item.name}</h4>
        </div>
      ))}
    </div>
  </section>
</div>


      {/* Safety Section */}

      <div className='bg-blue-50'>
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">Cleanliness & Safety Promise</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🧼", title: "Daily Sanitization", desc: "Rooms and public areas sanitized daily." },
            { icon: "😷", title: "Mask Protocol", desc: "All staff wear masks and gloves." },
            { icon: "🤝", title: "Contactless Check-in", desc: "Digital check-in and payments available." },
            { icon: "🧴", title: "Sanitizer Stations", desc: "Hand sanitizer stations available at all entry points." },
            { icon: "🧹", title: "Deep Cleaning", desc: "Scheduled deep cleaning of rooms and kitchen areas." },
            { icon: "👨‍⚕", title: "Health Checks", desc: "Regular health checks for all staff members." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-[#6b21a8]/10 transition">
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </div>



      {/* Room Image Slider */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-4xl font-semibold text-center text-orange-500 mb-10">Explore Our Rooms</h2>
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000 }}
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="rounded-xl"
  >
    {[
      { name: "AC Deluxe Room", image: "/Images/img1.jpeg" },
      { name: "Non-AC Budget Room", image: "/Images/img2.jpeg" },
      { name: "Family Suite", image: "/Images/img3.jpeg" },
      { name: "Heritage Room", image: "/Images/img4.jpeg" },
      { name: "Dormitory Beds", image: "/Images/img5.jpeg" },
      { name: "Premium Balcony Room", image: "/Images/img6.jpeg" },
    ].map((room, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg text-center">
          <img src={room.image} alt={room.name} className="h-48 w-full object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold text-[#9d174d]">{room.name}</h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>



      {/* Pickup Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-6 text-orange-500">Need a Pickup?</h2>
            <p className="text-lg mb-8 text-[#444]">We offer pickup and drop-off from station, bus stand & airport.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {[
                "🚗 Car Service: From Airport",
                "🛺 Auto Pickup: From Varanasi Station",
                "📦 Porter Help: For Heavy Luggage",
                "📦 Porter Help: For Heavy Luggage"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white shadow p-6 rounded-xl w-64 text-lg"
                >
                  {item}
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-orange-500">
              To schedule, call <span className="font-semibold">+91-9876543210</span> or mention in booking note.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/Images/pick.jpeg"
              alt="Pickup service"
              className="rounded-xl w-[550px]"
            />
          </motion.div>
        </div>
      </section>

     <div className="bg-gradient-to-b from-orange-300 to-orange-400">
  <section className="py-20 px-6">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-orange-700 mb-14"
    >
      What Our Guests Say
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {[
        { name: "Amit Sharma", text: "Clean rooms, tasty food, and perfect location. Highly recommend!" },
        { name: "Priya Verma", text: "Felt like home in the heart of Varanasi. Loved the hospitality!" },
        { name: "Rahul Singh", text: "Affordable rates, very courteous staff, and hygienic environment." },
        { name: "Neha Dubey", text: "Beautifully maintained rooms and quick service. Will visit again!" }
      ].map((t, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-orange-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-gray-700 italic mb-4 text-lg leading-relaxed">“{t.text}”</p>
          <p className="font-semibold text-[#9d174d] text-right">— {t.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
</div>


      {/* Contact Section */}
      <section className="bg-orange-100 text-orange-600 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold mb-4">Contact & Booking</h2>
            <p className="text-lg mb-6">Have a question or want to reserve your stay?</p>
            <p className="mb-4">📞 +91-9876543210</p>
            <p className="mb-6">✉ varanasistay@example.com</p>
            <a
              href="tel:+919876543210"
              className="inline-block bg-[#fbbf24] text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-[#fde68a] transition"
            >
              Call Now
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="\Images\call.jpeg"
              alt="Contact Illustration"
              className="w-[400px] rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#10b981] hover:bg-[#059669] text-white text-2xl w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="bg-amber-500 text-white text-center py-12">
        <div className="mb-4">
          <p className="text-xl font-semibold text-black">Varanasi Stay Guest House</p>
          <p>Near Dashashwamedh Ghat, Varanasi, UP - 221001</p>
          <p>Phone: +91-9876543210 | Email: varanasistay@example.com</p>
        </div>
        <div className="flex justify-center gap-6 text-xl">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      
      </footer>
    </div>

  );
}