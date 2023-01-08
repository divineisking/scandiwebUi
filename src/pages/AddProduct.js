import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import '../components/addProduct.css'
//import axios from 'axios';

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
                <label>Size (MB)</label>
                /* <br/>
                <q><small>Please Provide Size in MB E.G (600MB)</small></q> */


          );
        }
        if (type === "Book") {
          setNewForm(

                <label>Weight (KG)</label>
                 /* <br/>
                 <q><small>Please Provide weight in KG E.G (57KG)</small></q> */

         );
        }
        if (type === "Furniture") {
          setNewForm(

                <label>Height (CM)</label>
                 /* <br/>
                <q><small>Please Provide dimensions in HxWxL format E.G (4x34x15cm)</small></q> */

          );
        }
      };

    useEffect(() => {
        getForm();
        // eslint-disable-next-line
      }, [type]);



      //handleSubmit
 function handleSave(){

    if(productAttributes.product_sku === ""){
        console.log('product sku cant be empty')
    }

    else if(productAttributes.product_name === ""){
        console.log('product name cant be empty')
    }

    else if(productAttributes.product_price === ""){
        console.log('product price cant be empty')
    }
    else if(productAttributes.product_attribute === ""){
        console.log('product attribute cant be empty')
    }

    else{
        // const instance = axios.create();

        // instance.defaults.headers.post['Content-Type'] = 'application/json';

        // instance.post('https://divinennodim.000webhostapp.com/add.php', {
        //    productAttributes
        //   }).then(function (response) {
        //     if (response.status === 204) {
        //         alert(`sku ${productAttributes.product_sku} already exist`);
        //       }
        //     console.log(response)
        //   })

        fetch('https://divinennodim.000webhostapp.com/add.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
  },
        body: JSON.stringify(productAttributes),
        })
        .then((response) => response.json())
        .then((productAttributes) => {
            console.log('Success:', productAttributes);
        })
        .catch((error) => {
            console.error('Error:', error);
        });



        }
      }

return(
    <React.Fragment>
            <header>
                <div>
                    <h2>Product Add</h2>
                </div>
                <div className='buttons'>
                <div>
                        <button type='submit' name='submit' onClick={()=>{handleSave(productAttributes)}}>
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
                <form id='product_form'>
                    <div className='attributes'>
                        <div className='item'>
                            <label htmlFor="product_sku">SKU</label>
                            <input type="text" name="product_sku" id="sku" placeholder='Enter Product SKU' value={productAttributes.product_sku} onChange={handleChange}/>
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
                        <input placeholder={type} name="product_attribute" value={productAttributes.product_attribute} onChange={handleChange}></input>
                    </div>
                </form>
            </section>
            <Footer/>
        </React.Fragment>
)

}
export default AddProduct