import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Server, Cloud, Smartphone, Zap, Shield, Globe, Quote, Eye, Download } from 'lucide-react';
import CodingAnimation from '../components/CodingAnimation';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { generateResume } from '../utils/generateResume';

const Home = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, high-performance user interfaces with React and modern CSS.',
      icon: <Monitor className="w-8 h-8 text-sky-400" />,
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side logic, APIs, and database management systems.',
      icon: <Server className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Deploying and managing scalable applications on AWS and other cloud platforms.',
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
    },
    {
      title: 'Mobile Optimization',
      description: 'Ensuring seamless experiences across all devices with mobile-first design.',
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
    },
  ];

  const testimonials = [
    {
      name: 'Alex Rivera',
      role: 'Product Manager at TechFlow',
      content: 'Surya is an exceptional developer who consistently delivers high-quality code. His attention to detail and ability to solve complex problems is truly impressive.',
      image: 'https://picsum.photos/seed/alex/100/100',
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer at CreativePulse',
      content: 'Working with Surya was a breeze. He has a great eye for design and ensures that every interaction feels smooth and intentional. Highly recommended!',
      image: 'https://picsum.photos/seed/sarah/100/100',
    },
    {
      name: 'Michael Smith',
      role: 'Founder of StartupX',
      content: 'The library management system Surya built for us exceeded our expectations. It is fast, intuitive, and has significantly improved our efficiency.',
      image: 'https://picsum.photos/seed/michael/100/100',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 via-slate-950 to-slate-950"></div>
        
        <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-sky-400 font-mono mb-4 text-lg">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
              Surya Teja Kadali
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A passionate Full Stack Developer crafting modern, high-performance web applications. 
              Specializing in React, Node.js, and Cloud Technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="w-full sm:w-auto px-6 sm:px-10 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-500/30 text-lg"
                >
                  View My Work <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <button
                  onClick={generateResume}
                  className="w-full sm:w-auto px-6 sm:px-10 py-4 border-2 border-sky-500/50 hover:border-sky-500 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg cursor-pointer"
                >
                  Download CV <Download size={20} />
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 sm:px-10 py-4 border-2 border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-300 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg"
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full w-full flex items-center justify-center"
          >
            <CodingAnimation />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white"
            >
              Services Offered
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              className="h-1 bg-sky-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-sky-500/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges / Features */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-16">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-6 h-6 text-yellow-400 mb-2" />
              <span className="text-slate-300 font-medium">Fast Performance</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="text-slate-300 font-medium">Secure Coding</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="w-6 h-6 text-sky-400 mb-2" />
              <span className="text-slate-300 font-medium">Global Standards</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Code2 className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-slate-300 font-medium">Clean Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-serif mb-4 text-white"
            >
              What People Say
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              className="h-1 bg-sky-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/30 transition-all duration-300 relative group"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-sky-500/10 group-hover:text-sky-500/20 transition-colors" />
                
                <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-sky-500/30 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Helper component for the icon used in trust badges
const Code2 = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Home;
