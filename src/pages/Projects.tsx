import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Library Management System',
      description: 'An AI-powered Library Management System built using the MERN stack and TypeScript to manage book inventory, user authentication, borrowing/return processes, and provide intelligent search and recommendation features for improved library efficiency.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'CampusConnect',
      description: 'The College Placement Website is a full-stack web application designed to help students find internships and full-time job opportunities while enabling employers to recruit suitable candidates efficiently. The platform acts as a bridge between students and recruiters by providing a structured, user-friendly, and centralized job management system.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion. Features interactive 3D elements, terminal-like coding animations, and a fully responsive design to showcase professional work and skills.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
            Featured Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all duration-300 shadow-xl hover:shadow-sky-500/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm text-xs text-sky-300 rounded border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700 hover:border-sky-500/50"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors shadow-lg shadow-sky-500/20"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Projects;
