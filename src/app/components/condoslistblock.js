import Image from "next/image";
import sampleImage from '../assets/images/pt-2.jpg';
import Icons from "./icons";

const CondosListBlock=()=>{
    return(
        <div className="bg-white rounded-2xl condoslistblock p-5 flex gap-10">
            <div className="basis-[380px] h-[315px] relative rounded-[10px] overflow-hidden">
                <Image src={sampleImage} alt="" width={380} height={315} className="w-full h-full object-cover"/>
                <div className="launchdate rounded-full text-[13px] font-medium -tracking-[0.13px] leading-[110%] absolute left-2 top-2 py-[10px] px-[15px]">Launch date: 20 July 2024</div>
            </div>

            <div className="flex flex-col gap-5 flex-1">
                <h3 className="text-2xl font-semibold leading-[100%] -tracking-[0.48px]">Royal Hallmark</h3>
                <div className="condo-location  flex gap-[10px] items-center">
                    <div className="text-clr1100">
                        <Icons iconName="pin-outline"/>
                    </div>
                    <div className="text-sm font-normal leading-[140%] text-clr1100">9D Yuan Ching Road · D22</div>
                </div>

                <div className="flex gap-2 flex-wrap">
                    <a className="py-[6px] px-3 rounded-full info-bubble text-clr1100 text-sm leading-[150%] font-normal">15% sold</a>
                    <a className="py-[6px] px-3 rounded-full info-bubble text-clr1100 text-sm leading-[150%] font-normal">Units start from S$80,000</a>
                </div>

                <div className="text-black text-sm leading-[150%] -tracking-[0.14px]">
                    <p>Proposed condominium residential housing development consisting the erection of 1 blocks of 27 - storey apartment (Total : 275units) with 4 restaurants , sky terrace , two level of basement car parks and communal facilities on MK03 LOT 05582V at Slim Barracks Rise (Queenstown Planning Area)</p>
                </div>

            </div>
        </div>
    )
}

export default CondosListBlock;