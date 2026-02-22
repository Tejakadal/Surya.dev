import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Code, Award, Heart, Terminal, Layers, Cpu, Database, Music, Search, Zap, Globe } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'JNTUK, Kakinada',
      year: '2024 – 2026',
      details: 'Focusing on advanced software engineering and cloud computing.',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Adikavi Nannaya University',
      year: '2019 – 2022',
      details: 'CGPA: 5.67. Foundation in computer science and programming.',
    },
    {
      degree: 'Intermediate (CSE)',
      institution: 'Board of Intermediate – AP',
      year: '2019',
      details: 'CGPA: 8.22. Specialized in Computer Science and Engineering.',
    },
    {
      degree: 'SSC',
      institution: 'Board of SSC',
      year: '2017',
      details: 'CGPA: 7.5. Secondary School Certificate.',
    },
  ];

  const skills = [
    { 
      category: 'Languages', 
      items: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
      icon: <Terminal className="w-4 h-4 text-sky-400" />
    },
    { 
      category: 'Frameworks', 
      items: ['React', 'Node.js', 'Express', 'Django', 'Flask'],
      icon: <Layers className="w-4 h-4 text-emerald-400" />
    },
    { 
      category: 'Tools', 
      items: ['VS Code', 'PyCharm', 'Git'],
      icon: <Cpu className="w-4 h-4 text-purple-400" />
    },
    { 
      category: 'Database/Cloud', 
      items: ['MongoDB', 'AWS'],
      icon: <Database className="w-4 h-4 text-pink-400" />
    },
  ];

  const interests = [
    { name: 'Learning new tech', icon: <Zap className="w-4 h-4 text-yellow-400" /> },
    { name: 'Exploring facts', icon: <Search className="w-4 h-4 text-sky-400" /> },
    { name: 'Listening to music', icon: <Music className="w-4 h-4 text-pink-400" /> },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
              About Me
            </h1>
            <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          
          <div className="bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800/50 mb-16 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 blur-[80px] rounded-full group-hover:bg-sky-500/20 transition-colors duration-500"></div>
            <p className="text-xl text-slate-300 leading-relaxed relative z-10 text-center italic">
              "To succeed in an environment of growth and excellence and earn a position that provides job satisfaction,
              self-development, and helps me achieve personal as well as organizational goals."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-sky-400" /> Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-slate-800 pl-6 relative group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-500 group-hover:scale-125 transition-transform"></div>
                    <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50 hover:border-sky-500/30 transition-all">
                      <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
                      <p className="text-sky-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                        <span className="px-2 py-0.5 bg-slate-800 rounded">{edu.year}</span>
                      </div>
                      {edu.details && <p className="text-slate-400 text-sm leading-relaxed">{edu.details}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Code className="w-8 h-8 text-emerald-400" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="text-sm font-mono text-slate-300 uppercase tracking-widest">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:border-sky-500/50 hover:text-sky-400 transition-all cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 hover:border-purple-500/30 transition-all"
            >
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Award className="w-7 h-7 text-purple-400" /> Certifications
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-2 bg-purple-500/10 rounded-lg">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">Python and AWS Certification</h3>
                    <p className="text-slate-400 text-sm">DataPro Computers • 2023</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 hover:border-pink-500/30 transition-all"
            >
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Heart className="w-7 h-7 text-pink-400" /> Interests & Activities
              </h2>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {interests.map((interest, i) => (
                    <div key={i} className="flex items-center gap-3 px-5 py-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all group">
                      {interest.icon}
                      <span className="text-slate-300 group-hover:text-white transition-colors">{interest.name}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-800/50">
                  <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Extra Curricular</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 px-5 py-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all group w-fit">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">Active member of NSS</span>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-sky-500/50 transition-all group w-fit">
                      <Globe className="w-4 h-4 text-sky-400" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">Community Service Programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
