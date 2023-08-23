import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const Malaria = () => {
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
                                <iframe className='rounded-3' width="100%" height="300px" src="https://www.youtube.com/embed/AkZfJjhKqKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            )
                        }
                    </div>
                    <div>
                        <div className='mt-2'>
                            <p>
                                मलेरिया एक ऐसा रोग है जिसमे रोगी को सर्दी और सिरदर्द के साथ बार-बार बुखार आता है। इसमें बुखार कभी कम हो जाता है तो कभी दुबारा आ जाता है। गंभीर मामलों में रोगी कोमा में चला जाता है या उसकी मृत्यु तक हो जाती है। मलेरिया प्लाज़्मोडियम नामक परजीवी के कारण होता है। मलेरिया मादा एनोफेलीज मच्छर के काटने से शुरू होता है जो इस परजीवी को शरीर में छोड़ता है।
                            </p>
                        </div>
                        <div>
                            <h5>
                                लक्षण
                            </h5>
                            <p>
                                मलेरिया के प्रारंभिक लक्षण
                            </p>
                            <ul>
                                <li>
                                    शरीर का तापमान बढ़ना (बुखार)
                                </li>
                                <li>
                                    सिरदर्द
                                </li>
                                <li>
                                    पसीना आना
                                </li>
                                <li>
                                    ठंड लगना
                                </li>
                                <li>
                                    उल्टी होना
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <h5> बचाव</h5>
                           
                            </div>
                            <div>
                            मलेरिया को होने से रोकने का सबसे अच्छा तरीका है मछरों को पनपने और काटने से रोकना।
                            </div>
                            <div>
                                <ul>
                                    <li>
                                    जितना संभव हो उतना ही घर के अंदर रहे, विशेष रूप से रात के समय जब मच्छर अधिक सक्रिय होते हैं। 
                                    </li>
                                    <li>
                                    मच्छरदानी का उपयोग करें।
                                    </li>
                                    <li>
                                    ऐसे कपडे पहनें जो आपके शरीर के अधिकांश भाग को ढक सके।
                                    </li>
                                    <li>
                                    यदि आप पिकारिडिन-आधारित रिपेलेंट चुनते हैं, तो आपको उसे हर कुछ घंटों में पुन: लगाने की आवश्यकता होगी। 
                                    </li>
                                    <li>
                                    कपड़ों पर परमेथ्रिन लगाएं। 
                                    </li>
                                    <li>
                                    वर्तमान में मलेरिया से सुरक्षा प्रदान कराने वाली कोई भी वैक्सीन उपलब्ध नहीं है, इसलिए आपको रोग होने की संभावना को कम करने के लिए एंटीमलेरियल दवा लेनी चाहिए।
                                    </li>
                                    <li>
                                    कीट रिपेलेंट परमेथ्रिन के साथ मच्छरदानी का इस्तेमाल करें। 
                                    </li>
                                    <li>
                                    डीईईट या पिकारिदिन युक्त कीट से बचाने वाली क्रीम का प्रयोग करें। ये त्वचा पर सीधे लगाईं जाती है (आपके मुंह और आंखों को छोड़कर)।
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Malaria
