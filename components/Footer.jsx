import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/sachin-y-b-703588352',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: <FaGithub />,
      link: '#',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
    {
      icon: <FaEnvelope />,
      link: 'mailto:sachinbhajantri262@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Sachin Y B</h3>
            <p className="text-gray-400 leading-relaxed">
              Java Full Stack Developer passionate about building scalable applications
              and creating exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(`#${item.toLowerCase()}`)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target={social.link.startsWith('http') || social.link.startsWith('mailto') ? '_blank' : '_self'}
                  rel={social.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>© {currentYear} Sachin Y B. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

