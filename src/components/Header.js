import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
  
import bellotero from '../img/bellotero.png';
import bellotero2x from '../img/bellotero@2x.png';
import bellotero3x from '../img/bellotero@3x.png';

import {useSelector, useDispatch} from 'react-redux';
import {obtenerMenuItemsActions} from '../actions/menuActions';




const Header = () => {
     
    const dispatch = useDispatch();

    useEffect(()=>{

        const cargarMenuItems = ()=> dispatch(obtenerMenuItemsActions());
        cargarMenuItems();

    },[])

    const menuItems = useSelector( state => state.menu.menuItems);

 

    return (  
        
        <header  className='Rectangle'>
            
        <nav>

                      <div className="nav-cont">
                      <div>
                          <Link to="/">
                        <img src={bellotero}
                        srcSet={bellotero2x, bellotero3x}
                        className="bellotero"
                        alt="Bellotero img"
                        />
                        </Link>
                        </div>
                      <ul className='nav-bolero '>
                      <li ><Link to="/">Home</Link></li>
                          {menuItems.map((data, index)=>(
                              <li key={index}><Link to={`/${data.route}`}>{data.text}</Link></li>
                          ))}
                           
                      </ul>
                      </div>
    
        </nav>
     </header>

    );
}
 
export default Header;