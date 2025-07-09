import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

export default function MySlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade]}
      slidesPerView={1}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="h-[60vh] bg-cover bg-[url(/Images/Slider/bg.jpg)] relative bg-center">
          <div className="bg-gradient-to-r from-[#1703375f] to-[#1703375f] absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.h1
              className="text-white text-4xl font-bold" data-aos="fade-right"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome  Varanasi !
            </motion.h1>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="h-[60vh] bg-cover bg-[url(/Images/10.jpg)] relative bg-center">
          <div className="bg-gradient-to-r from-[#1703375f] to-[#1703375f] absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.h1
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Hiiii Everyone!
            </motion.h1>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="h-[60vh] bg-cover bg-[url(/Images/Slider/11.jpg)] relative bg-center">
          <div className="bg-gradient-to-r from-[#1703375f] to-[#1703375f] absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.h1
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome To  !
            </motion.h1>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="h-[60vh] bg-cover bg-[url(/Images/Slider/one.jpg)] relative bg-center">
          <div className="bg-gradient-to-r from-[#1703375f] to-[#1703375f] absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.h1
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              To Varanasi !
            </motion.h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
