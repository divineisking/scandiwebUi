import React from 'react';
import './productCard.css'

export default function productCard({products}){
    
    return(

        
            <React.Fragment>
            {products.map((product) => (
            
                <div className='productCard' key={product.product_id}>
                <div>
                    <input type='checkbox' />
                </div>
                    <div className='productDetail'>
                        <p>{product.product_sku}</p>
                        <p>{product.product_name}</p>
                        <p>{product.product_price}</p>
                        <p>{product.product_attributes}</p>
                    </div>
            </div>
            )
            )}
            </React.Fragment>
    )

}