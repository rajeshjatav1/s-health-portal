import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Cough = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='my-5 text-light rounded-4 container'>
                <div style={{ backgroundColor: '#dcebd7', color: 'green', height: 'auto' }} className='p-3 py-4 rounded-4 shadow  my-5 rounded-4 container'>
                    <div className="text-center">
                        {
                            loading ? (
                                <>
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <div className="">
                                        Please wait...
                                    </div>
                                </>
                            ) : (

                                <iframe width="100%" className='rounded-4' height="300px" src="https://www.youtube.com/embed/KBCtrjhnLF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            )
                        }
                    </div>
                    <p className='mt-3'>खांसी होना बहुत ही आम बात है। खांसी बच्चों से लेकर बुजुर्गों तक को हो सकती है। मौसम में जरा से भी बदलाव, या फिर अन्य कारणों से लोगों को बराबर खांसी हो जाती है। खांसी होने पर गले में खराश और दर्द भी होने लगता है, लेकिन क्या आप जानते हैं कि खांसी का इलाज घर पर ही असरदार घरेलू नुस्खों (Home Remedies) से कर सकते  हैं।</p>
                    <br />
                    <ul>
                        <p>खांसी मुख्यतः दो प्रकार की होती हैः-</p>
                        <li> सूखी खांसी (Dry cough)</li>
                        <li> बलगम युक्त खांसी (Wet cough)</li>
                    </ul>
                    <br />

                    <p>खांसी का घरेलू इलाज करने के उपाय</p>
                    <ul>
                        <li>शहद के सेवन से सूखी खांसी का इलाज - सूखी खांसी में शहद बहुत ही लाभदायक होता है। एक चम्मच शहद को गर्म दूध में मिलाकर पिएं। यह खांसी से आराम दिलाता है।</li>
                        <li>तुलसी के प्रयोग से - तुलसी की पत्तियों का रस को अदरक के रस के साथ मिलाकर शहद के साथ खाएं।</li>
                        <li>अदरक से - अदरक को पानी में अच्छी तरह उबाल लें। जब काढ़ा बनकर तैयार हो जाए, तब दो चम्मच शहद मिलाकर पीने से खांसी में आराम मिलता है।</li>
                        <li>नमक से - एक गिलास गर्म पानी में एक चम्मच नमक मिलाकर सुबह-शाम गरारा करें। इससे सूखी खांसी से आराम मिलता है।</li>
                        <li>प्याज से - आधा चम्मच प्याज का रस, और एक चम्मच शहद मिलाकर दिन में दो बार लेने से खांसी में आराम मिलता है।</li>
                        <li>हल्दी से - हल्दी में एंटीबैक्टेरियल, एन्टीवायरल एवं सूजनरोधी गुण पाए जाते हैं। एक चम्मच हल्दी और अजवायन को एक गिलास पानी में उबालें। जब यह पानी उबलकर आधा हो जाए, तब आधा चम्मच शहद मिलाकर दिन में दो बार सेवन करें।</li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Cough
