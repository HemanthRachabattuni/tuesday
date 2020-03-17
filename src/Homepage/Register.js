import React, { Component } from 'react';
// import { Input,Select } from 'antd';
import 'react-bootstrap';
import '../App.css';
import Location from '../pages/Location'
import Email from '../pages/Email';

// const { option } = Select;

export default class Register extends Component {
    render() {
        return (
            <div>
              
                    <text style={{ fontSize: 20, fontWeight: 700, color: 'black', marginLeft:20,marginTop:0,paddingBottom:20 ,fontFamily:'Quicksand',display:'flex', justifyContent:'flex-start'}}>Register for Jobs!!</text>
                    <div style={{ marginLeft: 100 }}>
                        <form action="#" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row" style={{display:'flex' , flexDirection:'row'}}>
                                        <div>
                                            <Email/>
                                        </div>
                                        <div style={{marginLeft:5}}>
                                            <Location/>
                                        </div>
                                      
                                        
                                            <div style={{marginLeft:10}}>                                       
                                            <button type="button" style={{ backgroundColor: "#f48628", color: "white", height: 50, width: 200, fontFamily:'Quicksand', fontSize:20 }}>Register</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                {/* </section> */}
            </div>
        )
    }
}
