import React from 'react';

const experiences = [
  {
    title: 'Fullstack Developer',
    company: 'DTEC Software Solutions Ltd',
    period: 'October 2025 - Present',
    description: 'Developing cross-platform mobile applications using Flutter, ensuring seamless user experiences on iOS and Android devices.'
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Bouletteproof, Kigali',
    period: 'April 2025 - July 2025',
    description: 'Collaborated in a team to develop a web application on both frontend and backend using react(next.js) and node.js'
  },
  {
    title: 'IT Support Technician',
    company: 'Protection Technologies ltd, kigali',
    period: 'Feb 2021 - March 2023',
    description: 'Repairing and maintaining computers, projectors, printers and other electronic devices .'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Klab, kigali',
    period: 'June 2017 - July 2017',
    description: 'developing a solo project using javascript and html .'
  }
];

const education = [
  {
    degree: 'bachelor degree in computer science',
    institution: 'INES Ruhengeri, Musanze',
    period: 'March 2023 - August 2025'
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-6xl">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-700 text-center border-b-4 border-blue-300 inline-block pb-2">
        Experience
      </h2>
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Work Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold">{exp.title}</h4>
              <p className="text-blue-600 font-semibold">{exp.company}</p>
              <p className="text-gray-600 italic">{exp.period}</p>
              <p className="mt-2 text-gray-800">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Education</h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="text-blue-600 font-semibold">{edu.institution}</p>
              <p className="text-gray-600 italic">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
