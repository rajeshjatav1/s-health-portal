import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SkinInfection = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container">
                <div style={{ backgroundColor: '#dcebd7', color: 'green', height: 'auto' }} className='p-3 py-4 rounded-4 shadow  my-5 rounded-4 container'>
                    <div className="text-center mb-3">
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
                                <iframe width="100%" height="300px" className='rounded-5' src="https://www.youtube.com/embed/rqtAEd-pHC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            )
                        }
                    </div>
                    <p>
                        मौसम कोई भी हो स्किन इंफेक्शन कभी भी हो सकता है और ऐसा होने पर कई बार ऐसी हालत हो जाती है कि उठने-बैठने से लेकर चलने तक में परेशानी होने लगती है। ऐसे में कुछ घरेलू उपाय इंफेक्शन को जल्दी ठीक करने में मदद कर सकते हैं।
                    </p>
                    <ul>
                        <li>
                            दही
                            <p>
                                दही या अन्य प्रोबायोटिक प्रॉडक्ट्स में गुड बैक्टीरिया होते हैं, ये बैड बैक्टीरिया को दूर कर इंफेक्शन से लड़ने में मदद करते हैं।
                            </p>
                        </li>
                        <li>
                            ऐपल साइडर विनेगर
                            <p>
                                इस सिरके में ऐंटीफंगल प्रॉपर्टीज होती हैं। एक कटोरी में हल्का गर्म पानी लें और उसमें एक टेबलस्पून सेब का सिरका डालें। इसे रुई की मदद से प्रभावित हिस्से पर लगाएं। कुछ ही दिनों में इंफेक्शन दूर हो जाएगा।
                            </p>
                        </li>
                        <li>
                            टी ट्री ऑइल
                            <p>
                                टी ट्री ऑइल में भी ऐंटीबैक्टीरियल प्रॉपर्टीज होती हैं। यह बैक्टीरिया को मारकर इंफेक्शन को दूर करने में मदद करता है, साथ ही में स्किन को हेल्दी बनाए रखता है। इस ऑइल को रुई की मदद से दिन में दो से तीन बार लगाएं।
                            </p>
                        </li>
                        <li>
                            हल्दी
                            <p>
                                हल्दी के पाउडर को हल्के गर्म पानी के साथ मिलाकर पेस्ट तैयार करें। इसे इंफेक्शन वाले स्थान पर लगाएं और रुई रखकर इसे पट्टी से बांध लें। दिन में दो बार ऐसा करें। इससे न सिर्फ इंफेक्शन दूर होगा बल्कि स्किन पर दाग भी नहीं पड़ेगा।
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>

        </div>
    )
}

export default SkinInfection
