import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { Navbar} from 'react-bootstrap'; 

const navbar = (props) => {

    return (
    <Navbar fixed="top" className={classes.navbar}>
        <span className={classes.logo}>Macropace Technologies</span>
        <div className={classes.header}>
            <button onClick={props.clicked} className={classes.header_links} value="Home" >Home</button>
            <button onClick={props.clicked} className={classes.header_links} value="Profile" >Profile</button>
            <Link to="/" className={classes.header_links}>Logout</Link>
        </div>
        
    </Navbar>
    );

}

export default navbar;