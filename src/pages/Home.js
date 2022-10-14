import React from 'react';
import Header from '../components/Header'
import ProductBody from '../components/ProductBody';
import Footer from '../components/Footer'

function Home(){
    return(
        <React.Fragment>
            <Header/>
            <ProductBody/>
            <Footer/>
        </React.Fragment>
    );
}
export default Home