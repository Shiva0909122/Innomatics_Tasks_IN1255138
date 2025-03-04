import React, { useRef } from 'react';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const stats = [
    { label: 'Years Experience', value: '5+', icon: <Clock className="text-primary" size={24} /> },
    { label: 'Projects Completed', value: '50+', icon: <Award className="text-primary" size={24} /> },
    { label: 'Happy Clients', value: '30+', icon: <Users className="text-primary" size={24} /> },
    { label: 'Awards', value: '10+', icon: <Award className="text-primary" size={24} /> },
  ];

  const keyPoints = [
    'Specialized in React and modern JavaScript',
    'Experienced in building responsive web applications',
    'Strong understanding of UI/UX principles',
    'Proficient in frontend and backend technologies',
    'Excellent problem-solving skills',
    'Committed to writing clean, maintainable code',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-800 to-transparent"></div>
      
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my current skills
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-white">Get to know me!</h3>
            <p className="text-gray-400 mb-4">
              I'm a <span className="text-primary font-medium">Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
            </p>
            <p className="text-gray-400 mb-4">
              I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect or follow me on my LinkedIn where I post useful content related to Web Development and Programming.
            </p>
            <p className="text-gray-400 mb-6">
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800/80 border border-gray-700/50 p-4 rounded-lg text-center card-hover-effect"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="flex justify-center mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <p className="text-primary text-2xl font-bold">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors duration-300 cyber-btn"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-white">My Skills & Expertise</h3>
            <div className="space-y-3">
              {keyPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-primary/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle className="text-primary" size={18} />
                  </div>
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={itemVariants}
            >
              {['JavaScript', 'React', 'TypeScript', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Responsive Design'].map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800/80 border border-gray-700/50 px-4 py-2 rounded-full text-center"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(14, 165, 233, 0.2)",
                    borderColor: "rgba(14, 165, 233, 0.5)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <p className="text-gray-300 font-medium">{skill}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8 p-4 border border-gray-700 rounded-lg bg-gray-800/50"
              variants={itemVariants}
            >
              <h4 className="text-lg font-medium mb-2 text-white">My Development Philosophy</h4>
              <p className="text-gray-400">
                I believe in creating clean, efficient, and maintainable code that delivers exceptional user experiences. My approach combines technical excellence with creative problem-solving to build solutions that exceed expectations.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Want to work together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start a conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;