import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {


  return (
    
    <>
      <div className='homepage'>
      <div>
            <Navbar/>
          </div>
        <div className=''>

          <div className='homepage-content'>
            <div id='content-container' className="p-3 my-4 rounded-3 width">
              <div className="text-start">
                <h1 className='mt-2 welcome_text'>Welcome to <br /> S-Placement Portal</h1>
              </div>
              <div>
                <h6><i>"The Perfect Place for your Placements and Health"</i></h6>
              </div>
              <div className='explore-btn-container'>
                <a href="#placement">
                  <h4>
                    <button className='explore-btn'>Explore</button>
                  </h4>
                </a>
              </div>
            </div>

          </div>
          <div className='width py-5 clearfix' id='placement'>
            <div className="placement-left-section">
              <div>
                <h3 style={{ borderBottom: "2px solid green" }} className='placement_head_text'>Placement Preparation</h3>
              </div>
              <div>
                <p className='mt-4 pe-4'>
                  If you are looking for a place for your placement preparation, then you are on the perfect place,
                  here you can find <strong>Video Courses,</strong> <strong>Text-Based Courses,</strong> <strong>Practice Sites,</strong> <strong>Technical Interview Questions</strong> and <strong>HR Interview Questions</strong>
                </p>
              </div>
              <div>
                <h5 className='d-inline-block pe-4'>A Complete Package for all your preparation</h5>
              </div>
              <div className='explore-btn-container'>
                <Link className='text-decoration-none' to='/placement'>
                  <h4>
                    <button className='explore-btn'>Prepare</button>
                  </h4>
                </Link>
              </div>
            </div>
            <div className="placement-right-section"></div>
          </div>
          <hr />
          <div id='health' className='width py-5 clearfix'>
            <div className="health_left_section">

            </div>
            <div className="health_right_section">
              <div>
                <h3 style={{ borderBottom: '2px solid green', display: 'inline-block', paddingBottom: '5px' }} >Health</h3>
              </div>
              <div className='mt-4'>
                <p>Here is a <strong> great news</strong> for you, i've done a survey and i found that these disease are usually faced by <strong> students</strong> in their college or school life,</p>
              </div>
              <div>
                <p>You will find here some <strong>common students health issues,</strong> their <strong>symptoms</strong> and <strong> home solution,</strong> go and explore</p>
              </div>
              <div>
                <h5 className='d-inline-block pe-4'>A Complete Package for all your health</h5>
              </div>
              <div className='explore-btn-container'>
                <Link className='text-decoration-none' to='/health'>
                  <h4>
                    <button className='explore-btn'>Be Healthy</button>
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='footer' >
        <Footer />
      </div>
    </>
  );
}

export default App;
