import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const VideoCourse = () => {
    return (
        <div id='placement'>
            <div>
                <Navbar />
            </div>
            <div className="fw-bold video_courses_head_text">
            <h3 style={{ backgroundColor: '#ffffffad' }} className='d-inline-block py-3 px-5 mx-3 rounded-2'>Video Courses</h3>
            </div>
            <div className='row mt-3 margin-auto m-2'>
                <div className='col-lg p-3 m-1 rounded-4 border'>
                    <div className='card-img text-center'>
                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/C.png" alt="" />
                    </div>
                    <p className='mt-3 text-center'>C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972</p>
                    <h2 style={{ cursor: 'pointer', transitionProperty: 'all', transitionDuration: '0.9s' }} className='mt-2 text-center p-2 rounded-pill coursehead' data-bs-toggle='modal' data-bs-target='#cmodal'>C Language Tutorials</h2>
                    <div class="modal fade" id="cmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='card-img text-center'>
                                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/C.png" alt="" />
                                    </div>
                                    <h2 style={{ backgroundColor: '#007a803b' }} className='mt-3 text-center p-2 rounded-pill'>C Language Tutorials</h2>
                                    <ul className='mt-4 courselist'>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=Bjzfag1zZPg&list=PLe_7x5eaUqtWp9fvsxhC4XIkoR3n5A-sF" target='__blank'>C By Sourabh Shukla<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=7Dh73z3icd8&list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" target='__blank'>C By Code With Harry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=irqbmMNs2Bo" target='__blank'>C By Apna College<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=EjavYOFoJJ0&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" target='__blank'>C By Jenny's Lecture<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=Bz4MxDeEM6k&list=PL_c9BZzLwBRKKqOc9TJz1pP0ASrxLMtp2" target='__blank'>C By Caleb Curry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.mygreatlearning.com/academy/learn-for-free/courses/c-for-beginners1" target='__blank'>C from MyGreatleaning with Certification</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className='col-lg p-3 m-1 rounded-4 border'>
                    <div className='card-img text-center'>
                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/C++.png" alt="" />
                    </div>
                    <p className='mt-2'>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs</p>
                    <h2 style={{ cursor: 'pointer', transitionProperty: 'all', transitionDuration: '0.9s' }} className='mt-2 text-center p-2 rounded-pill coursehead' data-bs-toggle='modal' data-bs-target='#c++modal'>C++ Tutorials</h2>
                    <div class="modal fade" id="c++modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='card-img text-center'>
                                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/C++.png" alt="" />
                                    </div>
                                    <h2 style={{ backgroundColor: '#007a803b' }} className='mt-3 text-center p-2 rounded-pill'>C++ Tutorials</h2>
                                    <ul className='mt-4 courselist'>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=Iuo9PpGE04Y&list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF" target='__blank'>C++ By Sourabh Shukla<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=j8nAHeVKL08&list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL" target='__blank'>C++ By Code With Harry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target='__blank'>C++ By Apna College<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=oOmbSpOzvYg&list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee" target='__blank'>C++ By Jenny's Lecture<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=_bYFu9mBnr4&list=PL_c9BZzLwBRJVJsIfe97ey45V4LP_HXiG" target='__blank'>C++ By Caleb Curry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-c" target='__blank'>C++ from MyGreatleaning with Certification</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg col-lg p-3 m-1 rounded-4 border'>
                    <div className='card-img text-center'>
                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/csharp.png" alt="" />
                    </div>
                    <p className='mt-2'>C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework. C# is used to develop web apps, desktop apps, mobile apps, games.</p>
                    <h2 style={{ cursor: "pointer", transitionProperty: 'all', transitionDuration: '0.9s' }} className='mt-2 text-center coursehead rounded-pill p-2' data-bs-toggle='modal' data-bs-target='#csharpmodal'>C-Sharp Tutorials</h2>
                    <div class="modal fade" id="csharpmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='card-img text-center'>
                                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/csharp.png" alt="" />
                                    </div>
                                    <h2 style={{ backgroundColor: '#007a803b' }} className='mt-3 text-center p-2 rounded-pill'>C-Sharp Tutorials</h2>
                                    <ul className='mt-4 courselist'>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=SuLiu5AK9Ps" target='__blank'>C-Sharp By Code With Harry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=kdPtNMb8tPw" target='__blank'>C-Sharp By Intellipaat<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=Z5JS36NlJiU" target='__blank'>C-Sharp By dotnet<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=SXmVym6L8dw&list=PLAC325451207E3105" target='__blank'>C-Sharp By kudvenkat<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=GhQdlIFylQ8&t=1625s" target='__blank'>C-Sharp By freeCodeCamp<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.eduonix.com/courses/Software-Development/Learn-C-Sharp-Programming-From-Scratch" target='__blank'>C-Sharp from eduonix with Certification</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row mt-5 margin-auto m-2'>
                <div className='border col-lg col-lg p-3 m-1 rounded-4'>
                    <div className='card-img text-center'>
                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/python.png" alt="" />
                    </div>
                    <p className='mt-2'>Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language. It was created by Guido van Rossum during 1985- 1990</p>
                    <h2 style={{ cursor: "pointer", transitionProperty: 'all', transitionDuration: '0.9s' }} className='mt-2 text-center coursehead rounded-pill p-2' data-bs-toggle='modal' data-bs-target='#pythonmodal'>Python Tutorials</h2>
                    <div class="modal fade" id="pythonmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='card-img text-center'>
                                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/python.png" alt="" />
                                    </div>
                                    <h2 style={{ backgroundColor: '#007a803b' }} className='mt-3 text-center p-2 rounded-pill'>Python Tutorials</h2>
                                    <ul className='mt-4 courselist'>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=MpEldU7Z_Wc&list=PL7ersPsTyYt26II5XjrZiRkxW11BaejOl" target='__blank'>Python By Sourabh Shukla<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" target='__blank'>Python By Code With Harry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3" target='__blank'>Python By Telusko<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=AkffMtK5oHs&list=PLmRclvVt5DtmcLF3ywxKg692lhfD6SUOr" target='__blank'>Python By Code It Up<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=WGJJIrtnfpk&list=PL9ooVrP1hQOE4KoZLUP4LgBwFH2IJCQs6" target='__blank'>Python By edureka!<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.mygreatlearning.com/python/free-courses" target='__blank'>Python from MyGreatleaning with Certification</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg col-lg p-3 m-1 rounded-4 border'>
                    <div className='card-img text-center'>
                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/Java.png" alt="" />
                    </div>
                    <p className='mt-2'>Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.</p>
                    <h2 style={{ cursor: "pointer", transitionProperty: 'all', transitionDuration: '0.9s' }} className='mt-2 text-center coursehead rounded-pill p-2' data-bs-toggle='modal' data-bs-target='#javamodal'>Java Tutorials</h2>
                    <div class="modal fade" id="javamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='card-img text-center'>
                                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/Java.png" alt="" />
                                    </div>
                                    <h2 style={{ backgroundColor: '#007a803b' }} className='mt-3 text-center p-2 rounded-pill'>Java Tutorials</h2>
                                    <ul className='mt-4 courselist'>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/@javabysaurabhshuklasir3459/playlists" target='__blank'>Java By Sourabh Shukla<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" target='__blank'>Java By Code With Harry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" target='__blank'>Java By Apna College<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=xwga58I1S94&list=PLmRclvVt5DtnqhXTJwd-oqVRwO3bLZCGV" target='__blank'>Java By Code It Up<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=hBh_CC5y8-s&list=PL9ooVrP1hQOEe9EN119lMdwcBxcrBI1D3" target='__blank'>Java By edureka!<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.mygreatlearning.com/academy/learn-for-free/courses/java-programming" target='__blank'>Java from MyGreatleaning with Certification</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg col-lg p-3 m-1 rounded-4 border'>
                    <div className='card-img text-center'>
                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/html5.png" alt="" />
                    </div>
                    <p className='mt-2'>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.</p>
                    <h2 style={{ cursor: "pointer", transitionProperty: 'all', transitionDuration: '0.9s' }} className='mt-2 text-center coursehead rounded-pill p-2' data-bs-toggle='modal' data-bs-target='#htmlmodal'>HTML Tutorials</h2>
                    <div class="modal fade" id="htmlmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='card-img text-center'>
                                        <img style={{ height: '100px', width: 'auto' }} className='card-img' src="/html5.png" alt="" />
                                    </div>
                                    <h2 style={{ backgroundColor: '#007a803b' }} className='mt-3 text-center p-2 rounded-pill'>HTML Tutorials</h2>
                                    <ul className='mt-4 courselist'>

                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=BsDoLVMnmZs&t=225s&pp=ygUbaHRtbCB0dXRvcmlhbCBmb3IgYmVnaW5uZXJz" target='__blank'>HTML By Code With Harry<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://i.ytimg.com/vi/HcOc7P5BMi4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhPX6wxKBrgd2wX8UgbzrzKb5Jdw" target='__blank'>HTML By Apna College<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=byTOONVJn-k&pp=ygUbaHRtbCB0dXRvcmlhbCBmb3IgYmVnaW5uZXJz" target='__blank'>HTML by Thapa Technical<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=YR7q48s2QoU&pp=ygUbaHRtbCB0dXRvcmlhbCBmb3IgYmVnaW5uZXJz" target='__blank'>HTML By College Wallah<i class="bi bi-youtube ms-2 pt-4"></i></a>
                                        </li>
                                        <li className='p-2 rounded-pill'>
                                            <a className='text-decoration-none ms-2' href="https://www.youtube.com/watch?v=x9bTBcron78&list=PLrjkTql3jnm_jANGCBtfgDilMZy0Ne_7o" target='__blank'>HTML By Education 4u</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <h5 className='text-center text-success'>Go To <i class="bi bi-hand-index-thumb"></i></h5>
                <div className='text-center container my-4 d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column flex-sm-row'>

                    <Link className='text-decoration-none me-3 border p-2 shortcut-menu m-1' to='/health'>Health page</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/'>Home page</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/hr-interview'>HR Interview</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/text-course'>Text Courses</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/practice'>Practice Sites</Link>
                    <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/tech-interview'>Technical Interview</Link>
                </div>
            </div>
            <div style={{position:'relative'}} className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default VideoCourse
