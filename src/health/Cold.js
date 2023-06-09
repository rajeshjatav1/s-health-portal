import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cold = () => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='my-3 text-light rounded-4 container'>

                <div style={{ backgroundColor: '#dcebd7', color: 'green', height: 'auto' }} className='p-3 py-4 rounded-4 shadow  my-5 rounded-4 container'>
                    <div className="text-center">
                        {isLoading ? (
                            <>
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div className="">
                                    Please wait...
                                </div>
                            </>
                        ) : (
                            <iframe className='rounded-3' width="100%" height="300px" src="https://www.youtube.com/embed/kXvOwXbdhPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        )}
                    </div>

                    <p className='mt-2'>जुकाम हर बदलते मौसम के साथ आने वाली समस्या है, लेकिन हमारे देश में हर परेशानी के लिए लोग डॉक्टरों के पास नहीं जाते। हमारी ही किचन में कई ऐसे घरेलु नुस्खे (Home Remedies) छिपे होते हैं जिनसे जुकाम जैसी छोटी-मोटी बीमारियां फुर्र हो जाती हैं।</p>
                    <ul>
                        <li>शहद, नींबू और इलायची का मिश्रण - आधा चम्मच शहद में एक चुटकी इलायची पाउडर और कुछ बूंद नींबू के रस की बूंदे डालिए। इस सिरप का दिन में 2 बार सेवन करें। आपको खांसी-जुकाम से काफी राहत मिलेगी।</li>
                        <li>गर्म पानी
                            जितना हो सके गर्म पानी पिएं। आपके गले में जमा कफ खुलेगा और आप सुधार महसूस करेंगे।</li>
                        <li>हल्दी वाला दूध - बचपन में सर्दियों में नानी-दादी घर के बच्चों को सर्दी के मौसम में रोज हल्दी वाला दूध पीने के लिए देती थी। हल्दी वाला दूध जुकाम में काफी फायदेमंद होता है क्योंकि हल्दी में एंटीआक्सीडेंट्स होते हैं जो कीटाणुओं से हमारी रक्षा करते हैं। रात को सोने से पहले इसे पीने से तेजी से आराम पहुचता है. हल्दी में एंटी बैक्टीरियल और एंटी वायरल प्रॉपर्टीज मौजूद रहती है जो की इन्फेक्शन से लडती है. इसकी एंटी इंफ्लेमेटरी प्रॉपर्टीज सर्दी, खांसी और जुकाम के लक्षणों में आराम पहुंचाती है.</li>
                        <li>अदरक-तुलसी - अदरक के रस में तुलसी मिलाएं और इसका सेवन करें। इसमें शहद भी मिलाया जा सकता है।</li>
                        <li>अदरक और नमक - अदरक को छोटे टुकड़ों में काटें और उसमें नमक मिलाएं। इसे खा लें। इसके रस से आपका गला खुल जाएगा और नमक से कीटाणु मर जाएंगे।</li>
                        <li>काली मिर्च - अगर खांसी के साथ बलगम भी है तो आधा चम्मच काली मिर्च को देसी घी के साथ मिलाकर खाएं। आराम मिलेगा।</li>
                        <li>गर्म पदार्थों का सेवन - सूप, चाय, गर्म पानी का सेवन करें। ठंडा पानी, मसालेदार खाना आदि से परहेज करें।</li>
                    </ul>
                </div>
            </div>
            <div style={{ position: 'relative', bottom: '0px' }} className='footer w-100'>
                <Footer />
            </div>

        </div>
    )
}

export default Cold
