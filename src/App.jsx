import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "about", "skills", "projects", "contact"];

  const projects = [
    {
      title: "Bus Ticket Booking App",
      desc: `Developed a bus ticket booking system with a well-structured MVC architecture. Built the backend using
Node.js and Express.js with secure password hashing via bcrypt.js and authentication using JSON Web
Token (JWT). Designed a responsive and user-friendly React frontend, leveraging useState, useReducer, and
Context API for state management. Integrated an Admin Dashboard for operator verification, Stripe for
secure payment processing, and Nodemailer for automated email notifications. Thoroughly tested API
endpoints using Postman to ensure reliability and performance.`,
      link: "https://github.com/aravindakm0207/Bus-Booking-App",
    },
    {
      title: "Expense App",
      desc: "MERN stack expense management app with authentication, Postman-tested APIs, React frontend using Context API & Redux.",
      link: "https://expense-app-frontend-one.vercel.app",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 150 && top >= -el.offsetHeight + 150) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex space-x-6 text-gray-300 font-medium bg-gray-900/70 px-6 py-2 rounded-full shadow-lg">
        {["About", "Skills", "Projects", "Contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section.toLowerCase())}
            className={`transition ${
              activeSection === section.toLowerCase() ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4 tracking-wide"
        >
          Aravinda K M
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8"
        >
          Full Stack Developer
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-6"
        >
          Hi, I'm Aravinda K M, a passionate Full Stack Developer specializing in MongoDB, Express.js, React, and Node.js, along with modern technologies . I build scalable, efficient, and user-friendly web applications.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition"
        >
          My Projects
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="text-center px-6 md:px-32 py-20">
        <h2 className="text-4xl font-semibold text-yellow-400 mb-6">About Me</h2>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
          Hi, I'm Aravinda K M, a passionate Full Stack Developer specializing in MongoDB, Express.js, React, and Node.js. I create scalable, efficient, and user-friendly applications that balance functionality and modern UI/UX design principles.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-2xl shadow-lg transition">
            <FaReact className="text-5xl mx-auto mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Frontend</h3>
            <p className="text-gray-300">React, JavaScript, HTML, CSS, Redux, Context API</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-2xl shadow-lg transition">
            <FaNodeJs className="text-5xl mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Backend</h3>
            <p className="text-gray-300">Node.js, Express.js, MongoDB</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-2xl shadow-lg transition">
            <FaGitAlt className="text-5xl mx-auto mb-4 text-gray-100" />
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Tools</h3>
            <p className="text-gray-300"> JWT, bcrypt.js,GitHub, Postman, Cloudinary, Stripe, Razorpay, Deployment</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl w-full">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition text-left"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">{proj.title}</h3>
              <p className="text-gray-200 mb-4">{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-yellow-200 hover:underline font-medium">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Contact</h2>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-lg w-full space-y-4">
          <p className="text-gray-200 text-lg flex items-center justify-center gap-2">
            <FaEnvelope className="text-yellow-300" />
            <a href="mailto:aravindakm0207@gmail.com" className="hover:text-yellow-300 transition">
              aravindakm0207@gmail.com
            </a>
          </p>
          <p className="text-gray-200 text-lg flex items-center justify-center gap-2">
            <FaLinkedin className="text-blue-500" />
            <a href="https://www.linkedin.com/in/aravindakm0207" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
              LinkedIn
            </a>
          </p>
          <p className="text-gray-200 text-lg flex items-center justify-center gap-2">
            <FaGithub className="text-gray-100" />
            <a href="https://github.com/aravindakm0207" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
              GitHub
            </a>
          </p>
          <p className="text-gray-200 text-lg">📍 Location: Mangalore/Bangalore, Karnataka</p>
        </div>
      </section>
    </div>
  );
}
