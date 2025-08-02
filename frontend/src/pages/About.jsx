import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, Code2 } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Bluestock Fintech.',
      period: 'June 2025 - August 2025',
      description: 'Built scalable features and optimized APIs as an SDE Intern, enhancing user experience in a fast-paced fintech environment.'
    },
    {
      title: 'Freelance Frontend Developer',
      company: 'Social 365.',
      period: 'November 2024 - December 2025',
      description: 'Delivered pixel-perfect frontend solutions for startups, ensuring fast performance and seamless cross-device user experience.'
    },
  
  ];

  const achievements = [
    { icon: Award, title: 'First Client Project Delivered in 7 Days', year: '2024' },
    // { icon: Users, title: '50+ Projects Delivered', year: '2023' },
    { icon: Coffee, title: '1000+ Cups of Coffee', year: 'Lifetime' },
    { icon: Code2, title: '10k+ Lines of Code', year: '2023' },
    { icon: Coffee, title: 'Debugged 100+ Bugs & Loved It', year: 'Lifetime' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About me"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a full-stack developer with over a year of experience building web applications that merge elegant design with solid functionality. My journey began with curiosity about how websites work and has grown into a passion for creating impactful digital solutions using the MERN stack and modern web technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               Outside of development, I enjoy challenging my mind with strategy games and keeping my routine strong with high-intensity workouts. These hobbies don’t just help me unwind—they also sharpen my focus and discipline, which often finds its way back into my code.

              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">React, Javascript, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey and key milestones
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 font-medium mt-2 lg:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Milestones that define my journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <IconComponent className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-100">{achievement.year}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;