// src/components/Projects.jsx
import React, { useEffect } from 'react';
import './CSS/Projects.css';
import { Portfolio } from '../components/Portfolio';
import { SliderCard } from '../components/SliderCard';
import { ResidentialInterior } from '../components/ResidentialInterior';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <div className="main-content">
        <h1 className='main-title'>Transforming Spaces</h1>
        <p>Offering comprehensive interior design, architecture, and construction services across India, tailored to elevate every space</p>
        <SliderCard/>
        <ResidentialInterior/>
        <Portfolio/>
    </div>
    </>
  );
}
export default Projects;
