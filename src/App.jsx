import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import PlotDetails from './pages/PlotDetails';
import Checkout from './pages/Checkout';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/plot/:id" element={<PlotDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Fallback routes for nav links that don't have dedicated pages */}
        <Route path="/research" element={<Landing />} />
        <Route path="/ownership" element={<Landing />} />
        <Route path="/logistics" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
