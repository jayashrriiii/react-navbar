

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import CreateAccount from "./components/pages/CreateAccount";
import "./App.css";


/*    Add navbar into main component and display respective pages   */


function App() 
{
  return (
              <div className="container">
                <Router>
                  <Navbar />         {/*   Nabvar   */}
                  <Switch>           {/*   Page   */}
                    <Route path="/" exact component={Home} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/create-account" exact component={CreateAccount} />
                  </Switch>
                </Router>
              </div>
         );
}



export default App;

