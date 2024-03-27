import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            axios.post("http://localhost:3600/facebook/Signup", { Username: values.username })
                .then((response) => {
                    alert("add")
                })
        }
    })
    return (
        <>
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
                        <span>Email</span>
                    </div>

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
                        <span>Phone Number</span>
                    </div>

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
                        <span>Refeeral</span>
                    </div>


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
                        <span>Password</span>
                    </div>
                    <button class="enter">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Signup