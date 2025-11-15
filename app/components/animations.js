// Animation library

  const animations = {
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  },

  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  },

  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  },
  
  slideUpBounce: {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { 
      duration: 1.2, 
      ease: [0.34, 1.56, 0.64, 1],
      y: { type: "spring", damping: 15, stiffness: 150 }
    }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  },
  
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  float: {
    animate: {
      y: [0, -20, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  
  floatDelayed: {
    animate: {
      y: [0, -20, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5
    }
  },
  
  glow: {
    animate: {
      opacity: [0.2, 0.4, 0.2],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Utility to add delay
export const withDelay = (animation, delay) => ({
  ...animation,
  transition: { ...animation.transition, delay }
});

export default animations;