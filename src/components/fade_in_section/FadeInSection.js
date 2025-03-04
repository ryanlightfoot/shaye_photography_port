import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, threshold = 0.1, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(5px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection; 