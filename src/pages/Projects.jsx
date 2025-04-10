import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">


      <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dqhvloxh5/image/upload/v1744215164/nicolas-ladino-silva-o2DVsV2PnHE-unsplash_dswua4.jpg"
            alt="Project 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">NovaCapture</h2>
            <p className="text-gray-600 mb-4">
            NovaCapture is an all-in-one platform designed to bridge the gap between clients and photographers, making the process of discovering, booking, and managing photography services seamless and efficient.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Akhila1637/Nova_capture.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                 Code
              </a>
              <a href="https://nova-j9db.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
               Live Demo
              </a>
            </div>
          </div>
        </div>
        

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743916645/Screenshot_55_bjpohg.png"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Doctor Search & Appointment Booking System</h2>
            <p className="text-gray-600 mb-4">
            This project is a MERN Stack application that allows patients to search for doctors and book appointments.
             Doctors can manage their appointments. The system includes authentication, search functionality, booking management, and notifications.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Akhila1637/Doctor_Appointment.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="https://doctor-appointment-z2xh.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743916962/Screenshot_56_kzetbl.png"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">StudyNotion – Build, Learn, and Grow with a Modern Ed-Tech Platform</h2>
            <p className="text-gray-600 mb-4">
            StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.
The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Akhila1637/StudyNotion.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                 Code
              </a>
              <a href="https://study-notion-full-stack.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743917609/Screenshot_57_wh4ixb.png"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Application</h2>
            <p className="text-gray-600 mb-4">This is a full-stack Blog Application that allows users to create, view, and manage blog posts. 
              The application includes user authentication, blog creation, public blog listing with pagination, and blog management features.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Akhila1637/Blogs.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="https://omnify-task-pnin.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
               Live Demo
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Projects;
