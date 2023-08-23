import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const InterviewH = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='interview_head_text'>
                <h3 style={{ backgroundColor: '#ffffffad' }} className='d-inline-block py-3 px-5 mx-3 rounded-2'>HR Interview</h3>
            </div>
            <div className="width">
                <div className='mt-3'>
                    <ul className='hr_interview_sites_list'>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://www.interviewbit.com/hr-interview-questions/" target='__blank'>HR Interview Questions on InterviewBit</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://www.simplilearn.com/hr-interview-questions-answers-article" target='__blank'>HR Interview Questions on Simplilearn</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://www.indiabix.com/hr-interview/questions-and-answers/" target='__blank'>HR Interview Questions on Indiabix</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://www.javatpoint.com/job-interview-questions" target='__blank'>HR Interview Questions on JavaTpoint</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://prepinsta.com/interview-preparation/hr-interview-questions/" target='__blank'>HR Interview Questions on PrepInsta</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://in.indeed.com/career-advice/interviewing/hr-interview-questions" target='__blank'>HR Interview Questions on Indeed</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://www.naukri.com/blog/frequently-asked-hr-interview-questions-and-answers/" target='__blank'>HR Interview Questions on Naukri</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://resources.workable.com/tutorial/hr-interview-questions" target='__blank'>HR Interview Questions on Workable</a>
                        </li>
                        <li className='p-2 rounded'>
                            <a className='ms-2 text-decoration-none' href="https://www.coursera.org/articles/hr-interview-questions" target='__blank'>HR Interview Questions on Coursera</a>
                        </li>
                    </ul>
                </div>
            </div>
            <h5 className='text-center text-success'>Go To <i class="bi bi-hand-index-thumb"></i></h5>
            <div className='text-center container my-4 d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column flex-sm-row'>

                <Link className='text-decoration-none me-3 border p-2 shortcut-menu m-1' to='/health'>Health page</Link>
                <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/'>Home page</Link>
                <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/video-courses'>Video Courses</Link>
                <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/text-course'>Text Courses</Link>
                <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/practice'>Practice Sites</Link>
                <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/tech-interview'>Technical Interview</Link>
            </div>
            <div style={{ position: 'relative' }} className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default InterviewH
