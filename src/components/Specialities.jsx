// App.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Typewriter from 'typewriter-effect';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Inter } from '@next/font/google';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: #0A0A0B;
    color: #FFFFFF;
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'Ethnocentric';
    src: url('/fonts/ethnocentric.ttf') format('truetype');
  }
`;

const theme = {
  colors: {
    primary: '#0A0A0B',
    secondary: '#1A1A1D',
    accent: '#7928CA',
    highlight: '#FF0080',
    text: '#FFFFFF',
    textSecondary: '#E1E1E1',
  },
};

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const Logo = styled.h1`
  font-family: 'Ethnocentric', sans-serif;
  font-size: 2rem;
  background: linear-gradient(45deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.highlight});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-size: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(45deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.highlight});
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  position: relative;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IntroText = styled(motion.div)`
  flex: 1;
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(motion.button)`
  position: relative;
  padding: 1rem 2rem;
  background: transparent;
  color: ${props => props.theme.colors.text};
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: 4px;
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    25% {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    50% {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    }
    100% {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }
  }
`;

const AvatarsContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Avatar = styled(motion.div)`
  width: 200px;
  height: 300px;
  background: linear-gradient(45deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.highlight});
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true
            }
          },
          background: {
            color: "#0A0A0B",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />

      <NavBar
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>G&G</Logo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </NavBar>

      <HeroSection id="home">
        <HeroContent>
          <IntroText
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              <Typewriter
                options={{
                  strings: ['Welcome to our creative space', 'We build amazing experiences'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p>We're a dynamic duo of developers crafting exceptional digital experiences.</p>
            <CTAButton>Let's Connect</CTAButton>
          </IntroText>

          <AvatarsContainer
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar whileHover={{ scale: 1.05 }}>
              <img src="https://picsum.photos/200/300?random=1" alt="Male Developer" />
            </Avatar>
            <Avatar whileHover={{ scale: 1.05 }}>
              <img src="https://picsum.photos/200/300?random=2" alt="Female Developer" />
            </Avatar>
          </AvatarsContainer>
        </HeroContent>
      </HeroSection>
    </ThemeProvider>
  );
}

export default App;