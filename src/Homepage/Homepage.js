import React, { Component } from 'react';
import { Layout, Menu, Divider, Icon } from 'antd';
import Searchbar from '../pages/Searchbar';
import './dashboard.css'
import Register from './Register'
import Typical from 'react-typical';
import Recruter from '../pages/Recruter';
import Slider from '../pages/Slider/Slider';
import Jobseeker from '../pages/Jobseeker';
import { SocialIcon } from 'react-social-icons';
import Footer1 from '../RecuiterDashboard/Footer1';
import Slider1 from '../pages/Slider/Slider1';






// background image
// import Background from '../assets/1.jpg';


const { Header, Content, Footer } = Layout;
export default class Homepage extends Component {
    render() {
        return (
            <div style={{fontFamily:'Quicksand'}} >
                <Layout >
                    <Header

                        style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row',fontFamily:'Quicksand' , width:'100%' }}>
                        <div style={{display:'flex', flexDirection:'row'}}>
                        <text style={{ color: '#fc3909', fontWeight: 600, fontSize: 25 }}>Macropace Technologies</text>
                        <div style={{marginLeft:700}}>
                        <Recruter />
                        </div>
                        <div  style={{marginLeft:5,}}>
                        <Jobseeker/>
                        </div>
                        </div>

                    </Header>
                    <Content 
                    //  style={{ backgroundImage: `url(${Background})`, backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", height:"100%"}}
                    >
                        
                        <div style={{
                            marginTop: 25,marginBottom:25, marginLeft:200
                        }}>
                            <Searchbar />
                            
                        </div>
                        <div style={{marginLeft:20,marginTop:0,marginBottom:50, display:'flex', justifyContent:'flex-start', fontFamily:'Quicksand'}}>
    <span className="h1"> Trending Jobs in{' '} 
            <Typical className="typical"
            loop={Infinity}
            wrapper='b'
            steps={[
              'Arugumented reality',
              1000,
              'Data Analytics',
              1000,
              'Android Developer',
              1000,
              'Blockchain Engineer',
              1000,
              'Java Developer',
              1000

            ]}

            />
            !
            
              </span>
              </div>
                        <div>
                            <section 
                             style={{ backgroundColor: "#cfd8dc", height: 325, width: '90%', marginLeft: 75,marginTop:0, borderRadius: 25, paddingRight:50,  }}>
                                    <Slider/>
                            </section>
                        </div>
                        <br/>
                        <div style={{
                            marginTop: 25,marginBottom:25, marginLeft:200
                        }}>

                          <Register/>
                        </div>

                    </Content>
                    {/* <Footer style={{background:'#cfd8dc', height:250 , fontFamily:'Quicksand',}}>
                    
                        <div style={{display:'flex', flexDirection:'row' , marginLeft:450}}>
                            <div style={{display:'flex', flexDirection:'row'}}>
                        <text style={{color:'black' , fontSize:27, marginRight:30,marginTop:100, fontWeight:600, display:'flex', justifyContent:'center'}}> Hire your Job</text>
                        <Divider type="vertical"  style={{background:'black' , height:100, width:.75, marginTop:75 }}/>

                        </div>


                        <div  style={{display:'flex', flexDirection:'column' , marginLeft:30, marginTop:80}}>
                            <text style={{fontSize:27, color:'black', marginTop:3}}>info@hireyourJob.com</text>
                            <div style={{marginTop:15, marginLeft:30}} >
                            <SocialIcon  className='social' fgColor="white" url="http://linkedin.com/in/MacropaceTechnologies" />
                            <SocialIcon  className='social' fgColor="white" url="http://facebook.com/in/MacropaceTechnologies" />
                            <SocialIcon network="twitter" fgColor="white"  url="http://twitter.com/in/MacropaceTechnologies"/>

                        
                        </div>
                        </div>
                        </div>
                
                </Footer> */}
                <Footer1/>
                </Layout>
            </div>       
        )
    }
}
