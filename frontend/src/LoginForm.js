import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input } from "reactstrap";

function LoginForm() {
    
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
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

                <button>Submit</button>
            </Form>
        </div>
    )
}

export default LoginForm;