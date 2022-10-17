export interface testimonialItems {
  index: number;
  name: string;
  testimonial: string;
  avatar: string;
  rating: string;
}

export interface testimonialItem {
  eyebrow: string;
  title: string;
  description: string;
  slides: testimonialItems[];
}
