import React , {Component} from 'react';
import { Modal, Button,   } from 'antd';
import Login from "./Login";
import '../App.css'


export default class Jobseeker extends Component{
    state = {
        loading: false,
        visible: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    render(){
        const { visible, loading } = this.state;

        return(
                
                <div>
        <Button type="default" style={{color:"orange", backgroundColor:"white", marginRight:'1in',marginTop:20, display:'flex', justifyContent:'flex-end',fontWeight:600,fontFamily:'Quicksand'}} onClick={this.showModal}>
          JobSeeker
        </Button>
        <Modal
          visible={visible}
          title={[  <text style={{color:'#f50057',fontSize:24, marginLeft:155, fontWeight:600}}>JobSeeker Register!! </text>]}
         
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
           <text></text>
          ]}
        >
                
          
         <Login/>
         
        </Modal>
      </div>
                
        )
    }
}