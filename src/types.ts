export interface Car {
  id: string;
  brand: string;
  model: string;
  price: string;
  description: string;
  image: string;
  images: string[];
  threeSixtyImages?: string[];
  category: 'Luxury' | 'Performance' | 'Limousine';
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
    acceleration: string;
    transmission: string;
    interior: string[];
  };
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
