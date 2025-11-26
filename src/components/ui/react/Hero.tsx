import React from 'react';
import { AnimatedCounter } from "@components/ui/react/AnimatedCounter";
import { useLottie, useLottieInteractivity } from "lottie-react";
import hackerAnimation from "@assets/hacker-happy.json";
import Typewriter from './TypeWriter';

const Hero: React.FC = () => {
  const options = {
    animationData: hackerAnimation,
    loop: false
  };
  const lottieObj = useLottie(options);


  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.5, 1],
        type: "seek",
        frames: [0, 100],
      },
    ],
  });


  return (
    <section
      id="hero"
      className="gridded w-full border-b border-gray-200 dark:border-gray-800 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/10 transition-colors duration-300"
    >
      <div className="relative z-5 max-w-7xl mx-auto px-4 md:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex-col space-y-8">
            <div>
              <p
                className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-4 transition-colors"
              >
                [ Desarrollador de Software | Arquitectura & Full-Stack ]
              </p>
              <Typewriter />
              <p
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-4 mb-6 transition-colors"
              >
                <strong>Desarrollador de Software</strong> especializado en aplicaciones
                web escalables
              </p>
            </div>

            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <AnimatedCounter
                  className="text-3xl"
                  prefix="+"
                  duration={2}
                  play={true}
                  from={1}
                  to={5}
                />
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors"
                >
                  Años De Experiencia
                </div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  className="text-3xl"
                  prefix="+"
                  suffix="%"
                  duration={2}
                  play={true}
                  from={1}
                  to={30}
                />
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors"
                >
                  Eficiencia en Proyectos
                </div>
              </div>
              <div className="text-center">
                <AnimatedCounter
                  className="text-3xl"
                  prefix=""
                  duration={2}
                  play={true}
                  from={1}
                  to={15}
                />
                <div
                  className="text-sm text-gray-600 dark:text-gray-400 transition-colors"
                >
                  Proyectos Software
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className=" rounded-3xl dark:border-gray-700 transition-colors duration-300"
            >
              {Animation}
              <div
                className="absolute flex text-center gap-2 items-center bottom-16 -right-1 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg transition-colors"
              >
                <AnimatedCounter
                  prefix="+"
                  duration={1}
                  play={true}
                  from={1}
                  to={5}
                />
                Años desarrollando software
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;