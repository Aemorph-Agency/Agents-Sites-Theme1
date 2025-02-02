"use client"

import Image from "next/image";
import Header from "./components/header/header1";


import apartment1image from '@/app/assets/images/apartment-photo1.png'
import apartment2image from '@/app/assets/images/apartment-photo2.png'
import agentImage from '@/app/assets/images/agent-pic.png'
import aboutImage from '@/app/assets/images/about.jpg'


import Dropdown from "./components/sections/filter-dropdown";

import pt1 from "@/app/assets/images/pt-1.jpg";
import pt2 from "@/app/assets/images/pt-2.jpg";
import pt3 from "@/app/assets/images/pt-3.jpg";
import pt4 from "@/app/assets/images/pt-4.jpg";
import pt5 from "@/app/assets/images/pt-5.jpg";
import pt6 from "@/app/assets/images/pt-6.jpg";
import LinkButton from "@/app/widgets/LinkButton";
import resale1 from "@/app/assets/images/resale-1.jpg";
import resale2 from "@/app/assets/images/resale-2.jpg";
import resale3 from "@/app/assets/images/resale-3.jpg";
import PropertyGridCard from "./components/propertyGridCard";
import Icons from "./components/icons";
import GridItem from "./components/list-block-item";
import Testimonials from "./components/testimonial-carousel";
import Accordion from "./components/accordion";
import BlogSingleViewBlock from "./widgets/blog-singleview-block";



export default function Home() {
  return (
    <>
   
      
      <section id="banner" className="stl1 min-h-[800px] pt-[100px] relative overflow-hidden">
            <div className="container">
                <h1 className="opacity-0 absolute invisible">Your Personal Real Estate Agent</h1>
               
                <Image src={apartment1image} alt="" width={513} height={518} className="absolute left-0 bottom-0 animate__animated animate__fadeInBottomLeft animate__delay-1s"/>
                <div className="banner-wrapper relative">
                    <p className="w-[394px] text-right text-[88px] tracking-[-3.52px] font-black leading-[100%] text-black absolute left-32 animate__animated animate__fadeInTopLeft animate__delay-1s">Your Personal</p>
                        <div className="absolute left-1/2 -translate-x-1/2 z-10">
                            <Image src={agentImage} alt="photo of the agent" width={594.475} height={700} className="animate__animated animate__fadeInUp animate__delay-1s"/>
                       </div>
                    <p className="w-[474.913px] text-left text-[88px] tracking-[-3.52px] font-black leading-[100%] text-black z-50 absolute right-0 top-56 animate__animated animate__fadeInTopRight animate__delay-1s">Real Estate Agent</p>
                        
                </div>
                <Image src={apartment2image} alt="" width={517} height={433} className="absolute right-0 bottom-0 animate__animated animate__fadeInBottomRight animate__delay-1s" />
               
                </div>
        </section>

        <section className="relative z-50">
            <div className="container">
                <div className="filter-wrapper bg-white rounded-[20px] px-[50px] py-[35px] flex gap-10 justify-between -mt-16 z-50">
                    <Dropdown/>
                    <Dropdown/>
                    <Dropdown/>
                </div>
            </div>
        </section>

        <section className="pt-[172px]">
            <div className="container">
                <h2 className="text-center uppercase text-xl font-bold tracking-[4px] text-black opacity-[60%] mb-[60px]">Projects launching soon</h2>
                <div className="grid grid-cols-3 gap-6">
                   
                    <PropertyGridCard propImage ={pt1} propName="Watten House" propPrice="$3M ~ $11.96M" />
                    <PropertyGridCard propImage ={pt2} propName="Watten House" propPrice="$3M ~ $11.96M" />
                    <PropertyGridCard propImage ={pt3} propName="Watten House" propPrice="$3M ~ $11.96M" />
                    <PropertyGridCard propImage ={pt4} propName="Watten House" propPrice="$3M ~ $11.96M" />
                    <PropertyGridCard propImage ={pt5} propName="Watten House" propPrice="$3M ~ $11.96M" />
                    <PropertyGridCard propImage ={pt6} propName="Watten House" propPrice="$3M ~ $11.96M" />
                </div>

                <div className="mt-[60px] m-auto w-fit">
                <LinkButton buttonlink="#" icon="arrowright" text="View All Launches" size="md" color="text-white" borderRadiusClass="rounded-full"/>
                </div>

            </div>

        </section>
     

        <section className="pt-[102px] pb-[120px]">
        <div className="container">
            <h2 className="text-center uppercase text-xl font-bold tracking-[4px] text-black opacity-[60%] mb-[60px]">Projects launching soon</h2>
            <div className="grid grid-cols-3 gap-6">
                <PropertyGridCard propImage ={resale1} propName="Watten House" propPrice="$3M ~ $11.96M" />
                <PropertyGridCard propImage ={resale2} propName="Watten House" propPrice="$3M ~ $11.96M" />
                <PropertyGridCard propImage ={resale3} propName="Watten House" propPrice="$3M ~ $11.96M" />
               
            </div>

            <div className="mt-[60px] m-auto w-fit">
                <LinkButton buttonlink="#" icon="arrowright" text="View All Resale Properties" size="md" color="text-white" borderRadiusClass="rounded-full"/>
            </div>

        </div>

    </section>

    <section className="pt-[95px] pb-[96px]">
        <div className="container">
            <div className="bg-clr300 rounded-[40px] p-[72px] grid grid-cols-2 gap-[96px]">
              <div className="text-white text-2xl font-medium leading-[140%] -tracking-[0.24px] flex-1">
                <p>I’m Elizabeth Doe, a dedicated real estate agent with years of experience in helping clients buy, sell, and rent homes. My passion for real estate and commitment to trust, transparency, and personalized service ensures every transaction is smooth and successful. </p>
                <p>
                I take pride in understanding my clients' needs and guiding them through every step of the process, making their real estate journey as seamless as possible. Choose me as your trusted real estate partner, and let's turn your property dreams into reality.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-[520px]">
                    <div className="rounded-[20px] bg-white p-8 flex gap-7">
                           <div>
                           <Icons iconName = "factory" />
                           </div>
                           <div className="text-sm font-normal leading-[100%] -tracking-[0.14px]">
                            <h3 className="mb-[6px] text-clr200 text-xl font-bold leading-normal -tracking-[0.2]">Best Prices</h3>
                            <p className="text-clr200 opacity-[0.80]">Lorem ipsum dolor sit amet commodo. Id ullamcorper nunc aliquam proin aliquam ullamcorper. Vulputate venenatis sed senectus.</p>
                           </div>
                    </div>
                    <div className="rounded-[20px] bg-white p-8 flex gap-7">
                           <div>
                           <Icons iconName = "factory" />
                           </div>
                           <div className="text-sm font-normal leading-[100%] -tracking-[0.14px]">
                            <h3 className="mb-[6px] text-clr200 text-xl font-bold leading-normal -tracking-[0.2]">Best Prices</h3>
                            <p className="text-clr200 opacity-[0.80]">Lorem ipsum dolor sit amet commodo. Id ullamcorper nunc aliquam proin aliquam ullamcorper. Vulputate venenatis sed senectus.</p>
                           </div>
                    </div>
                    <div className="rounded-[20px] bg-white p-8 flex gap-7">
                           <div>
                           <Icons iconName = "factory" />
                           </div>
                           <div className="text-sm font-normal leading-[100%] -tracking-[0.14px]">
                            <h3 className="mb-[6px] text-clr200 text-xl font-bold leading-normal -tracking-[0.2]">Best Prices</h3>
                            <p className="text-clr200 opacity-[0.80]">Lorem ipsum dolor sit amet commodo. Id ullamcorper nunc aliquam proin aliquam ullamcorper. Vulputate venenatis sed senectus.</p>
                           </div>
                    </div>
              </div>
              
            </div>

            <div className="rounded-[40px] flex flex-row justify-between gap-6 mt-6">
                <div className="flex flex-col gap-3 w-[536px] rounded-[40px] overflow-hidden">
                   <Image src={aboutImage} alt="agent profile" width={536} height={736} className="w-full h-full"/>
              </div>
              <div className="p-[88px] text-2xl font-medium leading-[140%] -tracking-[-0.24px] bg-clr600 rounded-[40px] flex-1 text-clr300">
                <h4 className="font-bold mb-4">My Background and Experience</h4>
                <p>With over a decade of experience in real estate, I’ve helped clients achieve their property goals through deep market knowledge and a passion for the industry. My background in Business Management has been key in navigating complex transactions, and I’ve successfully guided clients ranging from first-time buyers to seasoned investors.</p>
                <p>Having closed hundreds of deals, I stay informed on market trends to offer the best strategies for buying, selling, or renting. My goal is to make your real estate journey smooth and successful.</p>

               <div className="mt-4">
               <LinkButton buttonlink="#" text="Learn More" size="sm" color="text-white" icon="arrowright" borderRadiusClass="rounded-full"/>
               </div>
              </div>
             
              
            </div>
        </div>
    </section>


    <section className="pt-[72px] pb-[41px]">
        <div className="container">
            <h2 className="text-[56px] text-black font-black leading-[100%] -tracking-[-1.12px] mb-[60px]">Explore New Launch condos by location in Singapore</h2>

            <p className="mb-[30px] text-xl font-bold text-black opacity-[0.60] leading-normal uppercase tracking-[4px]">Regions</p>
            <div className="grid grid-cols-3 gap-3">
              <GridItem title="CCR (Core Central Region)" subtitle="16 properties"/>
              <GridItem title="CCR (Core Central Region)" subtitle="16 properties"/>
              <GridItem title="CCR (Core Central Region)" subtitle="16 properties"/>
            </div>

            <p className="mt-[60px] mb-[30px] text-xl font-bold text-black opacity-[0.60] leading-normal uppercase tracking-[4px]">areas</p>
            <div className="grid grid-cols-3 gap-3">
              <GridItem title="Central" subtitle="16 properties"/>
              <GridItem title="West" subtitle="16 properties"/>
              <GridItem title="East" subtitle="16 properties"/>
              <GridItem title="North-East" subtitle="16 properties"/>
              <GridItem title="North" subtitle="16 properties"/>
            </div>

            <p className="mt-[60px] mb-[30px] text-xl font-bold text-black opacity-[0.60] leading-normal uppercase tracking-[4px]">districts</p>
            <div className="flex flex-row flex-wrap gap-[10px]">
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D1 - Boat Quay / Raffles Place / Marina</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D2 - Chinatown / Tanjong Pagar</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D3 - Alexandra / Commonwealth</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D4 - Harbourfront / Telok Blangah</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D5 - Buona Vista / West Coast / Clementi</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D6 - City Hall / Clarke Quay</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D7 - Beach Road / Bugis / Rochor</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D8 - Farrer Park / Serangoon Rd</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D9 - Orchard / River Valley</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D10 - Tanglin / Holland</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D11 - Newton / Novena</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D12 - Balestier / Toa Payoh</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D13 - Macpherson / Potong Pasir</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D14 - Eunos / Geylang / Paya Lebar</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D15 - East Coast / Marine Parade</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D16 - Bedok / Upper East Coast</div>
                <div className="bg-clr700 rounded-full px-[18px] py-3 text-black  text-base font-medium leading-normal -tracking-[0.16px]">D17 - Changi Airport / Changi Village</div>

            </div>

        </div>
    </section>



    <section className="pt-[131px]">
        <div className="container">
            <h2 className=" mb-[60px] text-xl font-bold text-black opacity-[0.60] leading-normal uppercase tracking-[4px] text-center">client testimonials</h2>
        </div>
    </section>
    <section className="pb-[131px]">
    <Testimonials/>
    </section>
    <section className="pt-20 pb-20">
        <div className="container bg-clr1000 rounded-[40px] px-20 py-[75px]">
            <div className="faq-wrapper  max-w-[900px] m-auto">
            <h2 className="text-5xl -tracking-[0.96px] font-black mb-7">FAQ</h2>
            <div className="accordion-container">
                    <Accordion 
                    title="Lorem ipsum dolor sit amet consectetur labor quis hendrerit"
                    content={
                        <>
                          <p>Lorem ipsum dolor sit amet consectetur. Nec nullam velit arcu egestas. Varius tristique ullamcorper id bibendum. Nunc ut tortor sapien elementum. Posuere dui nulla porta risus malesuada. In morbi ut dolor nec id. Quis venenatis diam posuere mi mauris. Purus a urna odio enim lacus mi quisque. Sed nulla purus aenean suscipit dui gravida ac. </p>
                <p>Mauris phasellus at cursus aenean. Eget eu hendrerit lacus libero aliquam. Nibh erat dignissim viverra convallis habitant cras. Scelerisque feugiat nibh commodo enim. Ac integer commodo lobortis magna viverra bibendum malesuada imperdiet ullamcorper.</p>
           
                        </>
                    }
                    />
                        <Accordion 
                    title="Lorem ipsum dolor sit amet consectetur labor quis hendrerit"
                    content={
                        <>
                          <p>Lorem ipsum dolor sit amet consectetur. Nec nullam velit arcu egestas. Varius tristique ullamcorper id bibendum. Nunc ut tortor sapien elementum. Posuere dui nulla porta risus malesuada. In morbi ut dolor nec id. Quis venenatis diam posuere mi mauris. Purus a urna odio enim lacus mi quisque. Sed nulla purus aenean suscipit dui gravida ac. </p>
                <p>Mauris phasellus at cursus aenean. Eget eu hendrerit lacus libero aliquam. Nibh erat dignissim viverra convallis habitant cras. Scelerisque feugiat nibh commodo enim. Ac integer commodo lobortis magna viverra bibendum malesuada imperdiet ullamcorper.</p>
           
                        </>
                    }
                    />
                        <Accordion 
                    title="Lorem ipsum dolor sit amet consectetur labor quis hendrerit"
                    content={
                        <>
                          <p>Lorem ipsum dolor sit amet consectetur. Nec nullam velit arcu egestas. Varius tristique ullamcorper id bibendum. Nunc ut tortor sapien elementum. Posuere dui nulla porta risus malesuada. In morbi ut dolor nec id. Quis venenatis diam posuere mi mauris. Purus a urna odio enim lacus mi quisque. Sed nulla purus aenean suscipit dui gravida ac. </p>
                <p>Mauris phasellus at cursus aenean. Eget eu hendrerit lacus libero aliquam. Nibh erat dignissim viverra convallis habitant cras. Scelerisque feugiat nibh commodo enim. Ac integer commodo lobortis magna viverra bibendum malesuada imperdiet ullamcorper.</p>
           
                        </>
                    }
                    />
                  
           </div>
            </div>
        </div>
    </section>

    <section className="pt-[90px] pb-[120px]">
        <div className="container">
            <div className="flex justify-between mb-[55px]">
                <h2 className="font-black text-5xl -tracking-[0.96px] ">Real Estate Insights</h2>
                <LinkButton buttonlink="#" text="View All" size="sm" color="text-white" icon="arrowright" borderRadiusClass="rounded-[10px]"/>
            </div>
            <div className="grid grid-cols-3 gap-6">
                    <BlogSingleViewBlock date="20 Dec 2024" title="Lorem ipsum dolor sit amet consectetur labor quis hendrerit"/>
                    <BlogSingleViewBlock date="20 Dec 2024" title="Lorem ipsum dolor sit amet consectetur labor quis hendrerit"/>
                    <BlogSingleViewBlock date="20 Dec 2024" title="Lorem ipsum dolor sit amet consectetur labor quis hendrerit"/>

            </div>
        </div>
    </section>
    </>
  );
}
