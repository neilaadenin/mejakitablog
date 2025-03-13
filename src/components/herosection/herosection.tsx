'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const slides = [
  { id: 1, image: '/hero.jpg', title: 'Belajar Lebih Mudah', description: 'Akses berbagai materi dengan mudah.' },
  { id: 2, image: '/article9.png', title: 'Diskusi Interaktif', description: 'Bergabung dengan komunitas belajar.' },
  { id: 3, image: '/article1.png', title: 'Latihan Soal', description: 'Kerjakan soal untuk persiapan ujian.' },
  { id: 4, image: '/article2.jpg', title: 'Latihan Soal', description: 'Kerjakan soal untuk persiapan ujian.' },
  { id: 5, image: '/article3.jpg', title: 'Latihan Soal', description: 'Kerjakan soal untuk persiapan ujian.' },
];

export default function HeroCarousel() {
  return (
    <section className="w-full flex justify-center items-center px-[74px] mt-10 mb-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={250}
        coverflowEffect={{
          rotate: 20, // Efek rotasi 3D
          stretch: 0,
          depth: 100, // Kedalaman efek 3D
          modifier: 1,
          slideShadows: false, // Jika ingin shadow di slide, ubah ke `true`
        }}
        className="w-full max-w-[1400px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex justify-center">
            <div className="relative w-[1024px] h-[606px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-40 text-white">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-xl mt-2">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
