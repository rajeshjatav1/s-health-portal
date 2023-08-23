import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
    return (

        <div id='placement'>
            <div>
                <Navbar />
            </div>
            <div className='placement-page-welcome-text text-center'>
                <h3 style={{ backgroundColor: '#ffffffad' }} className='d-inline-block py-3 px-5 mx-3 rounded-2'>Welcome to placement preparation page</h3>
            </div>
            <div className='mt-4 p-0 courses_container'>
                <div className='clearfix py-5 video_courses_container width'>
                    <div className='video_course_left_section'>
                        <div>
                            <h2 style={{ borderBottom: '2px solid green' }} className='d-inline pb-2'>Video Courses</h2>
                        </div>
                        <div className='py-5 pe-4'>
                            <p className='text-dark mt-3 m-0'>Explore various technical video courses from youtube and from other sites for free</p>
                            <p className='text-dark m-0'>Courses include programming in <strong>C, C++, Java, Python, C#</strong> and many more </p>
                        </div>
                        <div className='explore-btn-container'>
                            <Link className='text-decoration-none' to='/placement/video-courses'>
                                <h4>
                                    <button className='explore-btn'>Explore</button>
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className="video_course_right_section">

                    </div>
                </div>
                <hr />
                <div className='py-5 width clearfix text_courses_container'>
                    <div className='text_courses_left_section'>

                    </div>
                    <div className="text_courses_right_section ps-4">
                        <div>
                            <h2 style={{ borderBottom: '2px solid green' }} className='d-inline pb-2'>Text Based Courses</h2>
                        </div>
                        <div className="py-5">
                            <p className='text-dark mt-3 ms-2 m-0'>Explore text based courses which are in simple and precise language for making notes</p>
                            <p className='ms-2 text-dark m-0'>Courses includes text bases courses of <strong>C, C++, C#, Java, Python</strong></p>
                        </div>
                        <div className='explore-btn-container'>
                            <Link className='text-decoration-none' to='/placement/text-course'>
                                <h4>
                                    <button className='explore-btn'>Explore</button>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="py-5 width clearfix practice_sites_container">
                    <div className="practice_sites_left_section">
                        <div>
                            <h2 style={{ borderBottom: '2px solid green' }} className='d-inline pb-2'>Programming Practice Sites</h2>
                        </div>
                        <div className='py-5 pe-4'>
                            <p className='text-dark'>Explore some best sites which is widely known, which will help you to improve your <strong> problem solving skills</strong></p>
                        </div>
                        <div className='explore-btn-container'>
                            <Link className='text-decoration-none' to='/placement/practice'>
                                <h4>
                                    <button className='explore-btn'>Explore</button>
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className="practice_sites_right_section">

                    </div>
                </div>
                <hr />
                <div className='py-5 width clearfix technical_interview_container'>
                    <div className="technical_interview_left_section">

                    </div>
                    <div className="technical_interview_right_section ps-4">
                        <div>
                            <h2 style={{ borderBottom: '2px solid green' }} className='d-inline pb-2'>Technical Interview</h2>
                        </div>

                        <div className="py-5">
                            <p className='text-dark mt-3 ms-2 m-0'>Explore Interview questions of various programming languages, which are frequently asked in interviews and get ready for your <strong> Technical Interview</strong></p>
                        </div>
                        <div className='explore-btn-container'>
                            <Link className='text-decoration-none' to='/placement/tech-interview'>
                                <h4>
                                    <button className='explore-btn'>Explore</button>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='py-5 width clearfix hr_interview_container'>

                    <div className="hr_interview_left_section">
                        <div>
                            <h2 style={{ borderBottom: '2px solid green' }} className='d-inline pb-2'>HR Interview</h2>
                        </div>
                        <div className="py-5 pe-4">
                            <p className='text-dark m-0'>Explore HR Interview questions which are frequently asked in interviews and get interview ready</p>
                        </div>
                        <div className='explore-btn-container'>
                            <Link className='text-decoration-none' to='/placement/hr-interview'>
                                <h4>
                                    <button className='explore-btn'>Explore</button>
                                </h4>
                            </Link>
                        </div>
                    </div>
                    <div className="hr_interview_right_section">

                    </div>

                </div>

            </div>
            <hr />
            <div className='width my-4 d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column'>
                <Link className='text-decoration-none me-3 p-2 shortcut-menu' to='/health'>Go to Health page</Link>
                <Link className='text-decoration-none p-2 me-3 shortcut-menu' to='/'>Go to Home page</Link>
            </div>
            <div style={{ position: 'relative' }} className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home
