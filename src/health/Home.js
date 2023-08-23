import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div id="health">
        <div>
          <Navbar />
        </div>
        <div class="width">
          <div  className="shadow-lg my-4 p-2">
            <div className=' fw-semibold fs-5 p-2'>
              <p className='m-0'> Welcome dear reader, we hope our content will make you healthy soon, do not forget to read daily health tips</p>
            </div>
            <div>
              <ul className='' id="list">
                <li><Link className='text-decoration-none ' to="/health/cold">Cold (सर्दी)</Link></li>
                <li><Link className='text-decoration-none ' to="/health/cough" >Cough (खाँसी)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/fever" >Fever (बुखार)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/allergies" >Allergies</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/headache" >Headaches (सिर दर्द)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/skin-infection" >Skin infection (त्वचा संक्रमण)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/digestion" >Digestion (पाचन)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/skin-problems" >Skin Problems (त्वचा संबंधी समस्याएं)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/hair-loss" >Hair loss (बालों का झड़ना)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/sleep-issue" >Sleep Issue (नींद की समस्या)</Link></li>
                <li><Link className='text-decoration-none  ' to="/health/malariya" >Malaria (मलेरिया)</Link></li>
                <li><Link className='text-decoration-none  ' to="/" >Typhoid (टाइफाइड)</Link></li>
                <li><Link className='text-decoration-none ' to="/" >Tongue Ulcers (जीभ के छाले)</Link></li>
                <li><Link className='text-decoration-none ' to="/" >Conjunctivitis (आँख आना)</Link></li>
                <li><Link className='text-decoration-none ' to="/" >Concentration Issue (एकाग्रता की समस्या)</Link></li>
                <li><Link className='text-decoration-none ' to="/" >Extra usage of social media (सोशल मीडिया का अधिक प्रयोग)</Link></li>
                <li><Link className='text-decoration-none ' to="/" >Pimples (चहरे पर दाने)</Link></li>
              </ul>
              <p style={{color:'#ad0000'}} className='m-0 ms-3'>Note - These are only few diseades that i found in my survey</p>

            </div>
          </div>
          <div className='text-center d-flex d-md-flex d-sm-flex flex-lg-row flex-md-row flex-column'>
            <Link className='text-decoration-none me-3 border p-2 shortcut-menu m-1' to='/placement'>Go to placement page</Link>
            <Link className='text-decoration-none border p-2 shortcut-menu me-3 m-1' to='/'>Go to Home page</Link>
          </div>
        </div>
        
      </div>
      <div className='mt-3 footer'>
          <Footer />
        </div>
    </>

  )
}

export default Home
