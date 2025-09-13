import React from 'react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Tech Company',
    period: 'June 2023 - August 2023',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on time.'
  },
  {
    title: 'IT Support Intern',
    company: 'IT Solutions Ltd.',
    period: 'January 2022 - May 2022',
    description: 'Provided technical support and troubleshooting for hardware and software issues. Assisted in network maintenance and user training.'
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Example',
    period: '2019 - 2023'
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
