import {
    SLIDER_ITEMS_DOWNLOAD_SUCCESS,
    SLIDER_ITEMS_DOWNLOAD_START,
    SLIDER_ITEMS_DOWNLOAD_ERROR

} from '../types/index';


const initialState ={
    sliderReviews: [],
    sliderTitle: '',
    loading: false,
    error: false,

}

export default (state=initialState, action)=>{

    switch(action.type){

         case SLIDER_ITEMS_DOWNLOAD_START:
             return{
                 ...state,
                  loading: action.payload

             }
          
         case SLIDER_ITEMS_DOWNLOAD_SUCCESS:
             return {
                 ...state,
                 loading: false,
                sliderTitle: action.payload.sliderTitle,
                sliderReviews: action.payload.sliderReviews
             }
        case SLIDER_ITEMS_DOWNLOAD_ERROR:
           return{
               ...state,
               error:true
           }

          default:
              return state;
    }


}