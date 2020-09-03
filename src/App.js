import React from 'react';
import Ejemplo from './components/BuildingPage';
import Header from './components/Header';
import Testimonial from './components/Testimonial';
import Configurator from './components/Configurator';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        
        <Header/>
        <Switch>
          <Route exact path='/' component={Ejemplo}/>
          <Route exact path='/page-1' component={Testimonial}/>
          <Route exact path='/page-2' component={Configurator}/>
         
          
          
        </Switch>

     
      </Provider>
    </Router>
    
  );
}

export default App;
