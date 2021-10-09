import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const Inicio = (props) => {

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

    return (
        <div id= "contenedor">
            <div id= "mainBar"> 
                <div id="date-box">
                TUE, APR 7, 2020
                </div>
                <h1 id="title">New British carriers can transform Europe’s NATO naval capabilities</h1>
                <div id= "autor">
                    <p id="text">New Atlanticist </p>
                    <p id= "autor-name"> by Michael John Williams</p>
                </div>
                <div id="buttons">
                    <button className = "boton">Maritime Security</button>
                    <button className = "boton">NATO</button>
                    <button className = "boton">United Kingdom</button>
                </div>
            </div>
            <div id= "sideBar">
                {listSideBarElements} 
            </div>
        </div>
    )
}

export default Inicio
