import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";

function UserUpdateForm() {
    
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        CreateDeckForm();
    }

    return(
        <div>
            <h1>Login!</h1>
            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <h5>Username: </h5>
                    <Input id="username"
                           type="text"
                           name="username"
                           placeholder="Username"
                           value={formData.username}
                           onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <h5>Password: </h5>
                    <Input id="password"
                           type="text"
                           name="password"
                           placeholder="Password"
                           value={formData.password}
                           onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <h5>First Name: </h5>
                    <Input id="firstName"
                           type="text"
                           name="firstName"
                           placeholder="firstName"
                           value={formData.firstName}
                           onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <h5>Last Name: </h5>
                    <Input id="lastName"
                           type="text"
                           name="lastName"
                           placeholder="lastName"
                           value={formData.lastName}
                           onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <h5>Email: </h5>
                    <Input id="email"
                           type="text"
                           name="email"
                           placeholder="emial"
                           value={formData.email}
                           onChange={handleChange} />
                </FormGroup>

                <button>Submit</button>
            </Form>
        </div>
    )
}

export default UserUpdateForm;