import React from 'react';
import AboutDrcn from './aboutdrcn';
import Bodysectionone from './bodysectionbanner';
import Chooseus from './chooseus';
import Contactform from './contactform';
import Customersay from './customersay';
import NearbyDRCN from './nearestby'
import Pricing from './pricing';
// import DataComponent from './datagett';
import Givespace from './givespace';


const Home = () => {
    return (
        <section>
            <Bodysectionone></Bodysectionone>
            <AboutDrcn></AboutDrcn>
            <NearbyDRCN></NearbyDRCN>
            <Pricing></Pricing>
            <Givespace></Givespace>
            <Chooseus></Chooseus>
            <Customersay></Customersay>
            {/* <DataComponent></DataComponent> */}
            <Contactform></Contactform>
           
        </section>
    );
};

export default Home;