import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
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

    // purchased paginated

    const [forPage, setForPage] = useState(10)
    const [page, setPage] = useState(1)
    const last = forPage * page
    const first = last - forPage
    const paginedPurchases = purchase.slice(first,last)
    const allpages = Math.ceil(purchase.length/forPage)
    const allnumber = []
    for(let i=1;i<=allpages;i++){
        allnumber.push(i)
    }
   
   
    return (
        <div>

            <Container style={{ padding: 50 }}>
                <h1 className='purchase'>Compras</h1>

                <Table className='' style={{ width:'80%', margin: 'auto' }} striped>
                    {paginedPurchases.map(purchas => (
                        <thead key={purchas.id}>

                            <tr >
                                {/* <Link style={{width:'100%'}} to={`/products/${purchas.product?.id}`}> */}

                                    <th><img style={{ width: 100, height: 80, objectFit: 'contain' }} src={purchas.product?.images[1].url} alt="" /></th>
                                    <th>{purchas.product?.title}</th>
                                    <th> {purchas.createdAt?.slice(0, 10)}</th>
                                    <th>
                                        {purchas.quantity}

                                    </th>
                                    <th> {`$${(purchas.product?.price) * (purchas.quantity)}`}</th>
                                {/* </Link> */}

                            </tr>


                        </thead>
                    ))}

                </Table>

                {allnumber.map(number=>(
                    <Button onClick={()=>setPage(number)} key={number}>{number}</Button>
                ))}

             

            </Container>

        </div>
    );
};

export default Purchases;