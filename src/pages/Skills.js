import React from 'react';

export default function Skills() {
  const skills = [
    {
      category: 'Front-End',
      items: ['HTML5', 'TailwindCSS', 'JavaScript', 'React'],
      icon: '💻'
    },
    {
      category: 'Back-End',
      items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PHP'],
      icon: '⚙️'
    },
    {
      category: 'DevOps',
      items: ['Git', 'Docker', 'AWS', 'CI/CD'],
      icon: '🚀'
    },
    {
      category: 'Soft Skills',
      items: ['Problem-solving', 'Communication', 'Teamwork'],
      icon: '🤝'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-6xl">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-700 text-center border-b-4 border-blue-300 inline-block pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-center">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-blue-700 text-center">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 text-center">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
