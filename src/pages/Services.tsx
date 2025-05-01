import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from '@/components/common/SectionHeading';
import FloatingObjects from '@/components/animations/FloatingObjects';
import AnimatedBackdrop from '@/components/animations/AnimatedBackdrop';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Code, Globe, Smartphone, BarChart } from 'lucide-react';
import { FloatingDots } from '@/components/animations/FloatingDots';

const Services = () => {
  const [activeTab, setActiveTab] = useState('software');
  const services = [
    {
      id: "software",
      icon: <Code size={24} />,
      title: "Software Development",
      description: "Custom software solutions built to address your unique business challenges and streamline operations.",
      features: [
        "Custom business applications",
        "Enterprise software solutions",
        "Legacy system modernization",
        "Database design and management",
        "API development and integration",
        "Cloud-based solutions"
      ],
      image: "/img/sd.png"
    },
    {
      id: "web",
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Responsive, fast, and user-friendly websites and web applications that deliver exceptional experiences.",
      features: [
        "Responsive website design",
        "Progressive Web Apps (PWAs)",
        "E-commerce platforms",
        "Content Management Systems",
        "Web application development",
        "Performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34"
    },
    {
      id: "mobile",
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications designed to engage users and drive results.",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform solutions",
        "Mobile UI/UX design",
        "App maintenance and support",
        "App Store optimization"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
    },
    {
      id: "marketing",
      icon: <BarChart size={24} />,
      title: "SEO & Digital Marketing",
      description: "Result-driven digital marketing strategies to increase your online visibility and grow your business.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) campaigns",
        "Social media marketing",
        "Content marketing",
        "Email marketing campaigns",
        "Analytics and performance tracking"
      ],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <AnimatedBackdrop
          imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22"
          className="absolute inset-0"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              We offer a comprehensive range of technology services to help your
              business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Explore our comprehensive range of digital solutions
            </p>
          </motion.div>

          <Tabs
            defaultValue="software"
            className="w-full mt-12"
            onValueChange={setActiveTab}
          >
            <div className="overflow-x-auto pb-4 -mx-4 px-4">
              <TabsList className="flex gap-2 mb-8 bg-transparent min-w-max">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className={`service-tab flex items-center gap-2 px-6 py-3 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-300 ${
                      activeTab === service.id
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {service.icon}
                    <span>{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center lg:p-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                  >
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-100 mb-6">{service.description}</p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-3 mt-1 text-orange-300 flex-shrink-0">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.3334 4L6.00008 11.3333L2.66675 8"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="text-gray-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    className="rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* <FloatingDots /> */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h1>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery.
            </p>
          </motion.div>

          <div className="mt-12 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description:
                    "We learn about your business, goals, and requirements.",
                },
                {
                  step: "2",
                  title: "Planning",
                  description:
                    "We develop a strategic roadmap and detailed project plan.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description:
                    "Our team builds your solution using agile methodologies.",
                },
                {
                  step: "4",
                  title: "Launch & Support",
                  description:
                    "We deploy your solution and provide ongoing support.",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative text-center bg-white/5 backdrop-blur-sm p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-violet-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 relative z-10">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {phase.title}
                  </h3>
                  <p className="text-gray-700">{phase.description}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Start Your <span className="text-gradient">Project</span>
              ?
            </h2>
            <p className="text-lg sm:text-xl md:max-w-2xl mx-auto mb-8 text-gray-600">
              Contact us today to discuss how we can help bring your vision to
              life.
            </p>
            <Button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white px-6 py-4 text-lg transition-all duration-300">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
};

export default Services;
