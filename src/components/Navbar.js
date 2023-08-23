import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
const Navbar = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    scrollToTop();
  }, []);
  // const [isAuth,setIsAuth] = useState(false);
  // useEffect(()=>{
  //   if(localStorage.getItem('access_token')!==null){
  //     setIsAuth(true);
  //   }
  // },[isAuth]);

  // toggle mode

  // const togglemode = () => {
  //   let img = document.getElementById('toggle-img');
  //   let content = document.getElementById('content-container');
  //   if (document.body.style.backgroundColor == 'rgb(195, 224, 195)') {
  //     document.body.style.backgroundColor = '#09083c';
  //     content.style.backgroundColor = '#09083c';
  //     content.style.color = 'white'
  //     document.body.style.color = 'white'
  //     img.src = 'light-mode.png'
  //   }
  //   else {
  //     document.body.style.backgroundColor = 'rgb(195, 224, 195)';
  //     content.style.backgroundColor = 'rgb(195, 224, 195)';
  //     content.style.color = 'blue'
  //     document.body.style.color = 'black'
  //     img.src = 'dark-mode.png'
  //   }
  // }
  return (
    <div>
      <nav className='pt-3' id="navbar">
        <div className='width nav-container'>
          <ul style={{paddingLeft:'0'}}>

            {/* {isAuth ? <li><Link to="/home">Home</Link></li> :null} */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a className='text-nowrap' href="https://docs.google.com/forms/d/e/1FAIpQLSd_2Tp-8DxFwaNP6WYEZw5r5MWrWaiwHuRy1DRs6qxvJxQVqg/viewform?usp=sf_link" target="__blank">Contact us</a></li>
          </ul>
        </div>
      </nav>
      {/* <div className="mode text-end me-2 mt-2">
        <button  id='toggle-dark-mode' className='p-1 px-2 rounded-3'>
          <img id='toggle-img' style={{ height: '30px' }} src="/dark-mode.png" alt="Switch Mode" />
        </button>
      </div> */}
    </div>
  )
}

export default Navbar
