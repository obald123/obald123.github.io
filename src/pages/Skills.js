import React from 'react';

export default function Skills() {
  const skills = [
    {
      category: 'Front-End',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 85 }
      ],
      icon: '💻'
    },
    {
      category: 'Back-End',
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'Flask', level: 70 },
        { name: 'PHP', level: 65 }
      ],
      icon: '⚙️'
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 60 },
        { name: 'CI/CD', level: 65 }
      ],
      icon: '🚀'
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Problem-solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Teamwork', level: 85 }
      ],
      icon: '🤝'
    }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Google IT Support Professional Certificate',
    'React Developer Certification'
  ];

  const tools = [
    'VS Code', 'GitHub', 'Postman', 'Figma', 'Jira'
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-6xl">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-700 text-center border-b-4 border-blue-300 inline-block pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-center">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-blue-700 text-center">{skill.category}</h3>
            <ul className="space-y-3">
              {skill.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  <div className="flex justify-between items-center mb-1">
                    <span>{item.name}</span>
                    <span className="text-sm text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
