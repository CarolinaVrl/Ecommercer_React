import React, { useEffect } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getPurchases } from '../../store/slices/purchases.slice';

const Purchases = () => {
    const purchase = useSelector(state => state.purchase)
    const dispacth = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispacth(getPurchases())
    }, [])
    console.log(purchase)
    return (
        <div>

            <Container style={{ padding: 50 }}>
                <h1 className='purchase'>Compras</h1>

                <Table className='' style={{ width:'80%', margin: 'auto' }} striped>
                    {purchase.map(purchas => (
                        <thead key={purchas.id}>

                            <tr >
                                {/* <Link style={{width:'100%'}} to={`/products/${purchas.product?.id}`}> */}

                                    <th><img style={{ width: 100, height: 80, objectFit: 'contain' }} src={purchas.product?.images[1].url} alt="" /></th>
                                    <th>{purchas.product?.title}</th>
                                    <th> {purchas.createdAt.slice(0, 10)}</th>
                                    <th>
                                        {purchas.quantity}

                                    </th>
                                    <th> {`$${(purchas.product?.price) * (purchas.quantity)}`}</th>
                                {/* </Link> */}

                            </tr>


                        </thead>
                    ))}

                </Table>

                {/* 
                <Col lg={3}  >
                    <Card  }}>
                       <Card.Img variant="top" style={{ objectFit: 'contain', width: 180, height: 150 }} />
                        <Card.Body>
                            <Card.Title>a</Card.Title>
                            <Card.Text>


                            </Card.Text>
                            <Card.Text>

                            </Card.Text>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}

            </Container>

        </div>
    );
};

export default Purchases;