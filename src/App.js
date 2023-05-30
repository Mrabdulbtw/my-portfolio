
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ProjectDisplay from './pages/projectDisplay';



function App() {
  return (

    <Router basename="/my-portfolio">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/projects/:id' element={<ProjectDisplay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
// "predeploy": "npm run build",
// // "deploy": "gh-pages -d build",