import React, { Component } from 'react';
import classes from './dashboard.module.css';
 
import Navbar from './Navbar/Navbar';
import Home from './Dashboard_home/dashboard_home';
import Profile from './CandidateProfile/Profile';
import Footer from './Footer/Footer';



class dashboard extends Component {

state = {
    selected: 'Home'
}

onClickHandler = (event) => {
    this.setState({selected: event.target.value});
}


render() {

    let xyz = null;
    
    if (this.state.selected === 'Home')
    {
        xyz = (
            <Home/>
        );
    }
    else if(this.state.selected === 'Profile')
    {
        xyz = (
            <Profile />
        );
    }

    return (
        <div className={classes.dashboard}>
            <Navbar clicked={this.onClickHandler} />
            {xyz} 
            <Footer />
        </div>
);

}

}

export default dashboard;