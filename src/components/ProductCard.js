import React, { useEffect, useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa'
import './productcard.css'

export default function ProductCard({ isHeld, product_id,
    product_price, product_name, product_sku, product_attributes, getProdID,rmProdID }) {

    const [checkInp, setCheckInp] = useState(isHeld)
    const [newId, setNewId] = useState()

    const handleCheck = () => {
        setCheckInp(!checkInp)

        setNewId(product_id)
    }


    const getID = () =>{
        if (checkInp !== false){
           getProdID(newId)
        }
        else{
            rmProdID(newId)
        }
    }

    useEffect(()=>{
        getID()
        // eslint-disable-next-line
    }, [checkInp])

    return (

        <React.Fragment>
            <div className='productCard'>
                <div className={"checkbox"} id='delete-checkbox' onClick={async () => {
                    handleCheck()
                }}>
                    {checkInp ? <FaCheckSquare size={"15px"} /> : null}</div>
                <div className='productDetail'>
                    <p>{product_sku}</p>
                    <p>{product_name}</p>
                    <p>{product_price}.00$</p>
                    <p>{product_attributes}</p>
                </div>
            </div>
        </React.Fragment>
    )

}