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
import '../styles/rating.css';
import Accordion from "../components/accordion";
import LinkButton from "../widgets/LinkButton";
import '../styles/brochure.css';
import '../styles/amenities.css';
import brochureIcon from '../assets/images/brochure-icon.png'
import brochureImage from '../assets/images/brochure.png'
import buImage from '../assets/images/balanced-units.png';

import ecImage from '../assets/images/elevation-chart.png';
import InfoTables from "../components/single-condos/infoTables";

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


    const amenities=[
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
        {"icon": "pool", "title": "Swimming Pool", "content": "Infinity lap pool, kid's pool"},
    ];

    const locationTables=[
        {"title": "Area", "content":"Tanmgli"},
        {"title": "Neighborhood", "content":"Heart of the city, near Orchard Road shopping belt"},
        {"title": "Proximity to City Center", "content":"Orchard is a meagre 10-minute drive away, and both the Pan Island Expressway (PIE) and Ayer Rajah Expressway (AYE) are just 15 minutes away."},
        {"title": "Public Transportation Access", "content":"Within 5 min 3 bustops, Napier MRT station 7 min"},
        {"title": "MRT Stations", "content":"Napier"},
        {"title": "Nearby Schools", "content":"SITA Tennis Academy Centre, The Excelerate Program"},
        {"title": "Local Crime Rate", "content":"TBA"},
        {"title": "Proximity to Commercial Areas", "content":"Dempsey Hill, Holland Village, Orchard Road"},
        {"title": "Nearby Parks and Recreation", "content":"Singapore Botanical Gardens (10-min leisure walk)"},
        {"title": "Proximity to Hospitals", "content":"Gleneagles Hospital, Thomson Medical Centre"},
        {"title": "View from the Property", "content":"City sky view"},
        {"title": "Local Property Market Trends", "content":"Expected capital appreciation from Orchard rejuvenation plans"},
        {"title": "Climate and Weather Patterns", "content":"TBA"},
        {"title": "Cultural Amenities", "content":"N/A"},
        {"title": "Dining and Shopping Options", "content":"Tanglin Market Place, Tanglin Mall"},
        {"title": "Property Tax Rates", "content":"N/A"},
        {"title": "Historical Significance", "content":"TBA"},
        {"title": "Environmental Regulations", "content":"TBA"},
    ];

    const pricingTables=[
        {"title": "Sale Price", "content":"$1.18M ~ $3.37M"},
        {"title": "Price per Square Foot", "content":"S$2,129 ~ $2,953"},
        {"title": "Location-Based Price Variation", "content":"TBA"},
        {"title": "Pricing Tiers", "content":"TBA"},
        {"title": "Discounts and Offers", "content":"Contacted"},
        {"title": "Payment Plan Options", "content":"Stage Payment Under a Standard Payment Scheme (% of Purchase Price) Upon the grant of Option to Purchase 5% (Booking Fee) Upon signing of the Sale & Purchase Agreement or within B weeks from the Option date 20% less Booking Fee Completion of foundation work 10% Completion of reinforced concrete framework of unit 10% Completion of partition walls of unit 5% Completion of roofing/ceiling of unit 5% Completion of door sub-frames/ door frames, window frames, electrical wiring, internal plastering and plumbing of unit 5% Completion of car park, roads and drains serving the housing project 5% Notice of Vacant Possession (TOP) 25% On Completion date 15%"},
        {"title": "Price Increase Rate", "content":"TBA"},
        {"title": "Rental Yield", "content":"Calculated"},
        {"title": "Historical Price Trends", "content":"TBA"},
        {"title": "Price Comparisons with Similar Units", "content":"One Pearl Bank- $2,494 Sky Everton- $2,591"},
        {"title": "Financing Options Impact", "content":"TBA"},
        {"title": "Maintenance Fee Inclusion", "content":"Paid on monthly basis- TBA"},
        {"title": "Dfeposit required", "content":"TBA"},
        {"title": "Government Subsidies Impact", "content":"TBA"},
        {"title": "Market Demand Influence", "content":"N/A"},
        {"title": "Developer Reputation Impact", "content":"Premium developer: +10% price increase"},
        {"title": "Project Completion Stage Impact", "content":"TBA"},
        {"title": "Furnishing and Interior Design Cost", "content":"Furnishing and Interior Design Cost"},
        {"title": "Tax and Legal Fees", "content":"TBA"},
    ]


    const [amenitiesExpanded, setAmenitiesExpanded] = useState(false);

    const handleViewAllAmenitiesClick=()=>{
       setAmenitiesExpanded(!amenitiesExpanded);
    }
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


                                <div id="reviews-ratings" className="rounded-[20px] p-5 flex gap-[15px]">
                                    <div className="rating-info flex flex-col gap-[10px] basis-[360px]">
                                        <div className="rounded-[10px] py-5 px-8 text-center" style={{background:'rgba(255, 255, 255, 0.75)'}}>
                                            <p className="text-black leading-[100%] -tracking-[0.48px] font-medium m-0 text-2xl">Rating:9/10</p>
                                        </div>
                                       <div className="px-[30px] rounded-[10px]" style={{background:'rgba(255, 255, 255, 0.75)'}} >
                                       <Accordion title="👍 The good" content={
                                            <ul className="list-disc pl-7">
                                                <li>Efficient and square layout.</li>
                                                <li>Includes a household shelter for storage.</li>
                                                <li>Features a service yard for laundry.</li>
                                                <li>Enclosed kitchen for added privacy.</li>
                                                <li>Neatly tucked in the main door.</li>
                                                <li>Master room spacious enough for a king-size bed.</li>
                                            </ul>
                                        } />
                                       </div>
                                       <div className="px-[30px] rounded-[10px]" style={{background:'rgba(255, 255, 255, 0.75)'}} >
                                       <Accordion title="👍 The Bad" content={
                                            <ul className="list-disc pl-7">
                                                <li>Efficient and square layout.</li>
                                                <li>Includes a household shelter for storage.</li>
                                                <li>Features a service yard for laundry.</li>
                                                <li>Enclosed kitchen for added privacy.</li>
                                                <li>Neatly tucked in the main door.</li>
                                                <li>Master room spacious enough for a king-size bed.</li>
                                            </ul>
                                        } />
                                       </div>
                                       <LinkButton buttonlink="#" icon="arrowright" text="View All Launches" size="md" color="text-white" borderRadiusClass="rounded-[10px] w-full"/>
                                    </div>
                                    <div className="rating-web flex-1 rounded-[10px] py-5 px-8 text-center flex items-center justify-center"  style={{background:'rgba(255, 255, 255, 0.75)'}}>
                                        
                                            <p className="text-black leading-[100%] -tracking-[0.48px] font-medium m-0 text-2xl">Spider web goes here</p>
                                        
                                    </div>
                                </div>

                                <div id="brochure" className="bg-white rounded-[20px] p-10 flex gap-10">
                                    <div className="w-1/2 flex flex-col items-start gap-[30px] justify-center">
                                        <Icons iconName="brochure" alt="" width={50} height={64}/>
                                        <h2 className="text-black text-4xl font-semibold -tracking-[0.36px]">Blossoms by the Park Brochure</h2>
                                        <LinkButton buttonlink="#" icon="download" text="View All Launches" size="md" color="text-white" borderRadiusClass="rounded-[10px]"/>
                                    
                                    </div>
                                    <div className="w-1/2">
                                        <Image src={brochureImage} alt="" className="w-full h-full object-cover"/>
                                    </div>
                                </div>

                                <div id="amenities" className="mt-10 py-9 px-10 bg-white rounded-[20px] relative">
                                    <h2 className="text-4xl leading-[100%] -tracking-[0.72px] font-black mb-10">Amenities</h2>
                                    <div className={`amenities-grid relative pb-20  ${amenitiesExpanded ? 'expanded': ''}`}>
                                            <div className="grid grid-cols-4 gap-[30px]">
                                                {amenities.map((amenity, index) => (
                                                    <div key={index}>
                                                        <div className="text-clr100 mb-[14px]">
                                                            <Icons iconName={amenity.icon} alt="" width={36} height={36} />
                                                        </div>
                                                        <p className="text-base font-bold mb-1">{amenity.title}</p>
                                                        <p className="text-sm font-normal leading-[140%] text-clr1100 mb-0">{amenity.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="btnblurr absolute left-0 bottom-0 z-10 w-full h-[190px] flex items-end justify-center transition duration-300 ease-in-out">
                                                    <button onClick={handleViewAllAmenitiesClick} className=" w-fit flex items-center justify-center bg-btn100 min-h-12 px-6 text-white rounded-[10px] gap-2">View {amenitiesExpanded ? 'Less' : 'More'} Amenities <Icons iconName="caretDown"/></button>
                                            </div>
                                    </div>
                                </div>


                                <div id="balancedunits-elevation" className="mt-[60px]">
                                    <div className="grid grid-cols-2 gap-10">
                                        <div className="px-10 py-9 rounded-[20px] bg-white" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                            <h2 className="text-[22px] leading-[100%] -tracking-[0.44px] font-semibold mb-5">Balanced Units</h2>
                                            <Image src={buImage} alt="" width={340} height={284} className="w-full"/>
                                        </div>
                                        <div className="px-10 py-9 rounded-[20px] bg-white" style={{border:'1px solid rgba(36, 62, 81, 0.10)'}}>
                                            <h2 className="text-[22px] leading-[100%] -tracking-[0.44px] font-semibold mb-5">Elevation Chart</h2>
                                            <Image src={ecImage} alt="" width={340} height={284} className="w-full"/>
                                        </div>
                                    </div>
                                </div>


                                <div id="location" className="mt-[60px]">
                                    <h2 className="text-4xl leading-[100%] -tracking-[0.72px] font-black mb-10">Location</h2>
                                   <InfoTables locationTables={locationTables}/>
                                </div>

                                <div id="location" className="mt-[60px]">
                                    <h2 className="text-4xl leading-[100%] -tracking-[0.72px] font-black mb-10">Pricing</h2>
                                   <InfoTables locationTables={pricingTables}/>
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