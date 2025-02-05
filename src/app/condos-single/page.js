'use client'
import React from "react";
import Image from "next/image"
import sampleImage from '../assets/images/blogimage.png';
import sampleBlogImage from '../assets/images/pt-2.jpg';
import '../styles/blogsingle.css';
import Icons from "../components/icons";
import AgentProfileBlock from "../components/agentprofileSection";
import '../globals.css';
import '../styles/condos-single.css';
import { useState } from "react";
import Icon_numberInfos from "../components/single-condos/icon_short_info";
import CondoInfoTables from "../components/single-condos/tables";
import SliderNav from "../components/single-condos/slider-nav";
import FloorPlansCarousel from "../components/single-condos/floorplans-carousel";
import UdsCarousel from "../components/single-condos/unit-ds-carousel";

export default function BlogSingle(){


    const  infos = [
        {"dataTitle":"Project: ","dataContent":"Watten House"},
        {"dataTitle":"TOP: ","dataContent":"2027"},
        {"dataTitle":"Tenure: ","dataContent":"Freehold"},
        {"dataTitle":"Landscape Architect: ","dataContent":"Henning Larsen (Previously known as Ramboll Studio Dreiseitl Singapore)"},
       
    ];

    const floorPlansInfos = [
        {"dataTitle":"Height ", "dataContent":"11 Blocks of 14 Storeys"},
        {"dataTitle":"Units Type ", "dataContent":{ "unitsType": ["3 room", "3+1 room", "4 room", "5 room", "6 room", "7 room"]}},
        {"dataTitle":"Window Types ", "dataContent":"Bay windows, Double-glazed"},
        {"dataTitle":"Flooring Material ", "dataContent":"N/A"},
    ];

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
                {selectedBanner(1)}
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
                <div id="condo-article" className="flex gap-10 pt-[45px]">
                    
                          <div>
                                <div id="short-desc">
                                <div className="expandable-text">
                            <ExpandableText content={
                             
                                    <>
                                        <p>
                                            Watten House stands as a beacon of luxury and sophistication within the esteemed Bukit Timah district. Developed by UOL Group and Singapore Land Group, this freehold condominium offers a rare opportunity for homeowners to own a generational asset in a prestigious address. Boasting 180 luxurious units with spacious layouts and private lifts, Watten House ensures residential bliss and exclusivity for its residents. Its prime location, coupled with seamless connectivity to transportation hubs, makes it an ideal choice for discerning homeowners.
                                        </p>
                                            <p>
                                            Watten House stands as a beacon of luxury and sophistication within the esteemed Bukit Timah district. Developed by UOL Group and Singapore Land Group, this freehold condominium offers a rare opportunity for homeowners to own a generational asset in a prestigious address. Boasting 180 luxurious units with spacious layouts and private lifts, Watten House ensures residential bliss and exclusivity for its residents. Its prime location, coupled with seamless connectivity to transportation hubs, makes it an ideal choice for discerning homeowners.
                                        </p>
                                        </>
                            } />
                            </div>  

                            <div className="grid grid-cols-3 gap-[30px] mt-10">
                                <Icon_numberInfos icon="expand" title="Site area" content="20,461.1 sqm / 220,243.28 sqft"/>
                                <Icon_numberInfos icon="expand" title="Total area" content="20,461.1 sqm / 220,243.28 sqft"/>
                                <Icon_numberInfos icon="condo" title="No. of Units" content="180"/>
                            </div>

                            <div className="divider-x bg-black opacity-5 w-full h-[1px] mt-10 mb-10" ></div>

                          <div className="mb-10">
                          <p>19 Nassim Hill is a soon-to-be completed upscale condominium project situated at 19 Nassim Hill, Singapore 258482 in District 10. It is set to replace the former Nassim Woods development. 1 Block of 10 Storey Residential Flats (total: 101 units) with 1 basement carpark, swimming pool and communal facilities.</p>
                          </div>

                            <CondoInfoTables infos={infos}/>
                                </div>

                                <div id="floor-plans" className="pt-[60px]" >
                                    <h2 className="text-4xl leading-[100%] -tracking-[0.72px] font-black mb-10">Floor Plans</h2>
                                   
                                    <CondoInfoTables infos={floorPlansInfos}/>
                                </div>

                                <div id="floor-plans" className="pt-[60px]" >
                                    <div className="flex justify-between gap-5 items-center mb-5">
                                        <h2 className="text-[22px] leading-[100%] -tracking-[0.44px] font-semibold">Plans Gallery</h2>
                                        <div className="floor-plans-nav">
                                            <SliderNav arrowLeftClass="floorPlansPrev" arrowRightClass="floorPlansNext"/>
                                        </div>
                                        
                                    </div>
                                    <FloorPlansCarousel/>
                                    
                                </div>


                                <div id="units" className="mt-10">
                                    <h2 className="number-of-units text-[22px] font-semibold leading-[100%] -tracking-[0.44px] text-black mb-5">180 units</h2>
                                    <div className="units-grid grid grid-cols-4 gap-[5px]">
                                            <div className="px-5 py-4 rounded-[10px]" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                                <p className="title text-sm font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">1 BED</p>
                                                <p className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-[10px]" >517 to 689 sqft</p>
                                                <p className="m-0 text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100">22 units</p>
                                            </div>
                                            <div className="px-5 py-4 rounded-[10px]" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                                <p className="title text-sm font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">1 BED</p>
                                                <p className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-[10px]" >517 to 689 sqft</p>
                                                <p className="m-0 text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100">22 units</p>
                                            </div>
                                            <div className="px-5 py-4 rounded-[10px]" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                                <p className="title text-sm font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">1 BED</p>
                                                <p className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-[10px]" >517 to 689 sqft</p>
                                                <p className="m-0 text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100">22 units</p>
                                            </div>
                                            <div className="px-5 py-4 rounded-[10px]" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                                <p className="title text-sm font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">1 BED</p>
                                                <p className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-[10px]" >517 to 689 sqft</p>
                                                <p className="m-0 text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100">22 units</p>
                                            </div>
                                            <div className="px-5 py-4 rounded-[10px]" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                                <p className="title text-sm font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">1 BED</p>
                                                <p className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-[10px]" >517 to 689 sqft</p>
                                                <p className="m-0 text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100">22 units</p>
                                            </div>
                                            <div className="px-5 py-4 rounded-[10px]" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                                <p className="title text-sm font-bold leading-[140%] -tracking-[0.14px] mb-[10px]">1 BED</p>
                                                <p className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-[10px]" >517 to 689 sqft</p>
                                                <p className="m-0 text-base font-normal leading-[140%] -tracking-[0.16px] text-clr1100">22 units</p>
                                            </div>
                                    </div>
                                </div>


                                <div id="udc" className="mt-10">
                                    <div className="flex justify-between gap-5 items-center mb-5">
                                        <h2 className="text-[22px] leading-[100%] -tracking-[0.44px] font-semibold">Unit Distribution Chart</h2>
                                        <div className="floor-plans-nav">
                                            <SliderNav arrowLeftClass="udsPrev" arrowRightClass="udsNext"/>
                                        </div>
                                    </div>
                                    <UdsCarousel/>
                                    
                                </div>


                                <div id="reviews" className="rounded-[20px] ">

                                </div>

                            </div>  
                            <div className="agent-sidebar"></div>               
                    
                </div>
            </div>
        </section>

        
</>

        
    )

}


const ExpandableText = ({ content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    // Function to toggle the expanded state
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (

            <div>
              <div className="expandable-text">
                {/* Render the content directly */}
                {isExpanded ? content : truncateJSX(content, 500)}
              </div>
  
              {/* Show "Read More" button only if content exceeds maxLength */}
              {shouldShowButton(content, 125) && (
                <button onClick={toggleExpand} className="read-more-button text-clr100 font-bold leading-[140%] -tracking-[0.18px]">
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
        
    );
  };
  
  // Helper function to truncate JSX content
  const truncateJSX = (jsx, maxLength) => {
    const text = extractTextFromJSX(jsx);
    if (text.length <= maxLength) return jsx;
  
    const truncatedText = text.slice(0, maxLength) + '...';
    return <p>{truncatedText}</p>;
  };
  
  // Helper function to extract text from JSX
  const extractTextFromJSX = (jsx) => {
    if (typeof jsx === 'string') return jsx;
    if (jsx.props && jsx.props.children) {
      return React.Children.toArray(jsx.props.children)
        .map((child) => extractTextFromJSX(child))
        .join('');
    }
    return '';
  };
  
  // Helper function to determine if the button should be shown
  const shouldShowButton = (jsx, maxLength) => {
    const text = extractTextFromJSX(jsx);
    return text.length > maxLength;
  };


function selectedBanner(style){
    if(style == 1){
        return <BannerImageGallery_1/>
    }else if(style == 2){
        return <BannerImageGallery_2/>
    }else if(style == 3){
        return <BannerImageGallery_3/>
    }else if(style == 4){
        return <BannerImageGallery_4/>
    }else{
        return <BannerImageGallery_5/>
    }
}


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

const BannerImageGallery_2=()=>{
    return(
        <div className="h-[500px] grid grid-cols-2 gap-6">
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
    )
}


const BannerImageGallery_3=()=>{
    return(
        <div className="flex gap-6 h-[486px]">
        <div className="w-1/2 relative overflow-hidden rounded-[10px]">
            <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0"/>
        </div>
        <div className="grid grid-cols-1 gap-6 w-1/2">
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


const BannerImageGallery_4=()=>{
    return(
        <div className="h-[500px] grid grid-cols-2 gap-6">
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
                <div className="relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
              
        </div>
    )
}

const BannerImageGallery_5=()=>{
    return(
        
                <div className="h-[500px] relative rounded-[10px] overflow-hidden">
                    <Image src={sampleBlogImage} alt="" className="w-full h-full object-cover absolute left-0 top-0 "/>
                </div>
                
              
    )
}