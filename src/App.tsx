import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import HomePage from './pages/Home';
import { DreamTypesPage } from './pages/DreamTypes/DreamTypesPage';
import { DreamPrinciplesPage } from './pages/DreamPrinciples/DreamPrinciplesPage';
import { DreamMeaningsPage } from './pages/DreamMeanings/DreamMeaningsPage';
import { DreamcorePage } from './pages/Dreamcore/DreamcorePage';
import { AIChatPage } from './pages/AIChat/AIChatPage';
import GlobalBackground from './components/GlobalBackground';
import RealityPage from './pages/Reality/RealityPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <RouteBackgroundWrapper />
    </BrowserRouter>
  );
}

function RouteBackgroundWrapper() {
  const location = useLocation();
  // Treat the root (/) and /reality as the "reality" landing — show SunriseTorii there.
  const isReality = location.pathname === '/' || location.pathname === '/reality';
  // when not on the reality landing, show a different background on small screens
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
  const onResize = () => setIsSmall(window.innerWidth <= 680);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const bgSrc = isReality ? '/images/SunriseTorii.JPG' : isSmall ? '/images/Milkyway.JPG' : '/images/DisneyMoon.JPG';

  return (
    <div className="page-root">
      <GlobalBackground src={bgSrc} />
      {/* hide the top Navigation on the reality landing */}
      {!isReality && <Navigation />}
      <main className="pt-16">
        <Routes>
          {/* Make RealityPage the site's landing page at / */}
          <Route path="/" element={<RealityPage />} />
          {/* Keep /reality for compatibility, and add /home for the original HomePage */}
          <Route path="/reality" element={<RealityPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dream-types" element={<DreamTypesPage />} />
          <Route path="/dream-principles" element={<DreamPrinciplesPage />} />
          <Route path="/dream-meanings" element={<DreamMeaningsPage />} />
          <Route path="/dreamcore" element={<DreamcorePage />} />
          <Route path="/chat" element={<AIChatPage />} />
        </Routes>
      </main>
  <Footer />
    </div>
  );
}