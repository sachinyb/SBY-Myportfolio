import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaArrowDown } from 'react-icons/fa'

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience')
      if (!section) return

      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY + windowHeight / 2

      // Calculate progress: 0 when section starts, 1 when section ends
      const sectionStart = sectionTop
      const sectionEnd = sectionTop + sectionHeight
      const progress = Math.max(
        0,
        Math.min(1, (scrollPosition - sectionStart) / (sectionEnd - sectionStart))
      )

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const experiences = [
    {
      title: 'Java Full Stack Developer Intern',
      company: 'Abeyaantrix',
      period: 'Jan 2025 – May 2025',
      location: 'Remote/On-site',
      achievements: [
        'Worked on real-time Java full stack modules',
        'Implemented CRUD operations with JDBC',
        'Integrated database connectivity using MySQL',
        'Used Git for version control and collaboration',
        'Participated in code reviews and team meetings',
      ],
      type: 'Internship',
    },
    {
      title: 'Java Full Stack Training',
      company: 'Tap Academy',
      period: 'June 2025 – Present',
      location: 'Training Program',
      achievements: [
        'Hands-on training in Core Java, Advanced Java, and JEE',
        'Learned JDBC and Hibernate for database operations',
        'Training in Spring Boot framework',
        'Frontend technologies: HTML, CSS, JavaScript, React',
        'SQL database management and optimization',
        'Building real-world mini projects',
      ],
      type: 'Training',
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-600 dark:to-primary-400"></div>

          {/* Scroll Indicator Arrow */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-20 pointer-events-none">
            <motion.div
              style={{
                position: 'absolute',
                top: `${scrollProgress * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
              className="w-8 h-8 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800"
            >
              <FaArrowDown className="text-white text-xs" />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                  } ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-primary-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaBriefcase className="text-primary-600 dark:text-primary-400" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FaCalendarAlt />
                          <span>{exp.period}</span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <FaCheckCircle className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

