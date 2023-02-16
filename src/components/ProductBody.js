import React, { useState} from 'react';
import { Link } from 'react-router-dom'
//import axios from 'axios';
import './productcard.css'
import ProductCard from './ProductCard'
import './header.css'

export default function ProductBody({ products }) {

    const [iD, setId] = useState([])

   function getProdID(prodID) {
        setId((prevId) => {
            return (
                [...prevId, prodID]
            )
        })
    }

    function rmProdID(prodID){
        iD.pop(prodID)
    }




    function handleMassDel() {

        fetch('https://divinennodim.000webhostapp.com/delete.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(iD),
            })
                .then((response) => console.log(response))
                .then((iD) => {
                    console.log('Success:', iD);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

          //window.location.reload(false);


    }

    return (
        <React.Fragment>
            <header>
                <div>
                    <h2>Product List</h2>
                </div>
                <div className='buttons'>
                    <div>
                        <button>
                            <Link to="/addProduct" className='link'>
                                ADD
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button className=''id='delete-product-bin' onClick={handleMassDel}>
                            MASS DELETE
                        </button>
                    </div>
                </div>

            </header>
            <hr />
            <section className='productBody'>
                {products &&
                    products.map(product => {
                        return <ProductCard key={product.product_id} {...product} products={products} getProdID={getProdID} rmProdID={rmProdID} />
                    })
                }
                {/* {products && <ProductCard products={products} />} */}
            </section>
        </React.Fragment>
    );
}