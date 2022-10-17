export interface productImage {
  url: string;
  alt: string;
}

export interface productItem {
  category: string;
  name: string;
  snippet: string;
  description: string;
  price: string;
  images: productImage[];
}

export interface productCarousel {
  eyebrow: string;
  title: string;
  description: string;
  slides: productItem[];
}
