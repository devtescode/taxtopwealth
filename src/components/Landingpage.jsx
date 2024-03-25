import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    const navigate = useNavigate()
    const Signup =()=>{
        navigate('/su')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#73B3BD" }}>
                <div class="container-fluid mx-0 mx-sm-4">
                    {/* <a class="navbar-brand text-white" href="#">Navbar</a> */}
                    <div class="navbar-brand text-white">
                        
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-end justify-content-end" id="navbarNav">
                        <ul class="navbar-nav text-center">
                            <li class="nav-item mx-4">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link text-white" href="#">Features</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link text-white" href="#">Pricing</a>
                            </li>
                            <li class="nav-item mx-4">
                                <a class="nav-link disabled text-white" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="custom-shape-divider-bottom-1711115110">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='divwords'>
                <div className='innerdivwords1'>

                </div>
                <div className='innerdivwords2'>

                    <div>
                        <div className='welcomedivstyle'>
                            <span className='fs-1  fw-bold Welcomespancolour'>Welcome To</span>
                            <span className='fs-1  fw-bold mx-2' style={{ color: "#FAD061" }}>TaxTopWealth</span>
                        </div>
                        <div className='justifywordsdiv '>
                            <span className='fs-4' >
                                Where daily tax top-ups pave the way to financial prosperity. Start growing your wealth effortlessly with every contribution today
                            </span>
                            <div className='my-4'>
                                <button onClick={Signup} className='btn' style={{backgroundColor: "#73B3BD"}}>Register</button>
                                <button  className='btn mx-2' style={{backgroundColor: "#73B3BD"}}>Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Landingpage