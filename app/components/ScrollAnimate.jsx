'use client';
import {useScrollAnimation} from "../hooks/useScrollAnimation";
import { easeToCss } from '../components/animations';


export const ScrollAnimate = ({ 
  children, 
  animation, 
  threshold = 0.1, 
  triggerOnce = true,
  delay = 0,
  className = ''
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold, triggerOnce);
  
  const animConfig = delay > 0 ? withDelay(animation, delay) : animation;
  const { initial, animate, transition } = animConfig;
  
  const getTransform = (styles) => {
    const transforms = [];
    if (styles.x) transforms.push(`translateX(${styles.x}px)`);
    if (styles.y) transforms.push(`translateY(${styles.y}px)`);
    if (styles.scale) transforms.push(`scale(${styles.scale})`);
    return transforms.length > 0 ? transforms.join(' ') : 'none';
  };
  
  const initialStyles = {
    opacity: initial.opacity ?? 1,
    transform: getTransform(initial),
  };
  
  const animateStyles = {
    opacity: animate.opacity ?? 1,
    transform: getTransform(animate),
    transition: `all ${transition.duration}s ${easeToCss(transition.ease)} ${transition.delay || 0}s`,
  };
  
  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? animateStyles : initialStyles}
    >
      {children}
    </div>
  );
};