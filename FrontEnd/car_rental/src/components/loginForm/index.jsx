import { Form, Button } from "react-bootstrap"

// import {EmployeeContext} from '../contexts/EmployeeContext';
import {useContext, useState,useEffect} from 'react';
import CustomerService from "../../services/CustomerService";



const LoginForm = () =>{

    // const {addEmployee} = useContext(EmployeeContext);

    const initialValues = { Username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect( () => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            // let res=await CustomerService.postCustomer(formValues);
            //
            // console.log(res);

        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Username) {
            errors.Username = "Username is required!";
        }else if (!values.Username.match("^[0-9]{4}$")){
            errors.Username="Wrong Username Pattern";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };
    return (

        <Form onSubmit={handleSubmit} >
            <Form.Group style={{margin:20}} >
                <Form.Control
                    type="plaintext"
                    placeholder="Username *"
                    name="Username"
                    onChange = {handleChange}
                    value={formValues.Username}
                    required
                />
            </Form.Group>
            <p>{formErrors.Username}</p>
            <Form.Group sm="10" style={{margin:20}}>
                <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    value={formValues.password}
                    onChange = {handleChange}
                />
            </Form.Group>
            <p>{formErrors.password}</p>
            <Button variant="outline-dark" type="submit" style={{marginLeft:20}} >
                Login
            </Button>
        </Form>


    )
}

export default LoginForm;