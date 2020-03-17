import React, { Component } from 'react';
import 'react-component-slider'
import './Slider.css';
import Slider1 from './Slider1';


const styles = {
    textAlign: "center",
    paddingTop: "50px"
  };
export default class Slider extends Component {
    render() {
        return (
            <div style={styles}>
            <Slider1 />
          </div>
        )
    }
}
