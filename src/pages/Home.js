import React , {useEffect, useState} from 'react';
import ProductBody from '../components/ProductBody';
import Footer from '../components/Footer'

function Home(){
    const [products,setProducts] = useState(null)

    //fetch data from BE
    const fetchProducts = async () => {
        const response = await fetch('http://localhost/SCANDIWEB_PHPTEST/view.php');
        console.log(response)
        const data = await response.json();
        const results = data.map(myData=>{
            return {...myData, isHeld: false }
        })
        setProducts(results)
    };

    useEffect(()=>{
        fetchProducts()
    }, [])

    return(
        <React.Fragment>
            <ProductBody products={products} fetchProducts={fetchProducts}/>
            <Footer/>
        </React.Fragment>
    );
}
export default Home