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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Facebookpage