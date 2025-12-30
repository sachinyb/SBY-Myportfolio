import { motion } from 'framer-motion'
import { FaDownload, FaCode, FaArrowDown } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Sachin Y B</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300"
            >
              <HiCode className="text-primary-600 dark:text-primary-400" />
              <span>Java Full Stack Developer</span>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Passionate Computer Science Engineering fresher with strong fundamentals in{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              Java Full Stack Development
            </span>
            . Eager to build scalable applications and grow as a professional developer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              <FaCode className="group-hover:rotate-12 transition-transform" />
              View Projects
            </motion.button>
            <motion.a
              href="public\RenderCV_EngineeringResumes_Theme (6).pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
            >
              {/* <FaDownload className="group-hover:translate-y-1 transition-transform" />
              Download Resume */}


                            <a
                href="public\RenderCV_EngineeringResumes_Theme (6).pdf"
                download
                className="group-hover:translate-y-1 transition-transform"
              >
                Download Resume
              </a>


            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer"
              onClick={() => {
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="text-sm">Scroll to explore</span>
              <FaArrowDown className="text-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

