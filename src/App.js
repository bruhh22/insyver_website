// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppLoader from './components/layout/AppLoader';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesList from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initial Load Polish
  useEffect(() => {
    // Prevent scrolling during load
    if (loading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [loading]);

  return (
    <>
      {loading && <AppLoader onComplete={() => setLoading(false)} />}

      {!loading && (
        <ThemeProvider>
          <Layout setPage={setCurrentPage} page={currentPage}>
            {/* Render Pages based on state */}
            {currentPage === 'home' && <Home setPage={setCurrentPage} setServiceId={setCurrentServiceId} />}
            {currentPage === 'about' && <About setPage={setCurrentPage} />}
            {currentPage === 'services' && <ServicesList setPage={setCurrentPage} setServiceId={setCurrentServiceId} />}
            {currentPage === 'service-detail' && <ServiceDetail serviceId={currentServiceId} setPage={setCurrentPage} />}
            {currentPage === 'contact' && <Contact />}
            {['privacy', 'terms', 'cookies'].includes(currentPage) && <Legal type={currentPage} />}
          </Layout>
        </ThemeProvider>
      )}
    </>
  );
}