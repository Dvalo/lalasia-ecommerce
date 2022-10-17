import { Swiper, SwiperSlide } from "swiper/react";
import Description from "./Text/Description";
import Eyebrow from "./Text/Eyebrow";
import Title from "./Text/Title";
import Icon from "./Icon";
import Image from "next/image";
import { testimonialItems } from "../types/testimonialItem";

import "swiper/css";

interface IProps {
  eyebrow: string;
  title: string;
  description: string;
  slides: testimonialItems[];
}

const TestimonialsCarousel = ({
  eyebrow,
  title,
  description,
  slides,
}: IProps) => {
  return (
    <article className="b-testimonials-carousel">
      <div className="b-testimonials-carousel__content">
        <div className="b-testimonials-carousel__eyebrow">
          <Eyebrow eyebrow={eyebrow} />
        </div>
        <div className="b-testimonials-carousel__title">
          <Title title={title} />
        </div>
        <div className="b-testimonials-carousel__desc">
          <Description description={description} />
        </div>
      </div>
      <div className="b-testimonials-carousel__items">
        <Swiper
          spaceBetween={50}
          slidesPerView="auto"
          loop
          centeredSlides
          grabCursor
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide
                className="b-testimonials-carousel__item"
                key={slide.index}
              >
                <div className="b-testimonials-carousel__item-icon">
                  <Icon width={40} height={40} icon="quote" />
                </div>
                <div className="b-testimonials-carousel__item-desc">
                  <Description description={slide.testimonial} />
                </div>
                <div className="b-testimonials-carousel__item-footer">
                  <div className="b-testimonials-carousel__item-avatar">
                    <Image layout="fill" alt={slide.name} src={slide.avatar} />
                  </div>
                  <div className="b-testimonials-carousel__item-name">
                    {slide.name}
                  </div>
                  <div className="b-testimonials-carousel__item-rating">
                    <Icon width={20} height={20} icon="star" />
                    {slide.rating}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
};

export default TestimonialsCarousel;
