import React, {useEffect, useState} from 'react';
import './productCard.css';
import ProductCard from './productCard'

export default function ProductBody(){

    const [products,setProducts] = useState(null)

    const fetchProduct = async () => {

        
        const response = await fetch('http://localhost/SCANDIWEB_PHPTEST/includes/viewcontrl.php');
        const data = await response.json();
        console.log(data)
        setProducts(data)
    };

    useEffect(()=>{
     fetchProduct();
    },[]);
    
    //const product = data.map((data)=>{})
    return(
        <React.Fragment>
            <section className='productBody'>
                {products && <ProductCard products={products}/>}
            </section>
        </React.Fragment>
    );
}