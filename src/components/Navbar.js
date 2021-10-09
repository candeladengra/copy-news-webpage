import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Modal, Button, Box, Input} from '@mui/material';

const Navbar = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [areFiltersShowed, setAreFiltersShowed] = useState(false)

    const handleFilters = () => {
        setAreFiltersShowed(true)
    }

    const handleFiltersClose = () => {
        setAreFiltersShowed(false)
    }


    const handleOpen = () => {
        setIsModalOpen(true)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        height: 500,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        background: '#234c6a',
        p: 4,
      };

    const handleClose = () => {
        setIsModalOpen(false)
    }

    function reloadPage () {
        window.location.reload()}

    const navBarElements = props.navBarElements
    const listElements = navBarElements.map((navBarElement) =>
        <div className="barElements" onClick={() => window.location.assign("/"+navBarElement.name)}> 
            {navBarElement}
        </div>
    )

    const ariaLabel = { 'aria-label': 'description' };

    const filters = props.filters
    const listFilters = filters.map((filter) =>
        <button class="filter-btns"> 
            {filter}
        </button>)

    return (
        <div id = "navBar">
            <img onClick = {reloadPage} id = "logo" src="https://www.atlanticcouncil.org/wp-content/themes/atlantic-council/dist/images/Atlantic Council - White logotype.svg" onerror="this.src='https://www.atlanticcouncil.org/wp-content/themes/atlantic-council/dist/images/logo.png'"></img>
            <div id= "navBarContent">
            {listElements} 
            </div>
            <Button id= "lupita" type="button" onClick={handleOpen} data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i id= "lupitaicon" class="fas fa-search"></i></Button>
    
            <Modal 
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" id= "modalComponent"
            >
            <Box sx={style} id="modal-box">
                <div id="modal-div">
                    <Input id= "filled-search" placeholder={'🔎 Search Atlantic Council'} inputProps={ariaLabel} />
                    <div id= "btns-div">
                    <button onClick = {handleFilters} id= "filter-btn"> FILTER RESULTS  <i class="fas fa-caret-down"></i></button>
                    <button onClick = {handleClose} id= "hide-btn">HIDE</button>
                    </div>
                </div>
            </Box>
            </Modal>
            <Modal open={areFiltersShowed} onClose={handleFiltersClose} >
                <Box id="modal">
                    <div id="filter-div">
                    {listFilters}
                    </div>
                </Box>
            </Modal>

        </div>
    )
}

export default Navbar
