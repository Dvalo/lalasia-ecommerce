import Image from "next/image";

interface IProps {
  image: string;
  category: string;
  title: string;
  snippet: string;
  price: string;
}

const ProductCard = ({ image, category, title, snippet, price }: IProps) => {
  return (
    <div className="c-product-card">
      <div className="c-product-card__image">
        <Image src={image} layout="fill" alt="T" objectFit="cover" />
      </div>
      <div className="c-product-card__content">
        <div className="c-product-card__category">
          <h5>{category}</h5>
        </div>
        <div className="c-product-card__title">
          <h3>{title}</h3>
        </div>
        <div className="c-product-card__snippet">
          <p>{snippet}</p>
        </div>
        <h3 className="c-product-card__price">{price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
