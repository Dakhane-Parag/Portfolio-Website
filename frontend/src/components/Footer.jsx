import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Dakhane-Parag', label: 'GitHub' },
    { icon: Linkedin, url: 'www.linkedin.com/in/parag-dakhane-77a271263', label: 'LinkedIn' },
    { icon: Mail, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=dakhane567@gmail.com&su=Talent%20Outreach&body=Hi%20Parag', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate full-stack developer creating exceptional digital experiences 
              through clean code and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center">
            © {currentYear} Dakhane Parag. 
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-4 md:mt-0">
            Built with React, Tailwind CSS & Supabase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;