/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car as CarIcon, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  ChevronLeft,
  RotateCw,
  Box
} from 'lucide-react';
import { CARS, REVIEWS } from './constants';
import { Car } from './types';

const Navbar = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (val: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center neon-glow cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <CarIcon className="text-black" size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ELITE<span className="text-gold">AUTO</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Featured', 'Inventory', 'About', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden mr-2"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search model or brand..."
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm focus:outline-none focus:border-gold transition-all"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-all ${isSearchOpen ? 'bg-gold text-black' : 'hover:bg-white/10 text-white'}`}
            >
              <Search size={20} />
            </button>
          </div>

          <button className="px-6 py-2 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all transform hover:scale-105">
            Book a Test Drive
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`p-2 rounded-full transition-all ${isSearchOpen ? 'bg-gold text-black' : 'text-white'}`}
          >
            <Search size={20} />
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-black/90 border-b border-white/10 px-6 py-4 overflow-hidden"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search model or brand..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {['Home', 'Featured', 'Inventory', 'About', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full py-4 bg-gold text-black font-bold rounded-xl">
              Book a Test Drive
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-[0.3em] uppercase mb-4 block">Excellence in Motion</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-tight">
            Drive Your <span className="text-gold-gradient">Dream Car</span> Today
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Experience the pinnacle of automotive luxury and performance. We curate only the world's most prestigious brands for the discerning driver.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#inventory" className="w-full sm:w-auto px-10 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Explore Inventory <ArrowRight size={20} />
            </a>
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const CarCard: React.FC<{ car: Car, onViewSpecs: (car: Car) => void }> = ({ car, onViewSpecs }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-gold border border-gold/30">
          {car.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{car.brand}</p>
            <h3 className="text-2xl font-display font-bold">{car.model}</h3>
          </div>
          <p className="text-xl font-display font-bold text-gold">{car.price}</p>
        </div>
        <p className="text-white/60 text-sm mb-6 line-clamp-2">
          {car.description}
        </p>
        <button 
          onClick={() => onViewSpecs(car)}
          className="w-full py-3 border border-white/10 rounded-xl group-hover:bg-gold group-hover:text-black transition-all font-bold flex items-center justify-center gap-2"
        >
          View Full Specs <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const FeaturedCars = ({ onViewSpecs }: { onViewSpecs: (car: Car) => void }) => {
  const featuredCars = CARS.slice(0, 6);

  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-black to-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold font-bold uppercase tracking-widest mb-4 block">Hand-Picked Selection</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">Featured <span className="text-gold">Masterpieces</span></h2>
          </div>
          <a href="#inventory" className="text-gold font-bold flex items-center gap-2 hover:gap-4 transition-all group">
            View Full Inventory <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden glass border-white/5"
            >
              <img 
                src={car.image} 
                alt={car.model} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gold font-bold uppercase tracking-widest text-sm mb-2">{car.brand}</p>
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">{car.model}</h3>
                    <div className="flex items-center gap-6 text-white/60 text-sm">
                      <span className="flex items-center gap-2"><CarIcon size={16} className="text-gold" /> {car.category}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                      <span>V12 Engine</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Starting at</p>
                    <p className="text-2xl md:text-3xl font-display font-bold text-gold">{car.price}</p>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden mt-6 hidden md:block"
                >
                  <p className="text-white/70 mb-6 max-w-lg">{car.description}</p>
                  <div className="flex gap-4">
                    <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gold transition-colors">
                      Inquire Now
                    </button>
                    <button 
                      onClick={() => onViewSpecs(car)}
                      className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                    >
                      View Full Specs
                    </button>
                  </div>
                </motion.div>
                
                <button 
                  onClick={() => onViewSpecs(car)}
                  className="md:hidden mt-6 w-full py-3 bg-white text-black font-bold rounded-xl"
                >
                  View Full Specs
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Inventory = ({ searchQuery, onViewSpecs }: { searchQuery: string, onViewSpecs: (car: Car) => void }) => {
  const [filter, setFilter] = useState('All');
  const brands = ['All', ...new Set(CARS.map(car => car.brand))];
  
  const filteredCars = CARS.filter(car => {
    const matchesBrand = filter === 'All' || car.brand === filter;
    const matchesSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         car.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <section id="inventory" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Our <span className="text-gold">Exclusive</span> Fleet</h2>
        <p className="text-white/60 max-w-2xl mx-auto">Browse through our hand-picked selection of luxury and performance vehicles.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setFilter(brand)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === brand ? 'bg-gold text-black neon-glow' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {filteredCars.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} onViewSpecs={onViewSpecs} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-20 glass rounded-3xl">
          <Search size={48} className="mx-auto text-white/20 mb-4" />
          <h3 className="text-2xl font-display font-bold mb-2">No cars found</h3>
          <p className="text-white/40">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </section>
  );
};

const ThreeSixtyViewer = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startX;
    const sensitivity = 15; // Pixels per frame change
    
    if (Math.abs(deltaX) > sensitivity) {
      const direction = deltaX > 0 ? -1 : 1;
      setIndex((prev) => (prev + direction + images.length) % images.length);
      setStartX(clientX);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <img 
        src={images[index]} 
        alt="360 view" 
        className="w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold text-gold uppercase tracking-widest">
          <RotateCw size={14} className="animate-spin-slow" />
          Drag to Rotate 360°
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div 
          className="h-full bg-gold transition-all duration-100"
          style={{ width: `${((index + 1) / images.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const CarModal = ({ car, onClose }: { car: Car, onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'gallery' | '360'>('gallery');

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 flex items-center justify-center text-white z-20 transition-colors border border-white/10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[400px] md:h-[600px] lg:h-auto relative group">
            {/* View Mode Toggle */}
            <div className="absolute top-6 left-6 z-20 flex gap-2">
              <button 
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === 'gallery' ? 'bg-gold text-black' : 'bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-black/60'}`}
              >
                <Box size={14} /> Gallery
              </button>
              <button 
                onClick={() => setViewMode('360')}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${viewMode === '360' ? 'bg-gold text-black' : 'bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-black/60'}`}
              >
                <RotateCw size={14} /> 360° View
              </button>
            </div>

            {viewMode === 'gallery' ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={car.images[currentImageIndex]} 
                    alt={`${car.model} - ${currentImageIndex + 1}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden"></div>

                {/* Gallery Controls */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={prevImage}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 flex items-center justify-center text-white border border-white/10 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 flex items-center justify-center text-white border border-white/10 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {car.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-gold scale-110 shadow-lg shadow-gold/20' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <ThreeSixtyViewer images={car.threeSixtyImages || car.images} />
            )}
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <p className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-2">{car.brand}</p>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">{car.model}</h2>
              <p className="text-2xl font-display font-bold text-gold">{car.price}</p>
            </div>

            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-1">
                <p className="text-white/40 text-xs uppercase tracking-widest">Engine</p>
                <p className="font-bold">{car.specs.engine}</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/40 text-xs uppercase tracking-widest">Power</p>
                <p className="font-bold">{car.specs.power}</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/40 text-xs uppercase tracking-widest">Top Speed</p>
                <p className="font-bold">{car.specs.topSpeed}</p>
              </div>
              <div className="space-y-1">
                <p className="text-white/40 text-xs uppercase tracking-widest">0-60 MPH</p>
                <p className="font-bold">{car.specs.acceleration}</p>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Interior Features</p>
              <div className="flex flex-wrap gap-3">
                {car.specs.interior.map((feature, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 py-4 bg-gold text-black font-bold rounded-2xl hover:bg-gold-light transition-all transform hover:scale-[1.02]">
                Inquire Now
              </button>
              <button className="flex-1 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-bold uppercase tracking-widest mb-4 block">Our Legacy</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Redefining the <span className="text-gold">Luxury</span> Experience
          </h2>
          <div className="space-y-6 text-white/70 text-lg">
            <p>
              Elite Auto Motors is more than just a dealership; it's a destination for those who appreciate the finer things in life. With over two decades of experience in the luxury automotive market, we have built a reputation for excellence and integrity.
            </p>
            <p>
              Our mission is to provide an unparalleled buying experience, offering a curated selection of the world's most prestigious vehicles. From rare supercars to bespoke limousines, every vehicle in our showroom is a masterpiece of engineering and design.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-3xl font-display font-bold text-gold">20+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gold">500+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Cars Sold</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-gold">100%</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Happy Clients</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-2 border-gold/20 neon-glow">
            <img 
              src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Showroom" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl hidden md:block">
            <p className="text-gold font-bold italic">"Quality is not an act, it is a habit."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">Client <span className="text-gold">Testimonials</span></h2>
        <p className="text-white/60">What our prestigious clients have to say about their experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <motion.div 
            key={review.id}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/80 italic mb-8">"{review.content}"</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-gold/30" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-xs text-white/40 uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Get In <span className="text-gold">Touch</span></h2>
          <p className="text-white/60 text-lg mb-12">
            Ready to drive your dream car? Contact our specialists today for a private consultation or to schedule a test drive.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest">Email</p>
                <p className="text-xl font-bold">concierge@eliteauto.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest">Location</p>
                <p className="text-xl font-bold">777 Luxury Blvd, Beverly Hills, CA</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60">Interested In</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:outline-none transition-all appearance-none">
                <option className="bg-black">Select a Brand</option>
                <option className="bg-black">Ferrari</option>
                <option className="bg-black">Lamborghini</option>
                <option className="bg-black">Rolls Royce</option>
                <option className="bg-black">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/60">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:outline-none transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-4 bg-gold text-black font-bold rounded-xl hover:bg-gold-light transition-all transform hover:scale-[1.02]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
                <CarIcon className="text-black" size={18} />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                ELITE<span className="text-gold">AUTO</span>
              </span>
            </div>
            <p className="text-white/40 text-sm mb-8">
              The world's premier destination for luxury and performance vehicles. Excellence in motion since 2004.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#inventory" className="hover:text-gold transition-colors">Inventory</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Brands</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Ferrari</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Lamborghini</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Rolls Royce</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Bentley</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe to receive updates on our latest arrivals.</p>
            <div className="flex gap-2">
              <input type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-gold w-full" placeholder="Email" />
              <button className="bg-gold text-black p-2 rounded-lg hover:bg-gold-light transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© 2026 Elite Auto Motors. All rights reserved.</p>
          <div className="flex gap-8 text-white/20 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <div className="min-h-screen bg-black selection:bg-gold selection:text-black">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <FeaturedCars onViewSpecs={setSelectedCar} />
      <Inventory searchQuery={searchQuery} onViewSpecs={setSelectedCar} />
      <About />
      <Reviews />
      <Contact />
      <Footer />

      <AnimatePresence>
        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
