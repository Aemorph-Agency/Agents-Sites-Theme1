import Image from "next/image"
import sampleImage from '../assets/images/blogimage.png';
import sampleBlogImage from '../assets/images/pt-2.jpg';
import '../styles/blogsingle.css';
import Icons from "../components/icons";
import AgentProfileBlock from "../components/agentprofileSection";
import '../globals.css';
import '../styles/condos-single.css';

export default function BlogSingle(){
    return(
       <>
       <section className="pt-[100px]">
           <div className="container">

                <div className="breadcrumbs flex gap-[15px] items-center mt-[50px] mb-4">
                    <Icons iconName="house"/>
                    /
                    <a className="text-sm leading-[150%] font-normal">New Launch Condos</a>
                </div>
                <h2 className="text-[64px] font-black leading-[100%] -tracking-[2.56px]">Blossoms by the Park</h2>

                
                 <div className="mt-[44px] mb-[30px]">
                 <BannerImageGallery_1/>
                 </div>


                 <div className="desktop-toc toc rounded-full p-2 gap-[5px]">
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Review</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Brochure</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Amenities</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Balanced Units</button> 
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Developer</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Elevation Chart</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Floor Plans</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Gallery</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Location</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Pricing</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Project Details</button>
                        <button className="px-3 py-2 toc-item bg-white rounded-full transition  duration-300 ease-in-out text-clr100 text-sm font-medium leading-[86%] -tracking-[0.14px] text-center"><span>#</span>Showflat</button> 
                 </div>
               
           </div>
        </section>

        <section>
            <div className="container">
                <div id="condo-article" className="flex gap-10">
                    <div>
                            <div className="expandable-text">
                                <p> Watten House stands as a beacon of luxury and sophistication within the esteemed Bukit Timah district. Developed by UOL Group and Singapore Land Group, this freehold condominium offers a rare opportunity for homeowners to own a generational asset in a prestigious address. Boasting 180 luxurious units with spacious layouts and private lifts, Watten House ensures residential bliss and exclusivity for its residents. Its prime location, coupled with seamless connectivity to transportation hubs </p>
                            </div>                   
                    </div>
                </div>
            </div>
        </section>

        
</>

        
    )

}

const 



const BannerImageGallery_1=()=>{
    return(
        <div className="flex gap-6 h-[486px]">
            <div className="w-1/2 relative overflow-hidden rounded-[10px]">
                <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0"/>
            </div>
            <div className="grid grid-cols-2 gap-6 w-1/2">
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
            </div>
        </div>
    )
}