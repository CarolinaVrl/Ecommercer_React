import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postProductsThunk } from '../../store/slices/cart.slice';
import { getProductsFilterCategory } from '../../store/slices/products.slice';

const ProductsDetails = () => {
    const { id } = useParams()
    const [prod, setProd] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const productsSimilar = useSelector(state => state.products)

    const [quantify, setQuantify] = useState(1)
    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProd(res.data)
                dispatch(getProductsFilterCategory(res.data.categoryId))
            })

    }, [id])
    const quantifyInCart = (id) => {
        const cart = {
            quantity: quantify,
            productId: prod.id

        }
        dispatch(postProductsThunk(cart))
       
       

    }


    return (

        <Container>

            <h6>{prod.title}</h6>
            <Container>
                <Row >
                    <Col lg={6}>



                        <Carousel  >
                            {prod.images?.map(imag => (
                                <Carousel.Item key={imag.id} >
                                    <img className="d-block m-auto" style={{ width: 200, height: 320, objectFit: 'contain' }} src={imag.url} alt="" />


                                </Carousel.Item>
                            ))}

                        </Carousel>
                    </Col>


                    <Col lg={6}>
                        <h3 className='text-muted' style={{ fontSize: 16 }}>{prod.brand}</h3>
                        <h1 className='text-dark' style={{ fontSize: 24, paddingLeft: 10 }}>{` ${prod.title}`}</h1>



                        <p className='text-dark' style={{ fontSize: 13, fontFamily: 'sans-serif' }}>{prod.description}</p>
                        <Row>
                            <Col>
                                <h2 style={{ fontSize: 13 }} className='text-muted'>Price</h2>
                                <h2 style={{ fontSize: 18 }} >${prod.price}</h2></Col>
                            <Col>
                                <h2 style={{ fontSize: 13 }} className='text-muted'>Cantidad</h2>
                                <div className='d-flex'>
                                    <button className="btn btn-secondary d-flex justify-content-center align-items-center" style={{ height: 25 }} onClick={() => setQuantify((quantify) + 1)} >+</button>
                                    <h2 type="number" style={{ fontSize: 18, width: 50, textAlign: 'center' }} className='text-dark' value={quantify} >{quantify}</h2>
                                    <button className="btn btn-secondary d-flex justify-content-center align-items-center" style={{ height: 25 }} onClick={() => setQuantify((quantify) - 1)} o disabled={quantify === 1}>-</button>
                                </div></Col>
                        </Row>



                        <Button variant="danger" className="btn btn-secondary d-flex justify-content-center align-items-center" onClick={quantifyInCart} style={{ background: '#f85555', width: '90%', height: 50, margin: 'auto' }}>Añadir al Carro <i className="fa-solid fa-cart-shopping"></i></Button>{' '}
                    </Col>
                </Row>
            </Container>


            <Container>
                <h2>Productos Similares</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {productsSimilar.map(prod => (
                        <Col key={prod.id} >
                            <Card style={{ width: 300, height: 380 }} onClick={() => { navigate(`/products/${prod.id}`) }}>
                                <Card.Img style={{ width: 200, height: 150, paddingTop: 10, margin: 'auto' }} src={prod.images[0].url} variant="top" />
                                <Card.Body>
                                    <Card.Text className='text-secondary' style={{ fontWeight: 'bold' }}>{prod.brand}</Card.Text>
                                    <Card.Title>{prod.title}</Card.Title>

                                    <Card.Text className='text-secondary' style={{ fontWeight: 'bold' }}>Price


                                    </Card.Text>
                                    <Card.Title>${prod.price}</Card.Title>
                                    <Button variant="danger"  style={{ background: '#f85555', borderRadius: '50%', width: 50, height: 50, position: 'absolute', bottom: 40, right: 35 }}><i className="fa-solid fa-cart-shopping"></i></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>


    );
};

export default ProductsDetails;