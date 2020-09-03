import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import sliderReducer from './sliderReducer';
import calculatorReducer from './calculatorReducer';

export default combineReducers({
    menu: menuReducer,
    slider: sliderReducer,
    calculator: calculatorReducer
})
