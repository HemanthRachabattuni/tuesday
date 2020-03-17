import React, { Component } from "react";
import Slider from "react-slick";
import { Layout, } from 'antd';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", fontSize:24 , }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , }}
      onClick={onClick}
    />
  );
}

export default class Slider1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
          <Layout   style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                       <div   className='menu-item' >
                                        <div   style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 ,}}><u>UX/UI</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Angular/ReactJS</text>

                                        </div>
                                        </div>

                                    </Layout>
          </div>
          <div>
          <Layout     style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div    className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Semiconductor</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40 ,paddingBottom:65}}>VLSI</text>

                                        </div>
                                    </Layout>
          </div>
          <div>
          <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div  className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Embedded</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Automotive</text>

                                        </div>
                                    </Layout>
          </div>
          <div>
          <Layout  style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0,  }}><u>Java/J2EE</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>C# .Net</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 }}>Oracle</text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 0 , paddingBottom:50}}>DBA</text>



                                        </div>
                                    </Layout>
          </div>
          <div>
          <Layout   style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Automation</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40,paddingBottom:65 }}>Python</text>

                                        </div>
                                    </Layout>
          </div>
          <div>
          <Layout    style={{ backgroundColor: '#a7c0cd', height: 200, width: 200, borderRadius: 25, marginTop: 20, marginLeft: 50 }}>
                                        <div   className='menu-item' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <text style={{ color: 'black', fontSize: 24, fontWeight: 600, marginLeft: 0 }}><u>Embedded</u></text>
                                            <text style={{ color: '#f5f5f5', fontSize: 20, marginLeft: 0, marginTop: 40 ,paddingBottom:65}}>Automotive</text>

                                        </div>
                                    </Layout>
          </div>
        </Slider>
      </div>
    );
  }
}