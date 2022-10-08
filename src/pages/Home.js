import React from 'react';
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer'

function Home(){
    return(
        <React.Fragment>
            <Header/>
            <ProductCard/>
            <Footer/>
        </React.Fragment>
    );
}
export default Home