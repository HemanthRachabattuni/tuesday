import React, { Component } from "react";
import { Divider } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import { Statistic, Row, Col } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import Header1 from './Header';
import Location1 from './Location1'
import { Tag, Tooltip, } from 'antd';
import './Toolbar.css'
import{ Link} from 'react-router-dom'
import Footer1 from './Footer1';




function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
const { TextArea } = Input;
const { Content, Footer, Sider } = Layout;
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
const { Option, OptGroup } = Select;
const InputGroup = Input.Group;

function handleChange(value) {
  console.log(`selected ${value}`);
}



class PostJobs extends Component {
  state = {
    tags: ['Add skill'],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);


  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (


      <div style={{marginTop:100}}>
    
        <Layout style={{paddingBottom:0}} >
          <Content style={{ backgroundColor: '#eceff1', height: 696 }} >



            <div>
              <div style={{ position: "absolute", left: 300, top: 90 }} >
                <label style={{ color: "black", marginLeft: 50, position:'absolute', top:25, fontFamily: 'Quicksand' }}>JobTitle*</label>
              </div>
              <div style={{ position: "absolute", left: 350, top: 135 }}>
                <Input placeholder="Job Title" style={{ width: "250px", marginRight: 20 }} />


              </div>
            </div>
            <div>
              <div style={{ position: "absolute", left: 650, top: 90 }}>
                <label style={{ color: "black", fontFamily: 'Quicksand',position:'absolute', top:25, marginLeft:0}}>NoofPositions*</label>
              </div>
              <div style={{ position: "absolute", left: 650, top: 135 }}>
                <Input placeholder="No of Positions" style={{ width: "365px" }} />
              </div>
            </div>


            <div>
              <div style={{ position: "absolute", left: 350, top: 185 }}>
                <label style={{ color: "black", fontFamily: 'Quicksand' }}>Location*</label>
              </div>

              <div style={{ position: "absolute", left: 350, top: 215 }}>

                <Location1/>
            </div>
            </div>
            <div>
              <div>
                <label style={{ color: "black", position: 'absolute', left: 650, top: 185, fontFamily: 'Quicksand' }}>What type of Job is it?*</label>
              </div>




              <div style={{ position: 'absolute', left: 650, top: 215, fontFamily: 'Quicksand', }}>
                <Radio.Group onChange={onChange} defaultValue="a">
                  <Radio.Button value="a">Full-Time</Radio.Button>
                  <Radio.Button value="c">Contract</Radio.Button>
                  <Radio.Button value="b">Freelance</Radio.Button>
                  <Radio.Button value="d">Internship</Radio.Button>

                </Radio.Group>
              </div>
            </div>


            <div>
              <div style={{ position: "absolute", left: 350, top: 260 }}>
                <label style={{ color: "black", fontFamily: 'Quicksand' }}>Salary*</label>
              </div>

              <div style={{ position: "absolute", left: 350, top: 290, fontFamily: 'Quicksand' }}>
                <InputGroup compact>
                  <Select defaultValue="1">
                    <Option value="1">&#8377;	</Option>
                  </Select>
                  <Input style={{ width: 250, textAlign: 'center' }} placeholder="Minimum" />
                  <Input
                    style={{
                      width: 30,
                      borderLeft: 0,
                      pointerEvents: 'none',
                      backgroundColor: '#fff',
                    }}
                    placeholder="~"
                    disabled
                  />
                  <Input style={{ width: 250, textAlign: 'center', borderLeft: 0 }} placeholder="Maximum" />
                  <Select defaultValue="3">
                    <Option value="1">Per Hour	</Option>
                    <Option value="2">Per month	</Option>
                    <Option value="3">Per year	</Option>


                  </Select>
                </InputGroup>
              </div>
            </div>


            <div>
              <div>
                <label style={{ color: "black", position: "absolute", left: 350, top: 340, fontFamily: 'Quicksand' }}>Key Skills*</label>
              </div>
              <div style={{ position: 'absolute', left: 350, top: 360, fontFamily: 'Quicksand' }}>
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 30;
                  const tagElem = (
                    <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                      tagElem
                    );
                })}
                {inputVisible && (
                  <Input
                    ref={this.saveInputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                    <Icon type="plus" /> Add Skill
                  </Tag>

                )}
              </div>
            </div>

            <div>
              <div>
              <label style={{ color: "black", position: "absolute", left: 750, top: 340, fontFamily: 'Quicksand' }}>Gender Preference*</label>

              </div>
                           <div style={{ position: 'absolute', left: 750, top: 360, fontFamily: 'Quicksand' }}>
                <Radio.Group name="radiogroup" defaultValue={1}>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                  <Radio value={3}>Both</Radio>
                </Radio.Group></div>
            </div>

            <div>
              <div>

                <label style={{ color: "black", position: "absolute", left: 350, top: 400, fontFamily: 'Quicksand' }}>JobDescription*</label>
              </div>
              <div>
                <TextArea rows={9} style={{ width: "675px", position: "absolute", left: 350, top: 420, fontFamily: 'Quicksand' }} maxLength={1024} placeholder='Job description in 150 words....' />
              </div>
            </div>




            <Link style={{ color: 'white', background: '#01579b', borderRadius: 25, width: 150,paddingLeft:10, paddingRight:10, justifyContent:'center', alignContent:'center' ,paddingTop:5,paddingBottom:10, height: 40, fontFamily: 'Quicksand', fontSize: 20, position:'absolute', left:650, top:640 }} to='/recruiter-dashboard/Managejobs'>Post Job</Link>

          </Content>
        </Layout>
       
               
      </div>
    )
  }
}
export default PostJobs;