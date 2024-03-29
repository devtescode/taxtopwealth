import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loader from './Loaders/Loaderani'
const Signin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),

        }),
        onSubmit: values => {
            setLoading(true);
            // let successMessage, errorMessage;
            let allDetails = {
                Username: values.username, Password: values.password
            }
            axios.post("http://localhost:3600/facebook/Signin", allDetails)
                .then((response) => {
                    const errorMessage = response.data.message;
                    const sucessMessage = response.data.message;

                    if (!response.data.status) {
                            setLoading(false);
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

                        navigate("/fb")
                    }
                })
                .catch((err) => {
                    console.log(err);
                    const errmessage = err.response.data.message
                    Swal.fire({
                        icon: "error",
                        title: "<h3>Error Occured</h3>",
                        text: errmessage
                    });
                })
                setTimeout(() => {
                    setLoading(false);
                }, 120000);
        }
    })
    return (
        <>
            {loading && <Loader/>}
            <form action="" onSubmit={formik.handleSubmit}>
                <div class="containersignup">
                    <div class="card">
                        <a class="login">Login</a>
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
                        <button class="enter" type='submit'>Sign In</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signin