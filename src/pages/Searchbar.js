import React, { Component } from 'react';
// import { Input,Select } from 'antd';
import Location from './Location';
import 'react-bootstrap';
import '../App.css';
import Skills from './Skills';
import Experience from './Experience';

// const { option } = Select;

export default class Searchbar extends Component {
    render() {
        return (
            <div>
                {/* <section
                    className="search-sec" style={{ paddingTop: 50 }}
                > */}
                    <text style={{ fontSize: 20, fontWeight: 700, color: 'black', marginLeft:20,marginTop:0,paddingBottom:20 ,fontFamily:'Quicksand',display:'flex', justifyContent:'flex-start'}}>Hire your Job!!</text>
                    <div style={{ marginLeft: 100 }}>
                        <form action="#" method="post" novalidate="novalidate">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row" style={{display:'flex' , flexDirection:'row'}}>
                                        <div>
                                            <Skills/>
                                        </div>
                                        <div style={{marginLeft:5}}>
                                            <Location/>
                                        </div>
                                        <div   style={{marginLeft:5 }}>
                                            <Experience/>
                                            
                                        </div>

                                        
                                            <div style={{marginLeft:10}}>                                       
                                            <button type="button" style={{ backgroundColor: "#f48628", color: "white", height: 50, width: 200, fontFamily:'Quicksand', fontSize:20 }}>Search</button>
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
