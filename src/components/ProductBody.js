import React, { useState} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './productCard.css';
import ProductCard from './ProductCard'
import './header.css'

export default function ProductBody({ products }) {

    const [iD, setId] = useState([])

   function getProdID(prodID) {
        //const ID = [prodID]
        //ID.push(prodID)
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
        // //if (products.isHeld !== true)
        // {
        //     //const array = []
        //     // array.push(products.product_id)

        //     console.log(products.product_id)
        // }

        // fetch('http://localhost/SCANDIWEB_PHPTEST/delete.php',{
        //     method:'post',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(iD)
        // }).then(res=> console.log(res)).catch(err=> console.log(err)).then(console.log(JSON.stringify(iD)))

        axios.post('http://localhost/SCANDIWEB_PHPTEST/includes/delete.php', {
            iD
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          window.location.reload(false);

        console.log(iD)


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
                        <button id='delete-product-bin' onClick={handleMassDel}>
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