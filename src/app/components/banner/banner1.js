import Image from "next/image"
import apartment1image from '../../assets/images/apartment-photo1.png'
import apartment2image from '../../assets/images/apartment-photo2.png'
import agentImage from '../../assets/images/agent-pic.png'
import 'animate.css'


const Banner1=()=>{
    return(
        <section id="banner" className="stl1 min-h-[800px] pt-[100px] relative overflow-hidden">
            <div className="container">
                <h1 className="opacity-0 absolute invisible">Your Personal Real Estate Agent</h1>
               
                <Image src={apartment1image} alt="" width={513} height={518} className="absolute left-0 bottom-0 animate__animated animate__fadeInBottomLeft animate__delay-1s"/>
                <div className="banner-wrapper relative">
                    <p className="w-[394px] text-right text-[88px] tracking-[-3.52px] font-black leading-[100%] text-black absolute left-32">Your Personal</p>
                        <div className="absolute left-1/2 -translate-x-1/2 z-10">
                            <Image src={agentImage} alt="photo of the agent" width={594.475} height={700} className="animate__animated animate__fadeInUp animate__delay-1s"/>
                       </div>
                    <p className="w-[474.913px] text-left text-[88px] tracking-[-3.52px] font-black leading-[100%] text-black z-50 absolute right-0 top-56">Real Estate Agent</p>
                        
                </div>
                <Image src={apartment2image} alt="" width={517} height={433} className="absolute right-0 bottom-0 animate__animated animate__fadeInBottomRight animate__delay-1s" />
               
                </div>
        </section>
    )
}
export default Banner1;