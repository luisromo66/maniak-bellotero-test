import React,{useState, useEffect} from 'react';
import TitleRectangle from './ui/TitleRectangle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector, useDispatch} from 'react-redux';
import {getSliderItemsActions} from '../actions/sliderActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));



const Testimonial = () => {
     
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(()=>{

        const downloadSliderItemsActions = ()=> dispatch(getSliderItemsActions());
        downloadSliderItemsActions();

    },[])

    const sliderTitle = useSelector( state => state.slider.sliderTitle );
    const sliderReviews = useSelector( state => state.slider.sliderReviews );
    const sliderLoading = useSelector( state => state.slider.loading );


    const [ selector, setSelector] = useState(0);

    const handleNext = () => {
        setSelector(1);

      };
    
      const handleBack = () => {
        setSelector(0);
      };

    return (
        <>
      
        {/** 1 */}

      
        
        <div className="columny-left-testimonial">
            <TitleRectangle className="lfetit" text={sliderTitle}/>
        </div>

        
{/** */}
        
        <div className="rowly-grey">
          <div className='testimonial-reference'>
            {sliderReviews.map((data, index)=>(
               index === selector &&
                <>
                <div className="columny-right-testimonial" >
                <p  className='Pete-Zahut'>{data.name}</p>
            <p className='Chef-Maniak'>{data.position}</p>
                            </div> 
            
        <div className="columny">
        <p className='Its-funny-what-mem'>
          {data.comment}
        </p>
    </div>
    </>

))}
</div>
    <div className="rowly-testimonial">
            <div className='Rectangle-Copy-6'>
                <div className='number-slide'>{`${selector+1}/${sliderReviews.length}`}</div>
            </div>

            <button className='Rectangle-Arrow-left' onClick={handleBack}>
                {'↑'}
            </button>
            <button className='Rectangle-Arrow-right' onClick={handleNext}>
            {'↑'}
            </button>
            
        </div>

    <Backdrop className={classes.backdrop} 
             open={sliderLoading} >
        <CircularProgress color="inherit" />
      </Backdrop>
        
</div>
        


        </>
      );
}
 
export default Testimonial;