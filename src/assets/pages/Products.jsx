import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { filterProductForNameThunk, getProductsFilterCategory, getProductsThunk } from '../../store/slices/products.slice';

const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const products = useSelector(state => state.products)
    const [category, setCategory] = useState([])
    const [searchProduct, setSearchProduct] = useState('')
    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategory(res.data))
        console.log(category)
    }, [])
  
    return (
        <div>
            <h1>hi</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control
                    placeholder="Product"
                    value={searchProduct}
                    onChange={e=>setSearchProduct(e.target.value)}
                 
                />
                 <Button onClick={()=>dispatch(filterProductForNameThunk(searchProduct))} variant="success">Success</Button>
            </InputGroup>

            <ul>{category.map(categor => (
                <li key={categor.id} onClick={() => { dispatch(getProductsFilterCategory(categor.id)) }} >{categor.name}</li>
            ))}</ul>
            {products.map(prod => (
                <div key={prod.id} onClick={() => navigate(`/products/${prod.id}`)}>
                    <h2>{prod.title}</h2>
                    <img src={prod.images?.[1].url} alt="" />
                </div>
            ))}

        </div>
    );
};

export default Products;