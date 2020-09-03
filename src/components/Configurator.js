import React, {useState, useEffect} from 'react';
import TitleRectangle from './ui/TitleRectangle';
import Slider from "@material-ui/core/Slider";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector, useDispatch} from 'react-redux';
import {getCalculatorItemsActions} from '../actions/calculatorActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

const Configurator = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [valueSpending, setValueSpending] = useState(20);
    const [valueEmployees, setValueEmployees] = useState(2);

    const handleSliderSpendingChange = (event, newValue) => {
        setValueSpending(newValue);
      };

      const handleSliderEmployeesChange = (event, newValue) => {
        setValueEmployees(newValue);
      };
    
    
    
     
    
    useEffect(()=>{

        const downloadCalculatorItemsActions = ()=> dispatch(getCalculatorItemsActions());
        downloadCalculatorItemsActions();

    },[])

    const calculatorTitle = useSelector( state => state.calculator.calculatorTitle );
    const calculatorDescription = useSelector( state => state.calculator.calculatorDescription );
    const calculatorLoading = useSelector( state => state.calculator.loading );

    return ( 
        <>  

        <div className="rowly">
        <div className="columny-left">
        <TitleRectangle text={calculatorTitle}/>
        <p className='With-Belloteroio-yo'>
            {calculatorDescription}
        </p>
        </div>

         <div className='calculator'>
        <div className="columny-montly-ingredient">
             
            <div className='columny-base'>
            <p className='Monthly-ingredient-s'>Monthly ingredient spending</p>

            <div className='Rectangle-Montly'>
                <div className='Rectangle-Montly-money'>
                   $
                </div>

                <div className='Rectangle-Montly-money-value'>
                  {valueSpending}
                </div>
                

            </div>

            </div>
            <div>
                <Slider
            value={typeof valueSpending === "number" ? valueSpending : 0}
            onChange={handleSliderSpendingChange}
            aria-labelledby="input-slider"
            max={100}
            min={10}
          />
                </div>
        </div>

        <div className="columny">
             
             <div className='columny-base'>
             <p className='Monthly-ingredient-s'>Full-time employees that process invoices</p>
 
             <div className='Rectangle-Montly-ingredient'>
              
 
                 <div className='Rectangle-Montly-ingredient-money-value'>
                   {valueEmployees}
                 </div>
                 
 
             </div>
 
             </div>
             <div>
                 <Slider
             value={typeof valueEmployees === "number" ? valueEmployees : 0}
             onChange={handleSliderEmployeesChange}
             aria-labelledby="input-slider"
             max={10}
             min={0}
           />
                 </div>
         </div>
         <div className='result-contents'>
             <div className='cost-food-container'>

                 <div className='cost-food-container-2'>
             <div className='cost-food-money-simbol'>
                 $

             </div>

             <div className='cost-food-number'>
             
                 {(valueSpending*.3).toFixed(3)}

             </div>

             </div>


             <div className='cost-food-text'>
                 Estimated cost food savings
                 </div>

             

             
             </div>
         

                        <div className='cost-food-container'>

                <div className='cost-food-container-2'>
                <div className='cost-food-money-simbol'>
                $

                </div>

                <div className='cost-food-number'>

                {((valueEmployees*1337)+(valueSpending*.3)).toFixed(0)}

                </div>

                </div>


                <div className='cost-food-text'>
                Your estimated annual savings
                </div>




                
                </div>
                </div>
         </div>
         <Backdrop className={classes.backdrop} 
             open={calculatorLoading} >
        <CircularProgress color="inherit" />
      </Backdrop>

        </div>


      
        </>

     );
}
 
export default Configurator;