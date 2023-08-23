import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useState } from 'react'

const Prehome = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Creating a submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        // Creating a post request
        const { data } = await
            axios.post('http://localhost:8000/token/',
                user, {
                headers:
                    { 'Content-Type': 'application/json' },
                withCredentials: true
            });
        // Initialize the access & refresh token in localstorage.
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/home'
    }
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ backgroundColor: '#0c0c0ca6' }} className="container border p-5 my-4 rounded-5">
                    <div className="text-light text-center mt-5">
                        <h5 className='mt-5'>Welcome to Student's Portal <br />
                            <br />
                            <br />
                            <p style={{ backgroundColor: '#0000008f' }} className='p-3 rounded-3 border border-light'>
                                This portal is mainly developed for Students who face heath related common problems,
                                We've also added some important materials for your placement preparation
                                if you are facing any health or placement related issue then you are on right place
                            </p>
                        </h5>
                    </div>
                    <div className='text-center text-light flex-column mt-2'>
                        <h5 className='mt-5 mb-4'>Please Click on the Login button to see the content</h5>
                        <button className="btn btn-primary w-25" data-bs-toggle='modal' data-bs-target="#login">Login</button>
                        <div className="modal fade modal-centered text-dark" id="login">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                    <div className="modal-header">

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form action="" onSubmit={submit}>
                                        <div className="modal-body d-flex flex-column justify-content-center">
                                            <h5 className='text-dark mb-4'>Please Enter Your Login Details</h5>
                                            <div className='px-5'>
                                                <input className='form-control my-3' type="text" placeholder='Enter your number' value={username} required onChange={e=>setUsername(e.target.value)} />
                                                <input className='form-control mt-3' type="text" placeholder='Password' value={password} required onChange={e=>setPassword(e.target.value)} />
                                            </div>

                                        </div>
                                        <div className="container my-3 px-5">
                                            <button className="btn btn-primary w-25" type='submit'>Login</button>
                                            <hr />
                                            <div className=''>
                                                <p>Not have an account yet?</p>
                                                <div className="d-flex justify-content-center">
                                                    <a style={{ backgroundColor: '#5252f121' }} className='text-decoration-none border p-1 rounded-pill px-3' data-bs-toggle='modal' data-bs-target='#register' data-bs-dismiss='modal' href='#'><i className="bi bi-person-plus me-2"></i>Register</a>
                                                    <a style={{ backgroundColor: '#5252f121' }} className='text-decoration-none mx-3 p-1 border rounded-pill px-3' href="#"><i className="bi bi-pencil-square me-2"></i>Forgot Password</a>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade text-dark" id='register'>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                                    </div>
                                    <div className="modal-body px-4">
                                        <h4 className='mb-3'>Please Enter Your Details Below</h4>
                                        <div className="d-flex">
                                            <input placeholder='First Name' type="text" className="form-control me-1" />
                                            <input placeholder='Last Name' type="text" className="form-control ms-1" />
                                        </div>
                                        <input type="text" placeholder='Enter Your Email' className='form-control my-3' />
                                        <input type="text" placeholder='Enter Your Number' className='form-control mt-3 mb-2' />
                                        <label className='float-start mb-2 ms-1' htmlFor="">Select date of birth</label>
                                        <input type="date" placeholder='DOB' className='form-control' />
                                        <select className='form-select my-3' name="" id="">
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                            <option value="">Other</option>
                                        </select>
                                        <textarea type="text" className='form-control my-3' placeholder='Enter Your Address' />
                                        <input type="text" className='form-control my-3' placeholder='Your Institute' />
                                        <button className="btn btn-primary w-25">Next</button>
                                        <hr />
                                        <p style={{ cursor: 'pointer' }}>Already have an account? <span data-bs-toggle='modal' data-bs-target="#login" data-bs-dismiss='modal' className='text-primary'>Login</span></p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prehome
