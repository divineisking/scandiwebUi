import React from 'react';
import './header.css'

export default function header(){
    return (

        <React.Fragment>
            <header>                
                    <h2>Product List</h2>
                <div>
                <button className='add'>
                    ADD
                </button>
                <button id='delete-product-bin'>
                    MASS DELETE
                </button>
                </div>
            </header>
            <hr/>
        </React.Fragment>
    );
}