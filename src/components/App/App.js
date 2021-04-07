import React from 'react';
import '../../App.css';
import routes from '../../routes';
import Header from '../global/Header';
import { Switch, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <div>
            
            <Header />
            <Switch>
                { routes.map( route => <Route key={ route.path } { ...route } /> ) }
            </Switch>
        </div>
    );
  }
}



export default App;
