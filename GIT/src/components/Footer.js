import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const Footer = (props) => {
    const navBarElements = props.navBarElements
    const listElements = navBarElements.map((navBarElement) =>
        <div> 
            <Router>
                <Link to= {`/${navBarElement}`} className= "barElements"> 
                {navBarElement}
                </Link>
                <Switch>
                <Route path={`/${navBarElement}`}>
                </Route>
                </Switch>
            </Router>
        </div>)
    const sideBarElements = props.sideBarElements
    const listSideBarElements = sideBarElements.map((sideBarElement) =>
        <div> 
            <Router>
                <Link to= {`/${sideBarElement}`} className= "sideBarElements"> 
                {sideBarElement}
                </Link>
                <Switch>
                <Route path={`/${sideBarElement}`}>
                </Route>
                </Switch>
            </Router>
        </div>)

        const lastBarElements = props.lastBarElements
        const listLastBarElements = lastBarElements.map((lastBarElement) =>
            <div> 
                <Router>
                    <Link to= {`/${lastBarElement}`} className= "lastBar"> 
                    {lastBarElement}
                    </Link>
                    <Switch>
                    <Route path={`/${lastBarElement}`}>
                    </Route>
                    </Switch>
                </Router>
            </div>)

    return (
        <div id="footer-wrapper">
            <div id="footer">
                <h1>Subscribe to our new Fast Thinking news alerts</h1>
                <p>Want to be the first to get up to speed on the meaning of big, breaking international developments? We have you covered! Sign up to receive rapid insight in your inbox from Atlantic Council experts on global events as they unfold.</p>
                <input id= "footer-input" placeholder="Enter your email"></input>
                <button id="footer-btn">SUSCRIBE</button>
            </div>
            <div className= "barContent">
                {listElements} 
            </div>
            <div className= "barContent">
                {listSideBarElements}
            </div>
            <div id="logo-div">
                <img id= "img" src="https://www.atlanticcouncil.org/wp-content/themes/atlantic-council/dist/images/Atlantic Council - White logotype.svg" onerror="this.src='https://www.atlanticcouncil.org/wp-content/themes/atlantic-council/dist/images/logo.png'"></img>
                <p>© 2020 Atlantic Council</p>
                <p>All rights reserved.</p>
            </div>
            <div className= "lastBarContent">
                {listLastBarElements}
            </div>
        </div>
    )
}

export default Footer
