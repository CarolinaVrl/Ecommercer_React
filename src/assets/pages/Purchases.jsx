import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../../store/slices/purchases.slice';

const Purchases = () => {
    const purchase = useSelector(state => state.purchase)
    const dispacth = useDispatch()

    useEffect(() => {
        dispacth(getPurchases())
    }, [])
    console.log(purchase)
    return (
        <div>
            <Container style={{ padding: 50 }}>
                <Row xs={1} md={2} lg={12} className="g-4">
                    {purchase.map(purchas => (


                        <Col lg={3} key={purchas.id} >
                            <Card style={{ width: 200,height:400, padding: 10, margin: 'auto' }}>
                                <Card.Img variant="top" style={{objectFit:'contain', width:180, height:150}} src={purchas.product.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{purchas.product.title}a</Card.Title>
                                    <Card.Text>
                                        {purchas.createdAt.slice(0, 10)}

                                    </Card.Text>
                                    <Card.Text>
                                        {purchas.quantity}
                                    </Card.Text>
                                    <Card.Text>
                                        {`$${purchas.product.price}`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>

        </div>
    );
};

export default Purchases;