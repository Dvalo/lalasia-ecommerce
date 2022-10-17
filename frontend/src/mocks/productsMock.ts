import { productCarousel, productItem } from "../types/product";

// All Products
const allProducts: productItem[] = [
  {
    category: "Chair",
    name: "Minimalist Lounge Chair",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$14.74",
    images: [
      {
        url: "/assets/products/minimalist-lounge-chair.png",
        alt: "Alt",
      },
    ],
  },
  {
    category: "Table",
    name: "Wooden Dining Table",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$59.99",
    images: [{ url: "/assets/products/wooden-dining-table.png", alt: "Alt" }],
  },
  {
    category: "Table",
    name: "Working Desk Setup",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$99.99",
    images: [{ url: "/assets/products/working-desk-setup.png", alt: "Alt" }],
  },
  {
    category: "Decoration",
    name: "White Minimalist Vase",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$58.39",
    images: [{ url: "/assets/products/minimalist-vase.png", alt: "Alt" }],
  },
  {
    category: "Decoration",
    name: "Plant With Clay Stand",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$61.99",
    images: [
      {
        url: "/assets/products/plant-with-clay-stand.png",
        alt: "Alt",
      },
    ],
  },
  {
    category: "Decoration",
    name: "Oval Gold Mirror",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$32.49",
    images: [{ url: "/assets/products/oval-gold-mirror.png", alt: "Alt" }],
  },
  {
    category: "Living Room",
    name: "Wooden Bookshelf",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$62.23",
    images: [{ url: "/assets/products/p1.png", alt: "Alt" }],
  },
  {
    category: "Chair",
    name: "White Aesthetic Chair",
    snippet: "Combination of wood and wool",
    description: "Combination of wood and wool",
    price: "$63.47",
    images: [{ url: "/assets/products/p2.png", alt: "Alt" }],
  },
  {
    category: "Lamp",
    name: "Bardono Smart Lamp",
    snippet: "Easy to use with bluetooth connection",
    description: "Easy to use with bluetooth connection",
    price: "$62.23",
    images: [{ url: "/assets/products/p3.png", alt: "Alt" }],
  },
  {
    category: "Sofa",
    name: "Sofa Empuk Banget",
    snippet: "Using kapuk randu material",
    description: "Using kapuk randu material",
    price: "$58.39",
    images: [{ url: "/assets/products/p4.png", alt: "Alt" }],
  },
];

// Popular Products - Used in products carousel
const popularProducts: productCarousel = {
  eyebrow: "Products",
  title: "Our popular product",
  description:
    "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.",
  slides: [
    {
      category: "Living Room",
      name: "Wooden Bookshelf",
      snippet: "Combination of wood and wool",
      description: "Combination of wood and wool",
      price: "$62.23",
      images: [{ url: "/assets/products/p1.png", alt: "Alt" }],
    },
    {
      category: "Chair",
      name: "White Aesthetic Chair",
      snippet: "Combination of wood and wool",
      description: "Combination of wood and wool",
      price: "$63.47",
      images: [{ url: "/assets/products/p2.png", alt: "Alt" }],
    },
    {
      category: "Lamp",
      name: "Bardono Smart Lamp",
      snippet: "Easy to use with bluetooth connection",
      description: "Easy to use with bluetooth connection",
      price: "$62.23",
      images: [{ url: "/assets/products/p3.png", alt: "Alt" }],
    },
    {
      category: "Sofa",
      name: "Sofa Empuk Banget",
      snippet: "Using kapuk randu material",
      description: "Using kapuk randu material",
      price: "$58.39",
      images: [{ url: "/assets/products/p4.png", alt: "Alt" }],
    },
  ],
};

export { allProducts, popularProducts };
