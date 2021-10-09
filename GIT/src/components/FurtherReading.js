import React from 'react'
import Noticia from './Noticia'

const FurtherReading = () => {
    return (
        <div id="further-reading-div">
            <h1> Further reading</h1>
            <div id="noticia-wrapper">
                <Noticia className= "noticia" photo="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/NATO-coronavirus-large-500x350.jpg" date= "MON, MAR 30, 2020" title="Coronavirus and transatlantic security: Implications for defense planning" desarrollo="Once the West gains control over the coronavirus, NATO and its national defense establishments will have to conduct a hard-nosed assessment of the longer-term military implications and requirements that flow from the current reality—that pandemics can, within weeks, debilitate populations, sink economies, shutter borders, degrade military operations, and fragment unity among the closest of allies." book= "NEW ATLANTICIST BY " author="CHRISTOPHER SKALUBA AND IAN BRZEZINSKI" button1="Coronavirus" button2="Crisis Management"></Noticia>
                <Noticia className= "noticia" photo="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/NATO-diversity-large-500x350.jpg" date= "MON, MAR 9, 2020" title="The transatlantic relationship needs to reflect the Europe and United States of today" desarrollo="The bottom line is that to ensure the future health and strength of the relationship for the next seventy years, the discourse and voices in the transatlantic space need to properly reflect the actual politics and demographics of Europe and the United States of today" book= "DIVERSITY, EQUITY, AND INCLUSION BY " author= "TIM RIVERA"button1="NATO" button2="Resilience & Society"></Noticia>
                <Noticia className= "noticia" photo="https://www.atlanticcouncil.org/wp-content/uploads/2020/03/UK-Minister-of-Defence-1-2-large-500x350.jpg" date= "THE, MAR 5, 2020" title="UK remains committed to positive global role after Brexit, defence secretary says" desarrollo="“The security of Europe is vital to the United Kingdom’s security [and] that will not change because we have left the political union of the European Union,” UK Defence Secretary Ben Wallace said on March 5." book= "NEW ATLANTICIST BY " author="DAVID A. WEMER" button1="European Union" button2="NATO"></Noticia>
            </div>
        </div>
    )
}

export default FurtherReading
