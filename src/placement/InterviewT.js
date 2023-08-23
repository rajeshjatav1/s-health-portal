import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const InterviewT = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='interview_head_text'>
                <h3 style={{ backgroundColor: '#ffffffad' }} className='d-inline-block py-3 px-5 mx-3 rounded-2'>Technical Interview</h3>
            </div>
            <div className="container">
                <div className='mt-3'>
                    <div className="row row-md row-sm me-4">
                        <div className="col-lg col-md col-sm rounded text-center p-2 shadow border m-3">
                            <img style={{ height: '30px' }} src="/C.png" className='mt-2' alt="C++" />
                            <h4 style={{ color: '#105c93' }} className='mt-2'>C Interview Questions</h4>
                            <ul className="text-start">
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.interviewbit.com/c-interview-questions/">C Interview Questions on InterviewBit</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.javatpoint.com/c-interview-questions">C Interview Questions on Javatpoint</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.geeksforgeeks.org/c-interview-questions/">C Interview Questions on GeeksForGeeks</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.edureka.co/blog/interview-questions/c-programming-interview-questions/">C Interview Questions on Edureka</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg col-md col-sm rounded text-center p-2 shadow border m-3">
                            <img style={{ height: '30px' }} src="/C++.png" className='mt-2' alt="C++" />
                            <h4 style={{ color: '#105c93' }} className='mt-2'>C++ Interview Questions</h4>
                            <ul className="text-start">
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.interviewbit.com/cpp-interview-questions/">C++ Interview Questions on InterviewBit</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.simplilearn.com/tutorials/cpp-tutorial/cpp-interview-questions">C++ Interview Questions on Simplilearn</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.geeksforgeeks.org/cpp-interview-questions/">C++ Interview Questions on GeeksForGeeks</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.javatpoint.com/cpp-interview-questions">C++ Interview Questions on JavaTpoint</a>
                                </li>
                            </ul>


                        </div>
                        <div className="col-lg col-md col-sm rounded text-center p-2 shadow border m-3">
                            <img style={{ height: '30px' }} className='mt-2' src="/csharp.png" alt="" />
                            <h4 style={{ color: '#105c93' }} className='mt-2'>C# Interview Questions</h4>
                            <ul className="text-start">
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.interviewbit.com/c-sharp-interview-questions/">C# Interview Questions on InterviewBit</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.c-sharpcorner.com/UploadFile/puranindia/C-Sharp-interview-questions/">C# Interview Questions on C# Corner</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.javatpoint.com/c-sharp-interview-questions">C# Interview Questions on JavaTpoint</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.simplilearn.com/tutorials/c-sharp-tutorial/c-sharp-interview-questions">C# Interview Questions on Simplilearn</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="row row-md row-sm me-4">
                        <div className="col-lg col-md col-sm rounded text-center p-2 shadow border m-3">
                            <img style={{ height: '30px' }} src="/java.png" className='mt-2' alt="C++ image" />
                            <h4 style={{ color: '#105c93' }} className='mt-2'>Java Interview Questions</h4>
                            <ul className="text-start">
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.interviewbit.com/java-interview-questions/">Java Interview Questions on InterviewBit</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.javatpoint.com/corejava-interview-questions">Java Interview Questions on JavaTpoint</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.simplilearn.com/tutorials/java-tutorial/java-interview-questions">Java Interview Questions on Simplilearn</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.edureka.co/blog/interview-questions/java-interview-questions/">Java Interview Questions on Edureka</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg col-md col-sm rounded text-center p-2 shadow border m-3">
                            <img style={{ height: '30px' }} src="/python.png" className='mt-2' alt="C++ image" />
                            <h4 style={{ color: '#105c93' }} className='mt-2'>Python Interview Questions</h4>
                            <ul className="text-start">
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.interviewbit.com/python-interview-questions/">Python Interview Questions on InterviewBit</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.edureka.co/blog/interview-questions/python-interview-questions/">Python Interview Questions on Edureka</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.simplilearn.com/tutorials/python-tutorial/python-interview-questions">Python Interview Questions on Simplilearn</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.javatpoint.com/python-interview-questions">Python Interview Questions on JavaTpoint</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg col-md col-sm rounded text-center p-2 shadow border m-3">
                            <img style={{ height: '30px' }} src="/html5.png" className='mt-2' alt="C++ image" />
                            <h4 style={{ color: '#105c93' }} className='mt-2'>HTML Interview Questions</h4>
                            <ul className="text-start">
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.interviewbit.com/html-interview-questions/">HTML Interview Questions on InterviewBit</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.javatpoint.com/html-interview-questions">HTML Interview Questions on JavaTpoint</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.edureka.co/blog/interview-questions/top-50-html-interview-questions-and-answers/">HTML Interview Questions on Edureka</a>
                                </li>
                                <li className='p-1 ps-2 rounded-3'>
                                    <a className='text-decoration-none' href="https://www.shiksha.com/online-courses/articles/top-html-interview-questions-and-answers/">HTML Interview Questions on Shiksha</a>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container mt-3">
                <h5 className='text-center text-success'>Go To <i class="bi bi-hand-index-thumb"></i></h5>
                <div className='text-center container my-4 d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column flex-sm-row'>

                    <Link className='text-decoration-none me-3 border p-2 shortcut-menu m-1' to='/health'>Health page</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/'>Home page</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/hr-interview'>HR Interview</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/video-courses'>Video Courses</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/text-course'>Text Courses</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/practice'>Practice Sites</Link>

                </div>
            </div>
            <div style={{position:'relative'}} className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default InterviewT
