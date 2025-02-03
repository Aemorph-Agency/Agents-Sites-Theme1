'use client'

import Icons from "../components/icons";

import Image from "next/image";
import agentPic  from '../assets/images/agent-pic.png';
import '../styles/about.css';


export default function About(){

      
    return(
       <>
        <section id="about-intro" className="pt-[100px] bg-white pb-[82px] rounded-b-[40px]">
           <div className="container">

           <div className="breadcrumbs flex gap-[15px] items-center mt-[50px] mb-4">
                    <Icons iconName="house"/>
                    /
                    <a className="text-sm leading-[150%] font-normal">About Me</a>
                 
                </div>

                <h2 className="text-[64px] font-black leading-[100%] -tracking-[2.56px]">Elizabet Doe</h2>


               </div>

        </section> 

        <section className="pt-[41px] pb-[120px]">
          <div className="container">
            <div className="flex gap-[45px]">
                  <div className="basis-[653px] about-agentPic relative">
                    <Image src={agentPic} alt="" width={653} height={768}/> 
                  </div>

                  <div className="flex-1 text-xl font-normal -tracking-[0.22px] leading-[150%] pt-[106px]">
                    <p>Roger is a native New Yorker as well as a proud husband, father and sports enthusiast. After graduating Magna Cum Laude from the Honors Program of Iona College with a degree in Finance, he spent 15 years in the hospitality industry in South Florida and NYC. During this time, Roger held a variety of management positions serving clientele at some of the world's best known luxury brands.
                    Roger enjoys travel and has done so extensively throughout Europe, the Middle East and South America. As a result, he has purchased and sold several investment properties both in the United States and abroad. His background in high-end customer service, familiarity with different countries and cultures and personal involvement in real estate all prove to be valuable assets to clients in New York City's unique real estate market. Roger has closed hundreds of sales and rental deals throughout the city, including multi-million dollar new construction condominium projects, massive downtown loft conversions, multi-family properties, townhouses, pre-war co-ops and more, making him a consistent top producer. </p>
                  </div>
            </div>
          </div>
        </section>
        </>

    )
}




  
