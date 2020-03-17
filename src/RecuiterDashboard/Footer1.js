import React, { Component } from 'react'
import { Layout, Menu, Divider, Icon } from 'antd';
import { SocialIcon } from 'react-social-icons';

const { Header, Content, Footer } = Layout;

export default class Footer1 extends Component {
    render() {
        return (
            <div>
                 <Footer style={{background:'#cfd8dc', height:250 , fontFamily:'Quicksand',}}>
                    
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
            
            </Footer>
            </div>
        )
    }
}
