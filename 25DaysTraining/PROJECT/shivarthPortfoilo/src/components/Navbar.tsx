import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Twitter, Instagram, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, socialLinks } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-gray-900/90 shadow-md py-2' : 'bg-transparent py-4'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-2xl font-bold text-white cursor-pointer flex items-center gap-2 group"
          >
            <motion.div
              className="bg-primary text-white p-2 rounded-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code size={24} />
            </motion.div>
            <span className="group-hover:animate-text-shimmer">Portfolio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-primary font-medium transition-colors duration-300 cursor-pointer relative group"
                    activeClass="text-primary"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  custom={i + navItems.length}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {renderSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white hover:text-primary transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/95 z-40 md:hidden backdrop-blur-md"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col h-full p-8">
              <motion.div 
                className="flex justify-end"
                variants={mobileItemVariants}
              >
                <button
                  className="text-white hover:text-primary transition-colors duration-300"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </motion.div>

              <div className="flex flex-col space-y-6 mt-12">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={mobileItemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-2xl text-white hover:text-primary font-medium transition-colors duration-300 cursor-pointer flex items-center gap-2"
                      activeClass="text-primary"
                      onClick={closeMenu}
                    >
                      <span className="text-primary opacity-60">0{item.id.length}.</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="flex items-center space-x-6 mt-12"
                variants={mobileItemVariants}
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {renderSocialIcon(link.icon)}
                  </a>
                ))}
              </motion.div>

              <motion.div 
                className="mt-auto mb-8 p-4 border border-gray-700 rounded-lg text-gray-400 text-sm"
                variants={mobileItemVariants}
              >
                <p>Let's create something amazing together!</p>
                <p className="mt-2">Contact me at: <span className="text-primary">johndoe@example.com</span></p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;