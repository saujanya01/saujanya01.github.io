import React from "react";
import Navbar from "./navbar-component/Navbar";
import "./css/navbar.css"
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Banner}/>
                <Route path="/projects" component={Projects}/>
                {/* <Route path="/contact" component={Contact}/> */}
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;
