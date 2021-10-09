import React from 'react'

const Noticia = (props) => {
    return (
        <div className="not-card">
            <img src={props.photo} className= "noticia-pic"></img>
            <div className= "not-date">{props.date}</div>
            <div className= "not-title"> <h1>{props.title}</h1></div>
            <div className="noticia-desarrollo"> {props.desarrollo} </div>
            <div className="noticia-author-div"> 
                <div className="book">{props.book}</div>
                <div className="book-author">{props.author}</div>
            </div>
            <div className="button-div">
                <button className ="not-btn">{props.button1}</button>
                <button className ="not-btn">{props.button2}</button>
            </div>
        </div>
    )
}

export default Noticia
