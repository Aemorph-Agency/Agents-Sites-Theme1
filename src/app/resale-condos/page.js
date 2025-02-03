'use client'


import Accordion from "../components/accordion";
import Icons from "../components/icons";

import Image from "next/image";
import sampleImage  from '../assets/images/pt-2.jpg';
import '../styles/condoslistblock.css';
import CondosListBlock from "../components/condoslistblock";
import ListingPagination from "../components/listing_pagination";
import SidebarOptions from "../components/sidebar_options";
import { useState } from "react";
import '../styles/tabs.css';

export default function Condos(){

      const tabs = [
        {
          label: 'Condos',
          pageTitle: 'Condos for Resale',
          bctitle:'condos',
          content: <CondosTab/>,
        },
        {
          label: 'HDB',
          pageTitle: 'HDB Properties for Resale',
          bctitle:'HDB',
          content:<HDBTab/>,
        },
        {
          label: 'Landed Properties',
          pageTitle:'Landed Properties for Resale',
          bctitle:'Landed',
          content: <LandedPropertiesTab/>,
        },
      ];

         const [pt, setPageTitle ]= useState('Condos for Resale');
         const [bcTitle, setBcTitle]= useState('Condos');
    return(
       <>
        <section className="pt-[100px]">
           <div className="container">

              <div className="flex justify-between gap-5 mt-[50px] mb-4">
                <div className="flex-1">
                    <div className="breadcrumbs flex gap-[15px] items-center">
                        <Icons iconName="house"/>
                        /
                        <a className="text-sm leading-[150%] font-normal">Properties for Resale</a>
                        /
                        <a className="text-sm leading-[150%] font-normal">{bcTitle}</a>
                    </div>
                    <h2 className="text-[64px] font-black leading-[100%] -tracking-[2.56px]">{pt}</h2>
                </div>
                <div className="basis-[500px]">
                  <p className="text-base text-black leading-[150%] -tracking-[0.16px] font-normal">
                  Magna risus consectetur nulla pulvinar aliquam aliquam odio faucibus. Mi mi non nisl venenatis. Sagittis lacus et morbi id gravida donec dis ultricies.
                  </p>
                </div>
              </div>
           </div>
        </section>

        <section>
            <div className="container">
                    <Tabs tabs={tabs} setPageTitle={setPageTitle} setBcTitle={setBcTitle} />
            </div>
        </section> 
        </>

    )
}




const Tabs = ({ tabs, setPageTitle, setBcTitle }) => {
    const [activeTab, setActiveTab] = useState(0);
  

    const handleTabClick = (index) => {
        setActiveTab(index);
        setPageTitle(tabs[index].pageTitle); // Update page title
        setBcTitle(tabs[index].bctitle); // Update breadcrumb title
      };

    return (
      <div className='mt-11'>
        <div className='tabhead flex gap-10'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={ `text-[18px] font-semibold relative tabsButtons ${activeTab === index ? 'active' : ''} transition duration-300 ease-in-out` }
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='tabcontent'>
          {tabs[activeTab].content}
        </div>
      </div>
    );
  };

const CondosTab=()=>{

    const pricingoptions = [
        { label: '0-50k', link: '#' },
        { label: '50k - 100k', link: '#' },
        { label: '100k - 500k', link: '#' },
        { label: '500k+', link: '#' },
      ];
      const launchYear = [
        { label: '1997', link: '#' },
        { label: '1998', link: '#' },
        { label: '1999', link: '#' },
        { label: '2000', link: '#' },
      ];
      const topyear = [
        { label: '1997', link: '#' },
        { label: '1998', link: '#' },
        { label: '1999', link: '#' },
        { label: '2000', link: '#' },
      ];
      const District  = [
        { label: 'District 1', link: '#' },
        { label: 'District 2', link: '#' },
        { label: 'District 3', link: '#' },
        { label: 'District 4', link: '#' },
        
      ];

      const direction = [
        { label: 'North', link: '#' },
        { label: 'East', link: '#' },
        { label: 'West', link: '#' },
        { label: 'South', link: '#' },
        { label: 'NortEast', link: '#' },
        { label: 'NortWest', link: '#' },
        { label: 'SouthEast', link: '#' },
        { label: 'SouthWest', link: '#' },  
      ];
      const nearbyMRT = [
        { label: 'option 1', link: '#' },
        { label: 'option 2', link: '#' },
        { label: 'option 3', link: '#' },
      ];
      const nearbySchool = [
        { label: 'option 1', link: '#' },
        { label: 'option 2', link: '#' },
        { label: 'option 3', link: '#' },
      ];
    return(
        <section id="condosTabs" className="pt-[75px] pb-[123px]">
            <div className="container">
                <div className="flex gap-[88px]">


                        <div className="condos-sidebar basis-[360px] accordion-container">
                            <Accordion
                            title="Pricing"
                            content={
                                <>
                                    <SidebarOptions choices={pricingoptions}/>
                                </>
                            }
                            />
                             <Accordion
                            title="Launch Year"
                            content={
                                <>
                                    <SidebarOptions choices={launchYear}/>
                                </>
                            }
                            />
                             <Accordion
                            title="TOP Year"
                            content={
                                <>
                                    <SidebarOptions choices={topyear}/>
                                </>
                            }
                            />
                             <Accordion
                            title="District"
                            content={
                                <>
                                    <SidebarOptions choices={District}/>
                                </>
                            }
                            />
                             <Accordion
                            title="Direction"
                            content={
                                <>
                                    <SidebarOptions choices={direction}/>
                                </>
                            }
                            />

                             <Accordion
                            title="Nearby MRT Station"
                            content={
                                <>
                                    <SidebarOptions choices={nearbyMRT}/>
                                </>
                            }
                            />

                            <Accordion
                            title="Nearby School"
                            content={
                                <>
                                    <SidebarOptions choices={nearbySchool}/>
                                </>
                            }
                            />
                        </div>

                        <div className="condos-list flex-1 flex flex-col gap-5">
                            <CondosListBlock/>
                            <CondosListBlock/>
                            <CondosListBlock/>

                            <div className="flex justify-center"><ListingPagination/></div>
                        </div>

                </div>
            </div>
        </section>
    )
}


const HDBTab=()=>{
    const pricingoptions = [
        { label: '0-20k', link: '#' },
        { label: '20k - 100k', link: '#' },
        { label: '100k - 300k', link: '#' },
        { label: '300k+', link: '#' },
      ];
      const launchYear = [
        { label: '1999', link: '#' },
        { label: '2000', link: '#' },
        { label: '2001', link: '#' },
        { label: '2002', link: '#' },
      ];
      const topyear = [
        { label: '1999', link: '#' },
        { label: '2000', link: '#' },
        { label: '2001', link: '#' },
        { label: '2002', link: '#' },
      ];
      const District  = [
        { label: 'District 1', link: '#' },
        { label: 'District 2', link: '#' },
        { label: 'District 3', link: '#' },
        { label: 'District 4', link: '#' },
        { label: 'District 5', link: '#' },
        
      ];

      const direction = [
        { label: 'North', link: '#' },
        { label: 'East', link: '#' },
        { label: 'West', link: '#' },
        { label: 'South', link: '#' },
        { label: 'NortEast', link: '#' },
        { label: 'NortWest', link: '#' },
        { label: 'SouthEast', link: '#' },
        { label: 'SouthWest', link: '#' },  
      ];
      const nearbyMRT = [
        { label: 'option 1', link: '#' },
        { label: 'option 2', link: '#' },
        { label: 'option 3', link: '#' },
      ];
      const nearbySchool = [
        { label: 'option 1', link: '#' },
        { label: 'option 2', link: '#' },
        { label: 'option 3', link: '#' },
      ];
    return(
        <section id="hdbTabs" className="pt-[75px] pb-[123px]">
            <div className="container">
                <div className="flex gap-[88px]">


                        <div className="condos-sidebar basis-[360px] accordion-container">
                            <Accordion
                            title="Pricing"
                            content={
                                <>
                                    <SidebarOptions choices={pricingoptions}/>
                                </>
                            }
                            />
                             <Accordion
                            title="Launch Year"
                            content={
                                <>
                                    <SidebarOptions choices={launchYear}/>
                                </>
                            }
                            />
                             <Accordion
                            title="TOP Year"
                            content={
                                <>
                                    <SidebarOptions choices={topyear}/>
                                </>
                            }
                            />
                             <Accordion
                            title="District"
                            content={
                                <>
                                    <SidebarOptions choices={District}/>
                                </>
                            }
                            />
                             <Accordion
                            title="Direction"
                            content={
                                <>
                                    <SidebarOptions choices={direction}/>
                                </>
                            }
                            />

                             <Accordion
                            title="Nearby MRT Station"
                            content={
                                <>
                                    <SidebarOptions choices={nearbyMRT}/>
                                </>
                            }
                            />

                            <Accordion
                            title="Nearby School"
                            content={
                                <>
                                    <SidebarOptions choices={nearbySchool}/>
                                </>
                            }
                            />
                        </div>

                        <div className="condos-list flex-1 flex flex-col gap-5">
                            <CondosListBlock/>
                            <CondosListBlock/>
                            <CondosListBlock/>

                            <div className="flex justify-center"><ListingPagination/></div>
                        </div>

                </div>
            </div>
        </section>
    )
}



const LandedPropertiesTab=()=>{

    const pricingoptions = [
        { label: '0-50k', link: '#' },
        { label: '50k - 100k', link: '#' },
        { label: '100k - 500k', link: '#' },
        { label: '500k+', link: '#' },
      ];
      const launchYear = [
        { label: '1997', link: '#' },
        { label: '1998', link: '#' },
        { label: '1999', link: '#' },
        { label: '2000', link: '#' },
      ];
      const topyear = [
        { label: '1997', link: '#' },
        { label: '1998', link: '#' },
        { label: '1999', link: '#' },
        { label: '2000', link: '#' },
      ];
      const District  = [
        { label: 'District 1', link: '#' },
        { label: 'District 2', link: '#' },
        { label: 'District 3', link: '#' },
        { label: 'District 4', link: '#' },
        
      ];

      const direction = [
        { label: 'North', link: '#' },
        { label: 'East', link: '#' },
        { label: 'West', link: '#' },
        { label: 'South', link: '#' },
        { label: 'NortEast', link: '#' },
        { label: 'NortWest', link: '#' },
        { label: 'SouthEast', link: '#' },
        { label: 'SouthWest', link: '#' },  
      ];
      const nearbyMRT = [
        { label: 'option 1', link: '#' },
        { label: 'option 2', link: '#' },
        { label: 'option 3', link: '#' },
      ];
      const nearbySchool = [
        { label: 'option 1', link: '#' },
        { label: 'option 2', link: '#' },
        { label: 'option 3', link: '#' },
      ];
    return(
        <section id="landedPropertiesTabs" className="pt-[75px] pb-[123px]">
            <div className="container">
                <div className="flex gap-[88px]">


                        <div className="condos-sidebar basis-[360px] accordion-container">
                            <Accordion
                            title="Pricing"
                            content={
                                <>
                                    <SidebarOptions choices={pricingoptions}/>
                                </>
                            }
                            />
                             <Accordion
                            title="Launch Year"
                            content={
                                <>
                                    <SidebarOptions choices={launchYear}/>
                                </>
                            }
                            />
                             <Accordion
                            title="TOP Year"
                            content={
                                <>
                                    <SidebarOptions choices={topyear}/>
                                </>
                            }
                            />
                             <Accordion
                            title="District"
                            content={
                                <>
                                    <SidebarOptions choices={District}/>
                                </>
                            }
                            />
                             <Accordion
                            title="Direction"
                            content={
                                <>
                                    <SidebarOptions choices={direction}/>
                                </>
                            }
                            />

                             <Accordion
                            title="Nearby MRT Station"
                            content={
                                <>
                                    <SidebarOptions choices={nearbyMRT}/>
                                </>
                            }
                            />

                            <Accordion
                            title="Nearby School"
                            content={
                                <>
                                    <SidebarOptions choices={nearbySchool}/>
                                </>
                            }
                            />
                        </div>

                        <div className="condos-list flex-1 flex flex-col gap-5">
                            <CondosListBlock/>
                            <CondosListBlock/>
                            <CondosListBlock/>

                            <div className="flex justify-center"><ListingPagination/></div>
                        </div>

                </div>
            </div>
        </section>
    )
}





  
