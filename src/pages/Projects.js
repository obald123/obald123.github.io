import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Dissertation Supervision System (E_Supervisor)',
      description: 'A modern, responsive web app built with Flask to facilitate collaboration between students and supervisors with AI feedback and real-time chat.',
      link: 'https://github.com/obald123/E_supervisor.git',
      tech: ['Flask', 'AI', 'Real-time Chat']
    },
    {
      title: 'Student Registration System',
      description: 'A system for student registration and admin management using Next.js frontend and Node.js backend with Prisma ORM.',
      link: 'https://github.com/obald123/stu_2.git',
      tech: ['Next.js', 'Node.js', 'Prisma']
    },
    {
      title: 'BP Ticket',
      description: 'Web-based support ticket management system for BouletteProof with Slack notifications, Next.js frontend, Node.js backend, and Postgres database.',
      link: 'https://github.com/jnkindi/bp-ticket-internship-frontend.git',
      tech: ['Next.js', 'Node.js', 'Postgres']
    },
    {
      title: 'AI Finance Assistant',
      description: 'Full-stack web app for financial management with AI-powered predictions, built with Node.js, TypeScript, Prisma backend, and Next.js frontend.',
      link: 'https://ai-finn-frontend.vercel.app/',
      tech: ['Node.js', 'TypeScript', 'Next.js']
    }
  ];

  return (
    <div className="container mx-auto px-6 py-10 max-w-6xl">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-700 text-center border-b-4 border-blue-300 inline-block pb-2">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="mb-4">
              <strong>Technologies:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
