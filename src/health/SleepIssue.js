import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const SleepIssue = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
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
                                <iframe className='rounded-3' width="100%" height="300px" src="https://www.youtube.com/embed/m_ZHgD5rVPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            )
                        }
                    </div>
                    <div>
                        <div className='mt-2'>
                            <p>
                                हेल्थ एक्सपर्ट्स कहते हैं कि सामान्य तौर पर एक व्यक्ति के लिए चौबीस घंटे में कम से कम आठ घंटे की नींद जरूरी होती है. इससे कम नींद लेने पर कई तरह की दिक्कतें सामने आने लगती हैं और बढ़ती उम्र के साथ-साथ ये समस्या और भी बढ़ जाती है
                            </p>
                        </div>
                        <div>
                            <div>
                                <h5>नींद नहीं लेने के नुकसान</h5>
                            </div>
                            <div>
                                <p>
                                    आयुर्वेदिक डॉक्टर अबरार मुल्तानी के अनुसार, जब नींद पूरी नहीं होती हो हम बॉडी में एनर्जी की कमी तो महसूस करते ही हैं. साथ ही पाचन-तंत्र में गड़बड़ी और घबराहट जैसी समस्यायें भी पैदा होने लगती हैं. इसके अलावा रात में ठीक से सो न पाने के चलते हमें दिन के समय अपने रोजमर्रा के कामों में फोकस बनाये रखने में भी दिक्कत हो सकती है.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5>
                                    अच्छी नींद के लिए फॉलो करें ये टिप्स
                                </h5>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <div>
                                            <p className='m-0'>
                                                एक्सरसाइज
                                            </p>
                                        </div>
                                        <div>
                                            <p className='m-0'>
                                                अगर आपको नींद नहीं आती तो रोजाना वॉक और व्यायाम यानी एक्सरसाइज करने की आदत डाल लें. इससे आपको अच्छी नींद आएगी
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            मोबाइल से दूरी
                                        </div>
                                        <div>
                                            मोबाइल या लैपटॉप या फिर दूसरे गैजेट्स से आपकी नींद छिन सकती है. हेल्थ एक्सपर्ट्स कहते हैं कि मोबाइल वगैरह से निकलने वाली रौशनी हमारी आंखों से नींद छीन लेती है. इसलिये सोने से पहले इन गैजेट्स से दूर रहें.
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            जंक-फूड्स से बचें
                                        </div>
                                        <div>
                                            हेल्थ एक्सपर्ट्स कहते हैं कि अधिक जंक-फूड्स का सेवन नींद में खलल डाल सकता है. इसलिए आप ज्यादा तली-भुनी चीजें और जंक-फूड्स खाने से बचें.
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                        कैफीन वाली चीजों से दूरी बना लें
                                        </div>
                                        <div>
                                        पोषण आहार विशेषज्ञ कहते हैं कि कैफीन वाली चीजें जैसे चाय या कॉफी वगैरह आपकी आंखों से नींद चुरा लेती हैं. इसलिए ऐसी चीजों का सेवन न करें. खासतौर पर सोने से एक-दो घंटे पहले तो इन चीजों को कतई न लें. 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default SleepIssue
