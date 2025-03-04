import React from 'react';
import { Code, Palette, Smartphone, Lightbulb } from 'lucide-react';
import { services } from '../data';

const Services: React.FC = () => {
  const renderServiceIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code className="text-primary" size={36} />;
      case 'palette':
        return <Palette className="text-primary" size={36} />;
      case 'smartphone':
        return <Smartphone className="text-primary" size={36} />;
      case 'lightbulb':
        return <Lightbulb className="text-primary" size={36} />;
      default:
        return <Code className="text-primary" size={36} />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Services I Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I provide a range of services to help businesses and individuals achieve their digital goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {renderServiceIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need a custom service?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            If you have a specific project in mind that doesn't fit into these categories, I'm always open to discussing custom solutions tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;