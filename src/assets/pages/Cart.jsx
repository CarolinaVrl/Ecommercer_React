import React, { useEffect } from 'react';
import { Button, Offcanvas, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  getcarsThunk } from "../../store/slices/cart.slice";
import { addPurchasesThunk } from '../../store/slices/purchases.slice';


const Cart = ({ show, handleClose }) => {
    const carti = useSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcarsThunk())
    }, [])



    const checkout = () => {


        dispatch(addPurchasesThunk())

    }

    const deleted = ()=>{
        alert('no me elimines :c')
    }
   
    const total =(carti.map(cart=>parseInt(cart.product?.price * cart.quantity)))
    const numberSum = total.reduce((first,second)=>first+second,0)
    console.log(carti)
    

    return (
        <div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table striped>

                        <thead>
                            {carti.map(cart =>
                                <tr key={cart.id}>
                                    <th><img style={{ width: 50, height: 50 }} src={cart.product?.images[0].url} alt="" /> </th>
                                    <th>{cart.product?.title}</th>
                                    <th>{cart.quantity}</th>
                                    <th>{((cart.product?.price) * (cart.quantity))}</th>
                                    
                                    <Button  variant="outline-danger"><i className="fa-solid fa-trash-can"></i></Button>{' '}

                                </tr>
                            )}
                        </thead>





                    </Table>

                    <h2>Total <span>${numberSum}</span></h2>

                    <Button variant="danger" onClick={() => checkout()} style={{ background: '#f85555', position: 'absolute', bottom: 10, width: 350, height: 50 }}>Comprar</Button>{' '}


                </Offcanvas.Body>
            </Offcanvas>



        </div>
    );
};

export default Cart;