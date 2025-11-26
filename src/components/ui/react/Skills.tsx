import { motion, useInView } from 'motion/react';
import type { Variants } from 'motion/react';
import { useRef } from 'react';

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skillsData: SkillCategory[] = [
    {
      id: "backend",
      title: "Backend",
      description: "Desarrollo de servidores y APIs robustas",
      technologies: ["Laravel", "PHP", "Node.js", "Python", "MySQL", "PostgreSQL", "Redis", "REST APIs", 'MCP']
    },
    {
      id: "frontend",
      title: "Frontend",
      description: "Interfaces de usuario modernas y responsivas",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript", "HTML5", "CSS3"]
    },
    {
      id: "devops",
      title: "DevOps",
      description: "Infraestructura y despliegue continuo",
      technologies: ["Docker", "AWS", "Kubernetes", "CI/CD", "GitHub Actions", "Nginx", "Linux", "Monitoring"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const techVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="w-full px-4 md:px-10 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologías & Herramientas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stack tecnológico para desarrollo de software robusto y escalable
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group"
            >
              <div className="p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                  {category.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                  {category.description}
                </p>

                {/* Contenedor para las tecnologías con animación escalonada */}
                <motion.div
                  className="flex flex-wrap gap-3 justify-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4
                      }
                    }
                  }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {category.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      variants={techVariants}
                      className="px-4 py-2 rounded-lg font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;