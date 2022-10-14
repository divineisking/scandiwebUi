import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import '../components/addProduct.css'

function AddProduct(){

    const [productAttributes, setProdAttr] = useState({
        product_sku: "",
        product_name: "",
        product_price: "",
        product_attribute: ""
        
    })

    const [type, setType] = useState('DVD')

    const [newForm, setNewForm] = useState()
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProdAttr((prevProd) => {
          return {
            ...prevProd,
            [name]: value,
          };
        });
      };
    
      const getForm = () => {
        if (type === "DVD") {
          setNewForm(
            <div>
                <label>Size (MB)</label>
                <input placeholder="DVD" name="product_attribute"></input> <br/>
                <q><small>Please Provide Size in MB E.G (600MB)</small></q>
            </div>
          
          );
        }
        if (type === "Book") {
          setNewForm(
            <div>
                <label>Weight (KG)</label>
                 <input placeholder="Book" name="product_attribute" ></input> <br/>
                 <q><small>Please Provide weight in KG E.G (57KG)</small></q>
            </div>
         );
        }
        if (type === "Furniture") {
          setNewForm(
            <div>
                <label>Height (CM)</label>
                <input placeholder="Furniture" name="product_attribute" ></input> <br/>
                <q><small>Please Provide dimensions in HxWxL format E.G (4x34x15cm)</small></q>
            </div>
          );
        }
      };
    
      useEffect(() => {
        getForm();
        // eslint-disable-next-line
      }, [type]);

    

      //handleSubmit 
      function handleSubmit(e){
        e.preventDefault()

        console.log(productAttributes)


      }
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
                        <button type='submit' onClick={handleSubmit}>
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
                        <select id='productType'name='productType' onChange={(e)=>setType(e.target.value)}
                        value={productAttributes.product_switch}>

                            {/* <option value="switch type">switch type</option> */}
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
                        {newForm}
                    </div>
                    
                </form>
            </section>
            <Footer/>
        </React.Fragment>
)

}
export default AddProduct