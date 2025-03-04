import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200 pb-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold">{exp.role}</h4>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, index) => (
                        <li key={index} className="text-gray-600 flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-gray-200 pb-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium mb-3">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="space-y-4">
                {[
                  { name: 'Advanced React and Redux', issuer: 'Udemy', year: '2022' },
                  { name: 'Full Stack Web Development', issuer: 'Coursera', year: '2021' },
                  { name: 'UI/UX Design Fundamentals', issuer: 'Interaction Design Foundation', year: '2020' },
                ].map((cert, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-500">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;