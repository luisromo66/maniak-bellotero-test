import {
   CALCULATOR_ITEMS_DOWNLOAD_ERROR,
   CALCULATOR_ITEMS_DOWNLOAD_START,
   CALCULATOR_ITEMS_DOWNLOAD_SUCCESS

} from '../types/index';

import axiosClient from '../config/axios';

export function getCalculatorItemsActions(){
    return async (dispatch)=>{
        dispatch(downloadCalculatorItems());

        try {
            const response = await axiosClient.get('/page2.json');

            const responseApi = response.data.calculator;
         
            const {description, title} = responseApi;
            
            dispatch( downloadCalculatorItemsSuccessful(description, title));

            
        } catch (error) {
            dispatch(downloadCalculatorItemsError());
            
            
        }
    }
}

const downloadCalculatorItems = () => ({
    type: CALCULATOR_ITEMS_DOWNLOAD_START,
    payload: true
})

const downloadCalculatorItemsSuccessful = (calculatorDescription, calculatorTitle) =>({
    type: CALCULATOR_ITEMS_DOWNLOAD_SUCCESS,
    payload: {calculatorDescription, calculatorTitle}, 
})

const downloadCalculatorItemsError =()=>({
    type: CALCULATOR_ITEMS_DOWNLOAD_ERROR,
    payload:true
})

