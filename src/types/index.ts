
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  imageUrl?: string;
  rating: number;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}
