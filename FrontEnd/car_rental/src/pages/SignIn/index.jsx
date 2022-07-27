//
import React, {useEffect, useState} from "react"
import background from "../../assets/backgroundImage.jpg"
import DefaultNavbarComp from "../../components/defaultNavbarComp";
import CustomerService from "../../services/CustomerService";
import {Form} from "react-bootstrap";
import MuiAlert from "@material-ui/lab/Alert";


export default function (props) {
    const initialValues = { id: "",name:"",address:"",contact: "",NIC:"",driving_license:"",email:"", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const [show, setShow] = useState(true);


    function Alert(props) {
        return <MuiAlert elevation={6}
                         variant="filled" {...props} />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };


    useEffect( () => {
        console.log(formErrors)

            if (Object.keys(formErrors).length === 0 && isSubmit) {
                console.log(formValues);
                // let res= CustomerService.postCustomer(formValues);
                //
                // console.log(res);



            }


    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.id) {
            errors.id = "Id is required!";
        }

        if (!values.name) {
            errors.name = "Username is required!";
        }

        if (!values.address) {
            errors.address = "Address is required!";
        }

        if (!values.contact) {
            errors.contact = "Contact Number is required!";
        }

        if (!values.NIC) {
            errors.NIC = "NIC Number is required!";
        }

        if (!values.driving_license) {
            errors.driving_license = "Driving license is required!";
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
        <>

            <div>
            <DefaultNavbarComp/>
        <div style={{backgroundImage: `url(${background})`,height:"96vh",paddingTop:1}}>
        <div className="Auth-form-container">
            <Form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content" >
                    <div className="row m-4">
                    <h2 className="Auth-form-title m-2" style={{color:"lightgoldenrodyellow"}}>Create an account</h2>
                        <div className="form-group " className="col-4 my-2">
                          <b><label>ID</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter ID"
                                onChange = {(e) => formValues.id=e.target.value}
                                required
                            />
                        </div>
                            <p style={{color:"red"}}>{formErrors.id}</p>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>Name</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Name"
                                onChange = {(e) => formValues.name=e.target.value}

                            />
                        </div>
                            <p style={{color:"red"}}>{formErrors.name}</p>
                        <div className="form-group " className="col-4 my-2 ">
                            <b><label>Address</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Address"
                                onChange = {(e) => formValues.address=e.target.value}
                            />
                        </div>
                                <p style={{color:"red"}}>{formErrors.address}</p>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>Contact Number</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Contact Number"
                                onChange = {(e) => formValues.contact=e.target.value}
                            />
                        </div>
                            <p style={{color:"red"}}>{formErrors.contact}</p>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>NIC Number</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter NIC"
                                onChange = {(e) => formValues.NIC=e.target.value}
                            />
                        </div>
                            <p style={{color:"red"}}>{formErrors.NIC}</p>
                        <div className="form-group " className="col-4 my-2">
                            <b><label>Driving License Number</label></b>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter Driving License"
                                onChange = {(e) => formValues.driving_license=e.target.value}

                            />
                        </div>
                                <p style={{color:"red"}}>{formErrors.driving_license}</p>
                        <div className="form-group " className="col-4 my-2">
                        <b><label>Email Address</label></b>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange = {(e) => formValues.email=e.target.value}
                            required
                        />
                    </div>
                        <p style={{color:"red"}}>{formErrors.email}</p>
                        <div className="form-group " className="col-4 my-2">
                        <b><label>Password</label></b>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange = {(e) => formValues.password=e.target.value}
                        />
                    </div>
                        <p style={{color:"red"}}>{formErrors.password}</p>
                    </div>
                    <div className="d-grid gap-2  col-2 mx-5">
                        <button type="submit" className="btn btn-dark">
                           <b> Sign Up </b>
                        </button>
                    </div>
                </div>
            </Form>
        </div>
        </div>
        </div>
        </>
    )

}