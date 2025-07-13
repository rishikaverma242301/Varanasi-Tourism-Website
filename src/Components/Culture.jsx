import React, { useEffect } from "react";
import AOS from "aos";
import AudioPlayer from "./Audioplayer";
import "aos/dist/aos.css";


const VaranasiTourism = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-hidden">
    
      <img
        src="/Images/9.webp"
        alt="Varanasi Banner"
        className="w-full h-[60vh] object-cover"
      />

    <section className="py-14 px-10 sm:px-6 md:px-10 bg-white text-gray-900" data-aos="fade-up" id="intro-varanasi">
  <h1 className="text-2xl md:text-4xl text-orange-600 text-left mb-10">
    🛕 1. Introduction to Varanasi
  </h1>

  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Text Content */}
    <div className="md:w-1/2 space-y-5" data-aos="fade-right">
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Varanasi</strong>, also known as <strong>Kashi</strong> or <strong>Banaras</strong>, is one of the world’s <em>oldest continuously inhabited cities</em>, nestled along the sacred banks of the River Ganges in Uttar Pradesh, India.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Steeped in <strong>myth, legend, and history</strong>, Varanasi is a <em>living embodiment</em> of India’s spiritual and cultural soul. Often called <strong>“The City of Lights”</strong> (और कभी-कभी <em>“City of Temples”</em>), it radiates with the glow of thousands of lamps and the light of inner awakening.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Streets echo with <strong>mantras</strong>, <strong>temple bells</strong>, and <strong>classical music</strong> from sitars and tablas. Life here feels timeless, infused with sacred rituals and a deep connection to divinity.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        At the city’s spiritual heart stands the majestic <strong>Kashi Vishwanath Temple</strong>, one of the <em>12 Jyotirlingas</em> of Lord Shiva. It is believed that <strong>Shiva himself resides in Kashi</strong>, and those who die here attain <strong>moksha</strong> — liberation from the cycle of rebirth.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        From serene <strong>sunrise boat rides</strong> on the Ganga to mesmerizing <strong>evening aartis</strong>, and from Vedic wisdom to <strong>Banarasi cultural richness</strong>, Varanasi is a place where <em>life and death coexist in harmony</em>.
      </p>
    </div>

    {/* Image Block */}
    <div className="md:w-1/2" data-aos="fade-left">
      <img
        src="/Images/one.jpg"
        alt="Ganga Aarti"
        className="rounded-2xl shadow-lg transition duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>
  <section className="py-12 px-6 bg-gray-50 text-gray-800 " id="about-varanasi" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl text-center text-orange-600 mb-10">🌆 Varanasi – The Timeless City of Light</h2>
    
    <p className="text-lg mb-6 leading-relaxed">
      <strong>Varanasi</strong>, also called <strong>Kashi</strong> or <strong>Banaras</strong>, is one of the <em>oldest continuously inhabited cities in the world</em>, nestled on the sacred banks of the <strong>River Ganga</strong> in Uttar Pradesh, India. This ancient city is renowned as the spiritual capital of India, glowing with devotion, history, and mysticism.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🛕 Home to Kashi Vishwanath Temple</h3>
        <p>This sacred temple is one of the 12 Jyotirlingas and represents the heart of spiritual India. Devotees come from all corners seeking blessings and moksha.</p>
      </div>
      <div className="bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🌅 The Ghats of Ganga – Life & Death Meet</h3>
        <p>Varanasi’s 80+ ghats are central to its soul. Dashashwamedh Ghat is famous for Ganga Aarti, while Manikarnika Ghat is known for sacred cremation rituals.</p>
      </div>

      {/* Point 3 */}
      <div className="bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🕉️ Moksha Bhoomi – The Land of Liberation</h3>
        <p>It is believed that dying in Kashi grants liberation from the cycle of rebirth, with Lord Shiva whispering the Taraka Mantra at one’s last breath.</p>
      </div>
      <div className="bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🎶 Cultural & Musical Capital</h3>
        <p>Varanasi has gifted the world with classical music, dance, and legends like Pt. Ravi Shankar and Bismillah Khan. The city breathes rhythm and melody.</p>
      </div>

      <div className="bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🧘‍♀️ Spiritual Learning & Yoga</h3>
        <p>A land of sages and seekers, Varanasi is home to ashrams, yogic learning, and spiritual energy that attracts global pilgrims and yoga enthusiasts.</p>
      </div>

      <div className="bg-orange-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🛶 Ganga Boat Rides</h3>
        <p>Experience magical sunrises on the river, watch rituals unfold along the ghats, and feel the calmness that only this eternal city offers.</p>
      </div>
    </div>

    <div className="mt-10 text-center">
      <h3 className="text-2xl font-semibold text-orange-500 mb-3">🧭 Also Known As</h3>
      <ul className="space-y-2 text-lg">
        <li>🔱 Kashi – The Luminous City</li>
        <li>🪔 The City of Lights</li>
        <li>🕍 Banaras – Cultural Powerhouse</li>
      </ul>
    </div>
  </div>
</section>

<section
  className="py-10 px-6 bg-gray-50 text-left"
  data-aos="zoom-in"
>
  <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto overflow-hidden">
    <div className="md:w-1/2" data-aos="fade-right">
      <h1 className="text-3xl md:text-4xl text-orange-600 mb-4 text-right">
        🔱 2. Varanasi and Lord Shiva
      </h1>
      <p className="text-lg md:text-xl text-gray-700">
        It is believed that Lord Shiva founded Varanasi. According to ancient
        belief, he struck his trident (Trishul) into the ground here to protect
        the sacred city. Kashi Vishwanath Temple, one of the 12 Jyotirlingas,
        symbolizes this divine connection.
      </p>
      
    </div>

    <div className="md:w-1/2" data-aos="fade-left">
      <img
        src="/Images/5.jpg"
        alt="Lord Shiva Temple"
        className="rounded-lg shadow-md w-full h-auto object-cover"
      />
    </div>
  </div>
</section>
<section
  className="py-12 px-4 sm:px-6 md:px-8 bg-white text-gray-900"
  id="origin-of-kashi"
  data-aos="fade-up"
>
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl text-center text-orange-700 mb-8">
      🕉️ The Divine Origin of Kashi – Lord Shiva’s Eternal City
    </h2>

    <p className="text-lg leading-relaxed mb-6">
      It is widely believed in Hindu tradition that <strong>Lord Shiva Himself founded the sacred city of Kashi (Varanasi)</strong>. According to ancient scriptures and legends, when darkness and chaos spread across the world, Lord Shiva chose this sacred ground along the banks of the River Ganga to become a <strong>center of cosmic energy and spiritual liberation</strong>.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      To mark His divine claim over the land, <strong>Shiva struck His trident (Trishul) into the earth</strong>. That moment is said to have sanctified Kashi forever — making it <span className="italic">indestructible, eternal, and sacred</span>. It is believed that even during Pralaya (cosmic destruction), Kashi remains untouched by time.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      The <strong>Kashi Vishwanath Temple</strong>, one of the revered <strong>12 Jyotirlingas</strong>, stands at the spiritual core of the city. It is not merely a temple but a symbol of the <strong>eternal light (Jyoti) of Shiva</strong>, representing the union of the physical and spiritual realms.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      Millions of pilgrims visit this holy site each year — not just to seek blessings, but to connect with the <strong>eternal presence of Lord Shiva</strong>, who is believed to reside in Kashi forever. This is why Varanasi is revered as the <strong>“City of Shiva”</strong> and the <strong>“City of Liberation (Moksha)”</strong>.
    </p>

    <div className="mt-8 text-center">
      <ul className="text-lg space-y-2">
        <li>🔱 Founded by Lord Shiva Himself</li>
        <li>🪔 Marked by the strike of His divine Trishul</li>
        <li>🛕 Home to the sacred Kashi Vishwanath Jyotirlinga</li>
        <li>🌌 A place where the physical meets the eternal</li>
        <li>🕉️ Liberation (Moksha) is believed to be assured here</li>
      </ul>
    </div>
  </div>
</section>


    <section className="py-16 px-4 sm:px-6 md:px-10 bg-orange-50 text-gray-800" data-aos="fade-up" id="history-varanasi">
  <div className="max-w-6xl mx-auto">
  
    <h1 className="text-4xl text-orange-600 text-center mb-10 drop-shadow-sm">
      📜 3. History of Varanasi
    </h1>

    <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
      With a legacy of over <strong>3,000 years</strong>, Varanasi is believed to be one of the world’s oldest continuously inhabited cities.
      A timeless center for <strong>knowledge, spirituality, and devotion</strong>, it has nurtured sages, saints, and seekers for millennia.
      It was near here, in <strong>Sarnath</strong>, that <em>Gautam Buddha</em> delivered his first sermon — igniting the flame of Buddhism.
    </p>


    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      <div
        className="w-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        data-aos="fade-right"
      >
        <img
          src="/Images/10.jpg"
          alt="Ancient Varanasi"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div
        className="w-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        data-aos="fade-left"
      >
        <img
          src="/Images/s.jpg"
          alt="Ancient Temple"
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    <div className="mt-12 text-center">
      <blockquote className="text-lg md:text-xl italic text-gray-600 max-w-3xl mx-auto border-l-4 border-orange-500 pl-6">
        “To understand Varanasi is to touch the soul of India — a place where history lives and eternity breathes.”
      </blockquote>
    </div>
  </div>
</section>
<section
  className="py-12 px-4 sm:px-6 md:px-8  text-gray-900"
  id="varanasi-history"
  data-aos="fade-up"
>
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl  text-center text-orange-700 mb-8">
      📜 Varanasi – 3,000 Years of Eternal Knowledge & Spiritual Awakening
    </h2>

    <p className="text-lg leading-relaxed mb-6">
      With a history that spans over <strong>3,000 years</strong>, Varanasi is considered one of the <strong>oldest living cities in the world</strong>. It has been a thriving center of <strong>learning, spiritual wisdom, and cultural evolution</strong> since ancient times.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      Over the centuries, the city has inspired and nurtured countless <strong>saints, scholars, and poets</strong> like <em>Kabir Das, Tulsidas, and Ravidas</em>. The ghats, temples, and streets of Kashi have long been filled with the echoes of Vedic chants, classical music, and philosophical debates.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      Just a few kilometers away, in <strong>Sarnath</strong>, an equally historic moment took place — <strong>Gautam Buddha delivered his first sermon</strong> here after attaining enlightenment at Bodh Gaya. This marked the beginning of the Buddhist Sangha and the turning of the <em>Wheel of Dharma</em>.
    </p>

    <p className="text-lg leading-relaxed mb-6">
      Thus, Varanasi is not only sacred for Hindus, but also a significant spiritual and philosophical site for Buddhists and seekers from all walks of life. It is a living symbol of <strong>interfaith harmony, knowledge, and eternal spiritual light</strong>.
    </p>

    <div className="mt-8 text-center">
      <ul className="text-lg space-y-2">
        <li>📖 Over 3,000 years of continuous cultural legacy</li>
        <li>🧘‍♂️ Land of saints like Kabir, Ravidas, Tulsidas</li>
        <li>🪔 Center for Hindu, Buddhist, and spiritual philosophy</li>
        <li>🕊️ Sarnath – where Buddha gave his first sermon</li>
        <li>🎓 A timeless hub of wisdom, music, and sacred arts</li>
      </ul>
    </div>
  </div>
</section>

<section
  className="py-14 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-50 via-orange-50 to-gray-100 text-gray-900"
  data-aos="fade-up"
  id="ghats-temples"
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl  text-center text-orange-600 mb-10 drop-shadow-md">
      🌊 4. Major Ghats and Temples of Varanasi
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Dashashwamedh Ghat */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">
          🔥 Dashashwamedh Ghat
        </h3>
        <p className="text-base leading-relaxed">
          The most vibrant and spiritual ghat on the banks of the Ganga.
          Famous for the grand <strong>Ganga Aarti</strong> performed every
          evening with fire, conch shells, and chants that mesmerize visitors.
        </p>
      </div>

      {/* Manikarnika Ghat */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">
          ⚱️ Manikarnika Ghat
        </h3>
        <p className="text-base leading-relaxed">
          Known as the main cremation ghat, it is believed that those who are
          cremated here attain <em>moksha</em>. Associated deeply with Lord
          Shiva and Goddess Parvati.
        </p>
      </div>

      {/* Kashi Vishwanath */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">
          🛕 Kashi Vishwanath Temple
        </h3>
        <p className="text-base leading-relaxed">
          One of the <strong>12 Jyotirlingas</strong>, this temple is the
          spiritual core of Varanasi. Dedicated to Lord Shiva, it draws
          millions of devotees each year.
        </p>
      </div>

      {/* Other Temples */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">
          🧭 Other Iconic Temples
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>🛐 Sankat Mochan Hanuman Mandir:</strong> Believed to protect from all troubles.
          </li>
          <li>
            <strong>🪔 Durga Kund Temple:</strong> A red sandstone temple near a sacred pond.
          </li>
          <li>
            <strong>📜 Tulsi Manas Mandir:</strong> Site where Tulsidas wrote <em>Ramcharitmanas</em>.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

   <section className="py-14 px-4 sm:px-6 md:px-10 bg-white text-gray-800" data-aos="fade-up" id="culture-traditions">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl text-center text-orange-600 mb-10 drop-shadow-md">
      🧘‍♀️ 5. Culture and Traditions
    </h1>

    <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-8">
      Varanasi is a living canvas of vibrant culture, centuries-old traditions, and spiritual elegance. From mesmerizing music to rich attire and grand festivals, the city celebrates life with devotion and color.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Classical Music */}
      <div className="bg-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🎶 Classical Music</h3>
        <p>
          Birthplace of the <strong>Banaras Gharana</strong>, Varanasi has gifted the world with legends like Pandit Ravi Shankar and Ustad Bismillah Khan. Streets often echo with sitar, tabla, and soulful ragas.
        </p>
      </div>

      {/* Banarasi Sarees */}
      <div className="bg-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">👘 Banarasi Sarees</h3>
        <p>
          Globally acclaimed for their gold and silver zari work, <strong>Banarasi sarees</strong> are woven in tradition, grace, and fine craftsmanship — often worn on weddings and festivals.
        </p>
      </div>

      {/* Thandai & Paan */}
      <div className="bg-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🥤 Thandai & Paan</h3>
        <p>
          No visit to Varanasi is complete without sipping on <strong>thandai</strong> (a traditional sweet milk drink) and enjoying the famous <strong>Banarasi paan</strong>, a flavorful cultural staple.
        </p>
      </div>

      {/* Major Festivals */}
      <div className="bg-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🪔 Dev Deepawali & Festivals</h3>
        <p>
          Festivals like <strong>Dev Deepawali</strong>, <strong>Shivratri</strong>, and <strong>Ganga Mahotsav</strong> are celebrated with divine light, cultural processions, music, and an ocean of faith.
        </p>
      </div>
    </div>
  </div>
</section>

<section
  className="py-14 px-4 sm:px-6 md:px-10 bg-gray-50 text-gray-800"
  data-aos="zoom-in-up"
  id="varanasi-today"
>
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl text-center text-orange-600 mb-8 drop-shadow-sm">
      🌆 6. Varanasi Today
    </h1>

    <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-10">
      Today, Varanasi gracefully blends its ancient heritage with the pulse of
      modern development. As one of India’s <strong>Smart Cities</strong>, it
      now offers improved infrastructure, digital services, and a cleaner,
      more accessible cityscape — all while preserving its spiritual soul.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Smart Roads */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">🚧 Smart Infrastructure</h3>
        <p>Wider roads, smart lighting, and efficient traffic systems enhance city mobility and safety.</p>
      </div>

      {/* Clean Ghats */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">🧼 Clean Ghats</h3>
        <p>Continuous cleaning, riverfront beautification, and LED-lit ghats provide a cleaner and serene experience.</p>
      </div>

      {/* Digital Services */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">📲 Digital Governance</h3>
        <p>e-Governance, public Wi-Fi zones, and smart kiosks make Varanasi more tech-friendly and accessible.</p>
      </div>

      {/* Tourism Boost */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">🚶‍♂️ Tourism Development</h3>
        <p>New cultural corridors, e-rickshaws, and signage help tourists explore the city with ease and safety.</p>
      </div>

      {/* Airport & Connectivity */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">✈️ Improved Connectivity</h3>
        <p>Lal Bahadur Shastri Airport, revamped railway stations, and smart bus stops connect the city globally.</p>
      </div>

      {/* Balance of Tradition */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">🕉️ Tradition Intact</h3>
        <p>Despite the transformation, rituals, Aartis, festivals, and temples continue to preserve the spirit of ancient Kashi.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-12 px-4 bg-white text-center" data-aos="fade-in">
  <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto border-l-4 border-orange-500 pl-6">
    “Amidst the chanting of mantras, the soft ringing of temple bells, and the eternal flow of the Ganga, Varanasi offers a peace that words cannot define...”
    <br />
    <span className="block mt-4 font-semibold text-orange-600">– Soul of Kashi</span>
  </blockquote>
</section>


<section className="py-16 px-6 md:px-12 bg-white text-gray-800" data-aos="fade-up" id="peace-of-kashi">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl text-orange-600 text-center mb-10">
      🕊️ What Makes Varanasi Radiate Peace and Emotional Love
    </h2>

    <p className="text-xl text-center italic text-gray-600 mb-12 max-w-3xl mx-auto">
      “Varanasi doesn’t just exist — it breathes, heals, and embraces your soul.”
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* 1. Ganga */}
      <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🌊 The Flowing Ganga</h3>
        <p>
          As it gently flows past the ghats, the River Ganga purifies not just the body but also the soul.
          Sitting quietly by its banks feels like the heart is being washed in eternal peace.
        </p>
      </div>

      {/* 2. Aarti */}
      <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🔥 Aarti & Sacred Sounds</h3>
        <p>
          The evening Aarti, the chants, and bells create a soundscape that moves the spirit.
          It’s more than tradition — it’s an emotional awakening.
        </p>
      </div>

      {/* 3. Death & Liberation */}
      <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">⚱️ Death & Liberation</h3>
        <p>
          At Manikarnika Ghat, the sight of liberation through death brings acceptance, not fear.
          It brings peace that comes from understanding the soul's journey.
        </p>
      </div>

      {/* 4. Simplicity */}
      <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🫖 The Simplicity of Life</h3>
        <p>
          Life flows slowly here — morning chai, temple rituals, street bhajans.
          In this simplicity lies healing. In presence, peace.
        </p>
      </div>

      {/* 5. Lord Shiva */}
      <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">🔱 The Presence of Lord Shiva</h3>
        <p>
          Varanasi is Shiva’s city. His invisible presence calms hearts,
          grounds minds, and inspires devotion that brings stillness.
        </p>
      </div>

      {/* 6. Devotion */}
      <div className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2">❤️ The Devotion of People</h3>
        <p>
          People don’t just visit — they surrender.
          Their tears, prayers, and songs make the city a sanctuary of shared emotion and love.
        </p>
      </div>
    </div>

    <div className="mt-12 text-center">
      <blockquote className="text-xl italic text-gray-700 max-w-2xl mx-auto border-l-4 border-orange-500 pl-6">
        “Varanasi gives peace not by removing pain, but by embracing it with love.
        It teaches that stillness is strength and the soul is eternal.”
      </blockquote>
    </div>
  </div>
</section>

<section className="py-12 px-6 bg-gray-50 text-gray-800" id="aarti-sounds" data-aos="fade-up">
  <AudioPlayer />
</section>
   

    </div>
    
  );
};

export default VaranasiTourism;
