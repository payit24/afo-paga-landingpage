// app/hooks/useScrollAnimation.js
'use client'
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {number} threshold - Percentage of element visibility needed to trigger (0-1)
 * @param {boolean} triggerOnce - Whether animation should trigger only once
 * @returns {[ref, isVisible]} - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
};

export default useScrollAnimation;