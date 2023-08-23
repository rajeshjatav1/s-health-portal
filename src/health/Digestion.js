import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Digestion = () => {
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
                                <iframe className='rounded-3' width="100%" height="300px" src="https://www.youtube.com/embed/NsTvVUiWV6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            )
                        }
                    </div>
                    <div>
                        <p> अगर आप भी पेट में गैस की समस्या का समाधान तलाश रहे हैं. पेट की गैस को जड़ से खत्म करने के उपाय आप जानना चाहते हैं या इसके लिए आप गैस की टेबलेट लेते हैं, तो आपको गैस भगाने के घरेलू उपाय करने की जरूरत है
                        </p>
                        <p>
                            बाहर का खाना और फास्टफूड आजकल की जीवनशैली में शामिल हो चुके हैं, जो हमारे शरीर की पाचन क्रिया पर बुरा प्रभाव डालते हैं. विशेषज्ञों के अनुसार कम मात्रा में ही सौंफ, अदरक, दही और पपीता आदि खाने से पाचन तंत्र को स्वस्थ रखा जा सकता है.
                        </p>
                        <ul>
                            <li>
                                अदरक
                                <p>
                                    डाइजेशन के लिए इस्तेमाल किए जाने वाले पदार्थों में सबसे पहला स्थान आता है अदरक का, जिससे पाचन क्रिया में मदद मिलती है और यह सूजन और सीने में जलन रोकता है. खाना खाने के बाद अदरक और नीबू की कुछ बूदों के मिश्रण का एक घूंट आपको कई परेशानियों से दूर रख सकता है.
                                </p>
                            </li>
                            <li>
                                जीरा
                                <p>
                                    जीरा का सेवन करने से आग्नाशय के विभिन्न तत्वों का स्राव होने लगता है. इसमें कई पोषक तत्व होते हैं. आप इसे तलकर दूध, दही, शिकंजी, सलाद या सूप में पीसकर भी ले सकते हैं.
                                </p>
                            </li>
                            <li>
                                पपीता
                                <p>
                                    पपीता की गिनती डायरिया और पेट की अन्य समस्याओं का इलाज करने वाले फलों में होती है. इसे खाने से पाचन, खट्टी डकार और कब्ज में आराम मिलता है. इसका सेवन करने से पेट के विकार दूर होते हैं. केला एक ऐसा फल है, जो जल्दी पच जाता है और तत्काल ऊर्जा प्रदान करता है. पपीता की तरह इसमें भी पेक्टीन होता है, जिससे पेट के विकार दूर होते हैं
                                </p>
                            </li>
                            <li>
                                इलायची
                                <p>
                                    बड़ी इलायची को गरम मसाले में हर घर में उपयोग किया जाता है ये आसानी से मिल भी जाती है। बड़ी इलायची का पाउडर बनाकर उसका सेवन मिश्री के साथ करने से डाइजेशन ठीक होता है। आधा चम्मच इलायची का पाउडर और उतनी ही मात्रा में मिश्री को एक साथ लें। इससे आपकी पाचन क्रिया में सुधार होगा
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default Digestion
