import React, { Component } from 'react';
import classes from './dashboard.module.css';
 
import Header1 from './Header1';
import Managejobs from './Managejobs';
import PostJobs from './PostJobs';
import Settings from './Settings'
import Footer1 from './Footer1';


class dashboard extends Component {

state = {
    selected: 'Home'
}

onClickHandler = (event) => {
    this.setState({selected: event.target.value});
}


render() {

    let xyz = null;
    
    if (this.state.selected === 'Managejobs')
    {
        xyz = (
            <Managejobs/>
        );
    }
    else if(this.state.selected === 'PostJobs')
    {
        xyz = (
            <PostJobs />
        );
    }
    else if(this.state.selected === 'Settings')
    {
        xyz = (
            <Settings />
        );
    }
    

    return (
        <div className={classes.dashboard}>
            <Header1 clicked={this.onClickHandler}  style={{marginTop:0}}/>
            {xyz}  

        </div>
);

}

}

export default dashboard;