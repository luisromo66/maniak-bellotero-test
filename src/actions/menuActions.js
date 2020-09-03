import {
    MENU_ITEMS_DOWNLOAD_ERROR,
    MENU_ITEMS_DOWNLOAD_SUCCESS,
    MENU_ITEMS_DOWNLOAD_START

} from '../types/index';

import axiosClient from '../config/axios';

export function obtenerMenuItemsActions(){
    return async (dispatch)=>{
        dispatch(descargarMenuItems());

        try {
            const response = await axiosClient.get('/app.json');
            dispatch( descargaMenuItemsExitoso(response.data.menu.items));

            
        } catch (error) {
            dispatch(downloadMenuItemsError());
            
            
        }
    }
}

const descargarMenuItems = () => ({
    type: MENU_ITEMS_DOWNLOAD_START,
    payload: true
})

const downloadMenuItemsError =()=>({
    type: MENU_ITEMS_DOWNLOAD_ERROR,
    payload:true
})

const descargaMenuItemsExitoso = menuItems =>({
    type: MENU_ITEMS_DOWNLOAD_SUCCESS,
    payload: menuItems
})

