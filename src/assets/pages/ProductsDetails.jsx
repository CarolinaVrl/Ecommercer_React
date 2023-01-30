import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsFilterCategory } from '../../store/slices/products.slice';

const ProductsDetails = () => {
    const {id} = useParams()
    const [prod, setProd] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productsSimilar = useSelector(state=> state.products)
    useEffect(()=>{
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
        .then(res=>{setProd(res.data)
        dispatch(getProductsFilterCategory(res.data.categoryId))})
        
    },[id])
    return (
        <div>
            <h1>{prod.title}</h1>
            <p>{prod.images?.map(imag=>(
                <img key={imag.id} src={imag.url} style={{width:`150px`}} alt="" />


            ))}</p>
            <h3>{prod.brand}</h3>
            {productsSimilar.map(prod=>(
                <ul key={prod.id} onClick={()=>{navigate(`/products/${prod.id   }`)}}>
                    <li>{prod.title}</li>
                </ul>
            ))}
     
            
        </div>
    );
};

export default ProductsDetails;