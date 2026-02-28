import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GapComparison from './components/GapComparison';
import CohortModel from './components/CohortModel';
import ExecutionTimeline from './components/ExecutionTimeline';
import SimulationManager from './components/SimulationManager';
import ProductSimulation from './components/ProductSimulation';
import ToolsExposure from './components/ToolsExposure';
import Eligibility from './components/Eligibility';
import StudentOutcomes from './components/StudentOutcomes';
import TalentNetwork from './components/TalentNetwork';
import Curriculum from './components/Curriculum';
import Logistics from './components/Logistics';
import Certification from './components/Certification';
import ContactFooter from './components/ContactFooter';

function App() {

  // Force re-enable normal scrolling (since Phase 7 disabled it globally in CSS/JS)
  useEffect(() => {
    document.body.style.overflow = 'auto'; // Re-enable normal scrolling globally
    document.documentElement.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Hero />
        <About />
        <GapComparison />
        <CohortModel />
        <ExecutionTimeline />
        <SimulationManager />
        <ProductSimulation />
        <ToolsExposure />
        <Eligibility />
        <StudentOutcomes />
        <TalentNetwork />
        <Curriculum />
        <Certification />
        <Logistics />
        <ContactFooter />
      </main>

    </div>
  );
}

export default App;
