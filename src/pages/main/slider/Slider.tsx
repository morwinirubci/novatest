import { Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../../hooks/hook";
import "swiper/swiper-bundle.css";
import "./Slider.css";

const Slider: React.FC = () => {
  const slides = useAppSelector((state) => state.actors.actors);

  return (
    <>
      <div className="actors-slider">
        <div className="container">
          <div className="actors-slider__top">
            <p className="actors-slider__title title">Актерский состав</p>
            <div className="actors-slider__navigation-arrows">
              <div className="actors-slider__navigation-arrow-prev"></div>
              <div className="actors-slider__navigation-arrow-next"></div>
            </div>
          </div>
          <div className="actors-slider__scrollbar"></div>
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={24}
            slidesPerView={4}
            navigation={{
              nextEl: ".actors-slider__navigation-arrow-next",
              prevEl: ".actors-slider__navigation-arrow-prev",
            }}
            scrollbar={{
              draggable: true,
              el: ".actors-slider__scrollbar",
            }}
            breakpoints={{
              1440: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="actors-slider__actor">
                  <img
                    className="actors-slider__image"
                    src={slide.image}
                    alt={slide.actor}
                  />
                  <div className="actors-slider__info">
                    <p className="actors-slider__role">{slide.role}</p>
                    <p className="actors-slider__actor-name">{slide.actor}</p>
                  </div>
                  <p className="actors-slider__description">{slide.roleInfo}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Slider;
