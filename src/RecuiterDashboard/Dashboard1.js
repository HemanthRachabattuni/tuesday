import React, { Component } from 'react'
// import Header from './Header';
import { Layout, Icon } from 'antd';
import './Toolbar.css'
import Button from './Button'
import PostJobs from './PostJobs';
import {Link} from 'react-router-dom'
import Header1 from './Header1';
import { Carousel } from 'antd';



const { Content } = Layout;

export default class Dashboard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#eceff1' ,fontFamily:'Quicksand'}}>
        <div >
          <Header1/>
          <div>
          <section >
              <Content style={{ backgroundColor: '#eceff1', }}>
                <div style={{ background:'#cfd8dc',borderRadius:25, height: 125, width: "90%",marginLeft:33,marginTop:25, top: 400, paddingBottom: 50, paddingTop: 50, paddingRight: 150, display: 'flex', flexDirection: "row", alignItems: 'space-around' }}>
                

                
                 <Link  style={{ background: '#ffab40', height: 60, width: 300, marginLeft: 100, cursor:'pointer', boxShadow:10 }}  to='/recruiter-dashboard/Managejobs' >
                   <div className='myjobs' >
                    <Icon type="user" style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 20, marginTop: 0, paddingBottom:20 }}>My Jobs</text>
                    </div>
                  </Link>
              
                  <Link style={{ background: '#00e676',height: 60, marginLeft: 100, width: 300, cursor:'pointer' }} >
                   <div className='applicants' >
                    <Icon type='usergroup-add' style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 20, marginTop: 0,  paddingBottom:20  }}>Applicants</text>
                    </div>
                  </Link>

                  <Link style={{ background: '#ff5252', height: 60, marginLeft: 100,width: 300, cursor:'pointer' }}  to="/recruiter-dashboard/Settings">
                   <div className='myprofile' >
                    <Icon type="bar-chart" style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 20, marginTop: 0,  paddingBottom:20  }}>My profile</text>
                    </div>
                  </Link>

                  <Link style={{ background: '#536dfe',height: 60, marginLeft: 100,width: 300, cursor:'pointer' }}  to="/recruiter-dashboard/PostJobs">
                   <div className='postajob' >
                    <Icon type="folder-add" style={{ fontSize: 25, color: 'black', marginTop:19 }} />
                    <text style={{ color: 'black', fontSize: 20, marginTop: 0, paddingBottom:20  }}>post a job</text>
                    </div>
                  </Link>

                </div>
                <div style={{height:500, width:600}}>
                  <section>
                    <div style={{height:300, width:'80%', background:'#ffffff', marginLeft:100, borderRadius:25, marginTop:50}}>
                    {/* <Carousel autoplay>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>, */}
                      </div>

                  </section>

                </div>
              </Content>
            </section>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
