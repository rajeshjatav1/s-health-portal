import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Headache = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container">
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
                <iframe className='rounded-4' width="100%" height="300px" src="https://www.youtube.com/embed/oObB5ODZ4Rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              )
            }
          </div>
          <p>
            कई बार धूप, गर्मी, शोर-शराबे आदि से हमारे सिर में तेज दर्द (Headache) की शिकायत हो जाती है जिस वजह से डेली रूटीन में हमें असहजता महसूस होने लगती है. ऐसे में आमतौर पर हम दर्द से जल्‍द छुटकारा पाने के लिए डिसप्रिन या किसी पेनकिलर (Pain Killer)  दवाओं का सेवन कर‍ लेते हैं. इनके सेवन से भले हमें दर्द से आराम मिल जाता है लेकिन पेन किलर का अत्‍यधिक प्रयोग हमारी सेहत को कई तरह से नुकसान पहुंचा सकते हैं. ऐसे में दर्द से उबरने के लिए हमारे पास  घरेलू नुस्‍खों का विकल्‍प मौजूद है. ये सेहत को बिना नुकसान पहुंचाए दर्द से आराम तो दिलाते ही हैं, इन्‍हें घर पर आसानी से बनाया भी जा सकता है.
          </p>
          <h6>
            सिर दर्द को दूर करने के लिए किन घरेलू नुस्‍खों (Home Remedies) को अपनाएं.
          </h6>
          <ul>
            <li>
              <h6>तुलसी </h6>
              <p>अगर आपके सिर में तेज दर्द हो रहा हो तो आप तुलसी की पत्तियों की मदद से इससे राहत पा सकते हैं. जब भी सिर में दर्द हो तो आप एक कप पानी में कुछ तुलसी की पत्त‍ियों को रखें और इन्‍हें चाय की तरह उबाल लें. इसमें शहद डालकर सेवन करें. आपको कुछ ही देर में अंतर महसूस होगा.</p>
            </li>
            <li>
              <h6>लौंग</h6>
              <p>लौंग भी सिर दर्द को कम करने में लाभदायक है. आप तवे पर लौंग की कुछ कलियों को गर्म करें और इन गर्म हो चुकी लौंग की कलियों को एक रूमाल में बांध लें. अब इस पोटली को आप कुछ कुछ देर में सूंघते रहें. ऐसा करने पर सिरदर्द में आराम मिलेगा.</p>
            </li>
            <li>
              <h6>नींद</h6>
              <p>नियमित एवं पर्याप्त मात्रा में नींद लें।</p>
            </li>
            <li>
              <h6>पानी-नियमित रुप से खाये और अपने अंदर पानी की कमी न होने दें।दिन में 10-12 गिलास पानी जरुर पियें।
              </h6>
            </li>
            <li>
              टीवी या कंप्यूटर देखना- लम्बे समय तक टीवी कम्प्यूटर न देखें।

            </li>
          </ul>
        </div>

      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default Headache
