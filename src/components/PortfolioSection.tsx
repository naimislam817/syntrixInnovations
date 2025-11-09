import { ExternalLink, ShoppingCart, Heart, Smartphone, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const portfolioProjects = [
  {
    name: 'Redpanda',
    type: 'Ecommerce Website',
    description: 'A modern, responsive ecommerce platform with seamless shopping experience and secure payment integration.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYyNjczOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-commerce', 'Web Development', 'UI/UX'],
    icon: ShoppingCart,
    gradient: 'from-red-500 to-orange-500',
  },
  {
    name: 'Ticknplogia',
    type: 'Ecommerce Website',
    description: 'Feature-rich online store with advanced inventory management and customer engagement tools.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzYyNjczOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-commerce', 'Web Development', 'Payment Gateway'],
    icon: Heart,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Hospital Management System',
    type: 'Enterprise Solution',
    description: 'Comprehensive healthcare solution including HR module and patient management system for streamlined hospital operations.',
    image: 'https://images.unsplash.com/photo-1758206523860-0583e7b51a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBzeXN0ZW18ZW58MXx8fHwxNzYyNjc5MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Healthcare', 'HR Module', 'Patient Management'],
    icon: Building2,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Stationary Shop Mobile App',
    type: 'Flutter Mobile Application',
    description: 'Inventory management system built with Flutter for seamless stock tracking and order management on the go.',
    image: 'https://images.unsplash.com/photo-1614020661483-d2bb855eee1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW58ZW58MXx8fHwxNzYyNTgzNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'Mobile App', 'Inventory Management'],
    icon: Smartphone,
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % portfolioProjects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return portfolioProjects.length - 1;
      if (next >= portfolioProjects.length) return 0;
      return next;
    });
  };

  const getVisibleProjects = () => {
    const projects = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + portfolioProjects.length) % portfolioProjects.length;
      projects.push({ ...portfolioProjects[index], offset: i });
    }
    return projects;
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Brands We've Worked With
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by innovative companies to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {getVisibleProjects().map((project, idx) => {
                const Icon = project.icon;
                const offset = project.offset;
                const isCenter = offset === 0;
                
                return (
                  <motion.div
                    key={`${project.name}-${currentIndex}-${offset}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.5 },
                      scale: { duration: 0.5 },
                    }}
                    className="absolute"
                    style={{
                      zIndex: isCenter ? 50 : 40 - Math.abs(offset),
                      left: `${50 + offset * 25}%`,
                      transform: `translateX(-50%) scale(${isCenter ? 1 : 0.7 - Math.abs(offset) * 0.1})`,
                      opacity: Math.abs(offset) > 1 ? 0.3 : isCenter ? 1 : 0.6,
                    }}
                  >
                    <Card 
                      className={`overflow-hidden transition-all duration-500 w-[400px] ${
                        isCenter 
                          ? 'shadow-[0_0_60px_rgba(59,130,246,0.5)] ring-2 ring-cyan-400/50' 
                          : 'shadow-lg'
                      }`}
                    >
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${isCenter ? 'opacity-100' : 'opacity-50'}`}></div>
                        
                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="p-6 space-y-4 bg-white">
                        <div>
                          <h3 className="text-2xl text-gray-900 mb-1">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {project.type}
                          </p>
                        </div>

                        <p className="text-gray-600 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {isCenter && (
                          <div className="pt-2">
                            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group">
                              <span>View Project</span>
                              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
            {portfolioProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
