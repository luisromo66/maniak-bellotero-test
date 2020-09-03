import {
    SLIDER_ITEMS_DOWNLOAD_START,
    SLIDER_ITEMS_DOWNLOAD_ERROR,
    SLIDER_ITEMS_DOWNLOAD_SUCCESS

} from '../types/index';

import axiosClient from '../config/axios';

export function getSliderItemsActions(){
    return async (dispatch)=>{
        dispatch(downloadSliderItems());

        try {
            const response = await axiosClient.get('/page1.json');

            const responseApi = response.data.slider;
         
            const {reviews, title} = responseApi;
            
            dispatch( downloadSliderItemsSuccessful(reviews, title));

            
        } catch (error) {
            dispatch(downloadSliderItemsError());
            
        }
    }
}

const downloadSliderItems = () => ({
    type: SLIDER_ITEMS_DOWNLOAD_START,
    payload: true
})

const downloadSliderItemsSuccessful = (sliderReviews, sliderTitle) =>({
    type: SLIDER_ITEMS_DOWNLOAD_SUCCESS,
    payload: {sliderReviews, sliderTitle}, 
})

const downloadSliderItemsError =()=>({
    type: SLIDER_ITEMS_DOWNLOAD_ERROR,
    payload:true
})

