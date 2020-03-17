import React from 'react'
import { Input, Button } from 'antd';
import { Radio } from 'antd';
import Footer from '../CandidateDashboard/Footer/Footer';

import Header from './Header'


const Settings = () => {
  return (
      <div style={{fontFamily:'Quicksand', }}>
        <div >
        <div >
          <div style={{display:'flex', marginTop:50}}>
        <label style={{color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start'}}>FirstName:*</label><br/>
        <Input placeholder="ABCDEFGH"  style={{width:300, color:'black',display:'flex', marginLeft:80, justifyContent:'flex-start' }}/><br/>
      </div>
      <div style={{display:'flex', marginTop:20}}>
        <label style={{color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start'}}>LastName:*</label><br/>
        <Input placeholder="ABCDEFGH"  style={{width:300, color:'black',display:'flex', marginLeft:80, justifyContent:'flex-start' }}/><br/>
      </div>
      </div>
       <div style={{display:'flex', marginTop:20}}>
        <label style={{color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start'}}>Email:*</label><br/>
        <Input placeholder="ABC@Gmail.com" type='email'  style={{width:300, color:'black',display:'flex', marginLeft:113, justifyContent:'flex-start' }}/><br/>
      </div>
      <div style={{display:'flex', marginTop:20}}>
        <label style={{color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start'}}>Mobile Number:*</label><br/>
        <Input placeholder="+91 1234567890"  style={{width:300, color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start' }}/><br/>
      </div>

      <div style={{display:'flex', marginTop:20, fontFamily: 'Quicksand' }}>
      <label style={{color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start'}}>Gender:*</label><br/>

                <Radio.Group name="radiogroup" defaultValue={1} style={{display:'flex', marginLeft:100, fontFamily: 'Quicksand' }} >
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                </Radio.Group>
                </div>
                <div style={{display:'flex', marginTop:20}}>
        <label style={{color:'black',display:'flex', marginLeft:50, justifyContent:'flex-start'}}>City:*</label><br/>
        <Input placeholder="Bangalore"  style={{width:300, color:'black',display:'flex', marginLeft:120, justifyContent:'flex-start' }}/><br/>
      </div> 
     
      <Button type="primary" style={{ backgroundColor: '#78909c' , marginTop:50, width:75, marginLeft:0 }}>Save</Button>

      </div>
      <div style={{marginTop:95}}>
               

               <Footer />
               </div>
      </div>

    )
  }

export default Settings;