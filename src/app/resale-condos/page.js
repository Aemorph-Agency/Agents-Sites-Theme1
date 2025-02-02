import Accordion from "../components/accordion";
import Icons from "../components/icons";

import Image from "next/image";
import sampleImage  from '../assets/images/pt-2.jpg';
import '../styles/condoslistblock.css';
import CondosListBlock from "../components/condoslistblock";
import ListingPagination from "../components/listing_pagination";
import SidebarOptions from "../components/sidebar_options";



export default function Condos(){

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
       <>
        <section className="pt-[100px]">
           <div className="container">

                <div className="breadcrumbs flex gap-[15px] items-center mt-[50px] mb-4">
                    <Icons iconName="house"/>
                    /
                    <a className="text-sm leading-[150%] font-normal">Properties for Resale</a>
                    /
                    <a className="text-sm leading-[150%] font-normal">Condos</a>
                </div>
                <h2 className="text-[64px] font-black leading-[100%] -tracking-[2.56px]">Condos for Resale </h2>
           </div>
        </section>


        <section className="pt-[75px] pb-[123px]">
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
        
        </>

    )
}





