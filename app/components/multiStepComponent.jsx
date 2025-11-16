'use client';
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiStepScroll() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const stepRef = useRef(currentStep);
  const imgRef = useRef(currentImageIndex);

  const scrollLocked = useRef(false);
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);
  const stepContainerRef = useRef(null);

  const touchStartY = useRef(0);
  const touchDeltaY = useRef(0);

  const steps = useRef([
    {
      number: 1,
      title: "Download & Set Up",
      subtitle: "Get the app and link your mobile money in 2 minutes",
      images: [
        "https://images.unsplash.com/photo-1588058365548-9efe5acb8077?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      number: 2,
      title: "Connect Your Bills",
      subtitle: "Add electricity, water, TV, and other services",
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&fit=crop",
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1200&fit=crop",
      ],
    },
    {
      number: 3,
      title: "Automate & Relax",
      subtitle: "Set auto-pay and never miss a payment again",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&fit=crop",
      ],
    },
    {
      number: 4,
      title: "Earn Rewards",
      subtitle: "Get cash-back and points for every bill you pay",
      images: [
        "https://img.freepik.com/free-photo/image-happy-surprised-african-american-girl-receiving-gift-looking-inside-shopping-bad-with-amazement-standing-yellow-background_1258-54846.jpg",

      ],
    },
    {
      number: 5,
      title: "Track & Control",
      subtitle: "See all receipts and spending insights instantly",
      images: [
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&fit=crop",

      ],
    },
  ]).current;

  useEffect(() => { stepRef.current = currentStep }, [currentStep]);
  useEffect(() => { imgRef.current = currentImageIndex }, [currentImageIndex]);

  // Check if we're at the last step and last image
  const isComplete = currentStep === steps.length - 1 && 
    currentImageIndex === steps[currentStep].images.length - 1 ;

  // Activate scroll-jacking when component enters viewport
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      // Activate isActive whenever component is visible
      setIsActive(entry.isIntersecting);
    },
    { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
  );

  if (containerRef.current) observer.observe(containerRef.current);

  return () => {
    if (containerRef.current) observer.unobserve(containerRef.current);
  };
}, []);


  
useEffect(() => {
  if (isActive && !isComplete) {
    // Lock body scroll only if not completed
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  } else {
    document.body.style.height = '';
  }

  return () => {
    document.body.style.overflow = '';
    document.body.style.height = '';
  };
}, [isActive, isComplete]);


  const lockScroll = (ms = 700) => {
    scrollLocked.current = true;
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      scrollLocked.current = false;
    }, ms);
  };

  const prefetchImage = useCallback((url) => {
    if (!url) return;
    const img = new Image();
    img.src = url;
  }, []);

  useEffect(() => {
    const step = steps[currentStep];
    const nextIdx = currentImageIndex + 1;
    if (step.images[nextIdx]) prefetchImage(step.images[nextIdx]);

    const nextStep = steps[currentStep + 1];
    if (nextStep?.images[0]) prefetchImage(nextStep.images[0]);
  }, [currentStep, currentImageIndex, prefetchImage, steps]);

  useEffect(() => {
  const onWheel = (e) => {
  if (!isActive) return;
  if (scrollLocked.current) return;

  const stepIdx = stepRef.current;
  const imgIdx = imgRef.current;

  // Unlock scroll if at the very first step/image and scrolling up
  if (stepIdx === 0 && imgIdx === 0 && e.deltaY < 0) {
    setIsActive(false);
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  const step = steps[stepIdx];
  if (!step) return;

  if (e.deltaY > 0) {
    // Scroll down logic (same as before)
    if (imgIdx < step.images.length - 1) {
      setCurrentImageIndex(imgIdx + 1);
      lockScroll();
    } else if (stepIdx < steps.length - 1) {
      setCurrentStep(stepIdx + 1);
      setCurrentImageIndex(0);
      lockScroll();
    } else {
      setIsActive(false);
    }
  } else {
    // Scroll up logic
    if (imgIdx > 0) {
      setCurrentImageIndex(imgIdx - 1);
      lockScroll();
    } else if (stepIdx > 0) {
      const prev = stepIdx - 1;
      setCurrentStep(prev);
      setCurrentImageIndex(steps[prev].images.length - 1);
      lockScroll();
    }
  }
};


    if (isActive) {
      window.addEventListener("wheel", onWheel, { passive: false });
      return () => window.removeEventListener("wheel", onWheel);
    }
  }, [steps, isActive]);

  useEffect(() => {
    const el = stepContainerRef.current;
    if (!el || !isActive) return;

    const start = (ev) => {
      touchStartY.current = ev.touches[0].clientY;
    };
    
    const move = (ev) => {
      ev.preventDefault();
      touchDeltaY.current = ev.touches[0].clientY - touchStartY.current;
    };
    
    const end = () => {
      const stepIdx = stepRef.current;
      const imgIdx = imgRef.current;
      const delta = touchDeltaY.current;
      const threshold = 60;
      const step = steps[stepIdx];

      if (scrollLocked.current) {
        touchDeltaY.current = 0;
        return;
      }

      if (delta < -threshold) {
        // Swipe up (next)
        if (imgIdx < step.images.length - 1) {
          setCurrentImageIndex((p) => p + 1);
          lockScroll();
        } else if (stepIdx < steps.length - 1) {
          setCurrentStep((p) => p + 1);
          setCurrentImageIndex(0);
          lockScroll();
        } else {
          setIsActive(false);
        }
      } else if (delta > threshold) {
        // Swipe down (previous)
        if (imgIdx > 0) {
          setCurrentImageIndex((p) => p - 1);
          lockScroll();
        } else if (stepIdx > 0) {
          const prev = stepIdx - 1;
          setCurrentStep(prev);
          setCurrentImageIndex(steps[prev].images.length - 1);
          lockScroll();
        }
      }

      touchDeltaY.current = 0;
    };

    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: false });
    el.addEventListener("touchend", end, { passive: true });

    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);
    };
  }, [steps, isActive]);

  useEffect(() => {
    const onKey = (e) => {
      if (!isActive || scrollLocked.current) return;

      const stepIdx = stepRef.current;
      const imgIdx = imgRef.current;
      const step = steps[stepIdx];

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (imgIdx < step.images.length - 1) {
          setCurrentImageIndex((p) => p + 1);
        } else if (stepIdx < steps.length - 1) {
          setCurrentStep((p) => p + 1);
          setCurrentImageIndex(0);
        } else {
          setIsActive(false);
        }
        lockScroll();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (imgIdx > 0) {
          setCurrentImageIndex((p) => p - 1);
        } else if (stepIdx > 0) {
          const prev = stepIdx - 1;
          setCurrentStep(prev);
          setCurrentImageIndex(steps[prev].images.length - 1);
        }
        lockScroll();
      }
    };

    if (isActive) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [steps, isActive]);

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  const stepData = steps[currentStep];
  const images = stepData.images;

  return (
   <div
  ref={containerRef}
  className={`min-h-screen bg-white transition-all duration-500 ${isActive ? 'fixed inset-0 z-50 overflow-hidden' : 'relative'}`}
>

      <div className="py-6 px-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full" />
          <div
            className="absolute top-6 left-0 h-1 bg-[#32d4bc] rounded-full transition-all duration-700"
            style={{
              width:
                ((steps.slice(0, currentStep).reduce((a, s) => a + s.images.length, 0) +
                  currentImageIndex + 1) /
                  steps.reduce((a, s) => a + s.images.length, 0)) *
                  100 +
                "%",
            }}
          />
          <div className="relative flex justify-between">
            {steps.map((s, idx) => (
              <div key={s.number} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    idx <= currentStep
                      ? "bg-[#32d4bc] text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s.number}
                </div>
                <span
                  className={`mt-2 text-sm font-medium text-center transition-colors duration-300 ${
                    idx <= currentStep ? "text-[#32d4bc]" : "text-gray-500"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-6">
        <div
          ref={stepContainerRef}
          className="relative w-full max-w-6xl h-[700px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0">
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={`${currentStep}-${currentImageIndex}`}
                src={images[currentImageIndex]}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
            <div className="bg-white/10 px-8 py-2 rounded-full mb-6 text-sm backdrop-blur-sm">
              Step {currentStep + 1} of {steps.length}
            </div>

            <motion.h2
              key={`title-${currentStep}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold text-center mb-4"
            >
              {stepData.title}
            </motion.h2>

            <motion.p
              key={`sub-${currentStep}-${currentImageIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-center max-w-2xl mb-8"
            >
              {stepData.subtitle}
            </motion.p>

            <div className="flex gap-3 mb-8">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "bg-white w-12 h-2"
                      : "bg-white/40 w-2 h-2 hover:bg-white/60"
                  }`}
                  onClick={() => {
                    if (scrollLocked.current) return;
                    setCurrentImageIndex(idx);
                    lockScroll(400);
                  }}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}