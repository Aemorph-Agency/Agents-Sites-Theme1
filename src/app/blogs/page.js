'use client'

import Icons from "../components/icons";

import '../styles/blog-index.css';
import '../globals.css';
import Image from "next/image";
import blogImage from '../assets/images/pt-1.jpg';
import ListingPagination from "../components/listing_pagination";

import LinkButton from "../widgets/LinkButton";
import AgentProfileBlock from "../components/agentprofileSection";

export default function Blogs(){

   
    return(
       <>
        <section className="pt-[100px] rounded-sec bg-white pb-[82px] rounded-b-[40px]">
           <div className="container">

              <div className="flex justify-between mt-[50px] ">
                <div className="w-1/2">
                    <div className="breadcrumbs flex gap-[15px] items-center mb-4">
                        <Icons iconName="house"/>
                        /
                        <a className="text-sm leading-[150%] font-normal">Blog</a>
                      
                    </div>
                    <h2 className="text-[64px] font-black leading-[100%] -tracking-[2.56px]">Real Estate Tips and Tricks  </h2>
                </div>
                <div className="w-1/2 intro-text pl-[60px]">

                <div className="mb-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="57" viewBox="0 0 97 57" fill="none">
  <path d="M32.1643 11.4631L5.66844 35.876V56.5H57.6512H58.6643H91.2442V35.876L64.7429 11.4631L54.4039 20.9875L49.9503 16.8838L64.7429 3.25428L80.658 17.9158V10.6337H89.1991V25.7829L95.048 31.1712L96.4218 29.6799L91.2266 24.8954V8.60748H78.6331V13.2948L64.7442 0.5L48.455 15.5074L32.1643 0.5L0.492188 29.6813L1.86595 31.1726L32.1657 3.25563L62.4695 31.1726L63.8432 29.6813L55.9019 22.3654L64.7456 14.2173L89.2207 36.7635V54.4725H58.6643V35.876L32.1643 11.4631ZM36.9191 54.4725H27.4122V37.3092H36.9191V54.4725ZM56.6381 54.4725H38.9453V35.283H25.386V54.4738H7.69464V36.7649L32.1643 14.22L56.6381 36.7649V54.4725Z" fill="#5D6B77"/>
</svg>
                    </div>
                  <p className="text-base text-black leading-[150%] -tracking-[0.16px] font-normal">

                  Magna risus consectetur nulla pulvinar aliquam aliquam odio faucibus. Mi mi non nisl venenatis. Sagittis lacus et morbi id gravida donec dis ultricies.
                  </p>
                </div>
              </div>
           </div>
        </section>


      <section className="mt-[90px]">
        <div className="container">
            <div className="articles-wrapper">
                <div className="grid grid-cols-2 gap-12">

                <ArticleBlock blogdate="06/25/2024" blogtitle="Navigating Condo Associations: Essential Knowledge for Every Buyer" blogImage={blogImage} imagealt="sample blog imagea"/>
                <ArticleBlock blogdate="06/25/2024" blogtitle="Navigating Condo Associations: Essential Knowledge for Every Buyer" blogImage={blogImage} imagealt="sample blog imagea"/>
                <ArticleBlock blogdate="06/25/2024" blogtitle="Navigating Condo Associations: Essential Knowledge for Every Buyer" blogImage={blogImage} imagealt="sample blog imagea"/>
                <ArticleBlock blogdate="06/25/2024" blogtitle="Navigating Condo Associations: Essential Knowledge for Every Buyer" blogImage={blogImage} imagealt="sample blog imagea"/>
                <ArticleBlock blogdate="06/25/2024" blogtitle="Navigating Condo Associations: Essential Knowledge for Every Buyer" blogImage={blogImage} imagealt="sample blog imagea"/>
                </div>

            </div>
           <div className="flex justify-center">
           <ListingPagination/>
           </div>
        </div>
      </section>


     <AgentProfileBlock/> 
       
        </>

    )
}


const ArticleBlock=({blogdate, blogtitle, blogImage, imagealt})=>{
  return(
      <div className="article-viewblock rounded-2xl p-[30px]">
          <Image src={blogImage} alt={imagealt} width={576} height={435} className="object-cover h-[435px] w-full  rounded-[10px]"/>
          <div className="p-[10px]">
              <p className="mb-2">{blogdate}</p>
              <h3 className="text-2xl leading-[130%] -tracking-[0.48px] font-semibold text-black">{blogtitle}</h3>
          </div>
      </div>
  )
}



  
