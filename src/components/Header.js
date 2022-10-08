import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

export default function header() {
    return (

        <React.Fragment>
            <header>
                <div>
                    <h2>Product List</h2>
                </div>
                <div className='buttons'>
                    <div>
                        <button>
                        <Link to="/product" className='link'>
                            ADD
                        </Link>
                        </button>
                    </div>
                    <div>
                        <button id='delete-product-bin'>
                            MASS DELETE
                        </button>
                    </div>
                </div>

            </header>
            <hr />
        </React.Fragment>
    );
}