import {
    CALCULATOR_ITEMS_DOWNLOAD_START,
    CALCULATOR_ITEMS_DOWNLOAD_ERROR,
    CALCULATOR_ITEMS_DOWNLOAD_SUCCESS

} from '../types/index';


const initialState ={
    calculatorDescription: '',
    calculatorTitle: '',
    loading: false,
    error: false,

}

export default (state=initialState, action)=>{

    switch(action.type){

         case CALCULATOR_ITEMS_DOWNLOAD_START:
             return{
                 ...state,
                  loading: action.payload

             }
          
         case CALCULATOR_ITEMS_DOWNLOAD_SUCCESS:
             return {
                 ...state,
                 loading: false,
                calculatorTitle: action.payload.calculatorTitle,
                calculatorDescription: action.payload.calculatorDescription
             }

             case CALCULATOR_ITEMS_DOWNLOAD_ERROR:
                return{
                    ...state,
                    error:true
                }

          default:
              return state;
    }


}