// App.jsx
import React, { useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="app">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0A0A0A",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              }
            }
          },
          particles: {
            color: {
              value: "#00FFB2",
            },
            links: {
              color: "#00FFB2",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      
      <nav className="navbar">
        <div className="logo">G&G</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="intro-text">
            <Typewriter
              options={{
                strings: ['Welcome to our creative space.', 'We craft digital experiences.', 'Let\'s build something amazing together.'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
            <p className="sub-text">Two developers, endless possibilities.</p>
            <button className="cta-button">
              <span>Explore Our Work</span>
              <div className="button-border"></div>
            </button>
          </div>
          <div className="avatars">
            <div className="avatar male">
              <div className="avatar-glow"></div>
            </div>
            <div className="avatar female">
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;