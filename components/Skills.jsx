import { motion } from 'framer-motion'
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaServer,
} from 'react-icons/fa'
import { SiMysql, SiMongodb, SiSpringboot, SiHibernate } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-2xl" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'bg-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'bg-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'bg-yellow-500' },
        { name: 'React.js', icon: <FaReact />, color: 'bg-cyan-500' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: <FaServer className="text-2xl" />,
      skills: [
        { name: 'Core Java', icon: <FaJava />, color: 'bg-red-600' },
        { name: 'Advanced Java', icon: <FaJava />, color: 'bg-red-700' },
        { name: 'JDBC', icon: <FaDatabase />, color: 'bg-blue-600' },
        { name: 'JEE / Servlets', icon: <FaServer />, color: 'bg-indigo-600' },
        { name: 'JSP', icon: <FaServer />, color: 'bg-indigo-500' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'bg-green-600' },
        { name: 'Hibernate', icon: <SiHibernate />, color: 'bg-purple-600' },
        { name: 'REST APIs', icon: <FaServer />, color: 'bg-teal-600' },
        { name: 'MVC Architecture', icon: <FaServer />, color: 'bg-pink-600' },
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-2xl" />,
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'bg-blue-600' },
        { name: 'SQL', icon: <FaDatabase />, color: 'bg-blue-500' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-600' },
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Tools & Concepts',
      icon: <FaGitAlt className="text-2xl" />,
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, color: 'bg-gray-800' },
        { name: 'Eclipse / IntelliJ', icon: <FaServer />, color: 'bg-purple-600' },
        { name: 'Tomcat Server', icon: <FaServer />, color: 'bg-orange-600' },
        { name: 'OOPs Concepts', icon: <FaServer />, color: 'bg-indigo-600' },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set covering the entire Java Full Stack development spectrum
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 bg-gradient-to-br ${category.gradient} rounded-lg text-white shadow-md`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative"
                  >
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${skill.color} text-white shadow-md hover:shadow-lg transition-all cursor-default`}
                    >
                      <span className="text-sm">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
