import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Netlify/Vercel', level: 85 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 75 },
      ]
    },
  ];

  const additionalSkills = [
    { name: 'Responsive Design', icon: Smartphone },
    { name: 'Performance Optimization', icon: Zap },
    { name: 'Web Security', icon: Shield },
    { name: 'SEO Optimization', icon: Globe },
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels in modern web development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12"
                >
                  <div className="flex items-center mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-3 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Additional Expertise
            </h2>
            <p className="text-xl text-blue-100">
              Other areas where I excel and deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300"
                >
                  <IconComponent className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional certifications that validate my expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
              { name: 'React Developer Certification', issuer: 'Meta', year: '2022' },
              { name: 'Full Stack Web Development', issuer: 'FreeCodeCamp', year: '2021' },
              { name: 'JavaScript Algorithms', issuer: 'FreeCodeCamp', year: '2021' },
              { name: 'Node.js Application Development', issuer: 'MongoDB University', year: '2022' },
              { name: 'Google Analytics Certified', issuer: 'Google', year: '2023' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;