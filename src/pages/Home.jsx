import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="https://res.cloudinary.com/dqhvloxh5/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744203103/IMG-20250319-WA0004_cowwqu.jpg"
        className="w-48 h-48 rounded-full mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Akhila Vardolu</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
      Passionate full stack developer eager to build modern, user-friendly web applications and solve real-world problems with clean, efficient code.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/Akhila1637/" className="text-gray-600 hover:text-blue-600">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/akhila1637/" className="text-gray-600 hover:text-blue-600">
          <Linkedin size={24} />
        </a>
        <a href="akhilavardholuyadav@gmail.com" className="text-gray-600 hover:text-blue-600">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;