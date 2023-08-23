import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const ProgramPractice = () => {
   return (
      <div id='placement'>
         <div>
            <Navbar />
         </div>
         <div className='practice_sites_head_text'>
            <h3 style={{ backgroundColor: '#ffffffad' }} className='d-inline-block py-3 px-5 mx-3 rounded-2'>Programming Practice Sites</h3>
         </div>
         <div className="mt-lg-4 mt-3 width">
            <ul style={{ listStyle: "none" }} className=' p-0'>
               <div className="row text-center">
                  <li className='p-2 m-1 col-lg px-1 col-md col-sm border shadow practiceitem'>
                     <img style={{ height: '20px' }} className='bg-transparent me-2 mb-1' src="/leetcode.webp" alt="" />
                     <a className='text-decoration-none' href="https://leetcode.com/" target='__blank'>LeetCode</a>
                  </li>
                  <li className='p-2 m-1 col-lg px-1 col-md col-sm practiceitem border shadow'>
                     <img style={{ height: '25px' }} className='bg-transparent me-2 mb-1' src="/HackerRank.png" alt="" />

                     <a className='text-decoration-none' href="https://www.hackerrank.com/" target='__blank'>Hacker Rank</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '25px' }} className='bg-transparent me-2 mb-1' src="/codeforces.webp" alt="" />

                     <a className='text-decoration-none' href="https://codeforces.com/" target='__blank'>Code Forces</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '25px' }} className='bg-transparent me-2 mb-1' src="/beecrowd.png" alt="" />

                     <a className='text-decoration-none' href="https://www.beecrowd.com.br/" target='__blank'>Bee Crowd</a>
                  </li>
               </div>
               <div className="row text-center mt-3">
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '23px' }} className='bg-transparent me-1 mb-1' src="/codechef.png" alt="" />
                     <a className='ms-1 text-decoration-none' href="https://www.codechef.com/" target='__blank'>Code Chef</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '20px' }} className='bg-transparent me-1 mb-1' src="/kaggle.webp" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://www.kaggle.com/" target='__blank'>Kaggle</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '20px' }} className='bg-transparent me-2 mb-1' src="/atcoder.png" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://atcoder.jp/" target='__blank'>AtCoder</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '23px' }} className='bg-transparent me-2 mb-1' src="/topcoder.png" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://www.topcoder.com/" target='__blank'>TopCoder</a>
                  </li>
               </div>
               <div className="row text-center mt-3">
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '23px' }} className='bg-transparent me-2 mb-1' src="/coderbyte.webp" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://coderbyte.com/" target='__blank'>Coder Byte</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '23px' }} className='bg-transparent me-2 mb-1' src="/codewars.svg" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://www.codewars.com/" target='__blank'>Code Wars</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '23px' }} className='bg-transparent me-2 mb-1' src="/codinggame.png" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://www.codingame.com/" target='__blank'>Coding Game</a>
                  </li>
                  <li className='p-2 m-1 border shadow col-lg px-1 col-md col-sm practiceitem'>
                     <img style={{ height: '23px' }} className='bg-transparent me-2 mb-1' src="/geektastic.png" alt="" />

                     <a className='ms-1 text-decoration-none' href="https://geektastic.com/" target='__blank'>Geek Tastic</a>
                  </li>
               </div>
            </ul>
         </div>
         <div className="width">
            <h5 className='text-center text-success'>Go To <i class="bi bi-hand-index-thumb"></i></h5>
            <div className='text-center container my-4 d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column flex-sm-row'>

               <Link className='text-decoration-none me-3 border p-2 shortcut-menu m-1' to='/health'>Health page</Link>
               <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/'>Home page</Link>
               <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/hr-interview'>HR Interview</Link>
               <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/video-courses'>Video Courses</Link>
               <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/text-course'>Text Courses</Link>
               <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/placement/tech-interview'>Technical Interview</Link>
            </div>
         </div>
         <div className="footer">
            <Footer />
         </div>
      </div>
   )
}

export default ProgramPractice
