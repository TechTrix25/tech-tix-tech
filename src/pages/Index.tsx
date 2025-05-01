import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import FloatingObjects from '@/components/animations/FloatingObjects';
import { FloatingDots } from '@/components/animations/FloatingDots';
import AnimatedBackdrop from '@/components/animations/AnimatedBackdrop';
import { AnimatedServiceCard } from '@/components/common/AnimatedServiceCard';
import SectionHeading from '@/components/common/SectionHeading';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ConnectedLines from '@/components/animations/ConnectedLines';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden min-h-[100vh] pt-32 ">
        <div className="container mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
          {/* Left Side - Text Content */}
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="relative z-20">
              <p className="text-orange-500 font-semibold uppercase mb-2">
                # Smart & Innovative Tech Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Modern Technology <br /> Improve Business
              </h1>
              <p className="text-gray-600 text-lg mb-8">
              Explore our powerful digital solutions for the modern business world.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition">
                  Read More
                </button>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-md transition">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image with Diagonal Divider */}
          <div className="relative w-full h-full">
            {/* Orange and White Diagonal Stripe */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-tr from-orange-500 via-white to-white rotate-[25deg] z-10"></div>

            {/* Image */}
            {/* <img
              src="/img/circuit.gif" // Replace with your correct image path
              alt="Business Professional"
              className="w-full h-auto relative z-20 object-cover rounded-md"
            /> */}
          </div>
        </div>
        <motion.div

          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/img/team.gif"
            alt="Tech team working"
            className="block md:hidden w-full h-auto object-cover"
          />

        </motion.div>

        {/* Background Circuit Graphic */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('/img/circuit.gif')] bg-no-repeat bg-cover bg-right opacity-30 z-0"></div>

      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 lg:py-40">
        {/* <FloatingDots /> */}
        {/* <ConnectedLines /> */}

        <div className="container mx-auto max-w-7xl px-6 relative z-10 ">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-3xl md:text-4xl font-bold mb-4 text-white'>Our Services</h1>
            <p className='text-lg text-muted max-w-3xl mx-auto'>Comprehensive solutions for your digital needs</p>
            
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              {
                number: "01",
                title: "Website Development",
                description:
                  "Creating everything from simple pages to dynamic websites.",
                color: "emerald",
              },
              {
                number: "02",
                title: "Web App Development",
                description: "Building powerful browser-based applications.",
                color: "orange",
              },
              {
                number: "03",
                title: "Mobile App Dev",
                description:
                  "Crafting seamless apps for smartphones and tablets.",
                color: "purple",
              },
              {
                number: "04",
                title: "Digital Marketing",
                description: "Boosting your brand through digital channels.",
                color: "teal",
              },
            ].map((service, index) => (
              <AnimatedServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Used Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Technologies We Used</h2>
            <div className="flex justify-center">
              <span className="inline-block w-20 h-1 rounded bg-red-400"></span>
            </div>
          </div>
          <div
            className="overflow-x-hidden relative overflow-auto"
          >
            <div
              className="flex items-center gap-16 animate-tech-scroll "
              style={{
                animation: 'tech-scroll 10s linear infinite',
              }}
            >
              {/* Google image URLs and local images */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-16 w-16 object-contain" />
              <img src="https://triggers.tuple.app/icons/open-vs-code.png" alt="VS Code" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Flutter" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-16 w-16 object-contain" />
              {/* Duplicate for seamless scroll */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-16 w-16 object-contain" />
              <img src="https://triggers.tuple.app/icons/open-vs-code.png" alt="VS Code" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" alt="Laravel" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Flutter" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="Firebase" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" alt="Android" className="h-16 w-16 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-16 w-16 object-contain" />
            </div>
          </div>
        </div>
        {/* Animation keyframes */}
        <style>{`
          @keyframes tech-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-r from-sky-400 to-indigo-600">
       

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
            <h1 className='text-3xl md:text-4xl font-bold mb-4 text-white'>Why Choose Us</h1>
            <p className='text-lg text-muted max-w-3xl mx-auto'>We deliver innovative, tech-driven results.</p>
              
              <motion.ul
                className="space-y-4 mt-8 text-muted"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
              >
                {[
                  "Expert team with diverse tech expertise",
                  "Cutting-edge technologies and methodologies",
                  "Client-focused approach and transparent communication",
                  "Scalable solutions that grow with your business",
                  "Commitment to deadlines and quality deliverables",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="mr-3 mt-1 text-orange-300">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M13.3334 4L6.00008 11.3333L2.66675 8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="relative md:block hidden">
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/img/team.gif"
                  alt="Tech team working" 
                  className="w-full h-96 object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-300 to-blue-600 p-6 rounded-lg text-white shadow-lg w-64"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="text-3xl font-bold mb-2">5+</h4>
                <p className="text-sm">Successful Projects Delivered</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20  overflow-hidden">
        <FloatingObjects
          count={8}
          colors={["tech-purple", "tech-blue"]}
          className="opacity-10"
        />

        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="text-gradient">Digital Presence</span>?
            </h2>
            <p className="text-lg sm:text-xl md:max-w-2xl mx-auto mb-8 text-gray-300">
              Let's collaborate to create innovative solutions that drive your
              business forward.
            </p>
            <Button className="btn-gradient text-white px-6 py-4 text-lg">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
