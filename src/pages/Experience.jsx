import React from 'react';

const experiences = [
  {
    title: 'Developer Intern',
    company: 'Pie Corporate Solutions Pvt Ltd',
    duration: "May'24 — Jul '24",
    location: 'onsite',
    description:
      'Worked Worked as a Developer Intern at Pie Corporate Solutions on a client project, focusing on frontend development using the MERN stack and Tailwind CSS. Built responsive web applications and collaborated with the team to deliver scalable, user-friendly features.as a Developer Intern on a real-world client project, focusing on frontend and middleware using the MERN stack and Tailwind CSS. Built responsive web and mobile applications while collaborating with a team to deliver scalable, user-friendly features. ',
    role: 'Frontend Developer',
  },
  {
    title: 'Full Stack Developer',
    company: 'Techplement',
    duration: "May '24 — Jun '24",
    location: 'Remote',
    description:
      'Contributed to front-end UI design using HTML, CSS, and JavaScript frameworks, and back-end development with Node.js and Express. Used Git and GitHub for version control and collaborative coding.',
    role: 'Frontend Developer',
  },
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{exp.title}</h2>
              <span className="text-sm text-blue-600 font-medium">{exp.duration}</span>
            </div>
            <p className="text-gray-600 font-medium mb-1">
              {exp.company} • {exp.location}
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">{exp.description}</p>
            <p className="mt-3 text-sm font-semibold text-gray-500">Role: {exp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
