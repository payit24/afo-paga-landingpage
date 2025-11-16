import { motion } from "framer-motion";
import {animations} from "./animations";
import { solutionData } from "./constants";
import { withDelay } from "./animations";
import MultiStepScroll from "./multiStepComponent";



export function Steps() {
  return (
    <section>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex flex-col justify-center">
            <motion.h2
              {...withDelay(animations.fadeInRight, 0.2)}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4"
            >
              How To Get Started
            </motion.h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Your journey with Afropaga starts here! Just follow these easy steps</p>

        </div>

        <div className="flex flex-col justify-center space-y-8 h-32 w-full bg-[#32d4bc] rounded-xl p-4 text-white font-semibold "></div>
      </div>
      <MultiStepScroll />
    </section>
  );
}