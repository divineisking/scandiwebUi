import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/addProduct.css'

function AddProduct(){

    const [productAttributes, setProdAttr] = useState({
        product_sku: "",
        product_name: "",
        product_price: " ",
        
    })

    const [type, setType] = useState('')

    const [prodType, setProdType] = useState()
    
    function handleSwitch(e){
        setType(e.target.value)

       
        if(e.target.value === 'DVD')
        {
            
             setProdType(()=>{
                return(
                    <input placeholder='dvd'/>
                )
             })
        }

        else if(e.target.value === 'Book')
        {
            
             setProdType(()=>{
                return(
                    <input placeholder='book'/>
                )
             })
        }

        if(e.target.value === 'Furniture')
        {
            
             setProdType(()=>{
                return(
                    <input placeholder='furniture'/>
                )
             })
        }

    }

    console.log(`${type}`)

    function handleChange(){

    };

    

    /*function handleSwitch(event){

        
        setType(event.target.value)

    console.log(type)

    }*/

return(
    <React.Fragment>
            <header>
                <div>
                    <h2>Product Add</h2>
                </div>
                <div className='buttons'>
                <div>
                        <button>
                            Save
                        </button>
                    </div>
                    <div>
                        <button id='delete-product-bin'>
                        <Link to="/" className='link'>
                            Cancel
                        </Link>
                        </button>
                    </div>
                </div>

            </header>
            <hr />
            <section className='formSection'>
                <form>
                    <div className='attributes'>
                        <div className='item'>
                            <label htmlFor="product_sku">SKU</label>
                            <input type="text" name="product_sku" id="sdk" placeholder='Enter Product SKU' value={productAttributes.product_sku} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="product_name">Name</label>
                            <input type="text" name="product_name" id="" placeholder='Enter Product Name' value={productAttributes.product_name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="product_price">Price</label>
                            <input type="text" name="product_price" id="" placeholder='Enter Product Price' value={productAttributes.product_price} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='specialAtt'>
                        <label htmlFor='productType'>Type Switcher</label>
                        <select id='productType'name='productType' onChange={handleSwitch} value={type}>
                            <option id='DVD' value='DVD'>
                                DVD
                            </option>
                            <option id='Book' value='Book' >
                                Book
                            </option>
                            <option id='Furniture' value="Furniture" >
                                Furniture
                            </option>

                        </select>
                    </div>
                    <div>
                        {prodType}
                    </div>
                    
                </form>
            </section>
        </React.Fragment>
)

}
export default AddProduct