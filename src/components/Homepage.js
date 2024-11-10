import React, { useEffect } from 'react';
import '/Users/minhaz/Desktop/cafe-website/src/HomePage.css';

function HomePage() {
  useEffect(() => {
    const pattern = document.querySelector('.pattern-background');
    const onMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      pattern.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Welcome to Our Cafe</h1>
      <p className="homepage-subtitle">A Taste You’ll Remember</p>
      <div className="pattern-background"></div>
    </div>
  );
}

export default HomePage;