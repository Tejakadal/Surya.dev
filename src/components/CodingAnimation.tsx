import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Copy, Check, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const TypingLine = ({ text, color, progress }: { text: string; color: string; progress: number }) => {
  const charCount = Math.floor(text.length * progress);
  const displayedText = text.slice(0, charCount);

  return (
    <div className="flex">
      <span className={`${color} whitespace-pre`}>{displayedText}</span>
    </div>
  );
};

const CodingAnimation = () => {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the hero section (or the parent)
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const codeLines = [
    { text: 'const developer = {', color: 'text-purple-400' },
    { text: '  name: "Surya Teja Kadali",', color: 'text-sky-300' },
    { text: '  role: "Full Stack Developer",', color: 'text-sky-300' },
    { text: '  skills: ["React", "Node.js", "AWS"],', color: 'text-emerald-400' },
    { text: '  passion: "Building the future",', color: 'text-sky-300' },
    { text: '  status: "Open for opportunities"', color: 'text-sky-300' },
    { text: '};', color: 'text-purple-400' },
    { text: '', color: '' },
    { text: 'function innovate() {', color: 'text-emerald-400' },
    { text: '  return developer.skills.map(skill => {', color: 'text-purple-400' },
    { text: '    return createImpact(skill);', color: 'text-sky-300' },
    { text: '  });', color: 'text-purple-400' },
    { text: '}', color: 'text-emerald-400' },
  ];

  const handleCopy = () => {
    const fullCode = codeLines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate which line is active and its character progress based on scroll
  const [activeLine, setActiveLine] = useState(0);
  const [charProgress, setCharProgress] = useState(0);
  
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      // "Fast" speed multiplier (6x)
      const totalProgress = latest * 6; 
      
      // Calculate line index
      const lineIndex = Math.min(
        Math.floor(totalProgress * codeLines.length),
        codeLines.length - 1
      );
      
      // Calculate progress within the current line
      const lineProgress = (totalProgress * codeLines.length) % 1;
      
      setActiveLine(lineIndex);
      setCharProgress(lineProgress);
    });
  }, [smoothProgress, codeLines.length]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl mx-auto lg:mx-0 relative group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-slate-900 rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden font-mono text-sm md:text-base">
        {/* Terminal Header */}
        <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <Terminal size={14} className="text-sky-400" />
            <span>fast_scroll.ts</span>
          </div>
          <button 
            onClick={handleCopy}
            className="text-slate-500 hover:text-sky-400 transition-colors p-1 rounded-md hover:bg-slate-700/50"
            title="Copy code"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-6 space-y-1 bg-slate-950/80 backdrop-blur-md min-h-[360px]">
          {codeLines.map((line, index) => {
            return (
              <div key={index} className="flex group/line">
                <span className="text-slate-600 w-8 select-none text-xs md:text-sm pt-1">{index + 1}</span>
                <TypingLine 
                  text={line.text} 
                  color={line.color} 
                  progress={activeLine > index ? 1 : activeLine === index ? charProgress : 0} 
                />
                {activeLine === index && charProgress < 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-5 bg-sky-500 ml-1 inline-block align-middle"
                  ></motion.span>
                )}
              </div>
            );
          })}
        </div>

        {/* Status Bar */}
        <div className="bg-sky-500/10 px-4 py-2 border-t border-slate-700/50 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><ChevronRight size={10} /> scroll-mode</span>
            <span>Scroll to type code</span>
          </div>
          <div className="flex gap-4">
            <span>TypeScript</span>
            <span>Line {activeLine + 1}</span>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </motion.div>
  );
};

export default CodingAnimation;
