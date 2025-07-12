import React,{useEffect} from 'react';
import Navbar from './Navbar';
import MySlider from './Slider';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import AudioPlayer from './Audioplayer';
import FoodSection from './FoodSection';
import { Link } from 'react-router-dom'


const Home = () => {
  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
  return (
    <div className='font-roboto'>
      <Navbar />
      <MySlider />

      {/* hello part*/}
     
      <div className='flex gap-3 max-w-[1280px] mx-auto justify-between items-center my-[80px] ' >
        <div className="px-8 w-full h-[400px] bg-[url('/Images/collage.jpeg')] bg-cover bg-center rounded
               ">
        
        </div>
      <div className='text-orange-600 px-7 overflow-hidden' data-aos="fade-left" >
  <h2 className='text-5xl mb-6'>Mystic Places of Varanasi</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-[#0F172A]'>
    <div>
      <h4 className='font-semibold hover:underline'>Ratneshwar Temple</h4>
      <p>Famous leaning temple near Manikarnika Ghat, often partially submerged.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Mrityunjay Temple</h4>
      <p>Dedicated to Shiva as conqueror of death, known for healing beliefs.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Tilbhandeshwar Temple</h4>
      <p>Shivling believed to grow in size yearly; spiritually significant.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Nepali Temple</h4>
      <p>Beautiful wooden architecture resembling Kathmandu's Pashupatinath.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Siddheshwar Temple</h4>
      <p>A peaceful place for seeking spiritual powers through meditation.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Annapurna Temple</h4>
      <p>Near Kashi Vishwanath, dedicated to the goddess of nourishment.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Trilochan Temple</h4>
      <p>One of Varanasi’s oldest temples, linked to divine vision (third eye).</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Lakshmi Kund</h4>
      <p>Sacred pond and temple associated with wealth and blessings.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Sankata Temple</h4>
      <p>Devotees seek protection from troubles; crowded on Tuesdays.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Gopi Govind Temple</h4>
      <p>Vaishnava shrine celebrating Krishna and Radha’s divine love.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Bindu Madhav</h4>
      <p>Ancient Vishnu temple located near the sacred Panchganga Ghat.</p>
    </div>
    <div>
      <h4 className='font-semibold hover:underline'>Trailanga Ashram</h4>
      <p>Home of saint Trailanga Swami; ideal for peaceful meditation.</p>
    </div>
  </div>
</div>
</div>

      {/* second part */}
   <div className="text-center my-[100px] overflow-hidden" data-aos="fade-right">
  <h3 className="text-xl text-orange-400 font-semibold tracking-wide neon-glow-orange">
    ✨ Visit Here
  </h3>
  <h2 className="mb-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent neon-glow">
    Few Words About Us
  </h2>
  <p className="mb-6 max-w-xl mx-auto text-black text-base md:text-lg leading-relaxed">
    Explore the spiritual and cultural richness of Varanasi through its timeless temples, sacred ghats, and divine traditions.
  </p>
</div>

<div
  className="flex gap-8 justify-items-center my-[100px] overflow-hidden px-4"
  data-aos="fade-left"
>
  {["15.jpg", "16.jpg", "three.jpg"].map((img, idx) => (
    <div
      key={idx}
      className="relative w-100 h-60 border-2 border-orange-400 rounded-2xl shadow-[0_0_20px_#f97316] hover:shadow-[0_0_40px_#fb923c] transition duration-500 group overflow-hidden"
    >
      <img
        src={`/Images/Visit/${img}`}
        alt={`Temple ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-40 transition duration-500"></div>
    </div>
  ))}
</div>


    {/* vdo part */}

<section className="py-12 px-6 bg-gray-50 text-gray-800" id="aarti-sounds" data-aos="fade-up">
  <AudioPlayer />
</section>


      {/* double image */}

    <div className='text-center my-[100px] ' data-aos='fade-up'>
  <h6 className='sm:text-xl text-orange-600'>EXPLORE THE AREA</h6>
  <h2 className='text-3xl sm:text-4xl font-medium'>Our Flavor Menus</h2>

  <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 items-start my-[80px]'>
    
   <div
  className="w-full h-[400px] bg-no-repeat bg-right flex items-center justify-center relative"
  style={{
    backgroundImage: 'url("/Images/2.jpg")',
    backgroundSize: 'contain',
    backgroundPosition: 'right center',
  }}
>
  <img
    src="/Images/13.jpg"
    alt="Varanasi Ghats"
    className="w-96 h-96 object-cover rounded-lg shadow-lg z-10"
  />
</div>

    <div className='text-left text-[#0F172A] text-sm'>
      <h5 className='mb-6 text-4xl font-semibold text-orange-700'>Popular Ghats</h5>
      <p>
        Varanasi is home to some of the most sacred ghats in India. These riverfront <br /> steps hold cultural and spiritual significance and attract pilgrims and tourists alike.
      </p>
      <ul className='space-y-6'>

        <li>
          <h6 className='font-medium text-base mt-5'>Manikarnika Ghat</h6>
          <p className='text-gray-600'>Most sacred cremation ghat, symbol of moksha.</p>
        </li>

        <li>
          <h6 className='font-medium text-base'>Dashashwamedh Ghat</h6>
          <p className='text-gray-600'>Known for grand Ganga Aarti rituals every evening.</p>
        </li>

        <li>
          <h6 className='font-medium text-base'>Assi Ghat</h6>
          <p className='text-gray-600'>Popular among pilgrims and travelers for sunrise views.</p>
        </li>

        <li>
          <h6 className='font-medium text-base'>Panchganga Ghat</h6>
          <p className='text-gray-600'>Confluence of five sacred rivers, spiritual significance.</p>
        </li>

        <li>
          <h6 className='font-medium text-base'>Scindia Ghat</h6>
          <p className='text-gray-600'>Features a partially submerged Shiva temple.</p>
        </li>

      </ul>
    </div>
  </div>
</div>

          {/* one side image */}
 <div className='flex flex-col-reverse md:flex-row items-center gap-10 my-[100px] px-34' data-aos='fade-up'>
  

  <div className='w-full md:w-1/2'>
    <h2 className='text-orange-500 mb-6 text-4xl text-center md:text-left font-semibold '>Temples</h2>

    <ul className='space-y-6'>
      <li>
        <h3 className='font-semibold text-lg'>Kashi Vishwanath Temple</h3>
        <p className='text-amber-950 text-sm'>Dedicated to Lord Shiva, it is one of the holiest and most visited temples in India.</p>
      </li>
      <li>
        <h3 className='font-semibold text-lg'>Durga Temple</h3>
        <p className='text-amber-950 text-sm'>A red-colored temple dedicated to Goddess Durga, also known as the Monkey Temple.</p>
      </li>
      <li>
        <h3 className='font-semibold text-lg'>Sankat Mochan Hanuman Temple</h3>
        <p className='text-amber-950 text-sm'>A sacred place where devotees seek protection from evil and misfortunes.</p>
      </li>
      <li>
        <h3 className='font-semibold text-lg'>Annapurna Temple</h3>
        <p className='text-amber-950 text-sm'>Located near Kashi Vishwanath, it honors the goddess of food and nourishment.</p>
      </li>
      <li>
        <h3 className='font-semibold text-lg'>Kal Bhairav Temple</h3>
        <p className='text-amber-950 text-sm'>Worshipped as the guardian of Varanasi, this temple is sacred to Lord Bhairav.</p>
      </li>
    </ul>
  </div>

  <div className='flex justify-center w-full md:w-1/2'>
    <img
      src='/Images/5.jpg'
      alt='Temple View'
      className='w-full max-w-md h-auto object-cover rounded-lg shadow-lg'
    />
  </div>

</div>


 {/* double image */}


<FoodSection/>

   {/* box part */}

   
<div class="mt-20 my-[100px] px-4 sm:px-0" data-aos="fade-up">
  <h5 class="text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold text-lg">
    Explore WITH US
  </h5>
  <h1 class="text-center text-3xl sm:text-4xl mt-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-600">
    Popular Area
  </h1>
  <p class="text-center mt-6 text-sm sm:text-base text-gray-700">
    Discover the spiritual and cultural heritage of Varanasi by exploring these iconic locations.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-16">
    
  
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/one.jpeg" alt="Kashi Vishwanath Temple" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Kashi Vishwanath Temple</h6>
      <p class="text-center text-sm">One of the holiest Shiva temples on the banks of the Ganga.</p>
    </div>

  
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/two.jpeg" alt="BHU Vishwanath Temple" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">BHU Vishwanath Temple</h6>
      <p class="text-center text-sm">A replica of Kashi Vishwanath, inside the BHU campus.</p>
    </div>

  
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/three.jpeg" alt="Sankat Mochan Mandir" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Sankat Mochan Mandir</h6>
      <p class="text-center text-sm">A famous Hanuman temple, especially on Tuesdays.</p>
    </div>

    
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/four.jpeg" alt="Durga Mandir" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Durga Mandir</h6>
      <p class="text-center text-sm">Also called Durga Kund, dedicated to Goddess Durga.</p>
    </div>

    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/five.jpeg" alt="ISKCON Temple" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">ISKCON Temple</h6>
      <p class="text-center text-sm">Spiritual center dedicated to Lord Krishna with kirtans and bhajans.</p>
    </div>


    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/six.jpeg" alt="Sarwed Mandir" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Sarwed Mandir</h6>
      <p class="text-center text-sm">A peaceful Shiva temple away from the city crowds.</p>
    </div>

  
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/chunar.png" alt="Chunar Fort" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Chunar Fort</h6>
      <p class="text-center text-sm">Historic fort known for its legends and architecture.</p>
    </div>


    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/11.jpeg" alt="Markandey Mahadev" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Markandey Mahadev</h6>
      <p class="text-center text-sm">Linked to Rishi Markandeya, located at Ganga-Gomti confluence.</p>
    </div>

    
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/12.jpeg" alt="Manas Mandir" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Manas Mandir</h6>
      <p class="text-center text-sm">Where Tulsidas composed the Ramcharitmanas.</p>
    </div>

    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/ramnagar.jpeg" alt="Ramnagar Fort" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Ramnagar Fort</h6>
      <p class="text-center text-sm">A palace-fort across the Ganga, known for its museum and heritage.</p>
    </div>

  
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/download.jpeg" alt="Shailputri Mata Mandir" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Shailputri Mata Mandir</h6>
      <p class="text-center text-sm">Dedicated to Goddess Shailputri, form of Durga.</p>
    </div>

    
    <div class="bg-[#F8F3ED] p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300" data-aos="fade-up">
      <img src="/Images/temple/15.jpeg" alt="Nepali Temple" class="w-full h-40 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-105" />
      <h6 class="text-center mt-2 font-semibold">Nepali Temple</h6>
      <p class="text-center text-sm">Built in Nepali style, dedicated to Lord Shiva near Lalita Ghat.</p>
    </div>

  </div>

  <div class="flex justify-center mt-10">
  <a href="#excursions">
    <button class="w-44 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-md hover:from-white hover:to-white hover:text-orange-500 border border-orange-500 transition-all duration-300">
      View All
    </button>
  </a>
</div>
</div>

    {/* three boxes */}
    <div data-aos='fade-up ' className='px-4 my-[100px]'>
      <h5 className='text-orange-500 text-center mt-24'>UPDATE INFORS</h5>
      <h1 className='text-amber-950 text-center text-4xl sm:text-3xl mt-4 mb-14'>Our Latest Articles</h1>

      {/* Image Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-14 my-[100px]'>
        <div><img src='/Images/10.jpg' alt='' className='w-full h-[250px] object-cover rounded transition-transform duration-300 hover:scale-105' /></div>
      <div><img src='/Images/hhehe.png' alt='' className='w-full h-[250px] object-cover rounded transition-transform duration-300 hover:scale-105' /></div>
        <div><img src='/Images/6.jpg' alt='' className='w-full h-[250px] object-cover rounded transition-transform duration-300 hover:scale-105' /></div>
      </div>


   {/* Our story part */}
      
    
       <div class="flex flex-col lg:flex-row items-center gap-10 max-w-[1200px] px-4 mx-auto my-[100px] mb-16" data-aos="fade-up">
  
  <img 
    src="/Images/12.jpg" 
    alt="Explore Kashi" 
    class="w-full max-w-md object-cover rounded-xl shadow-lg"
    data-aos="fade-right"
  />

  
<div class="text-[#0F172A] max-w-xl" data-aos="fade-left">
  <h6 class="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 uppercase tracking-wider">
    Our Story
  </h6>
  <h2 class="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-600 mb-6">
    How We Explore Kashi
  </h2>

  <div class="space-y-6 text-sm text-gray-700">
    
    <div>
      <h3 class="text-lg font-semibold">🛕 A Journey Through Heritage</h3>
      <p class="leading-relaxed">
        Kashi, a city where every stone speaks of history — from the divine corridors of Kashi Vishwanath to the ancient ghats whispering tales of sages and empires. Our journey begins where time seems still, guiding you through temples echoing with chants and mysticism that span millennia.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold">🎶 Cultural Immersion</h3>
      <p class="leading-relaxed">
        In Kashi, culture isn’t just seen — it’s felt. Wake up to soul-soothing morning ragas by the riverside, witness the grandeur of the Ganga Aarti under twilight skies, and lose yourself in festivals that blend music, dance, and devotion like nowhere else on Earth.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold">🍛 Traditional Flavors</h3>
      <p class="leading-relaxed">
        The streets of Banaras are a culinary map — each lane offering a different taste of tradition. Savor the crisp kachoris, creamy lassi served in kulhads, the tangy delight of tamatar chaat, and sweets that melt like memories on your tongue — each bite a celebration of heritage.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold">🙏 Spiritual Encounters</h3>
      <p class="leading-relaxed">
        More than a city, Kashi is a spiritual experience. Meet sadhus draped in saffron, witness sacred rituals passed down through generations, and receive blessings that resonate with inner peace. Here, the divine isn’t distant — it’s part of everyday life.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold">🎨 Art & Handicrafts</h3>
      <p class="leading-relaxed">
        Beyond temples and traditions lies a world of artistry. Explore the brilliance of Banarasi silk — woven like poetry. Admire wooden toys, brass sculptures, and vibrant paintings crafted by generations of artisans, each piece a reflection of the city’s creative soul.
      </p>
    </div>

  </div>
</div>
</div>


<div class="flex justify-center mb-20" data-aos="fade-up">
  <button class="w-44 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-md hover:bg-white hover:text-orange-500 border border-orange-500 transition duration-300">
    Read More
  </button>
</div> 
  
 

  {/* double box */}
         <div data-aos="fade-up" className="mt-24">
  <div className='h-auto sm:h-[150vh] bg-[url("/Images/two.jpg")] bg-cover bg-center flex items-center justify-center relative'>

    
    <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm z-0"></div>

    <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 w-[90%] sm:w-[80%] gap-10 p-6 sm:p-3 my-[100px]'>

      <div data-aos="fade-right" className='bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-md text-center flex flex-col justify-center'>
        <h5 className='text-orange-500 mb-2 text-sm sm:text-base tracking-wide uppercase'>Tourist Office</h5>
        <h1 className='text-amber-950 text-3xl sm:text-4xl font-bold mb-4'>Contact Us</h1>
        <p className='text-sm sm:text-base text-gray-700 mb-4 leading-relaxed'>
          Varanasi Tourism Information Centre<br />
          Godowlia Chowk, Varanasi<br />
          Uttar Pradesh - 221001, India
        </p>
        <h4 className='text-amber-900 text-sm sm:text-base font-semibold mb-1'>Opening Hours</h4>
        <p className='text-gray-600 text-sm'>Monday - Sunday: 9:00 AM – 7:00 PM</p>
        <button className='bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium mt-6 sm:mt-8 py-2 px-6 sm:px-8 rounded-md hover:bg-white hover:text-orange-500 border border-orange-500 transition duration-300'>
          Get Directions
        </button>
      </div>

      <div data-aos="fade-left" className='bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-md text-center flex flex-col justify-center'>
        <h5 className='text-orange-500 mb-2 text-sm sm:text-base tracking-wide uppercase'>Plan Your Visit</h5>
        <h1 className='text-amber-950 text-3xl sm:text-4xl font-bold mb-4'>Online Reservation</h1>
        <p className='text-sm sm:text-base text-gray-700 mb-4 leading-relaxed'>
          Want to book guided tours, heritage walks, or river cruises?<br />
          Connect with Varanasi tourism reservation desk.
        </p>
        <h4 className='text-amber-900 text-sm sm:text-base font-semibold mb-1'>Booking Timings</h4>
        <p className='text-gray-600 text-sm'>Everyday: 10:00 AM – 6:00 PM</p>
        <button className='bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium mt-6 sm:mt-8 py-2 px-6 sm:px-8 rounded-md hover:bg-white hover:text-orange-500 border border-orange-500 transition duration-300'>
          Book Now
        </button>
      </div>

    </div>
  </div>
</div>


{/* map */}

<section className="mb-16 px-6 mt-10">
        <h2 className="text-3xl text-center font-semibold text-orange-800 mb-6">📍 Kashi Location</h2>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Kashi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114328.84218320955!2d82.90870732622565!3d25.32089487563448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e339e1d18d6a7%3A0x4d6e725dc8f9c685!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1656393196171!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
 {/* second all div tag */}
   </div>

   {/* footer */}
    <footer className="bg-gray-900 text-white px-6 py-10 md:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-purple-400 font-bold text-lg">Mysterious Place of<br />Varanasi</h3>
          <p className="text-sm text-gray-400 mt-3">
            Made using clean, non-toxic ingredients,<br />
            our products are signed for everyone.<br />
            Made using clean, non-toxic
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} /> Address: No 40 Baria, US
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Mail size={16} /> Email: XYZ@gmail.com
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Phone size={16} /> Phone: (+123) 938 9832
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <span className="flex items-center gap-1 text-sm"><Facebook size={16} /> FACEBOOK</span>
            <span className="flex items-center gap-1 text-sm"><Instagram size={16} /> INSTAGRAM</span>
          </div>
        </div>

        {/* Quick Links */}
       <div>
  <h4 className="font-bold text-sm mb-3">QUICK LINKS</h4>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li><Link to="/" className="hover:text-white">Home</Link></li>
    <li><Link to="/journeytokashi" className="hover:text-white">Journey To Kashi</Link></li>
    <li><Link to="/culture" className="hover:text-white">Culture</Link></li>
    <li><Link to="/Excursions" className="hover:text-white">Excursions</Link></li>
    <li><Link to="/stay" className="hover:text-white">Stay</Link></li>
    <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
  </ul>
</div>
        {/* Categories */}
        <div>
          <h4 className="font-bold text-sm mb-3">CATEGORIES</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Cosmatic</li>
            <li>Services</li>
            <li>Payment info</li>
            <li>Size Chart</li>
            <li>Women Product</li>
            <li>Billing</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-bold text-sm mb-3">SUBCRIBE</h4>
          <p className="text-sm text-gray-400 mb-4">You can be always date with our company news</p>
          <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-2 text-sm outline-none w-full text-white"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm text-white font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        Copyright © 2025 XYZ. All Rights Reserved.
      </div>
    </footer>
  

       {/* all div */}
       
    
      </div>
    
  );
};

export default Home;
