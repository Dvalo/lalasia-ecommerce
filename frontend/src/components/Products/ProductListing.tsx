import Description from "../Text/Description";
import Eyebrow from "../Text/Eyebrow";
import Title from "../Text/Title";
import { productItem } from "../../types/product";

import ProductCard from "./ProductCard";

interface IProps {
  slides: productItem[];
}

const ProductListing = ({ slides }: IProps) => {
  return (
    <article className="b-products-listing">
      <div className="b-products-listing__title">
        Total Products <span>{slides.length}</span>
      </div>
      <div className="b-products-listing__items">
        {slides.map((slide) => {
          return (
            <ProductCard
              category={slide.category}
              image={slide.images[0].url}
              title={slide.name}
              snippet={slide.snippet}
              price={slide.price}
              key={slide.name}
            />
          );
        })}
      </div>
    </article>
  );
};

export default ProductListing;
