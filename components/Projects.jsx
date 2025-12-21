import { motion } from 'framer-motion'
import { FaGithub, FaJava, FaDatabase, FaCode } from 'react-icons/fa'
import { SiMysql, SiJavascript } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'Food Delivery Web Application',
      description:
        'A full-stack web application for food ordering and delivery management. Built using JSP/Servlets for the backend, implementing MVC architecture, with a responsive frontend and MySQL database.',
      features: [
        'User authentication and authorization',
        'Menu browsing with categories',
        'Shopping cart functionality',
        'Order placement and tracking',
        'Admin panel for restaurant management',
      ],
      techStack: [
        { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
        { name: 'JSP/Servlets', icon: <FaCode />, color: 'text-orange-500' },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'MVC', icon: <FaCode />, color: 'text-purple-500' },
      ],
      githubLink: 'https://github.com/sachinyb/food-delivery-app.git',
      category: 'Web Application',
    },
    {
      title: 'Employee Management System',
      description:
        'A desktop application for managing employee records with full CRUD functionality. Includes features for employee registration, salary calculation, and comprehensive reporting capabilities.',
      features: [
        'Employee CRUD operations',
        'Salary calculation module',
        'Employee search and filter',
        'Data validation and error handling',
        'Report generation',
      ],
      techStack: [
        { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
        { name: 'JDBC', icon: <FaDatabase />, color: 'text-blue-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
      ],
      githubLink: 'https://github.com/sachinyb/Employee.git',
      category: 'Desktop Application',
    },
    {
      title: 'Bank Management System',
      description:
        'A comprehensive ATM simulator application built with Java Swing for the GUI, JDBC for database connectivity, and MySQL for data persistence. Features secure user authentication, transaction management, and real-time balance updates.',
      features: [
        'User login and authentication',
        'Withdraw and deposit operations',
        'Balance enquiry',
        'Mini-statement generation',
        'Secure transaction handling',
      ],
      techStack: [
        { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
        { name: 'Java Swing', icon: <FaCode />, color: 'text-orange-500' },
        { name: 'JDBC', icon: <FaDatabase />, color: 'text-blue-500' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
      ],
      githubLink: '#',
      category: 'Desktop Application',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my Java Full Stack development skills through real-world projects
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-8 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-3"
          >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 group min-w-[320px] md:min-w-0 flex flex-col"
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        <span className={tech.color}>{tech.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects

