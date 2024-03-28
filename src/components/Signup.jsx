import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phonenumber: "",
            refeeral: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            email: Yup.string().email('Invalid email address')
                .required('Required'),
            phonenumber: Yup.number().typeError('Must be a number')
                .required('Required'),
            referral: Yup.string(),
            password: Yup.string()
                .required('Required'),

        }),
        onSubmit: values => {
            let successMessage, errorMessage;
            let allDetails = {
                Username: values.username, Email: values.email, Phonenumber: values.phonenumber, Refeeral: values.refeeral, Password: values.password
            }
            axios.post("http://localhost:3600/facebook/Signup", allDetails)
            .then((response) => {
                const errorMessage = response.data.message;
                const sucessMessage = response.data.message;
            
                if (!response.data.status) {
                    Swal.fire({
                        icon: "error",
                        title: "<h3>Registration Failed</h3>",
                        text: errorMessage
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "<h3>Success</h3>",
                        text: sucessMessage,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((err)=>{
                console.log(err);
                const errmessage = err.response.data.message
                Swal.fire({
                    icon: "error",
                    title: "<h3>Error Occured</h3>",
                    text: errmessage
                });
            })
        }
    })
    return (
        <>
            <form action="" onSubmit={formik.handleSubmit}>

                <div class="containersignup">
                    <div class="card">
                        <a class="login">Register</a>
                        <div class="inputBox">
                            <input
                                type="text"
                                required="required"
                                className={`form-control ${(formik.values.username && !formik.errors.username) ||
                                    (formik.touched.username && formik.values.username && formik.errors.username && formik.touched.username && formik.values.username)
                                    ? 'is-valid'
                                    : formik.values.username || formik.touched.username
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="username"
                                value={formik.values.username}
                            />
                            <span class="user">Username</span>
                        </div>

                        <div class="inputBox">
                            <input
                                type="text"
                                required="required"
                                className={`form-control ${(formik.values.email && !formik.errors.email) ||
                                    (formik.touched.email && formik.values.email && formik.errors.email && formik.touched.email && formik.values.email)
                                    ? 'is-valid'
                                    : formik.values.email || formik.touched.email
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="email"
                                value={formik.values.email}
                            />
                            <span>Email</span>
                        </div>

                        <div class="inputBox">
                            <input
                                type="text"
                                required="required"
                                className={`form-control ${(formik.values.phonenumber && !formik.errors.phonenumber) ||
                                    (formik.touched.phonenumber && formik.values.phonenumber && formik.errors.phonenumber && formik.touched.phonenumber && formik.values.phonenumber)
                                    ? 'is-valid'
                                    : formik.values.phonenumber || formik.touched.phonenumber
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="phonenumber"
                                value={formik.values.phonenumber}
                            />
                            <span>Phone Number</span>
                        </div>

                        <div class="inputBox">
                            <input
                                type="text"
                                required="required"
                                className={`form-control ${(formik.values.refeeral && !formik.errors.refeeral) ||
                                    (formik.touched.refeeral && formik.values.refeeral && formik.errors.refeeral && formik.touched.refeeral && formik.values.refeeral)
                                    ? 'is-valid'
                                    : formik.values.refeeral || formik.touched.refeeral
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="refeeral"
                                value={formik.values.refeeral}
                            />
                            <span>Refeeral</span>
                        </div>


                        <div class="inputBox">
                            <input
                                type="text"
                                required="required"
                                className={`form-control ${(formik.values.password && !formik.errors.password) ||
                                    (formik.touched.password && formik.values.password && formik.errors.password && formik.touched.password && formik.values.password)
                                    ? 'is-valid'
                                    : formik.values.password || formik.touched.password
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="password"
                                value={formik.values.password}
                            />
                            <span>Password</span>
                        </div>
                        <button class="enter" type='submit'>Sign Up</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signup