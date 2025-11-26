import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slide from './Slide';
import partner from '@assets/projects/partner.webp';
import pl4n3t from '@assets/projects/pl4n3t.webp';
import vetko from '@assets/projects/vetko.webp';


const SwiperProjects: React.FC = () => {
  const slides = [
    {
      image: partner,
      title: "Partner App",
      description: "Una aplicación integral para potenciar y gestionar tu experiencia minorista. Realiza un seguimiento de tus KPIs, gestiona regalos e inventario, y mantente informado",
      btnText: "Ver mas..",
      btnLink: "https://play.google.com/store/apps/details?id=com.neubinarios.partner&hl=es_CO"
    },
    {
      image: pl4n3t,
      title: "PL4N3T",
      description: "Un ERP diseñado para empresas comprometidas con la sostenibilidad. Cuantifica, analiza y toma decisiones en tiempo real",
      btnText: "Ver mas..",
      btnLink: "https://www.pl4n3t.com/"
    },
    {
      image: vetko,
      title: "VETKO",
      description: "plataforma tecnológica construida bajo una red colaborativa que se encargará de las necesidades de tus mascotas y sus familias",
      btnText: "Ver mas..",
      btnLink: "https://www.vetko.pet/"
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