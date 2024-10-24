
import './App.css';
import AboutDrcn from './componenet/aboutdrcn';
import Bodysectionone from './componenet/bodysectionbanner';
import Chooseus from './componenet/chooseus';
import Contactform from './componenet/contactform';
import Customersay from './componenet/customersay';
import Footer from './componenet/footer';
import Givespace from './componenet/givespace';
import Header from './componenet/header';
import NearbyDRCN from './componenet/nearestby'
import Pricing from './componenet/pricing';
import DataComponent from './componenet/datagett';

function App() {
  return (
    <div>
      <div className="hero_area">
        <Header></Header>
        <Bodysectionone></Bodysectionone>
      </div>
      <div>
        <DataComponent></DataComponent>
        <AboutDrcn></AboutDrcn>
        <NearbyDRCN></NearbyDRCN>
        <Pricing></Pricing>
        <Givespace></Givespace>
        <Chooseus></Chooseus>
        <Customersay></Customersay>
        <Contactform></Contactform>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}


export default App;
