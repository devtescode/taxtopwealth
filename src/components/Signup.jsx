import React from 'react'

const Signup = () => {
    return (
        <>
            <div class="containersignup">
                <div class="card">
                    <a class="login">Register</a>
                    <div class="inputBox">
                        <input type="text" required="required"/>
                            <span class="user">Username</span>
                    </div>

                    <div class="inputBox">
                        <input type="password" required="required"/>
                            <span>Email</span>
                    </div>

                    <div class="inputBox">
                        <input type="password" required="required"/>
                            <span>Phone Number</span>
                    </div>
                    
                    <div class="inputBox">
                        <input type="password" required="required"/>
                            <span>Refeeral</span>
                    </div>

                   
                    <div class="inputBox">
                        <input type="password" required="required"/>
                            <span>Password</span>
                    </div>
                    <button class="enter">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Signup