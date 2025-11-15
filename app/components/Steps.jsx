import { motion } from "framer-motion";
import animations from "./animations";
import { solutionData } from "./constants";
import { withDelay } from "./animations";



export function Steps() {
  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
            <motion.h2
              {...withDelay(animations.fadeInRight, 0.2)}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4"
            >
              How To Get Started
            </motion.h2>
            <p>Your journey with Afropaga starts here! Just follow these easy steps</p>

        </div>

    </section>
  );
}