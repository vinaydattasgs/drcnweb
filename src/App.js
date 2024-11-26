
import './App.css';
import React, { useState, useEffect } from 'react'
import Footer from './componenet/footer';
import Home from './componenet/Home'
import Header from './componenet/header';
import Contactform from './componenet/contactform';
import DataComponent from './componenet/datagett';
import TopImg from './images/top.png';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond 200px
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>

      <Router>
        <div className="hero_area">
          <Header></Header>


          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/DataComponent" element={<DataComponent />} />
              <Route path="/Contactform" element={<Contactform />} />
            </Routes>
            {isVisible && (
              <div className='topscroll' onClick={scrollToTop}>
                <img src={TopImg} alt="Move top" />
              </div>
            )}
          </main>


          <Footer></Footer>
        </div>
      </Router>


      <div>



      </div>

    </div>

  );
}


export default App;
