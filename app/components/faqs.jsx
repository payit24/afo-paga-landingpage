import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ScrollAnimate } from "./ScrollAnimate";
import { withDelay } from "./animations";
import { animations } from "./animations";
import { faqs } from "./constants";

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 flex flex-col px-6 justify-center py-20 sm:py-32">
      {/* Header */}
      <ScrollAnimate
        animation={animations.fadeInUp}
        triggerOnce={false}
        threshold={0.5}
        className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto"
      >
        <motion.div
          {...withDelay(animations.fadeInUp, 0)}
          className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200/50 rounded-full shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-700 to-emerald-700 bg-clip-text text-transparent">
            FAQ
          </span>
        </motion.div>

        <motion.h2
          {...withDelay(animations.fadeInUp, 0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-slate-900">Frequently Asked</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Questions
            </span>
          </span>
        </motion.h2>

        <motion.p
          {...withDelay(animations.fadeInUp, 0.2)}
          className="text-base sm:text-xl text-slate-600 leading-relaxed"
        >
          Everything you need to know about PayConnect
        </motion.p>
      </ScrollAnimate>

      {/* FAQ Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 lg:gap-6 max-w-6xl mx-auto space-y-12">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            {...withDelay(animations.fadeInUp, categoryIndex * 0.1)}
            className="space-y-4"
          >
            {/* Category Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              {category.category}
            </h3>

            {/* Questions */}
            <div className="space-y-3">
              {category.questions.map((item, questionIndex) => {
                const isOpen = openItems[`${categoryIndex}-${questionIndex}`];
                return (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                      className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-base sm:text-lg font-semibold text-slate-900 pr-8">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-2">
                        <p className="text-slate-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}