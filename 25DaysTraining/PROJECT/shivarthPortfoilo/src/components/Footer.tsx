import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
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

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-300 mb-4">
              A professional web developer specializing in creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {['github', 'linkedin', 'twitter', 'instagram'].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  {renderSocialIcon(platform)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Mobile App Development', 'Technical Consultation'].map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-primary transition-colors duration-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block text-white font-medium">Email:</span>
                johndoe@example.com
              </li>
              <li className="text-gray-300">
                <span className="block text-white font-medium">Phone:</span>
                +1 (123) 456-7890
              </li>
              <li className="text-gray-300">
                <span className="block text-white font-medium">Location:</span>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors duration-300 cursor-pointer"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;