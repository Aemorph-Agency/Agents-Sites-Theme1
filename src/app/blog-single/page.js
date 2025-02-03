import Image from "next/image"
import sampleImage from '../assets/images/blogimage.png';
import sampleBlogImage from '../assets/images/pt-2.jpg';
import '../styles/blogsingle.css';
import Icons from "../components/icons";
import AgentProfileBlock from "../components/agentprofileSection";
import '../globals.css';

export default function BlogSingle(){
    return(
       <>
        <section className="pt-[100px] pb-[82px] px-10">

<div className="blog-banner min-h-[560px] bg-cover bg-no-repeat bg-center relative rounded-[40px] overflow-hidden py-[70px] px-24 flex flex-col  justify-between" >
        <Image src={sampleImage} alt="" className="absolute left-0 top-0 w-full h-full object-cover ftimage"/>

        <div className="breadcrumbs flex gap-[15px] items-center relative z-10 text-white">
            <Icons iconName="house"/>
            /
            <a className="text-sm text-white leading-[150%] font-normal">Blog</a>
            /
            <a className="text-sm text-white leading-[150%] font-normal">Navigating Condo Associations: Essential Knowledge for Every Buyer</a>
        </div>


    <h1 className="text-white text-5xl leading-[130%] -tracking-[1.92px] font-semibold relative z-20">Navigating Condo Associations: Essential Knowledge for Every Buyer</h1>

</div>
</section>

<section>
    <div className="container">
        <div className="flex article-grill gap-7 justify-between">
            <div id="article-box" className="article-wrapper basis-[780px]">
                <p>Et vel orci vel morbi eu habitasse rhoncus. Nunc semper praesent dolor nunc habitasse. Risus blandit euismod a eget aliquam pharetra. Varius rhoncus tristique sed amet quis elementum imperdiet gravida pharetra. Nullam cursus dictum feugiat volutpat.
                Eu morbi viverra a eu sed nullam scelerisque maecenas blandit. Magna adipiscing eget fames risus adipiscing id ut. Turpis netus sit integer turpis vitae orci nunc integer quis.</p>
                <Image src={sampleBlogImage} alt="image" width={520.254} className="w-full rounded-[20px]"/>
                <p>Et vel orci vel morbi eu habitasse rhoncus. Nunc semper praesent dolor nunc habitasse. Risus blandit euismod a eget aliquam pharetra. Varius rhoncus tristique sed amet quis elementum imperdiet gravida pharetra. Nullam cursus dictum feugiat volutpat.
                Eu morbi viverra a eu sed nullam scelerisque maecenas blandit. Magna adipiscing eget fames risus adipiscing id ut. Turpis netus sit integer turpis vitae orci nunc integer quis.</p>
            </div>

            <div className=" basis-[360px]">
                <div className="sticky top-[100px] sidebar-box rounded-[20px] p-10">
                        <p className="text-sm font-semibold uppercase text-center text-clr1200 mb-8">share</p>
                        <div className="flex gap-10 justify-center">
                          
                           <Icons iconName="facebookOfficial"/>
                            <Icons iconName="twitterOfficial"/>
                            <Icons iconName="whatsappOfficial"/>
                            <Icons iconName="threadsOfficial"/>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>


<AgentProfileBlock/>
</>

        
    )

}