import * as motion from "motion/react-client"

const Typewriter = () => {
  const firstName = "Juan Sebastián";
  const lastName = "Torres";
  
  return (
    <div className="text-5xl md:text-6xl font-bold leading-tight">
      <div className="text-gray-900 dark:text-white mb-2">
        {firstName.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: index * 0.05,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      
      <div className="text-blue-600 dark:text-blue-400">
        {lastName.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 1 + (index * 0.1),
              duration: 0.2,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Typewriter