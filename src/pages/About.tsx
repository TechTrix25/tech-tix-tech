
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import FloatingObjects from '@/components/animations/FloatingObjects';
import AnimatedBackdrop from '@/components/animations/AnimatedBackdrop';

const About = () => {
  const teamMembers = [
    {
      name: '?',
      role: 'CEO & Founder',
      image: 'https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: '?',
      role: 'CTO',
      image: 'https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: '?',
      role: 'Lead Developer',
      image: 'https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: '?',
      role: 'Design Director',
      image: 'https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_hybrid&w=740',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <AnimatedBackdrop
          imageUrl="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
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
              About <span className="text-gradient">Tech Trix</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              We're a team of passionate technologists committed to delivering
              innovative solutions that empower businesses to reach their full
              potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading title="Our Story" />
              <div className="space-y-4">
                <p>
                  Founded in 2025, Tech Trix Technologies began with a simple
                  mission: to help businesses harness the power of technology to
                  grow and thrive in an increasingly digital world.
                </p>
                <p>
                  What started as a small team of four developers has grown
                  into a full-service technology company with expertise spanning
                  software development, web design, mobile applications, and
                  digital marketing.
                </p>
                <p>
                  Over the years, we've collaborated with clients across various
                  industries, from startups to established enterprises,
                  delivering tailored solutions that address their unique
                  challenges and help them achieve their goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/img/about.jpeg"
                  alt="Our team working"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
        <FloatingObjects count={6} className="opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Values"
            subtitle="These core principles guide everything we do at Tech Trix Technologies."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
                icon: "💡",
              },
              {
                title: "Excellence",
                description:
                  "We maintain the highest standards of quality in every project we undertake.",
                icon: "⭐",
              },
              {
                title: "Collaboration",
                description:
                  "We work closely with our clients, ensuring transparent communication throughout the process.",
                icon: "🤝",
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty and ethical principles in all our business dealings.",
                icon: "🛡️",
              },
              {
                title: "Growth",
                description:
                  "We're committed to continuous learning and development, both as individuals and as a company.",
                icon: "📈",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive difference we make for our clients and their users.",
                icon: "🎯",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the talented individuals who drive our vision forward."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-tech-purple">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
