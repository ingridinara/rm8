
import React, { Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../App';
import Welcome from './Welcome'

 
class Enrutador extends Component{

    render(){
        return <div>

          <Router>
      
          <Link to="/welcome">Welcome</Link>
          <br/>
          <Link to="/app">APP</Link>
          
          <Route path="/app" render={() => {
           return  <div>
              <App/>
           </div>
          }}>
          </Route>

          <Route path="/welcome" component={Welcome} >
          </Route>
          </Router>
          </div>
      }
      }
      
export default Enrutador;