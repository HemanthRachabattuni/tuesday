import React from 'react';
import classes from './Profile.module.css';
import { Form } from 'react-bootstrap';

const Profile = () => {
return (
    <div className={classes.profile}>
    <Form className={classes.formArea}>
    <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Ankur" />
    <Form.Label>Second Name</Form.Label>
    <Form.Control type="text" placeholder="Raj" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="araj31@gmail.com" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="number" placeholder="6907885151" />
    </Form.Group>
    <Form.Group>
    <Form.Check label="Male" type="radio" />
    <Form.Check inline label="Female" type="radio" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" rows="3" />
    </Form.Group>
    <Form.Group>
    <Form.Label>Upload Resume</Form.Label>
    <Form.Control type="file" />
    </Form.Group>

    </Form>
    </div>

);
}

export default Profile;