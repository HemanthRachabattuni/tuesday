import React from 'react';
import { Table } from 'reactstrap';
import { FaSync, FaTimes, FaPencilAlt, FaBookmark } from 'react-icons/fa';
import { Popover, } from 'antd';

const edit = (
  <div>
    <p>Edit</p>

  </div>)
const Delete = (
  <div>
    <p>Delete</p>

  </div>)
const Update = (
  <div>
    <p>Update</p>

  </div>)
const Save = (
  <div>
    <p>Save</p>

  </div>)


const Tables = (props) => {
  return (
    <Table style={{fontFamily:'Quicksand',}}>
      <thead >
        <tr >
          <th>#</th>
          <th>Posted Date</th>
          <th>JobTitle</th>
          <th>Location</th>
          <th>Status</th>
         
          <th>Response</th>
         
         

          <th>Actions</th>


        </tr>
      </thead>
      <tbody>
        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">1</th>
          <td style={{ fontSize: 15 }}>Feb 06</td>
          <td>Data Engineer</td>
          <td>Bangalore</td>
          <td>Published</td>
          
          <td>22</td>
         
          
          
         

          <td >
            <Popover content={edit} >
              <FaPencilAlt style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Delete} >
              <FaTimes style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Update} >
              <FaSync style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Save} >
              <FaBookmark style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
          </td>


        </tr>
        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">2</th>
          <td style={{ fontSize: 15 }}>Sept 20</td>
          <td>Business Development manager</td>
          <td>Mumbai</td>
          <td>Rejected</td>
          
          <td>56</td>
         
          
         

          <td >
            <Popover content={edit} >
              <FaPencilAlt style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Delete} >
              <FaTimes style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Update} >
              <FaSync style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Save} >
              <FaBookmark style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
          </td>

        </tr>
        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">3</th>
          <td style={{ fontSize: 15 }}>Jan 12</td>
          <td>Azure Developer -C#/VB/.net</td>
          <td>Delhi</td>
          <td>Under Review</td>
         
          <td>34</td>
        
          
         

          <td >
            <Popover content={edit} >
              <FaPencilAlt style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Delete} >
              <FaTimes style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Update} >
              <FaSync style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Save} >
              <FaBookmark style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
          </td>

        </tr>

        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">4</th>
          <td style={{ fontSize: 15 }}>May 30</td>
          <td>Web Developer</td>
          <td>Pune</td>
          <td>Rejected</td>
          
          <td>12</td>

         
         

          <td >
            <Popover content={edit} >
              <FaPencilAlt style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Delete} >
              <FaTimes style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Update} >
              <FaSync style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
            <Popover content={Save} >
              <FaBookmark style={{ marginLeft: 0, marginRight: 10 }} />
            </Popover>
          </td>





        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;