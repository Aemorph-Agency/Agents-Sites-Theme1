import Image from "next/image";
import apartment1image from '../../assets/images/apartment-photo1.png';
import apartment2image from '../../assets/images/apartment-photo2.png';
import agentImage from '../../assets/images/agent-pic.png';

const Banner1=()=>{
    return(
        <section id="banner" className="stl1 min-h-[800px] pt-[100px] relative">
            <div className="container">
                <Image src={apartment1image} width={513} height={518} className="absolute left-0 bottom-0"/>
                <Image src={apartment2image} width={517} height={433} className="absolute right-0 bottom-0"/>
                <Image src={agentImage} alt="photo of the agent" width={594.475} height={700} className="absolute left-1/2 -translate-x-1/2"/>
            </div>
        </section>
    )
}
export default Banner1;