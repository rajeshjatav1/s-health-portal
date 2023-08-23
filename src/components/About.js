import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (

        <>
            <div className='about_container'>
                <div>
                    <Navbar />
                </div>
                <div class="width mt-4 border border-dark rounded ">
                    <div className='about_container_inner clearfix'>
                        <div className='p-4'>
                            <h5>
                                I developed this website for students who usually face common health related problems, when i was a
                                student i faced many health related issues, i found that many students whome was studying with me was
                                also usually face some similar type of problems, so i decided to develop a platform which can help all these type of
                                student to get cause, precausions and home remedies to get relief from these problems.
                                <br /><br />
                                When i was a student i was so confused about my placement preparation where to start...? how to
                                start...? so i've added some youtube playlist and useful websites from where i've prepared, which can
                                help you to get ready for your placements
                            </h5>
                        </div>
                        <div className='text-center mt-3 image_container'>
                            <div>
                                <img className='my_image' src="/myimage.jpg" alt="" />
                            </div>
                            <div>
                                Best Regards
                                <br /> <h3 style={{ borderBottom: '2px solid green', display: 'inline-block', paddingBottom: '5px' }}>Rajesh Kumar</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>



    )
}

export default About
