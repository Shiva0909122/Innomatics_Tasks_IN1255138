import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Download, ArrowRight, Code, Terminal } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const codeBlockVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.6,
      },
    },
  };

  const floatingIcons = [
    { icon: <Code size={20} />, delay: 0, x: -30, y: -20 },
    { icon: <Terminal size={20} />, delay: 0.2, x: 30, y: 20 },
    { icon: <Code size={20} />, delay: 0.4, x: 20, y: -30 },
    { icon: <Terminal size={20} />, delay: 0.6, x: -20, y: 30 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <ParticlesBackground />
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="order-2 lg:order-1">
            <motion.p 
              className="text-primary font-medium mb-2 animate-text-shimmer"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white glitch-effect"
              data-text="John Doe"
              variants={itemVariants}
            >
              John Doe
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl font-medium text-gray-300 mb-6 h-12"
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1000,
                  'UI/UX Designer',
                  1000,
                  'React Specialist',
                  1000,
                  'Problem Solver',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="neon-text"
              />
            </motion.div>
            
            <motion.p 
              className="text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's work together to bring your ideas to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cyber-btn px-6 py-3 rounded-md"
              >
                Hire Me <ArrowRight size={18} />
              </Link>
              
              <a href="#" className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white neon-box">
                Download CV <Download size={18} />
              </a>
            </motion.div>

            <motion.div 
              className="mt-12 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-300 font-mono text-sm"
              variants={codeBlockVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-400">terminal</span>
              </div>
              <div className="typing-animation">
                <span className="text-green-400">$</span> <span className="text-blue-400">const</span> developer <span className="text-blue-400">=</span> <span className="text-yellow-400">new</span> <span className="text-green-400">Developer</span>(<span className="text-orange-400">'John Doe'</span>);
                <br />
                <span className="text-green-400">$</span> developer.<span className="text-purple-400">code</span>(<span className="text-orange-400">'React'</span>);
                <br />
                <span className="text-green-400">$</span> developer.<span className="text-purple-400">createAmazingExperiences</span>();
                <br />
                <span className="text-green-400">$</span> <span className="animate-typing"></span>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-fast"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 animate-rotate-slow opacity-20"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.2, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                  <circle cx="50" cy="5" r="2" fill="#0ea5e9" />
                  <circle cx="50" cy="95" r="2" fill="#0ea5e9" />
                  <circle cx="5" cy="50" r="2" fill="#0ea5e9" />
                  <circle cx="95" cy="50" r="2" fill="#0ea5e9" />
                  <circle cx="22" cy="22" r="2" fill="#0ea5e9" />
                  <circle cx="78" cy="78" r="2" fill="#0ea5e9" />
                  <circle cx="22" cy="78" r="2" fill="#0ea5e9" />
                  <circle cx="78" cy="22" r="2" fill="#0ea5e9" />
                </svg>
              </motion.div>
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-60 h-60 md:w-72 md:h-72 animate-morph bg-gradient-to-br from-primary to-secondary p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-[inherit]"
                  />
                </div>
              </motion.div>
              
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-primary bg-gray-800/80 p-3 rounded-full z-20"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    x: item.x, 
                    y: item.y,
                    transition: {
                      delay: item.delay,
                      duration: 0.5,
                    }
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-full shadow-lg z-20 border border-primary"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.6
                }}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  5+
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-primary cursor-pointer hover:text-secondary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;