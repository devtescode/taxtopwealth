import React from 'react'

const Facebookpage = () => {
  return (
    <>
      <div className='fbcontainer'>
        <div className='innercontainer'>
          <div className='text-center'>
            <h5 className='fbstylewords'>
              facebook
            </h5>

            <div>
              <div>
                <input placeholder="Mobile number or email address" class="styled-input" type="text" />
              </div>
              <div>
                <input placeholder="Password" class="styled-input my-2" type="text" />
              </div>
              <div>
                <button className='loginfbBTN' style={{ backgroundColor: "#1877F2" }}>
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
        </div>
      </div>
    </>
  )
}

export default Facebookpage