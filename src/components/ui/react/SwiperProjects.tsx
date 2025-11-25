import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slide from './Slide';

const SwiperProjects: React.FC = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Bienvenido a Nuestra Plataforma",
      description: "Descubre las mejores soluciones para tu negocio",
      btnText: "Ver mas..",
      btnLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      title: "Innovación y Tecnología",
      description: "Las herramientas más avanzadas a tu disposición",
      btnText: "Ver mas..",
      btnLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
      title: "Únete a Nuestra Comunidad",
      description: "Más de 10,000 usuarios satisfechos",
      btnText: "Ver mas..",
      btnLink: "#"
    }
  ];

  return (
    <Swiper
      id='projects'
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide, index) =>
        <SwiperSlide key={index}>
          <Slide
            {...slide}
          />
        </SwiperSlide>
      )}
    </Swiper>
  )
};
export default SwiperProjects;