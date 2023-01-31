import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../../store/slices/purchases.slice';

const Purchases = () => {
    const purchase = useSelector(state => state.purchase)
    const dispacth = useDispatch()
    useEffect(()=>{
        dispacth(getPurchases())
    },[])
    console.log(purchase)
    return (
        <div>
            <h1>purchases</h1>
            
        </div>
    );
};

export default Purchases;