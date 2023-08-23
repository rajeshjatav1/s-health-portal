import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const TextCourse = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div>
                <Navbar />
            </div>
            <div className='text_courses_head_text'>
                <h3 style={{ backgroundColor: '#ffffffad' }} className='d-inline-block py-3 px-5 mx-3 rounded-2'>Text Based Courses</h3>
            </div>
            <div className="width mt-3">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h4 className="accordion-header">
                            <button style={{ color: '#105c93' }} className="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <img style={{ height: '30px' }} src="/C.png" className='ms-2 me-2' alt="C++ image" />
                                C Language Tutorials
                            </button>
                        </h4>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className='courselist'>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.geeksforgeeks.org/c-programming-language/" target='__blank'> C Tutorials on GeeksforGeeks</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.javatpoint.com/c-programming-language-tutorial" target='__blank'> C Tutorials on Javatpoint</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.w3schools.com/c/" target='__blank'> C Tutorials on W3Schools</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.tutorialspoint.com/cprogramming/index.htm" target='__blank'> C Tutorials on Tutorials Point</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">

                            <button style={{ color: '#105c93' }} className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <img style={{ height: '30px' }} src="/C++.png" className='ms-2 me-2' alt="C++ image" />
                                C++ Tutorials
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className='courselist'>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.geeksforgeeks.org/cpp-tutorial/" target='__blank'> C++ Tutorials on GeeksforGeeks</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.javatpoint.com/cpp-tutorial" target='__blank'> C++ Tutorials on Javatpoint</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.w3schools.com/cpp/default.asp" target='__blank'> C++ Tutorials on W3Schools</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.tutorialspoint.com/cplusplus/index.htm" target='__blank'> C Tutorials on Tutorials Point</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={{ color: '#105c93' }} className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <img style={{ height: '30px' }} className='mx-2' src="/csharp.png" alt="" />
                                C Sharp Tutorials
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className='courselist'>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.geeksforgeeks.org/csharp-programming-language/" target='__blank'> C# Tutorials on GeeksforGeeks</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.javatpoint.com/c-sharp-tutorial" target='__blank'> C# Tutorials on Javatpoint</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.w3schools.com/cs/index.php" target='__blank'> C# Tutorials on W3Schools</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.tutorialspoint.com/csharp/index.htm" target='__blank'> C Tutorials on Tutorials Point</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">

                            <button style={{ color: '#105c93' }} className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <img style={{ height: '30px' }} src="/java.png" className='ms-2 me-2' alt="C++ image" />
                                Java Tutorials
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className='courselist'>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.geeksforgeeks.org/java/" target='__blank'> Java Tutorials on GeeksforGeeks</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.javatpoint.com/java-tutorial" target='__blank'> Java Tutorials on Javatpoint</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.w3schools.com/java/" target='__blank'> Java Tutorials on W3Schools</a>
                                    </li>
                                    <li style={{ color: '#105c93' }} className='p-2 rounded-pill ps-2 align-items-center'>
                                        <a className='text-decoration-none fw-semibold fs-5' href="https://www.tutorialspoint.com/java/index.htm" target='__blank'> Java Tutorials on Tutorials Point</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="width mt-4">
                <h5 className='text-center text-success'>Go To <i class="bi bi-hand-index-thumb"></i></h5>
                <div className=' my-4 d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column flex-sm-row'>

                    <Link className='text-decoration-none me-3 border p-2 shortcut-menu m-1' to='/health'>Health page</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/'>Home page</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/hr-interview'>HR Interview</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/video-courses'>Video Courses</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/practice'>Practice Sites</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/tech-interview'>Technical Interview</Link>
                </div>
            </div>
            <div style={{position:'relative'}} className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default TextCourse
