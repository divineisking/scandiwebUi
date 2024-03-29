import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import '../components/addProduct.css'
import axios from 'axios';
//import axios from 'axios';

export default function AddProduct() {

    const [type, setType] = useState('DVD')

    const [newForm, setNewForm] = useState()

    const [productAttributes, setProdAttr] = useState({
        product_sku: "",
        product_name: "",
        product_price: "",
        product_attribute: ''
    })

    const [specialAtt, setSpecialAtt] = useState({
        size: "",
        weight: "",
        height: "",
        width: "",
        lengthi: ""
    })

    //handleChange()- handles change for productAttributes
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

    //handleChange2()- handles change for specialAttributes{}
    const handleChange2 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSpecialAtt((prevProd) => {
            return {
                ...prevProd,
                [name]: value,
            };
        });
    };

    //dynamicForm()- renders a new form based on type option picked by user
    const dynamicForm = () => {
        if (type === "DVD") {
            setNewForm(
                <React.Fragment>
                    <label>Size (MB)</label>
                    <input type='number' placeholder="Size" name="size" value=
                        {specialAtt.size} id='size' onChange={handleChange2} />
                    <br />
                    <q><small>Please Provide Size in MB E.G (600MB)</small></q>
                </React.Fragment>


            );
        }
        if (type === "Book") {
            setNewForm(

                <React.Fragment>
                    <label>Weight (KG)</label>
                    <input type='number' placeholder="Weight" name="weight" value=
                        {specialAtt.weight} id='weight' onChange={handleChange2} />
                    <br />
                    <q><small>Please Provide Weight in KG E.G (60KG)</small></q>
                </React.Fragment>

            );
        }
        if (type === "Furniture") {
            setNewForm(

                <React.Fragment>
                    <label>Height (CM)</label>
                    <input type='number' placeholder='Height' name="height" value={specialAtt.height} id='height' onChange={handleChange2} />
                    <br />
                    <q><small>Please Provide Height in CM E.G (60CM)</small></q>
                    <br />
                    <label>Width (CM)</label>
                    <input type='number' placeholder='Width' name="width" value={specialAtt.width} id='width' onChange={handleChange2} />
                    <br />
                    <q><small>Please Provide Width in CM E.G (60CM)</small></q>
                    <br />
                    <label>length (CM)</label>
                    <input type='number' placeholder='Length' name="lengthi" value={specialAtt.lengthi} id='length' onChange={handleChange2} />
                    <br />
                    <q><small>Please Provide length in CM E.G (60CM)</small></q>
                </React.Fragment>

            );
        }
    };

    //assignData()- takes data from specialAtrribute{} and assigns to ProductAttributes.product_attribute
    const assignData = () => {
        if (type === 'DVD') {
            let data = specialAtt.size
            productAttributes.product_attribute = data + 'MB'
        }
        if (type === 'Book') {
            let data = specialAtt.weight
            productAttributes.product_attribute = data + 'KG'
        }
        if (type === 'Furniture') {
            let data = specialAtt.height + 'x' + specialAtt.lengthi + 'x' + specialAtt.width
            productAttributes.product_attribute = data + 'CM'
        }

    }


    useEffect(() => {
        dynamicForm();
        assignData();
        //setID();
        // eslint-disable-next-line
    }, [type, specialAtt]);

    //handleSave()- sends data to BE if all checks are met
    function handleSave() {

        if (productAttributes.product_sku === "") {
            alert('Enter all values')
        }

        else if (productAttributes.product_name === "") {
            alert('Enter all values')
        }

        else if (productAttributes.product_price === "") {
            alert('Enter all values')
        }

        else if (type === 'DVD' && specialAtt.size === '') {
            alert('Enter all values')
        }

        else if (type === 'Book' && specialAtt.weight === '') {
            alert('Enter all values')
        }

        else if (type === 'Furniture' && specialAtt.height === '') {
            alert('Enter all values')
        }

        else if (type === 'Furniture' && specialAtt.width === '') {
            alert('Enter all values')
        }

        else if (type === 'Furniture' && specialAtt.lengthi === '') {
            alert('Enter all values')
        }

        else {

            // console.log(productAttributes)

            axios.post('/add.php', {
                productAttributes
              })
                .then(function (response) {
                    if (response.status === 204) {
                        alert(`sku ${productAttributes.product_sku} already exist`);
                    }
                    console.log(response)
                })
                // .then((productAttributes) => {
                //     console.log('Success:', productAttributes);
                // })
                .catch((error) => {
                    console.error('Error:', error);
                });



        }
    }

    return (
        <React.Fragment>
            <header>
                <div>
                    <h2>Product Add</h2>
                </div>
                <div className='buttons'>
                    <div>
                        <button type='submit' name='submit' onClick={handleSave}>
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
                            <input type="text" name="product_sku" id="sku" placeholder='Enter Product SKU' value={productAttributes.product_sku} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="product_name">Name</label>
                            <input type="text" name="product_name" id="name" placeholder='Enter Product Name' value={productAttributes.product_name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="product_price">Price ($)</label>
                            <input type="text" name="product_price" id="price" placeholder='Enter Product Price' value={productAttributes.product_price} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='specialAtt'>
                        <label htmlFor='productType'>Type Switcher</label>
                        <select id='productType' name='productType' onChange={(e) => setType(e.target.value)}
                        >

                            {/* <option value="switch type">switch type</option> */}
                            <option id='DVD' value='DVD'>
                                DVD
                            </option>
                            <option id='Book' value='Book'>
                                Book
                            </option>
                            <option id='Furniture' value="Furniture">
                                Furniture
                            </option>

                        </select>
                    </div>

                    {/* dynamically rendered form */}
                    {newForm}
                </form>
            </section>
            <Footer />
        </React.Fragment>
    )

}
