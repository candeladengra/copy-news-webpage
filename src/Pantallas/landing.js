import React from 'react'
import Navbar from '../components/Navbar'
import Inicio from '../components/Inicio'
import Nota from '../components/Nota'
import Footer from '../components/Footer'
import FurtherReading from '../components/FurtherReading'

const Landing = () => {
  const navBarElements = ['ISSUES','REGIONS', 'INSIGHTS & IMPACT','PEOPLE', 'PROGRAMS', 'EVENTS']
  const sideBarElements = ['GET INVOLVED','SUPPORT THE COUNCIL', 'SUSCRIBE','ABOUT THE COUNCIL', 'MEDIA', 'CAREERS']
  const lastBarElements = ['Privacy policy', 'Cookie policy', 'Terms and conditions of use', 'Intellectual independence policy', 'Government funding review process', 'Policy on donor acceptance and disclosure', 'Photo credits']
  const filters = ['ISSUES', 'REGION', 'FOCUS']

    return (
      <div>
        <Navbar navBarElements= {navBarElements} filters={filters}/> 
        <Inicio sideBarElements = {sideBarElements}/>
        <Nota></Nota>
        <FurtherReading/>
        <Footer navBarElements= {navBarElements} sideBarElements = {sideBarElements} lastBarElements = {lastBarElements}></Footer>
      </div>
    );
  }
  
  export default Landing;