import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  // const [message,setMessage] = useState('');
  // useEffect(()=>{
  //   if(localStorage.getItem('access_token')==null){
  //     window.location.href='/'
  //   }
  //   else{
  //     (async () =>{
  //       try {
  //         const {data} = await axios.get('http://localhost:3000/home',{
  //           headers:{
  //             'Content-Type': 'application/json'
  //           }
  //         });
  //         setMessage(data.message);
  //       }
  //       catch(e){
  //         console.log('not auth')
  //       }
  //     })()
  //   };
  // },[]);
  return (
    <>
      <div id="health" className=''>
        <div>
          <Navbar />
        </div>
        <div className='mx-2 d-flex align-items-center mt-5 d-lg-block d-none'>
          <div style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className="container shadow border p-3 my-4 rounded-5">
            <div className="text-center mt-2">
              <h5 className='mt-2'>Welcome to S-Health Portal <br />
                This portal is mainly developed for Students who face heath related common problems,
                We've also added some important materials for your placement preparation
                if you are facing any health or placement related issue then you are on right place</h5>
            </div>
            <div className='text-center d-flex justify-content-center flex-column mt-2'>
              <div className='fs-4'>
                <h5 style={{ backgroundColor: '#0c0c0c70' }} className='mt-5 p-3 rounded-4 text-light'>Select what you want to study about</h5>
              </div>
              <div className=''>
                <div style={{ transitionProperty: 'all', transitionDuration: '.5s', color: '#105c93' }} className='p-2 pagelink rounded-pill fw-semibold'>
                  <Link className='text-decoration-none' to='/health'>
                    Health</Link><br />
                </div>
                <div style={{ transitionProperty: 'all', transitionDuration: '.5s', color: '#105c93' }} className="p-2 pagelink rounded-pill fw-semibold">
                  <Link className='text-decoration-none' to='/placement'> Placement Preparation</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="d-lg-none d-block container m-0 p-3 w-100 mobilehome">
          <div style={{ backgroundColor: '#dcebd7', color: '#105c93' }} className="container shadow border p-3 mt-3 rounded-5">
            <div className="text-center mt-2">
              <h5 style={{fontFamily:'Dongle, serif'}} className='mt-2 fs-3'>Welcome to S-Health Portal <br />
                This portal is mainly developed for Students who face heath related common problems,
                We've also added some important materials for your placement preparation
                if you are facing any health or placement related issue then you are on right place</h5>
            </div>
            <div className='text-center d-flex justify-content-center flex-column mt-2'>
              <div className='fs-4'>
                <h6 style={{ backgroundColor: '#0c0c0c70' }} className='mt-5 p-3 rounded-4 text-light'>Select what you want to study about</h6>
              </div>
              <div className=''>
                <div style={{ transitionProperty: 'all', transitionDuration: '.5s', color: '#105c93' }} className='p-2 pagelink rounded-pill fw-semibold'>
                  <Link className='text-decoration-none' to='/health'>
                    Health</Link><br />
                </div>
                <div style={{ transitionProperty: 'all', transitionDuration: '.6s', color: '#105c93' }} className="p-2 pagelink rounded-pill fw-semibold">
                  <Link className='text-decoration-none' to='/placement'> Placement Preparation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer' >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
