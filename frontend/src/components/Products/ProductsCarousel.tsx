import Description from "../Text/Description";
import Eyebrow from "../Text/Eyebrow";
import Title from "../Text/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { productItem } from "../../types/product";

import "swiper/css";
import ProductCard from "./ProductCard";

interface IProps {
  eyebrow: string;
  title: string;
  description: string;
  slides: productItem[];
}

const ProductsCarousel = ({ eyebrow, title, description, slides }: IProps) => {
  return (
    <article className="b-products-carousel">
      <div className="b-products-carousel__content">
        <div className="b-products-carousel__eyebrow">
          <Eyebrow eyebrow={eyebrow} />
        </div>
        <div className="b-products-carousel__title">
          <Title title={title} />
        </div>
        <div className="b-products-carousel__desc">
          <Description description={description} />
        </div>
      </div>
      <div className="b-products-carousel__items">
        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          loop
          centeredSlides
          grabCursor
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide
                className="b-products-carousel__item"
                key={slide.name}
              >
                <ProductCard
                  category={slide.category}
                  image={slide.images[0].url}
                  title={slide.name}
                  snippet={slide.snippet}
                  price={slide.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
};

export default ProductsCarousel;
