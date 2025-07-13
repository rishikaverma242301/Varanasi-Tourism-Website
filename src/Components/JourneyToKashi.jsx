import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import MysticPlaces from "./MysticPlaces";

const JourneyToVaranasi = () => {
  const journeyTimeline = [
  {
    title: "Arrival in Kashi",
    time: "Day 1 - Morning",
    description: "Enter the city of Moksha — Varanasi. Check-in, refresh and feel the holy air.",
  },
  {
    title: "Sunrise Boat Ride",
    time: "Day 1 - Sunrise",
    description: "Experience peace during an early morning boat ride on the Ganges.",
  },
  {
    title: "Kashi Vishwanath Darshan",
    time: "Day 1 - Noon",
    description: "Visit the sacred temple, one of the twelve Jyotirlingas of Lord Shiva.",
  },
  {
    title: "Manikarnika Ghat",
    time: "Day 1 - Evening",
    description: "Witness the cremation rituals, a powerful symbol of life & death.",
  },
  {
    title: "Ganga Aarti",
    time: "Day 1 - Night",
    description: "Attend the divine Ganga Aarti at Dashashwamedh Ghat with fire & chants.",
  },
];
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    
    <div className="text-black bg-pink-100 font-roboto ">
      
      <div className="bg-[url('/Images/mine.jpeg')] h-[60vh] bg-no-repeat bg-cover bg-bottom relative font-roboto">
        <div className="bg-black/30 backdrop-blur-none absolute inset-0"></div>
      </div>
      {/* <div className=" bg-black/80 backdrop-blur-none">
        <img src="/varansi.jpeg" alt="" className="h-full w-full"/>
      </div> */}


      <div className="flex flex-col md:flex-row items-center font-roboto md:items-start mt-10 px-8 ml-20">
        <div className="md:w-1/2">
          <h1 className="text-6xl text-orange-500 mb-6 text-center md:text-left">
            Journey To Kashi
            
          </h1>

          <p className="text-justify">
            Varanasi—also known as Kashi or Benares—is not just a city; it's an
            emotion that lingers long after you leave. My journey to this
            ancient city wasn’t just a travel plan, it was a calling. A call to
            experience the raw blend of chaos and calm, life and death, faith
            and philosophy. The moment I stepped onto the ghats of the Ganges,
            time seemed to slow down. The air was heavy with incense and chants,
            blending with the smoky fragrance of marigolds and the distant sound
            of temple bells. It felt like the soul of India breathed here. I
            witnessed the famed Ganga Aarti at Dashashwamedh Ghat—a mesmerizing
            spectacle of fire, rhythm, and devotion. The synchronized movements
            of the priests, the glowing flames, and the echoing mantras created
            an atmosphere that sent shivers down my spine. Walking through the
            narrow lanes, I stumbled upon hidden temples, local eateries serving
            hot kachoris and jalebis, and sadhus in saffron robes. Every corner
            had a story, every person a belief. The most powerful moment was a
            boat ride at dawn. As the first rays of sunlight touched the ghats,
            the city slowly awakened. Cremation pyres burned on one side, while
            life bustled on the other. It was surreal—a reminder of the
            transient nature of life. Varanasi is not a place you just visit.
            It’s a place that stays with you. It questions your beliefs, soothes
            your soul, and leaves you with an unexplainable sense of peace.
          </p>
        </div>

        <div className="md:w-1/2 md:pl-20 mt-14">
          <img
            src="/Images/This.jpeg"
            alt="Journey to Varanasi"
            className="h-96 w-96"
          />
        </div>
      </div>

      <div className="border-2 border-orange-300 rounded-2xl ml-28 mr-28 mt-20 shadow-lg bg-orange-100 text-black">
        <div className="flex flex-row">
          <div className="w-2/3 p-5">
            <h1 className="text-5xl text-orange-500 flex justify-center mt-8 mb-8">
          
                Journey to Varanasi: Where Time Stands Still
            
            </h1>

            <h4 className="mt-6 text-3xl font-semibold">
              Arrival in the Eternal City
            </h4>
            <p className="mt-5">
              My journey to Varanasi began with curiosity, but it quickly became
              something more profound...
            </p>

            <h4 className="mt-6 text-3xl font-semibold">
              Ghats of the Ganges: A Dance of Life and Death
            </h4>
            <p className="mt-5">
              I made my way to the ghats—the iconic riverfront steps that
              stretch along the Ganges...
            </p>

            <h4 className="mt-6 text-3xl font-semibold">Spiritual Awakening</h4>
            <p className="mt-5">
              One of the most transformative moments came during an early
              morning boat ride...
            </p>

            <h4 className="mt-6 text-3xl font-semibold">Temples and Teachings</h4>
            <p className="mt-5">
              The Kashi Vishwanath Temple, dedicated to Lord Shiva, was unlike
              any other shrine...
            </p>

            <h4 className="mt-6 text-3xl font-semibold">A City of Contrasts</h4>
            <p className="mt-5">
              What struck me most about Varanasi was its paradoxes. Sacred cows
              wandered through...
            </p>

            <h4 className="mt-6 text-3xl font-semibold">
              Reflections by the River
            </h4>
            <p className="mt-5">
              In the end, Varanasi didn’t give me all the answers. But it gave
              me the right questions...
            </p>
          </div>

          <div className="w-1/3  flex flex-col gap-4">
            <img
              src="/Images/temple.jpeg"
              alt="Station"
              className="rounded-xl shadow pt-10 pr-5"
            />
            <img src="/Images/VT.jpeg" alt="Aarti" className="rounded-xl shadow pt-4 pr-5" />
          </div>
        </div>
      </div>

    <div className="bg-[#fffaf0] text-[#3e2a1e] font-roboto py-16 px-6">
  {/* Section Heading */}
  <h1 className="text-center text-3xl md:text-5xl font-semibold font-roboto text-orange-500 mb-10">
    People of Varanasi: Faces of Faith
  </h1>

  {/* Story Content */}
  <div className="max-w-5xl mx-auto bg-white/70 p-6 md:p-10 rounded-2xl shadow-md backdrop-blur-sm text-justify text-base md:text-lg leading-relaxed">
    <p>
      <i>"People of Varanasi: Faces of Faith"</i> encapsulates the profound spiritual essence of Varanasi, one of the world's oldest continuously inhabited cities and a pivotal center of Hinduism. Photographers like Nilanjan Ray have captured the city's spiritual ambiance through series such as <b>"Faith: A Quaint Emotion,"</b> portraying scenes of pilgrims immersed in the Ganges, individuals engaged in prayer, and the solemn rituals of cremation at Manikarnika Ghat.
    </p>
    <br />
    <p>
      Similarly, Rikrivu Banerjee's work, <b>"Faith and Death,"</b> explores the duality of life and mortality in Varanasi, emphasizing the city's role as a bridge between the temporal and the eternal. These visual stories underscore the city's unique tapestry of devotion, where every face reflects a narrative of belief, resilience, and tradition.
    </p>
    <br />
    <p>
      From meditative sadhus to everyday worshippers, the people of Varanasi embody a living heritage of faith that continues to inspire and captivate observers worldwide. It’s often said that a city is only as alive as its people — and in Varanasi, the people are the soul of the city.
    </p>
    <br />
    <p>
      Every person I met seemed to carry a piece of ancient wisdom in their eyes. There was the flower seller at the ghat who had been making garlands since he was a child, crafting each string of marigolds as an offering to the river goddess.
    </p>
    <br />
    <p>
      There was the old sadhu, wrapped in orange robes and silence, who spoke only when he handed me a tulsi leaf and whispered, <i>“You don’t need to understand everything. Just feel it.”</i> Even the chai wallah, with his cracked glasses and mischievous grin, offered more than just tea — he served stories, local gossip, and a surprising insight into the city’s rhythm.
    </p>
    <br />
    <p>
      Varanasi’s people don’t rush. They live. And they make you want to slow down and live, too. Varanasi (also known as Kashi or Benares) is one of the oldest continuously inhabited cities in the world and holds immense cultural, spiritual, and historical significance in India.
    </p>
  </div>
</div>


   <div className="bg-[#fff7ed] font-sans">
  {/* Simple Compact Hero Section */}
  <div className="relative h-[300px] bg-[url('/varanasi-people.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-orange-300/50 flex items-center justify-center text-center px-4">
      <div className="bg-white/60 p-4 rounded-lg shadow-md max-w-xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#7c2d12]">
          The People of Varanasi
        </h1>
        <p className="mt-2 text-sm md:text-base text-[#4b2e19]">
          Rooted in tradition, full of spirit, and carrying the legacy of centuries.
        </p>
      </div>
    </div>
  
</div>

{/* Mystic Places */}

<MysticPlaces/>


      {/* Sections */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        {/* 1. Demographics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">1. Demographics</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Population:</strong> Approximately 1.5–2 million (as of recent estimates).</li>
            <li><strong>Languages:</strong> Hindi (with Bhojpuri widely spoken). Others include English, Urdu, and Sanskrit.</li>
            <li><strong>Religions:</strong> Majority: Hinduism. Minority: Islam, Christianity, Jainism, Buddhism.</li>
          </ul>
        </motion.div>

        {/* 2. Social & Cultural Identity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-roboto font-semibold mb-4 text-orange-500">2. Social and Cultural Identity</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Religious:</strong> Spiritual life and daily Hindu rituals like aarti.</li>
            <li><strong>Priests & Scholars:</strong> Home to pandits, Sanskrit scholars, and gurus.</li>
            <li><strong>Artists & Musicians:</strong> Classical legends like Ravi Shankar and Bismillah Khan hailed from here.</li>
            <li><strong>Weavers & Artisans:</strong> Famous for Banarasi silk sarees and handloom crafts.</li>
            <li><strong>Philosophers & Thinkers:</strong> Due to institutions like BHU, many academics reside here.</li>
          </ul>
        </motion.div>

        {/* 3. Lifestyles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">3. Lifestyles: Traditional yet Evolving</h2>
          <p className="mb-4">Older generations follow traditional practices while the youth balance tradition with modern life.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Pilgrimage-Oriented Economy:</strong> Tourism, guesthouses, boat rides, etc.</li>
            <li><strong>Culinary Culture:</strong> Famous for food like kachori-sabzi, tamatar chaat, paan, and malaiyyo.</li>
          </ul>
        </motion.div>

        {/* 4. Attitudes & Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">4. Attitudes and Values</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Spiritual Outlook:</strong> Death is seen as liberation, especially in Kashi.</li>
            <li><strong>Hospitality:</strong> Known for warmth and friendliness toward visitors.</li>
            <li><strong>Community-Centric:</strong> Life revolves around festivals, temples, and local events.</li>
          </ul>
        </motion.div>

        {/* 5. Challenges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">5. Challenges</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Urban Congestion:</strong> Narrow lanes and dense population.</li>
            <li><strong>Pollution & Sanitation:</strong> Ganges and some areas still struggle with cleanliness.</li>
            <li><strong>Heritage vs Modernity:</strong> Balancing cultural preservation with development.</li>
          </ul>
        </motion.div>

        {/* 6. Festivals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-orange-500">6. Festivals & Celebrations</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Dev Deepawali:</strong> Thousands of lamps on the ghats.</li>
            <li><strong>Makar Sankranti:</strong> Kite flying and special food.</li>
            <li><strong>Holi:</strong> Celebrated with color and music.</li>
            <li><strong>Mahashivratri:</strong> Grand celebration at Kashi Vishwanath Temple.</li>
            <li><strong>Ganga Dussehra:</strong> Honors the descent of the Ganges.</li>
          </ul>
        </motion.div>
      </div>
    </div>


 <div className="bg-[#fff7ed] py-12 px-6 font-roboto">
  {/* Title */}
  <h1 className="text-center text-4xl md:text-5xl font-semibold font-roboto text-orange-500 mb-10">
    Famous Temples Of Varanasi
  </h1>

  {/* Grid of 12 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      { src: "/Images/temple/kashi.jpeg", name: "Kashi Vishwanath Temple" },
      { src: "/Images/temple/three.jpeg", name: "Sankat Mochan Temple" },
      { src: "/Images/temple/four.jpeg", name: "Durga Temple" },
      { src: "/Images/temple/anna.jpeg", name: "Annapurna Temple" },
      { src: "/Images/temple/bharat.jpeg", name: "Bharat Mata Temple" },
      { src: "/Images/temple/manas.jpeg", name: "Tulsi Manas Temple" },
      { src: "/Images/temple/sev.jpeg", name: "Kal Bhairav Temple" },
      { src: "/Images/temple/11.jpeg", name: "Mrityunjay Mahadev Temple" },
      { src: "/Images/temple/tridev.jpeg", name: "Tridev Temple" },
      { src: "/Images/temple/lalita.jpeg", name: "Lalita Gauri Temple" },
      { src: "/Images/temple/bhu.jpeg", name: "New Vishwanath Temple (BHU)" },
      { src: "/Images/temple/adi.jpeg", name: "Adi Keshav Temple" },
    ].map((temple, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 text-center"
      >
        <img
          src={temple.src}
          alt={temple.name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold text-[#7c2d12]">
          {temple.name}
        </h2>
      </div>
    ))}
  </div>
</div>

      <div className="border-2 border-orange-300 rounded-2xl p-8 ml-28 mr-28 shadow-lg bg-orange-100 text-black">
        <div className="flex flex-row">
          <div className="w-2/3 pr-6">
            <h1 className="text-5xl text-orange-500 flex justify-center mt-8">
            
                The Hidden Varanasi: Off the Tourist Path
              
            </h1>

            <p className="mt-8">
              Everyone comes for the ghats, but Varanasi has layers if you’re
              willing to peel them back...
            </p>

            <h4 className="mt-6 text-2xl">
              <b>Rituals of Meaning</b>
            </h4>
            <p className="mt-4">
              Everything in Varanasi is a ritual—from bathing in the Ganga to
              lighting a diya...
            </p>

            <h4 className="mt-6 text-2xl">
              <b>Dreams in Varanasi</b>
            </h4>
            <p className="mt-4">
              They say Varanasi changes your dreams. It did mine. The night
              after I visited Manikarnika Ghat...
            </p>

            <h4 className="mt-6 text-2xl">
              <b>Whispers of the Old City</b>
            </h4>
            <p className="mt-4">
              During the day, the alleys of Varanasi are alive—teeming with
              life, color, scent...
            </p>

            <h4 className="mt-6 text-2xl">
              <b>The Aftertaste of Varanasi</b>
            </h4>
            <p className="mt-4">
              It wasn’t until I left that I realized how much of Varanasi I had
              taken with me...
            </p>

            <h4 className="mt-6 text-2xl">
              <b>Returning, But Not the Same</b>
            </h4>
            <p className="mt-4 mb-4">
              Coming back to the “regular world” felt strange at first. Traffic
              was louder...
            </p>
          </div>

          <div className="w-1/3 flex flex-col items-end space-y-4">
            <img
              src="/Images/images 10.jpeg"
              alt=""
              className="w-96 h-52 object-cover rounded-lg shadow"
            />
            <img
              src="/Images/images 3.jpeg"
              alt=""
              className="w-96 h-52 object-cover rounded-lg shadow"
            />
            <img
              src="/Images/images 6.jpeg"
              alt=""
              className="w-96 h-52 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </div>

    <div className="bg-[#fffaf0] text-[#3f2a1d] font-roboto py-16 px-6">
  {/* Section Heading */}
  <h1 className="text-3xl md:text-5xl text-orange-500 text-center font-semibold  mb-10">
    The City Inside Me
  </h1>

  {/* Story Paragraph */}
  <div className="max-w-5xl mx-auto text-justify text-base md:text-lg leading-relaxed bg-white/70 p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm">
    <p>
      Varanasi is not merely a city I have visited — it is a place that has rooted itself deep within me, like an ancient mantra echoing through my soul. It lives in my breath, in the memories I didn’t even know I carried, in the way I now see time, life, and death. As I walked through its winding alleys, flanked by crumbling stone walls etched with centuries of devotion, I felt as if the past and present were folded into each other.
    </p>
    <br />
    <p>
      The Ganga, ever flowing, seemed less a river and more a lifeline of the universe — carrying ashes and blessings with the same tender indifference. The air was thick with incense and meaning — every sound, from the conch shells in the temples to the cries of boatmen at the ghats, was part of a deeper silence.
    </p>
    <br />
    <p>
      In Varanasi, death loses its sting; it becomes a ritual, a return, a release. I saw families mourning and celebrating in the same breath, lighting pyres on Manikarnika Ghat as if they were sending loved ones not to an end, but into the arms of eternity.
    </p>
    <br />
    <p>
      Life here is raw, unapologetic, and sacred — woven into the chaos of crowded streets, the holy cows, the saffron-clad sadhus, and the pilgrims who believe that just one step here can wash away lifetimes. Varanasi taught me that the divine is not only found in temples, but in everyday dust and struggle.
    </p>
    <br />
    <p>
      It became the city inside me — a symbol of surrender, continuity, and awakening. Even now, far away from its banks, I carry its essence within — a reminder that beneath the surface of all things, something eternal hums softly, patiently, waiting to be heard.
    </p>
  </div>

</div>

    
      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-center font-semibold text-orange-500 mb-12">Your Spiritual Timeline</h2>
        <div className="space-y-8">
          {journeyTimeline.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-6 top-6 bg-amber-200 text-white rounded-full p-2 shadow-md">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-2xl font-semibold text-orange-600">{step.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1 mb-2">
                <FaClock className="mr-2" /> {step.time}
              </div>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      

     </div>

  );
};

export default JourneyToVaranasi;