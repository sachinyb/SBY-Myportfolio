import { motion } from 'framer-motion'
import { FaUser, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <FaUser className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Career Objective</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A passionate Computer Science Engineering fresher with strong fundamentals in{' '}
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    Java Full Stack development
                  </span>
                  . Hands-on experience in Java, HTML, CSS, JavaScript, SQL, and basic React.
                  Eager to learn, build scalable applications, and grow as a professional full stack developer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <FaGraduationCap className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>
                    <span className="font-semibold">BE Computer Science</span> - VTU (2021–2025)
                  </p>
                  <p>GPA: <span className="font-semibold text-primary-600 dark:text-primary-400">6.94</span></p>
                  <p className="text-sm mt-2">PUC Science – 84% | High School – 82.24%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/50 dark:to-primary-800/50 rounded-xl border border-primary-200 dark:border-primary-700">
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase className="text-primary-600 dark:text-primary-400 text-2xl" />
                <h3 className="text-xl font-bold">Internship Highlights</h3>
              </div>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                  <span>Real-time Java full stack development experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                  <span>CRUD operations & JDBC integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                  <span>Version control with Git & GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                  <span>Hands-on training in Spring Boot & Hibernate</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span>Bengaluru, Karnataka, India</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

