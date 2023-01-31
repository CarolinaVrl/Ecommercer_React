import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState: [],
    reducers: {
        setPurchase:(state,action)=>{
            const purchase = action.payload
            return purchase
        }

    }
})

export const getPurchases = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
        .then((res) => dispatch(setPurchase(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
