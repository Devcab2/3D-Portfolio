import React, { useState, useEffect } from 'react';

const Colors = ({ children }) => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    'linear-gradient(120deg, #211b23, #42253b)',
    'linear-gradient(120deg, #2b2337, #55466e)',
    'linear-gradient(120deg, #0c2e3c, #0e6783)',
    'linear-gradient(120deg, #1e213f, #3f4261)',
    'linear-gradient(120deg, #4d2121, #8a4040)',
    'linear-gradient(120deg, #2d3142, #595b80)',
    'linear-gradient(120deg, #382933, #704565)',
    'linear-gradient(120deg, #27204e, #504c7b)',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [gradients.length]);

  return (
    <div className="relative z-0.1">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gradients[gradientIndex],
          animation: 'fadeTransition 12s linear infinite',
        }}
      />
      {children}
    </div>
  );
};

export default Colors;
