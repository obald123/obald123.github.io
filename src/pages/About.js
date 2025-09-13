import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 border-b-4 border-blue-300 inline-block pb-2">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src="/pic.jpg" // Assuming the image is in public folder
            alt="Simugomwa Obald"
            className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <p className="text-lg leading-relaxed text-gray-800 mb-4">
              Hi, I'm Simugomwa Obald, a passionate Full Stack Developer Intern with experience in React (Next.js), Node.js, and Python frameworks. I specialize in building modern web applications and collaborating in teams to deliver high-quality solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              My background includes IT support and software engineering internships, where I've honed my skills in problem-solving and continuous learning. I'm enthusiastic about leveraging technology to create impactful digital experiences.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Interests</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Web Development and UI/UX Design</li>
              <li>Open Source Contributions</li>
              <li>Learning New Technologies</li>
              <li>Problem-Solving and Algorithms</li>
              <li>Team Collaboration and Mentorship</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Hobbies</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Reading Tech Blogs and Books</li>
              <li>Coding Personal Projects</li>
              <li>Exploring Nature and Hiking</li>
              <li>Playing Chess</li>
              <li>Watching Sci-Fi Movies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
