import { Car, Review } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    price: '$511,000',
    description: 'The first ever Ferrari to feature PHEV (Plug-in Hybrid Electric Vehicle) architecture.',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000'
    ],
    threeSixtyImages: [
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Performance',
    specs: {
      engine: '4.0L V8 Twin-Turbo Hybrid',
      power: '986 HP',
      topSpeed: '211 mph',
      acceleration: '0-60 mph in 2.5s',
      transmission: '8-Speed Dual-Clutch',
      interior: ['Carbon Fiber Racing Seats', 'Digital Cockpit', 'Alcantara Trim']
    }
  },
  {
    id: '2',
    brand: 'Lamborghini',
    model: 'Aventador SVJ',
    price: '$517,000',
    description: 'Designed to be the fastest on the track, the SVJ is a masterpiece of aerodynamics.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000'
    ],
    threeSixtyImages: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Performance',
    specs: {
      engine: '6.5L V12',
      power: '770 HP',
      topSpeed: '217 mph',
      acceleration: '0-60 mph in 2.8s',
      transmission: '7-Speed ISR',
      interior: ['Y-shaped Alcantara patterns', 'Carbon Fiber Skin', 'Telemetry System']
    }
  },
  {
    id: '3',
    brand: 'Rolls Royce',
    model: 'Phantom',
    price: '$460,000',
    description: 'The ultimate expression of luxury, providing an unparalleled sense of serenity.',
    image: 'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Luxury',
    specs: {
      engine: '6.75L V12 Twin-Turbo',
      power: '563 HP',
      topSpeed: '155 mph',
      acceleration: '0-60 mph in 5.1s',
      transmission: '8-Speed Automatic',
      interior: ['Starlight Headliner', 'Hand-stitched Leather', 'Lambswool Floor Mats']
    }
  },
  {
    id: '4',
    brand: 'Bentley',
    model: 'Continental GT',
    price: '$235,000',
    description: 'The definitive Grand Tourer, combining phenomenal power with exquisite craftsmanship.',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Luxury',
    specs: {
      engine: '6.0L W12 Twin-Turbo',
      power: '626 HP',
      topSpeed: '207 mph',
      acceleration: '0-60 mph in 3.6s',
      transmission: '8-Speed Dual-Clutch',
      interior: ['Rotating Display', 'Diamond-in-Diamond Quilting', 'Veneer Options']
    }
  },
  {
    id: '5',
    brand: 'Aston Martin',
    model: 'DBS Volante',
    price: '$316,000',
    description: 'A beautiful brute, offering open-top thrills and breathtaking performance.',
    image: 'https://images.unsplash.com/photo-1603584173870-7f3ca9f28442?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1603584173870-7f3ca9f28442?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603584173870-7f3ca9f28442?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603584173870-7f3ca9f28442?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603584173870-7f3ca9f28442?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Performance',
    specs: {
      engine: '5.2L V12 Twin-Turbo',
      power: '715 HP',
      topSpeed: '211 mph',
      acceleration: '0-60 mph in 3.4s',
      transmission: '8-Speed Automatic',
      interior: ['Bridge of Weir Leather', 'Carbon Fiber Trim', 'Bang & Olufsen Audio']
    }
  },
  {
    id: '6',
    brand: 'Bugatti',
    model: 'Chiron Super Sport',
    price: '$3,800,000',
    description: 'Pushing the boundaries of physics, the Chiron is the pinnacle of automotive engineering.',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Performance',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1578 HP',
      topSpeed: '273 mph',
      acceleration: '0-60 mph in 2.3s',
      transmission: '7-Speed Dual-Clutch',
      interior: ['C-line LED lighting', 'Solid Aluminum Accents', 'Custom Luggage Set']
    }
  },
  {
    id: '7',
    brand: 'Mercedes-Benz',
    model: 'S-Class Maybach',
    price: '$185,000',
    description: 'A sanctuary of luxury, the Maybach S-Class redefines executive travel.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Luxury',
    specs: {
      engine: '4.0L V8 Biturbo with EQ Boost',
      power: '496 HP',
      topSpeed: '155 mph',
      acceleration: '0-60 mph in 4.7s',
      transmission: '9-Speed Automatic',
      interior: ['Executive Rear Seats', 'Burmester 4D Sound', 'Calf Rest Massage']
    }
  },
  {
    id: '8',
    brand: 'BMW',
    model: 'M8 Competition',
    price: '$130,000',
    description: 'The most powerful M car ever built, blending luxury with track-ready performance.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Performance',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      power: '617 HP',
      topSpeed: '190 mph',
      acceleration: '0-60 mph in 3.0s',
      transmission: '8-Speed M Steptronic',
      interior: ['M Sport Seats', 'Live Cockpit Professional', 'Harman Kardon Audio']
    }
  },
  {
    id: '9',
    brand: 'Audi',
    model: 'R8 V10 Performance',
    price: '$197,000',
    description: 'A supercar for everyday use, with a naturally aspirated V10 engine.',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Performance',
    specs: {
      engine: '5.2L V10',
      power: '602 HP',
      topSpeed: '205 mph',
      acceleration: '0-60 mph in 3.2s',
      transmission: '7-Speed S tronic',
      interior: ['Virtual Cockpit', 'Fine Nappa Leather', 'Carbon Sigma Inlays']
    }
  },
  {
    id: '10',
    brand: 'Limousine',
    model: 'Lincoln Navigator Stretch',
    price: 'Contact for Price',
    description: 'The ultimate luxury transport for groups, featuring premium amenities.',
    image: 'https://images.unsplash.com/photo-1511407397940-d57f68e8118a?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1511407397940-d57f68e8118a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511407397940-d57f68e8118a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511407397940-d57f68e8118a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1511407397940-d57f68e8118a?auto=format&fit=crop&q=80&w=1000'
    ],
    category: 'Limousine',
    specs: {
      engine: '3.5L V6 Twin-Turbo',
      power: '450 HP',
      topSpeed: '120 mph',
      acceleration: '0-60 mph in 7.5s',
      transmission: '10-Speed Automatic',
      interior: ['Mini Bar', 'Fiber Optic Lighting', 'Partition Wall']
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Alexander Wright',
    role: 'CEO, Tech Innovations',
    content: 'The experience at Elite Auto Motors was exceptional. From the moment I walked in, I was treated with the utmost professionalism. My new Phantom is a dream.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    id: '2',
    name: 'Sophia Chen',
    role: 'Professional Racer',
    content: 'Finding a dealership that understands performance is rare. Elite Auto Motors has the best selection of supercars I have ever seen.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sophia'
  },
  {
    id: '3',
    name: 'Marcus Sterling',
    role: 'Real Estate Mogul',
    content: 'I have purchased several vehicles from them. Their attention to detail and after-sales service is what keeps me coming back.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];
