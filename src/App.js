import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Navbar from './components/Navbar';
import Home from './pages/Home';



const Layout = props => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container main-container">
        {props.children}
      </div>
    </>
  )
}

function App() {
  return (
    <>    
      <Router>       
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home/>
            </Layout>
          </Route>
          <Route path="/gallery">
            <Layout>
              
            </Layout>
          </Route>
        </Switch>
      </Router>    
  </>
  );
}

export default App;
