import React from 'react';
import { motion, type Variants } from "motion/react";

const ContactCards: React.FC = () => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants: Variants = {
    rest: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const bannerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    },
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div
      className="space-y-8"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Email Card */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center"
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.svg
              className="w-7 h-7 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </motion.svg>
          </motion.div>
          <div className="flex-1">
            <motion.h3
              className="text-lg font-semibold dark:text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Envíame un Email
            </motion.h3>
            <motion.a
              href='mailto:jstorres0211@gmail.com'
              className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              jstorres0211@gmail.com
            </motion.a>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Respuesta en menos de 24 horas
            </p>
          </div>
        </div>

        {/* Efecto de brillo al hacer hover */}
        <motion.div
          className="absolute inset-0 bg-blue-500 opacity-0 rounded-2xl -z-10"
          whileHover={{ opacity: 0.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* WhatsApp Card */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500 transition-all duration-300 hover:shadow-xl cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center"
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.svg
              className="w-7 h-7 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{
                scale: [1, 1.2, 1.1],
                transition: { duration: 0.5 }
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          </motion.div>
          <div className="flex-1">
            <motion.h3
              className="text-lg font-semibold dark:text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Chat por WhatsApp
            </motion.h3>
            <motion.a
              rel='noreferrer'
              target='_blank'
              href='https://api.whatsapp.com/send?phone=573168314191&text=¡Hola!%20😊%20Me%20encantaría%20saber%20más%20sobre%20[producto/servicio].%20¿Me%20pueden%20compartir%20info?%20✨%20¡Mil%20gracias!'
              className="text-green-600 dark:text-green-400 text-lg font-medium mb-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              +57 316 831 4191
            </motion.a>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Respuesta inmediata
            </p>
          </div>
        </div>

        {/* Efecto de pulso sutil para WhatsApp */}
        <motion.div
          className="absolute inset-0 bg-green-500 opacity-0 rounded-2xl -z-10"
          whileHover={{ opacity: 0.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* LinkedIn Card */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center"
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
          >
            <motion.svg
              className="w-7 h-7 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              whileHover={{
                y: [0, -3, 0],
                transition: { duration: 0.4 }
              }}
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </motion.svg>
          </motion.div>
          <div className="flex-1">
            <motion.h3
              className="text-lg font-semibold dark:text-white mb-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Conectemos en LinkedIn
            </motion.h3>
            <motion.a
              rel='noreferrer'
              target='_blank'
              href='https://www.linkedin.com/in/sebastian-torres-a53638277?utm_source=share_via&utm_content=profile&utm_medium=member_android'
              className="text-blue-600 dark:text-blue-400 text-lg font-medium mb-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              /in/sebastian-torres
            </motion.a>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Para oportunidades profesionales
            </p>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-blue-400 opacity-0 rounded-2xl -z-10"
          whileHover={{ opacity: 0.03 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Availability Banner */}
      <motion.div
        variants={bannerVariants}
        animate={["visible", "pulse"]}
        className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white relative overflow-hidden"
      >
        {/* Efecto de partículas flotantes */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        <div className="flex items-center gap-3 mb-3 relative z-10">
          <motion.div
            className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.span
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              🚀
            </motion.span>
          </motion.div>
          <motion.h4
            className="text-lg font-semibold"
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Disponible para Nuevos Proyectos
          </motion.h4>
        </div>
        <motion.p
          className="text-blue-100 text-sm relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Actualmente aceptando colaboraciones y proyectos desafiantes.
          ¡Hagamos realidad tu visión juntos!
        </motion.p>

        {/* Efecto de brillo animado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactCards;