import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const SkinProblems = () => {
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
                                <iframe width="100%" height="300px" className='rounded-3' src="https://www.youtube.com/embed/7BRePzGZtUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            )
                        }
                    </div>
                    <div>
                        <div>
                            <p>
                                त्वचा की देखभाल हमारे रोज़ के ज़रूरी कामों में से एक होना चाहिए। स्वस्थ खाना, एक्सरसाइज़, स्वस्थ रहन-सहन, रोज़ाना मेडिटेशन और प्रणायाम के साथ रोज़ क्लीनज़िंग, मॉइश्चराइज़िंग और धूप से बचाव, कुछ ऐसी चीज़ें हैं जिससे हमारी त्वचा स्वस्थ और उसमें चमक बरकरार रहेगी।
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    पिम्पल्स
                                    <ol style={{ listStyle: 'number' }}>
                                        <li>
                                            एलोवेरा में हल्दी मिलाकर पेस्ट बना लें। हल्दी में एंटीबैकटीरियल तत्व होते हैं, वहीं एलोवेरा घाव को भरता है।
                                        </li>
                                        <li>
                                            नीम की पत्तियों को पीसकर पेस्ट बना लें। चेहरे पर स्टीम लेने के बाद इस पेस्ट को लगा लें। नीम पिम्पल्स को दूर करने में काफी मददगार होता है
                                        </li>
                                        <li>
                                            क्लाइनडामाइसिन युक्त जेल दिन में दो बार पिम्पल पर लगाएं। ये जल्द ही इसे सुखा देगा।
                                        </li>
                                    </ol>
                                </li>
                                <li className='mt-2'>
                                    एक्ने
                                    <ol>
                                        <li>
                                            एलोवेरा जेल, चंदन और संतरे के छिलके के पाउडर को मिलाकर पेस्ट बना लें। इससे एक्ने जल्दी कम हो जाते हैं।
                                        </li>
                                        <li>
                                            टी-ट्री ऑइल से दिन में दो बाल एक्ने को साफ करें और रात को सोने से पहले उस पर एडाफेरिन जेल लगाएं।
                                        </li>
                                    </ol>
                                </li>
                                <li className='mt-2'>
                                    फटे होठों के लिए
                                    <ol>
                                        <li>
                                            जितनी बार हो सके होठों पर घी या फिर मक्खन लगाएं और इसे चाटे नहीं।
                                        </li>
                                        <li>
                                            कोल्ड-प्रेस्ड नारियल का तेल फटे होठों के लिए काफी फायदेमंद साबित होता है
                                        </li>
                                        <li>
                                            बादाम को पीसकर पेस्ट बना लें या फिर ताज़े दूध की मलाई को दिन 2-3 बार होठों पर लगाएं। इससे रूखापन दूर होगा।
                                        </li>
                                    </ol>
                                </li>
                                <li className='mt-2'>
                                    रूखी त्वचा
                                    <ol>
                                        <li>
                                            नहाने से पहले बादाम के तेल से मालिश करें और फिर गुगुने पानी से नहा लें। ध्यान रखें कि गर्म पानी आपकी त्वचा को और रूखा  बना देता है इसलिए गुनगुने पानी से नहाएं। नहाने के बाद नमी के लिए एक अच्छा मॉइश्चराइज़र लगाएं।
                                        </li>
                                        <li>
                                            बादाम के पेस्ट में मलाई मिलाकर इससे त्वचा पर कुछ देर मसाज करें। उसके बाद धो लें और फौरन मॉइश्चराइज़र लगा लें। साबुन का इस्तेमाल बंद कर दें क्योंकि ये त्वचा के पीएच लेवेल को प्रभावित कर और रूखा बनाता है।
                                        </li>
                                    </ol>
                                </li>
                                <li className="mt-2">
                                    गर्मी से दाने होना
                                    <ol>
                                        <li>
                                            दानों पर दिन में दो बार नीम और हल्दी का पेस्ट लगाएं। ये दोनों एंटीसेप्टिक होते हैं और दानो पैदा करने वाले कीटाणु  को मारते हैं।
                                        </li>
                                        <li>
                                            डेटॉल या सेवलोन जैसी एंटीसेप्टिक चीज़ों का इस्तेमाल न करें, क्योंकि इससे डर्माटाइटिस भी हो सकता है।
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>
    )
}

export default SkinProblems
