
import './App.css';

import Footer from './componenet/footer';
import Home from './componenet/Home'
import Header from './componenet/header';
import Contactform from './componenet/contactform';
import DataComponent from './componenet/datagett';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
