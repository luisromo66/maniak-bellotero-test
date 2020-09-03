import {
    MENU_ITEMS_DOWNLOAD_ERROR,
    MENU_ITEMS_DOWNLOAD_START,
    MENU_ITEMS_DOWNLOAD_SUCCESS

} from '../types/index';


const initialState ={
    menuItems: [],
    loading: false,
    error: false,

}

export default (state=initialState, action)=>{

    switch(action.type){

         case MENU_ITEMS_DOWNLOAD_START:
             return{
                 ...state,
                  loading: action.payload

             }
          
         case MENU_ITEMS_DOWNLOAD_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 menuItems: action.payload
             }
         case MENU_ITEMS_DOWNLOAD_ERROR:
                return{
                    ...state,
                    error:true
                }

          default:
              return state;
    }


}