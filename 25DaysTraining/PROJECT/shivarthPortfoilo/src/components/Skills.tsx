import React, { useRef } from 'react';
import { Code, Database, Server, Palette, GitBranch, Globe } from 'lucide-react';
import { skills } from '../data';
import { motion, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const renderSkillIcon = (icon: string) => {
    switch (icon) {
      case 'html':
        return <Globe className="text-orange-500" size={36} />;
      case 'css':
        return <Palette className="text-blue-500" size={36} />;
      case 'javascript':
        return <Code className="text-yellow-500" size={36} />;
      case 'typescript':
        return <Code className="text-blue-600" size={36} />;
      case 'react':
        return <Code className="text-cyan-500" size={36} />;
      case 'nodejs':
        return <Server className="text-green-600" size={36} />;
      case 'mongodb':
        return <Database className="text-green-500" size={36} />;
      case 'git':
        return <GitBranch className="text-orange-600" size={36} />;
      case 'tailwind':
        return <Palette className="text-cyan-400" size={36} />;
      case 'nextjs':
        return <Code className="text-black" size={36} />;
      default:
        return <Code className="text-gray-500" size={36} />;
    }
  };

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.id} 
              className="skill-card group bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 text-white"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {renderSkillIcon(skill.icon)}
              </motion.div>
              <h3 className="text-lg font-medium mt-2">{skill.name}</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2 overflow-hidden">
                <motion.div
                  className="bg-primary h-2.5 rounded-full relative"
                  custom={skill.level}
                  variants={progressVariants}
                >
                  <motion.div 
                    className="absolute top-0 right-0 h-full w-5 bg-white/30"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                </motion.div>
              </div>
              <p className="text-sm text-gray-300 mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Responsive Design', 'UI/UX Design', 'RESTful APIs', 'GraphQL', 'Docker', 'AWS', 'Firebase', 'Redux', 'Jest', 'Figma'].map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 px-6 py-3 rounded-full text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(14, 165, 233, 0.2)",
                  borderColor: "rgba(14, 165, 233, 0.5)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <p className="font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 p-8 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Continuous Learning</h3>
              <p className="text-gray-400 mb-4">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development.
              </p>
              <p className="text-gray-400">
                Currently exploring: <span className="text-primary">Web3, AI Integration, and Advanced Animation Techniques</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Learning', value: '24/7' },
                { name: 'Courses', value: '15+' },
                { name: 'Books', value: '30+' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/80 border border-gray-700 p-4 rounded-lg text-center"
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.p 
                    className="text-primary text-2xl font-bold"
                    initial={{ scale: 1 }}
                    whileInView={{ 
                      scale: [1, 1.2, 1],
                      transition: { 
                        times: [0, 0.5, 1],
                        duration: 1,
                        delay: index * 0.2
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {item.value}
                  </motion.p>
                  <p className="text-gray-400 text-sm">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;