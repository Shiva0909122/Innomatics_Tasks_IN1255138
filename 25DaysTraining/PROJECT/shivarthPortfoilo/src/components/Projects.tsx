import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data';
import { motion, useInView } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.tags.includes(filter));

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      containerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === tag
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative">
          <motion.div 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 md:flex hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button 
              onClick={() => scrollProjects('left')}
              className="bg-gray-800/80 hover:bg-primary text-white p-3 rounded-full transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 md:flex hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button 
              onClick={() => scrollProjects('right')}
              className="bg-gray-800/80 hover:bg-primary text-white p-3  rounded-full transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          <motion.div 
            ref={containerRef}
            className="overflow-x-auto pb-4 hide-scrollbar"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex gap-8 min-w-max md:px-4">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="project-card group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 w-[300px] flex-shrink-0"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: hoveredProject === project.id ? 1.1 : 1,
                        filter: hoveredProject === project.id ? "brightness(0.7)" : "brightness(1)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-4 w-full">
                        <div className="flex gap-3">
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-3 py-2 rounded-md flex items-center gap-1 text-sm hover:bg-secondary transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} /> Live Demo
                          </motion.a>
                          <motion.a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 text-white px-3 py-2 rounded-md flex items-center gap-1 text-sm hover:bg-gray-600 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} /> Code
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center gap-1"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * tagIndex }}
                        >
                          <Tag size={12} />
                          {tag}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white bg-gray-800/80 px-6 py-3 rounded-full transition-all duration-300 hover:bg-primary group"
          >
            <span>View More Projects</span>
            <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;