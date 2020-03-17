import React from 'react';
import classes from './dashboard_home.module.css';

import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSave, faFlag, faSuitcase, faSearch, faMapPin } from '@fortawesome/free-solid-svg-icons';


const dash_home = () => {

return(
<div className={classes.content}>
    <Row>

    <Col md={9} className={classes.top_block}>
    {/* style={{marginTop: '20px', marginLeft: '20px'}} */}
        {/* <Row > */}
            <Col md={12}>
            <span className={classes.input_border}>
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <input className={classes.search_box_input1} placeholder="Search a job"/>
            </span>
            <span className={classes.input_border}>
                <span><FontAwesomeIcon icon={faMapPin} /></span>
                <input className={classes.search_box_input1} placeholder="All cities"/>
            </span>
            <span className={classes.input_border}>
                <span><FontAwesomeIcon icon={faSuitcase} /></span>
                <input className={classes.search_box_input1} placeholder="Experience"/>
            </span>
            <Button size="lg">Search</Button>
            </Col>
            {/* <Col md={2}>
                    
            </Col> */}
        {/* </Row>          */}
    </Col>
    
    {/* <Col md={0} className={classes.vl}></Col> */}
    
    <Col md={3} style={{marginTop: '40px', marginBottom: '20px'}}>
        <span className={classes.content_button} style={{marginBottom: '10px'}}>
            <span style={{color: "blue", marginRight: "8px"}}><FontAwesomeIcon icon={faCheckCircle} /></span>
            Jobs Applied  
            <span style={{color: "blue", marginLeft: "8px"}}><strong>21</strong></span>
        </span>
        <span className={classes.content_button}>
            <span style={{color: "orange", marginRight: "8px"}}><FontAwesomeIcon icon={faSave} /></span>
            Saved Jobsee  
            <span style={{color: "orange", marginLeft: "8px"}}><strong>11</strong></span>
        </span>
        {/* <span className={classes.content_button}>
            <span style={{color: "brown", marginRight: "8px"}}><FontAwesomeIcon icon={faFlag} /></span>
            Job Offers  
            <span style={{color: "brown", marginLeft: "8px"}}><strong>13</strong></span>
        </span>  */}
    {/* </div> */}
    {/* <Row>
        
    </Row>
    <Row>
        
    </Row>
    <Row>
        
    </Row>   
         */}
    </Col>
    </Row>

    <div className={classes.gopro}>
        <p>See jobs where you'd be a top applicant</p>
        <Button variant="light" size="lg">Go Pro</Button>
    </div>
    <hr></hr>
    
    <div className={classes.abc}>
        <div className={classes.content_text}>
            <strong>Job Title</strong> : Data Engineer<br/>
            <strong>Experience</strong> : 0-1 Years<br/>
            <strong>Salary</strong> : Not Disclosed<br/>
            <strong>Description</strong> : Core Compete is looking for a Data Engineer with data background.... <br/>
            <strong>Location</strong> : Hyderabad<br/><br/>
            <Button variant="info">See More</Button>    <Button variant="success">Apply</Button>
        </div>
        <div className={classes.content_text}>

            <strong>Job Title</strong> : Cloud Engineer Architect<br/>
            <strong>Experience</strong> : 5-7 Years<br/>
            <strong>Salary</strong> : Not Disclosed<br/>
            <strong>Description</strong> : Bachelor / masters degree in Computer Science, Computer Engineering, or… <br/>
            <strong>Location</strong> : Bangalore<br/><br/>
            <Button variant="info">See More</Button>    <Button variant="success">Apply</Button>
            {/* <button type="button" class="btn btn-primary">See More</button> <button type="button" class="btn btn-success">Apply</button> */}
            
        </div>
        <div className={classes.content_text}>
            
            <strong>Job Title</strong> : Project Manager<br/>
            <strong>Experience</strong> : 10-12 Years<br/>
            <strong>Salary</strong> : Not Disclosed<br/>
            <strong>Job Description</strong> : Job duties and Responsibilities defining and validating....<br/>
            <strong>Job Location</strong> : Pune<br/><br/>
            <button type="button" class="btn btn-primary">See More</button> <button type="button" class="btn btn-success">Apply</button>
            
        </div>
        <div className={classes.content_text}>
            
            <strong>Job Title</strong> : Project Manager<br/>
            <strong>Experience</strong> : 10-12 Years<br/>
            <strong>Salary</strong> : Not Disclosed<br/>
            <strong>Job Description</strong> : Job duties and Responsibilities defining and validating....<br/>
            <strong>Job Location</strong> : Pune<br/><br/>
            <button type="button" class="btn btn-primary">See More</button> <button type="button" class="btn btn-success">Apply</button>
            
        </div>
    </div>
</div>
);
}

export default dash_home;