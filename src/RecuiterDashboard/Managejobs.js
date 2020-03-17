import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import { Button } from 'antd';
import Tables from './Tables';
import Footer1 from './Footer1';

const Managejobs = () => {

    return (
      <div >
        <div style={{marginTop:100 }}>
         
          <Tables/>
          <div style={{marginTop:180}}>
               

               <Footer1 />
               </div>
        </div>
      </div>
    )
  }
export default Managejobs;
