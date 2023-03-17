import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      <Signin />
      <Signup />
    </>
  );
}

export default App;
