import React, { useState, useEffect } from 'react';

const Colors = ({ children }) => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const gradients = [
    'linear-gradient(120deg, #171717, #222831)',
    'linear-gradient(120deg, #252525, #383838)',
    'linear-gradient(120deg, #1d1d1d, #333333)',
    'linear-gradient(120deg, #0f0f0f, #202020)',
    'linear-gradient(120deg, #080808, #181818)',
    'linear-gradient(120deg, #161616, #2a2a2a)',
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