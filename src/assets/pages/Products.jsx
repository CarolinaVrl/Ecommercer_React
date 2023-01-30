import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap';
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

    }, [])

    return (
        <div>
            <Container>
                <Row >
                    <Col lg={3}>

                        <DropdownButton id="dropdown-basic-button" title="Categorías"  >
                            {category.map(categor => (
                                <Dropdown.Item key={categor.id} onClick={() => { dispatch(getProductsFilterCategory(categor.id)) }}>{categor.name}</Dropdown.Item>
                            ))}
                        </DropdownButton>

                    </Col>
                    <Col lg={9}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            <Form.Control
                                placeholder="Product"
                                value={searchProduct}
                                onChange={e => setSearchProduct(e.target.value)}

                            />
                            <Button onClick={() => dispatch(filterProductForNameThunk(searchProduct))} variant="success" style={{background:'#f85555'}}><i className="fa-solid fa-magnifying-glass"></i></Button>
                        </InputGroup>
                        <Row xs={1} md={2} lg={3} className="g-4" style={{paddingBottom:50}}>
                            {products.map(prod => (
                                <Col>

                                    <Card style={{height:350, position:'relative', }} key={prod.id} onClick={() => navigate(`/products/${prod.id}`)}>
                                        <Card.Img variant="top" src={prod.images?.[0].url} style={{width:200, height:170, objectFit:'contain', margin:'auto', paddingTop:20}} />
                                        <Card.Body>
                                            <Card.Title>{prod.title}</Card.Title>
                                            <Card.Text>

                                            </Card.Text>
                                            <Button variant="danger" style={{background:'#f85555',borderRadius:'50%',width:50, height:50, position:'absolute', bottom:40, right:35}}><i className="fa-solid fa-cart-shopping"></i></Button>{' '}
                                        </Card.Body>
                                    </Card>
                                </Col>

                            ))}
                        </Row>
                    </Col>

                </Row>
                <Row>

                </Row>



            </Container>

        </div >
    );
};

export default Products;