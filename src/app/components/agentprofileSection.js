import Image from "next/image";
import agentPic from '../assets/images/agent-pic.png';
import LinkButton from "../widgets/LinkButton";

const AgentProfileBlock=()=>{
    return(
        <section id="agent-prof-block" className="pt-[120px] pb-[100px]">
        <div className="container">
          <div className="agent-profile-block rounded-[40px] flex pl-[45px] pr-[170px]">
            <div className="flex-1" >
              <Image src={agentPic} alt="" width={493} height={500} className="-mt-[30px]"/> 
            </div>
            <div className="py-[75px] basis-[560px]">
              <p className="mb-6 uppercase text-clr1100 leading-[100%] tracking-[3.9px] font-semibold text-[13px]">author</p>
              <p className="text-4xl font-black text-black -tracking-[0.72px] mb-6">Hi! I'm Elizabeth Doe.</p>
              <div className="text-base font-normal leading-[140%] -tracking-[0.16px] mb-6">
                <p>
                Lorem ipsum dolor sit amet consectetur. Nec nullam velit arcu egestas. Varius tristique ullamcorper id bibendum. Nunc ut tortor sapien elementum. Posuere dui nulla porta risus malesuada. In morbi ut dolor nec id. Quis venenatis diam posuere mi mauris. Purus a urna odio enim lacus mi quisque. Sed nulla purus aenean suscipit dui gravida ac. 
                </p>
                <p>
                Mauris phasellus at cursus aenean. Eget eu hendrerit lacus libero aliquam. Nibh erat dignissim viverra convallis habitant cras. Scelerisque feugiat nibh commodo enim. Ac integer commodo lobortis magna viverra bibendum malesuada imperdiet ullamcorper.
                </p>
              </div>
              <LinkButton buttonlink="#" text="About Me" size="sm" color="text-white" borderRadiusClass="rounded-full"/>

          </div>

          </div>
         
         
        
        </div>
    </section>
    )
}

export default AgentProfileBlock;