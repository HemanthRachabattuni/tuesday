import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { Navbar} from 'react-bootstrap'; 

const Header1 = (props) => {

    return (
    <Navbar fixed="top" className={classes.navbar} style={{position:'absolute', top:0, marginLeft:260}}>
        <span className={classes.logo}>Macropace Technologies</span>
        <div className={classes.header}>
        <button onClick={props.clicked} className={classes.header_links} value="Settings" >My profile</button>
        <button onClick={props.clicked} className={classes.header_links} value="Managejobs" >My Jobs</button>
        <button onClick={props.clicked} className={classes.header_links} value="PostJobs" >Post Jobs</button>

            <Link to="/" className={classes.header_links}>Logout</Link>
        </div>
        
    </Navbar>
    );

}

export default Header1;