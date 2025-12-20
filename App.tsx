import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import MainPage from './pages/MainPage';
import GolfPackagesPage from './pages/GolfPackagesPage';
import StayCasinoPage from './pages/StayCasinoPage';
import ServicesPage from './pages/ServicesPage';
import CommunityPage from './pages/CommunityPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-dark bg-light antialiased selection:bg-secondary selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/golf-packages" element={<GolfPackagesPage />} />
            <Route path="/stay-casino" element={<StayCasinoPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </HashRouter>
  );
};

export default App;