import React from 'react';
import './productCard.css';

export default function ProductCard(){
    //const product = data.map((data)=>{})
    return(
        <React.Fragment>
            <div className='productBody'>

                <div className='productCard'>
                    <div>
                        <input type='checkbox' />
                    </div>
                    <p>Product_sdk</p>
                    <p>Product_name</p>
                    <p>Product_price</p>
                    <p>Product_Attributes</p>
                </div>
            </div>
        </React.Fragment>
    );
}