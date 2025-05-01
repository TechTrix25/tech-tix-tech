import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from '@/components/common/SectionHeading';
import FloatingObjects from '@/components/animations/FloatingObjects';
import AnimatedBackdrop from '@/components/animations/AnimatedBackdrop';
import { FloatingDots } from '@/components/animations/FloatingDots';

const Portfolio = () => {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "software", label: "Software" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      description: "A fully-featured e-commerce platform with integrated payment processing and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 3,
      title: "CRM System",
      category: "software",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      description: "Custom CRM solution for a financial services company, streamlining client management and reporting.",
      technologies: ["Angular", "C#", "SQL Server", "Azure"]
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      category: "web",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      description: "Property listing platform with advanced search features, virtual tours, and agent management.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"]
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      description: "Mobile application connecting local restaurants with customers for seamless food ordering and delivery.",
      technologies: ["Flutter", "Firebase", "Google Maps API"]
    },
    {
      id: 6,
      title: "Inventory Management",
      category: "software",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8",
      description: "Enterprise inventory management system with barcode scanning, analytics, and supplier integration.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"]
    },
    {
      id: 7,
      title: "Event Management System",
      category: "web",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
      description: "Platform for organizing and managing events, including ticketing, scheduling, and attendee registration.",
      technologies: ["React", "Express", "MongoDB", "Cloudinary"]
    },
    {
      id: 8,
      title: "Billing System",
      category: "software",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/1f3b4c159976085.Y3JvcCw4MjUsNjQ1LDAsMTI2.png",
      description: "Automated billing system for subscription-based services with invoicing, payment tracking, and tax calculations.",
      technologies: ["Java", "Spring Boot", "MySQL", "RabbitMQ"]
    }
  ];
  

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <AnimatedBackdrop 
          imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          className="absolute inset-0"
        />
        <FloatingObjects count={10} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-3xl md:text-4xl font-bold mb-4 text-white'>Our Projects</h1>
            <p className='text-lg text-gray-100 max-w-3xl mx-auto'>Explore our comprehensive range of digital solutions</p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <TabsList className="flex gap-2 mb-12 bg-transparent min-w-max">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id} 
                    className={`service-tab flex items-center gap-2 px-6 py-3 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-300 ${
                      category.id === "all" 
                        ? 'bg-white/10 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(project => category.id === "all" || project.category === category.id)
                    .map((project) => (
                      <motion.div 
                        key={project.id}
                        className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                          <p className="text-gray-200 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={index}
                                className="bg-white/20 text-white px-2 py-1 rounded-md text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-r from-indigo-500 to-sky-400">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Industry Awards" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>Client Testimonials</h1>
            <p className='text-lg text-gray-500 max-w-3xl mx-auto'>Don't just take our word for it - here's what our clients have to say.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote: "Tech Trix transformed our outdated website into a modern, responsive platform that has significantly increased our customer engagement and sales.",
                author: "Sarah Johnson",
                company: "Retail Solutions Inc."
              },
              {
                quote: "The mobile app developed by Tech Trix exceeded our expectations. Their team was professional, responsive, and delivered a high-quality product on time and within budget.",
                author: "Michael Chen",
                company: "HealthTech Innovations"
              },
              {
                quote: "Working with Tech Trix on our custom CRM system was a game-changer for our business. They truly understood our needs and delivered a solution that streamlined our operations.",
                author: "Jennifer Thompson",
                company: "Financial Services Group"
              },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl text-orange-500 mb-4">"</div>
                <p className="italic mb-6 text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Have a Project in <span className="text-gradient">Mind</span>?
            </h2>
            <p className="text-lg sm:text-xl md:max-w-2xl mx-auto mb-8 text-gray-600">
              Let's discuss how Tech Trix can help bring your vision to life.
            </p>
            <Button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white px-6 py-4 text-lg transition-all duration-300">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
