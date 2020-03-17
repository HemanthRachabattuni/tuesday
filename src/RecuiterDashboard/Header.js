import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { Navbar} from 'react-bootstrap'; 

const Header = (props) => {

    return (
    <Navbar fixed="top" className={classes.navbar}>
        <span className={classes.logo}>Macropace Technologies</span>
        <div className={classes.header}>
           
            <Link to="/" className={classes.header_links}>Logout</Link>
        </div>
        
    </Navbar>
    );

}

export default Header;