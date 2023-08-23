import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Fever = () => {
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

                    <div className="text-center mb-2">
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
                                <iframe width="100%" className='rounded-4' height="300px" src="https://www.youtube.com/embed/codQBTfknn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                            )
                        }
                    </div>
                    <div>
                        <p>बुखार और कुछ नहीं बल्कि शरीर की एक प्रक्रिया हैं, जब हमारे शरीर में कोई बाहरी संक्रमण प्रवेश कर जाता हैं तो शरीर उस संक्रमण से अपनी रक्षा करने के लिए प्रतिरोध करता हैं. इस प्रतिरोध में शरीर का तापमान काफी बढ़ जाता हैं और इसी को हम बुखार आना कहते हैं</p>
                        <p>शरीर का सामान्य तापमान 97 से 99° F के बीच होता है। बुखार 100.4° F या इससे अधिक का तापमान होता है।</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h5>तरल पदार्थों का खूब सेवन करें</h5>
                                <p>बुखार के दौरान शरीर के बढ़े हुए तापमान को कम करने के लिए अधिक पानी पीना जरूरी है। पानी नहीं पीने से डिहाइड्रेशन की समस्या हो सकती है। इसके लिए आप फलों का रस, विभिन्न तरह की चाय, काढ़ा आदि का सेवन कर सकते हैं।</p>
                            </li>
                            <li>
                                <h5>गिलोय</h5>
                                <p>
                                    गिलोय एक प्रसिद्ध घरेलू उपचार है जिसका उपयोग कई स्वास्थ्य लाभों के लिए किया जाता है। बुखार से फ्लू हो सकता है और संक्रमण से लड़ना मुश्किल हो सकता है। अगर किसी व्यक्ति की रोग प्रतिरोधक क्षमता कमजोर है, तो यह खतरा बढ़ जाता है। इसलिए गिलोय बुखार को रोकने के साथ-साथ घर पर आसानी से उसका इलाज करने में आपका मित्र बन सकता है।</p>
                            </li>
                            <li>
                                <h5>लहसुन</h5>
                                <p>

                                    लहसुन एक गर्म आयुर्वेदिक जड़ी बूटी है जो शरीर के तापमान को कम करने में मदद करती है। इसकी एंटी-बैक्टीरियल संपत्ति आपको किसी भी इम्यूनिटी को ठीक करने में मदद करेगी। कुछ अध्ययनों के अनुसार, लहसुन में एंटीबैक्टीरियल, एंटीफंगल और एंटीवायरल गुण होते हैं जो इसे बुखार सहित कई संक्रमणों से लड़ने का घरेलू उपाय बनाते हैं।</p>
                            </li>
                            <li>
                                <h5>तुलसी</h5>
                                <p>


                                    तुलसी के रस को पीने की कोशिश करें या इसे अपनी नियमित चाय में शामिल करें। यह आपके शरीर के तापमान को संतुलित करने में मदद करेगा और संक्रमण से लड़ने में भी मदद करेगा। तुलसी की बूंदों या तुलसी की चाय के साथ पानी सबसे अच्छे पेय में से एक है, जिसे आप सुबह ले सकते हैं। तुलसी में जीवाणुरोधी और एंटीवायरल गुण होते हैं, जो प्राकृतिक रूप से आपकी प्रतिरोधक क्षमता को भी बढ़ा सकते हैं। अदरक का रस निकाल लें और उसमें कुटी हुई तुलसी और थोड़ा सा शहद मिलाएं।</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Fever
